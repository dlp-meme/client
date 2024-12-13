import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  // Счётчик загрузок
  const loadingCounter = ref<number>(0);
  const isLoading = computed(() => loadingCounter.value > 0);

  const setLoading = (value: boolean) => {
    if (value) {
      loadingCounter.value += 1;
    } else {
      loadingCounter.value -= 1;
    }
  };

  return {
    isLoading,
    setLoading,
  };
});
