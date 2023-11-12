<template>
  <transition name="nested">
    <div class="fixed bottom-9 left-9 z-10 mr-9" v-if="store.$state.snackbar">
      <div class="flex bg-zinc-700 px-4 py-2 text-white font-semibold">
        {{ store.$state.snackbarText }}
      </div>
    </div>
  </transition>
</template>
<script setup>
import { useAppStore } from "../stores/app";
const store = useAppStore();
</script>
