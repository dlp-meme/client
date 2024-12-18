import { ConfigResponseSchema, type ConfigResponse } from '@/shared/api/responses/config.response';
import { invoke } from '@tauri-apps/api/core';

export const getConfig = async () => {
  const result = await invoke<ConfigResponse>('get_config');

  return ConfigResponseSchema.parse(result);
};

export const upsertConfig = async (serverHost: string | null) => {
  const result = await invoke<ConfigResponse>('upsert_config', { serverHost });

  return ConfigResponseSchema.parse(result);
};
