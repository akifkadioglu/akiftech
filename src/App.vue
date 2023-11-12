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
import { useAppStore } from "./stores/app";

export default {
  components: { Snackbar },
  mounted() {
    this.checkBDay();
  },
  data() {
    return {
      specialDays: [
        {
          title: "Doğum günüm 🥳 🎉",
          month: 11,
          day: 12,
        },
      ],
    };
  },
  methods: {
    checkBDay() {
      var now = new Date();
      this.specialDays.forEach((e) => {
        if (now.getMonth() + 1 == e.month && now.getDate() == e.day) {
          this.$confetti.start();
          setTimeout(() => {
            this.$confetti.stop();
            useAppStore().getSnackbar(e.title, 5000);
          }, 5000);
        }
      });
    },
  },
};
</script>
