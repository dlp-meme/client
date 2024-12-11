pub mod abstracts;
pub mod models;
pub mod repositories;

use abstracts::{Connectionable, DatabaseError};
use sqlx::{pool::PoolConnection, Sqlite, SqlitePool};

pub struct Database {
    pool: SqlitePool,
}

impl Database {
    pub async fn new(connection: String) -> Self {
        let pool = SqlitePool::connect(&connection).await;

        match pool {
            Ok(pool) => Self { pool },
            Err(e) => panic!("Failed to connect to database: {}", e),
        }
    }

    pub async fn migrate(&self) {
        sqlx::migrate!("src/infrastracture/sqlite/migrations")
            .run(&self.pool)
            .await
            .expect("Failed to migrate database");
    }
}

impl Connectionable for Database {
    async fn connection(&self) -> Result<PoolConnection<Sqlite>, DatabaseError> {
        self.pool
            .acquire()
            .await
            .map_err(|e| DatabaseError::Acquire(e.to_string()))
    }
}
