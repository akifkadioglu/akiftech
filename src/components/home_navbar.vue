<template>
  <div class="mb-16 m-5">
    <SwitchMode />
    <div class="flex justify-center">
      <span
        :class="isDark ? 'linear_gradient' : ''"
        class="font-montserrat-bold text-5xl"
      >
        <span> Akif </span>
        <span :class="isDark ? '' : 'linear_gradient'"> Kadıoğlu </span>
      </span>
    </div>
  </div>
</template>
<script setup>
import { useDark } from "@vueuse/core";
import SwitchMode from "./switch_mode.vue";

const isDark = useDark();
</script>

<style scoped>
.linear_gradient {
  background: -webkit-linear-gradient(45deg, #0072bc, #34d0db, #5bde7c);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

hr {
  border-top: 0.5px solid rgba(122, 122, 122, 0.452);
}
</style>
