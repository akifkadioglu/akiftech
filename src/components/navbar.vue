<template>
  <div class="mb-16">
    <div class="flex justify-end mx-5 mt-3">
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
    <div class="flex justify-center">
      <span class="font-montserrat-bold text-5xl linear_gradient">
        Akif Tech
      </span>
    </div>
  </div>

  <!-- <hr class="my-5 mb-16 max-w-3xl mx-auto"> -->
</template>
<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped>
.linear_gradient {
  background: -webkit-linear-gradient(45deg, #0072bc, #3498db, #5bc0de);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

hr {
  border-top: 0.5px solid rgba(122, 122, 122, 0.452);
}
</style>
