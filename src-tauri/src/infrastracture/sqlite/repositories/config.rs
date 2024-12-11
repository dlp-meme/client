use std::sync::{Arc, Mutex};

use crate::infrastracture::sqlite::abstracts::{
    repositories::config::{GetConfigResult, IConfigRepository, UpdateConfigResult},
    Connectionable,
};

pub struct ConfigRepository<T: Connectionable> {
    database: Arc<Mutex<T>>,
}

impl<T: Connectionable> ConfigRepository<T> {
    fn new(database: Arc<Mutex<T>>) -> Self {
        Self { database }
    }
}

impl<T: Connectionable> IConfigRepository for ConfigRepository<T> {
    async fn get_config(&self) -> GetConfigResult {
        let database = self.database.lock();

        if let Err(e) = database {
            return GetConfigResult::InternalError(e.to_string());
        }

        let database = database.unwrap();

        match database.connection().await {
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

    async fn update_server_host(&self, server_host: Option<String>) -> UpdateConfigResult {
        let database = self.database.lock();

        if let Err(e) = database {
            return UpdateConfigResult::InternalError(e.to_string());
        }

        let database = database.unwrap();

        match database.connection().await {
            Ok(mut connection) => {
                let result: UpdateConfigResult = sqlx::query("UPDATE config SET server_host = ?")
                    .bind(server_host)
                    .execute(&mut *connection)
                    .await
                    .map(|_| UpdateConfigResult::Ok(()))
                    .map_err(|e| match e {
                        sqlx::Error::RowNotFound => UpdateConfigResult::NotFound,
                        _ => UpdateConfigResult::InternalError(e.to_string()),
                    })
                    .unwrap_or_else(|e| e);

                result
            }
            Err(e) => UpdateConfigResult::DatabaseError(e),
        }
    }
}
