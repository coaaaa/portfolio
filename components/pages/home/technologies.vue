<script setup lang="ts">
const technologies = [
  {
    name: "HTML",
    icon: "html.png",
  },
  {
    name: "CSS",
    icon: "css.png",
  },
  {
    name: "JavaScript",
    icon: "js.png",
  },
  {
    name: "TypeScript",
    icon: "ts.png",
  },
  {
    name: "React",
    icon: "react.png",
  },
  {
    name: "Vue",
    icon: "vue.png",
  },
  {
    name: "Next.js",
    icon: "nextjs.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind.png",
  },
  {
    name: "C#",
    icon: "csharp.png",
  },
  {
    name: "C++",
    icon: "cpp.png",
  },
];
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-1">My Technologies</h2>

    <p class="text-text-darker">I'm most familiar with:</p>

    <div
      class="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] w-full gap-4 mt-4"
    >
      <div
        v-for="tech in technologies"
        v-bind:key="tech.name"
        class="flex flex-col items-center gap-2"
      >
        <img
          class="w-full max-w-[50px] h-auto"
          :src="`/tech/${tech.icon}`"
          :alt="tech.name"
          width="50"
          height="50"
          loading="lazy"
        />
        <p class="text-sm text-center text-text-darker font-medium">
          {{ tech.name }}
        </p>
      </div>
    </div>
  </div>
</template>
