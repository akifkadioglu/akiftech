<template>
  <div class="flex fixed w-full bottom-0 bg-red-500 justify-center">
    <button @click="portfolio" class="font-mono text-white hover:underline">akif</button>
  </div>
</template>
<script setup>
function portfolio() {
  window.location.href = "https://akifkadioglu.dev";
}
</script>
