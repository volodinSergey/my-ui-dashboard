<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
  disabled?: boolean
  reset?: boolean
}

const props = defineProps<IProps>()

const classObject = computed(() => ({
  disabled: props.disabled === true,
  reset: props.reset === true
}))
</script>

<template>
  <button
    :class="['ui-button', classObject]"
    :disabled="disabled"
  >
    <slot name="before" />
    <slot />
    <slot name="after" />
  </button>
</template>

<style scoped lang="scss">
.ui-button {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1rem;
  color: #fff;
  background-color: #6200f7;
  padding: 0.625em 1em;
  border-radius: 0.3em;
  transition: 0.3s;

  @media (any-hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }
}

.disabled {
  opacity: 0.5;
  background-color: #222;

  @media (any-hover: hover) {
    &:hover {
      opacity: 0.5;
    }
  }
}

.reset {
  padding: 0;
  background-color: transparent;

  @media (any-hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
}
</style>
