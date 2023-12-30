<template>
  <div class="flex justify-between mb-16 m-5">
    <button @click="backHome">
      <img
        src="https://raw.githubusercontent.com/akifkadioglu/images/main/logo.webp"
        alt="logo"
        width="50"
        height="50"
      />
    </button>
    <SwitchMode />
  </div>
</template>
<script setup>
/* imports */
import SwitchMode from "../switch_mode.vue";
import { names } from "../../router";
import { useRouter } from "vue-router";

/* data */
const router = useRouter();

/* methods */
function backHome() {
  router.push({ name: names.HOME });
}
</script>