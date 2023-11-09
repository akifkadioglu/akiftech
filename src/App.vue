<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="$route.meta.layout">
        <transition name="fade" mode="out-in">
          <div :key="route.name">
            <component :is="Component" />
          </div>
        </transition>
      </component>
    </transition>
  </router-view>

  <div>
    <snackbar />
  </div>
</template>
<script>
import Snackbar from "./components/snackbar.vue";

export default { components: { Snackbar } };
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
