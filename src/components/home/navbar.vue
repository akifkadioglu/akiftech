<template>
  <div class="mb-16 m-5">
    <div class="flex items-center justify-between mb-9">
      <a href="https://akifkadioglu.dev" target="_blank">
        <mdicon name="map-marker-radius" />
      </a>
      <SwitchMode />
    </div>
    <div class="flex justify-center">
      <span
        :class="isDark ? 'linear_gradient' : ''"
        class="font-montserrat-bold text-4xl"
      >
        <span> Akif </span>
        <span :class="isDark ? '' : 'linear_gradient'"> Kadıoğlu </span>
      </span>
    </div>
  </div>
</template>
<script setup>
/* imports */
import { useDark } from "@vueuse/core";
import SwitchMode from "../switch_mode.vue";

/* data */
const isDark = useDark();
</script>

<style scoped>
.linear_gradient {
  background: -webkit-linear-gradient(45deg, #0072bc, #34d0db, #5bde7c);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
