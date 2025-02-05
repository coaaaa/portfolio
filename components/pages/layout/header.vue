<script setup lang="ts">
const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];
</script>
<template>
  <header class="flex items-center p-6">
    <div class="flex items-center max-sm:justify-start justify-center w-full">
      <nav>
        <ul class="flex gap-6 text-lg">
          <li v-for="link in links" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="text-text-darker hover:text-text transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
