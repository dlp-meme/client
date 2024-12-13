use serde::Serialize;

#[derive(Debug, PartialEq, Eq, Clone, sqlx::FromRow, Serialize)]
pub struct Config {
    server_host: Option<String>,
}

impl Config {
    pub fn server_host(&self) -> Option<&str> {
        self.server_host.as_deref()
    }
}
