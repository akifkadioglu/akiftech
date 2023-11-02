<template>
  <div class="flex justify-end">
    <button
      @click="toggleDark()"
      aria-label="dark-mode button"
      class="transition ease-in-out delay-50 hover:scale-105 duration-300"
    >
      <mdicon
        name="white-balance-sunny"
        class="text-orange-400 dark:text-orange-300"
      />
    </button>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
