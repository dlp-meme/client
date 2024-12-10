<script setup lang="ts">
import { darkTheme } from '@/shared/ui/naive-ui/dark-theme.ui';
import AppHeader from '@/widgets/app/app-header.vue';
import { NConfigProvider, NScrollbar } from 'naive-ui';
</script>

<template>
  <n-config-provider :theme-overrides="darkTheme">
    <app-header />
    <n-scrollbar>
      <router-view></router-view>
    </n-scrollbar>
  </n-config-provider>
</template>
