<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="!isLoading && post.value"
      class="mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl px-5"
    >
      <div class="font-dmsans font-bold text-4xl">{{ post.value.title }}</div>
      <div class="font-josefin text-lg my-5">{{ post.value.subtitle }}</div>
      <hr class="mb-16" />
      <div class="font-raleway">{{ post.value.post }}</div>
    </div>
    <div v-else class="flex justify-center">
      <loadingBar/>
    </div>
  </transition>
</template>

<script setup>
/* imports */
import { useFirestore, useDocument } from "vuefire";
import { doc } from "firebase/firestore";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import loadingBar from "../components/loading_bar.vue";

/* data */
const route = useRoute();
const db = useFirestore();
const isLoading = ref(true);
const post = ref({});

onMounted(() => {
  isLoading.value = true;
  post.value = useDocument(doc(db, "posts", route.params.id));
  isLoading.value = false;
});
</script>
