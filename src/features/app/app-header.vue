<script setup lang="ts">
import { NAvatar } from 'naive-ui';
</script>

<template>
  <div class="app-header">
    <n-avatar class="app-header__logo" size="medium" src="/dlp-meme.png" />

    <div class="app-header__search"></div>
  </div>
</template>

<style scoped lang="scss">
.app-header {
  width: 100%;
  display: flex;
  padding: 8px;
  align-items: center;

  &__logo {
    flex-shrink: 0;
  }

  &__search {
    flex-grow: 1;
  }
}
</style>
