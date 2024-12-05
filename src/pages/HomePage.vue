<script setup lang="ts">
import { ColorPicker } from 'primevue';
import Button from 'primevue/button';
import { ref } from 'vue';

const color = ref('#ff0000');
</script>

<template>
  <h1>Home</h1>
  <Button>PrimeVue test</Button>
  <ColorPicker v-model="color" />
</template>
