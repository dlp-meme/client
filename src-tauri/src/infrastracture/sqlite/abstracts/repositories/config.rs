use std::future::Future;

use crate::infrastracture::sqlite::{abstracts::DatabaseError, models::Config};

#[derive(Debug, PartialEq, Eq)]
pub enum UpsertConfigResult {
    Ok(Config),
    InternalError(String),
    DatabaseError(DatabaseError),
}

#[derive(Debug, PartialEq, Eq)]
pub enum GetConfigResult {
    Ok(Config),
    InternalError(String),
    DatabaseError(DatabaseError),
    NotFound,
}

pub trait IConfigRepository {
    fn get_config(&self) -> impl Future<Output = GetConfigResult>;

    fn upsert_config(
        &self,
        server_host: Option<String>,
    ) -> impl Future<Output = UpsertConfigResult>;
}
