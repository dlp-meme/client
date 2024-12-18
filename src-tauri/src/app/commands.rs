use crate::infrastracture::sqlite::{
    abstracts::repositories::config::{GetConfigResult, IConfigRepository, UpsertConfigResult},
    models::Config,
};

use super::state::GlobalState;

#[tauri::command]
pub async fn get_config(state: tauri::State<'_, GlobalState>) -> Result<Config, String> {
    let result = state.config_repository.get_config().await;

    match result {
        GetConfigResult::Ok(config) => Ok(config),
        GetConfigResult::NotFound => Err("not_found".to_string()),
        _ => Err("internal_error".to_string()),
    }
}

#[tauri::command]
pub async fn upsert_config(
    state: tauri::State<'_, GlobalState>,
    server_host: Option<String>,
) -> Result<Config, String> {
    let result = state.config_repository.upsert_config(server_host).await;

    match result {
        UpsertConfigResult::Ok(c) => Ok(c),
        _ => Err("internal_error".to_string()),
    }
}
