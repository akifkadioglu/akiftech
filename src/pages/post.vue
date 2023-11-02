<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="!isLoading && post.value"
      class="mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl px-5"
    >
      <div class="font-dmsans font-bold text-4xl">{{ post.value.title }}</div>
      <div class="font-josefin text-lg my-5">{{ post.value.subtitle }}</div>

      <div class="mb-5">
        <hr />
        <small class="flex justify-end">
          {{
            new Date(post.value.created_at.seconds * 1000).toLocaleString(
              lang,
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            )
          }}
        </small>
      </div>
      <div>{{ post.value.post }}</div>
    </div>
    <div v-else class="flex justify-center">
      <loadingBar />
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
const lang = navigator.language || navigator.userLanguage;

onMounted(() => {
  isLoading.value = true;
  post.value = useDocument(doc(db, "posts", route.params.id));
  isLoading.value = false;
});
</script>
