<script setup lang="ts">
import AppHeader from '@/widgets/app/app-header.vue';
import { NScrollbar } from 'naive-ui';
</script>

<template>
  <app-header />
  <n-scrollbar>
    <router-view></router-view>
  </n-scrollbar>
  <div class="app-modals"></div>
</template>

<style lang="scss">
.app-modals {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
}
</style>
