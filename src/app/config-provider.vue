<script setup lang="ts">
import App from '@app/app.vue';
import { darkTheme } from '@shared/ui/naive-ui/dark-theme.ui';
import { NConfigProvider } from 'naive-ui';
</script>

<template>
  <n-config-provider :theme-overrides="darkTheme">
    <app />
  </n-config-provider>
</template>
