<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div class="my-10">
      <slot />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Footer from "../components/home/footer.vue";
import Navbar from "../components/home/navbar.vue";
</script>
