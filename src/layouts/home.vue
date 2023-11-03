<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div class="my-10">
      <slot />
    </div>
  </div>
</template>
<script setup>
import Navbar from "../components/home/navbar.vue";
</script>
