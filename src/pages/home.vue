<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="posts.length > 0"
      class="container mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
    >
      <div
        v-for="(item, index) in posts"
        :key="index"
        @click="fetchPost(item.id)"
        :style="
          item.group != null
            ? {
                backgroundImage: createBackgroundString(
                  180,
                  item.group.from,
                  item.group.via,
                  item.group.to
                ),
              }
            : ''
        "
        class="my-5 dark:hover:bg-zinc-800 hover:bg-zinc-100 cursor-pointer mx-1 pl-1 p-0 border dark:border-zinc-800 border-zinc-100"
      >
        <div
          class="h-full w-full bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-zinc-100 p-5"
        >
          <div class="font-dmsans font-bold text-2xl">
            {{ item.title }}
          </div>
          <div class="font-josefin text-lg overflow-hidden truncate my-1">
            {{ item.subtitle }}
          </div>
          <div
            class="line-clamp-1 overflow-hidden truncate"
            v-html="item.post"
          />

          <div class="flex justify-between items-center mt-8">
            <small>
              {{
                new Date(item.created_at.seconds * 1000).toLocaleString(lang, {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }}
            </small>
            <div
              v-if="item.group != null"
              :style="{
                backgroundImage: createBackgroundString(
                  45,
                  item.group.from,
                  item.group.via,
                  item.group.to
                ),
              }"
              class="rounded-full flex font-semibold"
            >
              <div
                class="rounded-full bg-white dark:bg-zinc-800 h-full w-full m-0.5 px-3 py-1 overflow-hidden truncate"
              >
                {{ item.group.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <transition name="fade" mode="out-in">
          <button
            v-if="!isLoading"
            @click="loadNextPage"
            class="rounded-full border px-5 py-1 dark:border-zinc-800 border-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-100 font-semibold dark:hover:text-black hover:text-white"
          >
            Daha fazla
          </button>
          <div v-else class="py-1.5 font-semibold">Daha fazla gönderi yok.</div>
        </transition>
      </div>
    </div>
    <div v-else>
      <div class="loading-spinner" />
    </div>
  </transition>
</template>
<script setup>
/* imports */
import { useRouter } from "vue-router";
import { names } from "../router";
import { useFirestore, useCollection } from "vuefire";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { ref, computed, watch } from "vue";
import createBackgroundString from "../utils";

/* data */
const db = useFirestore();
const router = useRouter();
const isLoading = ref(false);
const lang = navigator.language || navigator.userLanguage;
const docsPerFetch = ref(5);
const collectionRef = collection(db, "posts");
const collectionQuery = computed(() => {
  return query(
    collectionRef,
    orderBy("created_at", "desc"),
    limit(docsPerFetch.value)
  );
});
const posts = useCollection(collectionQuery);

watch(posts, (newV, oldV) => {
  if (newV.length != oldV.length) {
    isLoading.value = false;
  }
});

/* methods */
const loadNextPage = async () => {
  isLoading.value = true;
  docsPerFetch.value = docsPerFetch.value + 5;
};

function fetchPost(index) {
  router.push({ name: names.POST, params: { id: index } });
}
</script>
