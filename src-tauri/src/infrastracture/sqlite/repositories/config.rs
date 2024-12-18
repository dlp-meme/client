use std::sync::Arc;

use crate::infrastracture::sqlite::abstracts::{
    repositories::config::{GetConfigResult, IConfigRepository, UpsertConfigResult},
    Connectionable,
};

pub struct ConfigRepository<T: Connectionable> {
    database: Arc<T>,
}

impl<T: Connectionable> ConfigRepository<T> {
    pub fn new(database: Arc<T>) -> Self {
        Self { database }
    }
}

impl<T: Connectionable> IConfigRepository for ConfigRepository<T> {
    async fn get_config(&self) -> GetConfigResult {
        match self.database.connection().await {
            Ok(mut connection) => {
                let result: GetConfigResult = sqlx::query_as("SELECT * FROM config")
                    .fetch_optional(&mut *connection)
                    .await
                    .map(|c| match c {
                        Some(config) => GetConfigResult::Ok(config),
                        None => GetConfigResult::NotFound,
                    })
                    .map_err(|e| GetConfigResult::InternalError(e.to_string()))
                    .unwrap_or_else(|e| e);

                result
            }
            Err(e) => GetConfigResult::DatabaseError(e),
        }
    }

    async fn upsert_config(&self, server_host: Option<String>) -> UpsertConfigResult {
        match self.database.connection().await {
            Ok(mut connection) => {
                let result: UpsertConfigResult =
                    sqlx::query_as("REPLACE INTO config (id, server_host) VALUES (1, ?);")
                        .bind(server_host)
                        .fetch_one(&mut *connection)
                        .await
                        .map(|c| UpsertConfigResult::Ok(c))
                        .map_err(|e| UpsertConfigResult::InternalError(e.to_string()))
                        .unwrap_or_else(|e| e);

                result
            }
            Err(e) => UpsertConfigResult::DatabaseError(e),
        }
    }
}
