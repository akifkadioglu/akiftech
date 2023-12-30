<template>
  <transition name="fade" mode="out-in">
    <div v-if="group" class="flex justify-center font-montserrat-bold text-3xl">
      <span
        :style="
          group != null
            ? {
                backgroundImage: createBackgroundString(
                  45,
                  group.from,
                  group.via,
                  group.to
                ),
              }
            : ''
        "
        class="text-transparent bg-clip-text bg-gradient-to-r"
      >
        {{ group.title }}
      </span>
    </div>
  </transition>
  <transition name="fade" mode="out-in">
    <div
      v-if="posts.length > 0"
      class="container mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
    >
      <PostsPage :data="posts" />
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
import { useRoute } from "vue-router";
import { useFirestore, useCollection, useDocument } from "vuefire";
import {
  collection,
  query,
  orderBy,
  limit,
  where,
  doc,
} from "firebase/firestore";
import { ref, computed, watch } from "vue";
import { createBackgroundString } from "../utils";
import PostsPage from "../components/posts.vue";

/* data */
const db = useFirestore();
const route = useRoute();
const isLoading = ref(false);
const docsPerFetch = ref(5);
const collectionRef = collection(db, "posts");
const groupRef = doc(db, "groups", route.params.id);
const group = useDocument(groupRef);
const collectionQuery = computed(() => {
  return query(
    collectionRef,
    orderBy("created_at", "desc"),
    where("group", "==", groupRef),
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
</script>
