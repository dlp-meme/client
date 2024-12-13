import { getConfig } from '@/shared/api';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useConfigStore = defineStore('config', () => {
  const isLoaded = ref(false);
  const serverHost = ref<string | null>(null);

  const loadConfig = async () => {
    const result = await getConfig();

    console.log(result);

    serverHost.value = result.serverHost;
    isLoaded.value = true;
  };

  return {
    isLoaded,
    serverHost,
    loadConfig,
  };
});
