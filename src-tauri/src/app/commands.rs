use crate::infrastracture::sqlite::{
    abstracts::repositories::config::{GetConfigResult, IConfigRepository, UpdateConfigResult},
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
pub async fn update_server_host(
    state: tauri::State<'_, GlobalState>,
    server_host: Option<String>,
) -> Result<(), String> {
    let result = state
        .config_repository
        .upsert_config(server_host)
        .await;

    match result {
        UpdateConfigResult::Ok(_) => Ok(()),
        UpdateConfigResult::NotFound => Err("not_found".to_string()),
        _ => Err("internal_error".to_string()),
    }
}
