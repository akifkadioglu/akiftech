<template>
  <div>
    <div>
      <Navbar />
    </div>
    <slot />
  </div>
</template>
<script setup>
import Navbar from "../components/navbar.vue";
</script>
