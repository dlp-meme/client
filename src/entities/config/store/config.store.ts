import { getConfig } from '@/shared/api';
import { upsertConfig } from '@/shared/api/config.api';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useConfigStore = defineStore('config', () => {
  const serverHost = ref<string | null>(null);

  const loadConfig = async () => {
    const result = await getConfig();

    serverHost.value = result.serverHost;
  };

  const replaceConfig = async (host: string) => {
    const result = await upsertConfig(host);

    serverHost.value = result.serverHost;
  };

  return {
    serverHost,
    loadConfig,
    replaceConfig,
  };
});
