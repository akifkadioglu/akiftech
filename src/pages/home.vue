<template>
  <transition name="fade" mode="out-in">
    <div v-if="!isLoading && posts.value">
      <div
        v-for="(item, index) in posts.value"
        :key="index"
        class="container rounded-lg mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl p-5 border dark:border-zinc-800 dark:hover:bg-zinc-800 border-zinc-100 hover:bg-zinc-100"
      >
        <div class="font-dmsans font-bold text-2xl my-5">
          {{ item.title }}
        </div>
        <div class="font-josefin text-lg overflow-hidden truncate my-1">
          {{ item.subtitle }}
        </div>
        <div class="overflow-hidden truncate">
          {{ item.post }}
        </div>
        <div class="flex justify-between items-center mt-5">
          <small>
            {{
              new Date(item.created_at.seconds * 1000).toLocaleString(lang, {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }}
          </small>
          <button
            @click="fetchPost(item.id)"
            class="mt-3 px-5 py-1 border rounded-full dark:border-zinc-800 dark:hover:bg-zinc-50 border-zinc-200 hover:bg-zinc-800 hover:text-white dark:hover:text-zinc-800 font-dmsans"
          >
            Read
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <LoadingBar />
    </div>
  </transition>
</template>
<script setup>
/* imports */
import { useRouter } from "vue-router";
import { names } from "../router";
import { useFirestore, useCollection } from "vuefire";
import { collection } from "firebase/firestore";
import LoadingBar from "../components/loading_bar.vue";
import { onMounted, ref } from "vue";

/* data */
const db = useFirestore();
const posts = ref([]);
const router = useRouter();
const isLoading = ref(false);
const lang = navigator.language || navigator.userLanguage;

onMounted(() => {
  isLoading.value = true;
  posts.value = useCollection(collection(db, "posts"));
  isLoading.value = false;
});
/* methods */
function fetchPost(index) {
  router.push({ name: names.POST, params: { id: index } });
}
</script>
