pub mod abstracts;
pub mod models;
pub mod repositories;

use std::path::PathBuf;

use abstracts::{Connectionable, DatabaseError};
use sqlx::{
    pool::PoolConnection,
    sqlite::{SqliteConnectOptions, SqlitePoolOptions},
    Sqlite, SqlitePool,
};

pub struct Database {
    pool: SqlitePool,
}

impl Database {
    pub async fn new(filename: PathBuf) -> Self {
        let options = SqliteConnectOptions::new()
            .filename(filename)
            .create_if_missing(true);

        let pool = SqlitePoolOptions::new()
            .connect_with(options)
            .await;

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
