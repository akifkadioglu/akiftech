<template>
  <div class="m-5">
    <div class="flex items-center justify-between mb-9">
      <a href="https://akifkadioglu.dev" target="_blank">
        <mdicon name="link" />
      </a>
      <SwitchMode />
    </div>
    <div class="text-center">
      <vue-custom-tooltip label="Uyudun mu?" position="is-bottom">
        <img
          src="https://raw.githubusercontent.com/akifkadioglu/images/main/logo.webp"
          alt="logo"
          width="150"
          height="150"
        />
      </vue-custom-tooltip>
    </div>
  </div>
</template>
<script setup>
/* imports */
import SwitchMode from "../switch_mode.vue";
</script>
