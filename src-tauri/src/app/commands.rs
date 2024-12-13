use crate::infrastracture::sqlite::{
    abstracts::repositories::config::{GetConfigResult, IConfigRepository},
    models::Config,
};

use super::state::GlobalState;

#[tauri::command]
pub async fn get_config(state: tauri::State<'_, GlobalState>) -> Result<Config, String> {
    let result = state.config_repository.get_config().await;

    let result = match result {
        GetConfigResult::Ok(config) => Ok(config),
        GetConfigResult::NotFound => Err("not_found".to_string()),
        _ => Err("internal_error".to_string()),
    };

    drop(state);

    result
}
