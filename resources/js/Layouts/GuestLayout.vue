<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";
</script>

<template>
  <div
    class="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0"
  >
    <div class="max-w-screen-xl px-4 py-4 mx-auto">
      <div class="max-w-screen-sm mx-auto mb-4 text-center">
        <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
          Google review URL Generator
        </h2>
        <p class="font-light text-gray-500 lg:mb-6 sm:text-xl">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
    </div>

    <div
      class="w-full px-6 py-4 mt-6 mb-6 overflow-hidden bg-white shadow-md sm:max-w-2xl sm:rounded-lg"
    >
      <slot />
    </div>
  </div>
</template>
