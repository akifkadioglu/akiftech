<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div class="mb-9">
      <slot />
    </div>
  </div>
</template>
<script setup>
import Navbar from "../components/post/navbar.vue";
</script>
