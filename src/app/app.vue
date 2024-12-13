<script setup lang="ts">
import { useAppStore } from '@/app/stores/app.store';
import { useConfigStore } from '@/entities/config/store/config.store';
import AppHeader from '@/widgets/app/app-header.vue';
import { NScrollbar, NSpin, useNotification } from 'naive-ui';
import { computed, onMounted } from 'vue';

const appStore = useAppStore();
const configStore = useConfigStore();
const notification = useNotification();

const isLoading = computed(() => appStore.isLoading);

const loadConfig = async () => {
  appStore.setLoading(true);

  try {
    await configStore.loadConfig();
  } catch (e: unknown) {
    console.log(e);
    notification.error({
      title: 'Error',
      content: 'Failed to load config',
    })
  } finally {
    appStore.setLoading(false);
  }
};

onMounted(loadConfig);
</script>

<template>
  <app-header />
  <n-scrollbar>
    <router-view></router-view>
  </n-scrollbar>
  <div class="app-modals"></div>
  <div v-show="isLoading" class="app-loader">
    <n-spin size="large" />
  </div>
</template>

<style lang="scss">
.app-modals {
  position: absolute;
  top: 0;
  left: 0;
}

.app-loader {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--crust-color);
}
</style>
