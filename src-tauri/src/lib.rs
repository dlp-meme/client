use std::{path::PathBuf, sync::Arc};

use infrastracture::sqlite::{repositories::config::ConfigRepository, Database};
use tauri::{App, Manager};

mod app;
mod infrastracture;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(app_setup)
        .invoke_handler(tauri::generate_handler![
            app::commands::get_config,
            app::commands::update_server_host
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

async fn define_db(path: PathBuf) -> Arc<Database> {
    let db = Arc::new(Database::new(path).await);

    db.migrate().await;

    db
}

fn get_path_to_db(app: &mut App) -> PathBuf {
    let data_dir = app.path().app_data_dir();

    if let Err(_) = data_dir {
        panic!("Failed to resolve path of data directory");
    }

    let data_dir = data_dir.unwrap();

    data_dir.join("config.db")
}

fn app_setup(app: &mut App) -> std::result::Result<(), Box<dyn std::error::Error>> {
    if cfg!(debug_assertions) {
        app.handle().plugin(
            tauri_plugin_log::Builder::default()
                .level(log::LevelFilter::Info)
                .build(),
        )?;
    }

    let path = get_path_to_db(app);
    let db = tauri::async_runtime::block_on(define_db(path));

    app.manage(app::state::AppState {
        config_repository: ConfigRepository::new(db),
    });

    Ok(())
}
