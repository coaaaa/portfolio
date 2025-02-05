<script setup lang="ts">
import Header from "~/components/pages/layout/header.vue";
</script>

<template>
  <Header />
  <main class="mx-auto max-w-screen-lg p-6 py-8">
    <slot />
  </main>
</template>
