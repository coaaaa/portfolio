<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "primary" | "secondary";
  }>(),
  {
    variant: "primary",
  }
);
</script>

<template>
  <button
    @click="$emit('click')"
    class="rounded-lg transition-transform duration-200 ease-in-out hover:active:scale-95 cursor-pointer px-4 py-2 flex items-center font-semibold"
    :class="{
      'bg-accent text-bg': variant === 'primary',
      'bg-secondary text-text': variant === 'secondary',
    }"
  >
    <slot />
  </button>
</template>
