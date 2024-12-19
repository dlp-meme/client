<script setup lang="ts">
import AppHeader from '@/features/app/app-header.vue';
import AppMenu from '@/features/app/app-menu.vue';
import { NLayout, NLayoutContent, NLayoutHeader, NLayoutSider } from 'naive-ui';
import type { CSSProperties } from 'vue';

const triggerStyle = {
  width: '32px',
  height: '32px',
};

const triggerStyleCollapsed = {
  ...triggerStyle,
};

const layoutContentStyle: CSSProperties = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
};
</script>

<template>
  <n-layout :native-scrollbar="false" :content-style="layoutContentStyle">
    <n-layout-header bordered>
      <app-header />
    </n-layout-header>

    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        show-trigger="arrow-circle"
        :trigger-style="triggerStyle"
        :collapsed-trigger-style="triggerStyleCollapsed"
        :native-scrollbar="false"
        :width="200"
        :collapsed-width="64"
      >
        <app-menu />
      </n-layout-sider>
      <n-layout-content :native-scrollbar="false">
        <slot />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
