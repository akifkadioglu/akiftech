<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="!isLoading && post.value"
      class="mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl px-5"
    >
      <div
        @click="goReply"
        v-if="post.value.reply"
        class="flex max-w-sm my-16 cursor-pointer rounded bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 space-x-5"
      >
        <div class="vr" />

        <div>
          <div
            class="font-dmsans text-lg font-bold max-w-xs overflow-hidden truncate"
          >
            {{ post.value.reply.title }}
          </div>
          <div class="font-josefin max-w-xs overflow-hidden truncate">
            {{ post.value.reply.subtitle }}
          </div>
        </div>
      </div>
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
      <article
        class="prose  dark:prose-invert"
        v-html="post.value.post"
      ></article>
      <!--       <div class="prose dark:text-white dark:blockquote-white" v-html="post.value.post"></div>
 -->
    </div>
    <div v-else class="flex justify-center">
      <div class="loading-spinner" />
    </div>
  </transition>
</template>

<script setup>
/* imports */
import { useFirestore, useDocument } from "vuefire";
import { doc } from "firebase/firestore";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

/* data */
const route = useRoute();
const db = useFirestore();
const isLoading = ref(true);
const post = ref({});
const lang = navigator.language || navigator.userLanguage;
onMounted(async () => {
  isLoading.value = true;
  post.value = useDocument(doc(db, "posts", route.params.id));
  isLoading.value = false;
});

/* methods */
const goReply = () => {
  window.open(
    window.location.origin + "/post/" + post.value.data.reply.id,
    "_blank"
  );
};
</script>
<style scoped>
.vr {
  border-left: 5px solid #0072bc;
}
</style>
