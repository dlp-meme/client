<script setup lang="ts">
import { setupDatasetTheme } from '@/shared/ui/theme-utils';
import AppHeader from '@/widgets/app/app-header.vue';
import { useDark } from '@vueuse/core';
import { NScrollbar } from 'naive-ui';
import { onMounted, watch } from 'vue';

const isDark = useDark();

onMounted(() => setupDatasetTheme(isDark.value, document.documentElement));

watch(isDark, (value) => setupDatasetTheme(value, document.documentElement));
</script>

<template>
  <app-header />
  <n-scrollbar>
    <router-view></router-view>
  </n-scrollbar>
</template>
