use crate::infrastracture::sqlite::{repositories::config::ConfigRepository, Database};

pub struct AppState {
    pub config_repository: ConfigRepository<Database>,
}

pub type GlobalState = AppState;
