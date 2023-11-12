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
import { isMobile } from "./utils";

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
          month: 3,
          day: 28,
        },
      ],
      scrollHeight: isMobile() ? 0 : "15px",
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
<style>
::-webkit-scrollbar {
  height: v-bind(scrollHeight);
  width: 5px;
  border-radius: 20;
}
::-webkit-scrollbar-thumb {
  background: #585858;
}
::-webkit-scrollbar-thumb:hover {
  background: #2b2b2b;
}
</style>
