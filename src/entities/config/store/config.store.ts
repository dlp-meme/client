import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useConfigStore = defineStore('config', () => {
  const isLoaded = ref(false);
  const serverHost = ref<string | null>(null);

  const loadConfig = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    isLoaded.value = true;
  };

  return {
    isLoaded,
    serverHost,
    loadConfig,
  };
});
