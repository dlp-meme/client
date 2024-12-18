<script setup lang="ts">
import SinglePromptModalUi from '@/shared/ui/naive-ui/modals/single-prompt/single-prompt-modal.ui.vue';
import { useAppStore } from '@app/stores/app.store';
import { useConfigStore } from '@entities/config/store/config.store';
import { NInput, NText, useNotification } from 'naive-ui';
import { onMounted, ref } from 'vue';
import { z } from 'zod';

const appStore = useAppStore();
const configStore = useConfigStore();
const notification = useNotification();

const isConfigExists = ref(true);
const hostValidator = z.string().url();
const validateError = ref('');

const loadConfig = async () => {
  appStore.setLoading(true);

  try {
    await configStore.loadConfig();

    isConfigExists.value = configStore.serverHost !== null && configStore.serverHost.length > 0;
  } catch (e: unknown) {
    if (typeof e === 'string') {
      if (e === 'not_found') {
        isConfigExists.value = false;
        return;
      }
    }

    notification.error({
      title: 'Error',
      content: 'Something went wrong while config loading',
    });
  } finally {
    appStore.setLoading(false);
  }
};

const updateServerHost = async (host: string) => {
  const result = hostValidator.safeParse(host);

  if (!result.success) {
    validateError.value = result.error.issues[0].message;

    return;
  }

  validateError.value = '';
  isConfigExists.value = true;

  try {
    appStore.setLoading(true);
    await configStore.replaceConfig(host);
  } catch (e) {
    notification.error({
      title: 'Error',
      content: 'Something went wrong while config updating',
    });
    console.log(e);
  } finally {
    appStore.setLoading(false);
  }
};

onMounted(loadConfig);
</script>

<template>
  <single-prompt-modal-ui
    :show="!isConfigExists"
    @confirm="updateServerHost"
    title="Set up server host"
    description="Please enter server host"
    cancelable
  >
    <template #input="{ value, updateValue }">
      <div>
        <n-text type="error" v-if="validateError.length">{{ validateError }}</n-text>
        <n-input
          :status="validateError.length ? 'error' : 'success'"
          size="large"
          placeholder="https://"
          :value="value"
          @update:value="updateValue"
        />
      </div>
    </template>
  </single-prompt-modal-ui>
  <slot />
</template>
