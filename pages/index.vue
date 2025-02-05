<script setup lang="ts">
import Hero from "~/components/pages/home/hero.vue";
import Technologies from "~/components/pages/home/technologies.vue";
import About from "~/components/pages/home/about.vue";
import Contact from "~/components/pages/home/contact.vue";
</script>

<template>
  <div class="flex flex-col gap-20">
    <Hero />
    <About />

    <Technologies />
    <Contact />
  </div>
</template>
