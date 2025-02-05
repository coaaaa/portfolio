<script setup lang="ts">
import { NuxtLink } from "#components";
</script>

<template>
  <div id="contact">
    <h2 class="text-2xl font-bold mb-1">Contact Me</h2>

    <div class="flex gap-2 flex-col text-text-darker">
      <NuxtLink
        href="https://github.com/coaaaa"
        class="flex gap-1 items-center underline cursor-pointer"
      >
        <Icon name="mdi:github" size="1.25em" />
        coaaaa
      </NuxtLink>

      <NuxtLink
        href="mailto:coaaaaa@proton.me"
        class="flex gap-1 items-center underline cursor-pointer"
      >
        <Icon name="mdi:email" size="1.25em" />
        coaaaaa@proton.me
      </NuxtLink>

      <NuxtLink class="flex gap-1 items-center cursor-pointer">
        <Icon name="mdi:telegram" size="1.25em" />
        @coa_a
      </NuxtLink>

      <span class="flex gap-1 items-center">
        <Icon name="mdi:discord" size="1.25em" />
        @coaaaaa
      </span>
    </div>
  </div>
</template>
