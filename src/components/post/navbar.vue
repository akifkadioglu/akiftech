<template>
  <div class="flex justify-between mb-16 m-5">
    <button @click="backHome">
      <span
        :class="isDark ? 'linear_gradient' : ''"
        class="font-montserrat-bold text-2xl"
      >
        <span> Akif </span>
        <span :class="isDark ? '' : 'linear_gradient'"> Kadıoğlu </span>
      </span>
    </button>
    <SwitchMode />
  </div>
</template>
<script setup>
/* imports */
import SwitchMode from "../switch_mode.vue";
import { useDark } from "@vueuse/core";
import { names } from "../../router";
import { useRouter } from "vue-router";

/* data */
const isDark = useDark();
const router = useRouter();

/* methods */
function backHome() {
  router.push({ name: names.HOME });
}
</script>

<style scoped>
.linear_gradient {
  background: -webkit-linear-gradient(45deg, #0072bc, #34d0db, #5bde7c);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
