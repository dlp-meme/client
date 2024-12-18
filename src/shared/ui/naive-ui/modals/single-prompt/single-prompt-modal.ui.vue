<script setup lang="ts">
import { NButton, NInput, NModal } from 'naive-ui';
import { ref } from 'vue';

export interface SinglePromptModalUiProps {
  title: string;
  description: string;
  show: boolean;
  defaultValue?: string;
  placeholder?: string;
  cancelable?: boolean;
  validate?: (value: string) => boolean;
}

export interface SinglePromptModalUiEmits {
  (e: 'confirm', value: string): void;
  (e: 'cancel'): void;
}

export interface SinglePromptModalUiSlots {
  input?: (value: { value: string; updateValue: (v: string) => void }) => void;
}

const { cancelable = false, ...props } = defineProps<SinglePromptModalUiProps>();
const emit = defineEmits<SinglePromptModalUiEmits>();
const slots = defineSlots<SinglePromptModalUiSlots>();

const value = ref(props.defaultValue || '');

const onConfirm = () => {
  if (props.validate && !props.validate(value.value)) {
    return;
  }

  emit('confirm', value.value);
};

const updateValue = (v: string) => {
  value.value = v;
};

const onCancel = () => {
  emit('confirm', '');
};

const modalStyle = {
  width: '40%',
};
</script>

<template>
  <n-modal
    :show="props.show"
    to="#app-modals"
    :mask-closable="!cancelable"
    @mask-click="onCancel"
    :style="modalStyle"
    preset="dialog"
    bordered
  >
    <template #header>
      <div>{{ props.title }}</div>
    </template>

    <div class="app-modal__single-prompt">
      <div>{{ props.description }}</div>
      <n-input
        v-if="!slots.input"
        size="large"
        :placeholder="props.placeholder"
        v-model:value="value"
      />
      <slot v-else name="input" :value="value" :update-value="updateValue" />
    </div>

    <template #action>
      <div class="app-modal-single-prompt__action-buttons">
        <n-button v-if="cancelable" tertiary type="error" @click="onCancel" round>
          Cancel
        </n-button>
        <n-button type="success" @click="onConfirm" round>Confirm</n-button>
      </div>
    </template>
  </n-modal>
</template>

<style lang="scss" scoped>
.app-modal__single-prompt {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.app-modal-single-prompt__action-buttons {
  display: flex;
  gap: 0.5em;
}
</style>
