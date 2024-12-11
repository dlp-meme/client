pub mod repositories;

use std::future::Future;

use sqlx::{pool::PoolConnection, Sqlite};

#[derive(Debug, PartialEq, Eq)]
pub enum DatabaseError {
    Acquire(String),
}

pub trait Connectionable {
    fn connection(&self) -> impl Future<Output = Result<PoolConnection<Sqlite>, DatabaseError>>;
}
