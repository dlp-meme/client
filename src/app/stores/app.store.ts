import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const loadingStack = ref<void[]>([]);
  const isLoading = computed(() => loadingStack.value.length > 0);

  const setLoading = (value: boolean) => {
    if (value) {
      loadingStack.value.push(void value);
    } else {
      loadingStack.value.pop();
    }
  };

  return {
    isLoading,
    setLoading,
  };
});
