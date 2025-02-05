<script setup lang="ts">
import Button from "~/components/ui/button.vue";

const scrollToContact = () => {
  const contact = document.getElementById("contact");
  contact?.scrollIntoView({ behavior: "smooth" });
};

const navigateToProjects = () => {
  navigateTo("/projects");
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-4xl font-bold">
      Hello, i'm
      <span
        class="bg-gradient-to-r bg-clip-text text-transparent from-accent to-emerald-500"
        >coa</span
      >,
      <p class="text-4xl">a developer.</p>
    </h1>

    <p class="text-text-darker">
      I'm a self taught software engineer based in Finland.
    </p>

    <div class="flex gap-2 mt-6">
      <Button @click="scrollToContact">Contact me</Button>
      <Button @click="navigateToProjects" variant="secondary">
        My projects
      </Button>
    </div>
  </div>
</template>
