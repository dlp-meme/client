<script setup lang="ts">
import { useAppStore } from '@/app/stores/app.store';
import AppHeader from '@/widgets/app/app-header.vue';
import { NScrollbar, NSpin } from 'naive-ui';
import { computed } from 'vue';

const appStore = useAppStore();

const isLoading = computed(() => appStore.isLoading);
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
