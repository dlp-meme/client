<script setup lang="ts">
import MoonStarsIcon from '@vicons/tabler/MoonStars';
import SunIcon from '@vicons/tabler/Sun';
import { useDark } from '@vueuse/core';
import { NAvatar, NButton, NIcon } from 'naive-ui';
import { computed } from 'vue';

const isDark = useDark();

const themeSwitcherIcon = computed(() => (isDark.value ? MoonStarsIcon : SunIcon));

const toggleTheme = () => {
  isDark.value = !isDark.value;
}
</script>

<template>
  <div class="app-header">
    <n-avatar class="app-header__logo" size="medium" src="/dlp-meme.png" />

    <div class="app-header__search"></div>

    <n-button class="app-header__theme-switcher" quaternary circle @click="toggleTheme">
      <n-icon size="24">
        <component :is="themeSwitcherIcon" />
      </n-icon>
    </n-button>
  </div>
</template>

<style scoped lang="scss">
.app-header {
  width: 100%;
  background-color: var(--crust-color);
  display: flex;
  padding: 8px;
  align-items: center;
  border-bottom: 1px solid var(--surface1-color);

  &__logo {
    flex-shrink: 0;
  }

  &__search {
    flex-grow: 1;
  }

  &__theme-switcher {
    flex-shrink: 0;
  }
}
</style>
