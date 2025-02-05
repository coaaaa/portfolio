<script setup lang="ts">
import Button from "~/components/ui/button.vue";
const projects = [
  {
    name: "CPS Item Tracker",
    description: "Website for tracking items prices in MMO game.",
    link: "https://cps.devcoa.net/",
    image: "cps.png",
  },
];

const openProject = (link: string) => {
  window.open(link, "_blank");
};
</script>

<template>
  <h1 class="text-4xl font-bold mb-12">Projects i've worked on</h1>

  <div
    class="grid grid-cols-2 max-sm:grid-cols-1 gap-2"
    v-for="project in projects"
    :key="project.id"
    :to="project.link"
  >
    <div>
      <div class="flex flex-col gap-1 mb-2">
        <h2 class="text-2xl font-bold">{{ project.name }}</h2>
        <p class="text-sm text-gray-500">{{ project.description }}</p>
      </div>

      <NuxtImg
        :src="`/projects/${project.image}`"
        alt="Project image"
        width="600"
        height="400"
        loading="lazy"
        class="hover:scale-110 hover:rotate-2 transition-transform duration-200 ease-in-out w-full max-w-[600px] rounded-lg overflow-hidden object-cover"
      />

      <Button
        @click="openProject(project.link)"
        variant="secondary"
        class="w-fit mx-auto mt-2"
      >
        Visit project
      </Button>
    </div>
  </div>
</template>
