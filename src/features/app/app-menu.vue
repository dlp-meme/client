<script setup lang="ts">
import { renderIcon } from '@/shared/ui/naive-ui/naive-ui-helpers';
import { Home as HomeIcon, Settings as SettingsIcon } from '@vicons/tabler';
import { NMenu, type MenuOption } from 'naive-ui';
import { h } from 'vue';
import { RouterLink } from 'vue-router';

const menuOptions: MenuOption[] = [
  {
    label: () => h(RouterLink, { to: '/' }, { default: () => 'Home' }),
    key: 'home',
    icon: renderIcon(HomeIcon),
  },
  {
    label: () => h(RouterLink, { to: '/settings' }, { default: () => 'Settings' }),
    key: 'settings',
    icon: renderIcon(SettingsIcon),
  },
];
</script>

<template>
  <n-menu
    default-value="home"
    :options="menuOptions"
    :icon-size="32"
    :collapsed-width="64"
    :collapsed-icon-size="32"
  />
</template>
