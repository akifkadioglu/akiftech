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
      <div class="font-dmsans font-bold text-4xl">
        <button
          class="p-2 border dark:border-zinc-700 rounded-full"
          @click="copyURL"
        >
          <mdicon name="link-variant" />
        </button>
        {{ post.value.title }}
      </div>
      <div class="font-josefin text-lg my-5">{{ post.value.subtitle }}</div>

      <div class="mb-5">
        <hr class="dark:border-zinc-700" />
        <div class="flex justify-between items-center">
          <vue-custom-tooltip
            v-if="post.value.group"
            label="Daha fazlası için.."
            position="is-right"
          >
            <button
              @click="lookForTopic(post.value.group.id)"
              class="rounded-full my-6 mx-1 flex font-sans"
              :style="{
                backgroundImage: createBackgroundString(
                  45,
                  post.value.group.from,
                  post.value.group.via,
                  post.value.group.to
                ),
              }"
            >
              <span
                class="w-full h-full rounded-full py-1 px-3 bg-white dark:bg-zinc-900 m-0.5 font-semibold"
              >
                {{ post.value.group.title }}
              </span>
            </button>
          </vue-custom-tooltip>
          <div v-else></div>
          <div class="flex space-x-1 items-center my-6">
            <small>
              {{ Math.ceil(post.value.post.split(/\s+/).length / 200) }} min
              read
            </small>
            <mdicon name="circle-small" />
            <small>
              {{
                new Date(post.value.created_at.seconds * 1000).toLocaleString(
                  lang,
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  }
                )
              }}
            </small>
          </div>
        </div>
      </div>
      <article
        class="prose max-w-none dark:prose-invert text-lg"
        v-html="post.value.post"
      />
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
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { useAppStore } from "../stores/app";
import { names } from "../router";
import { createBackgroundString } from "../utils";

/* data */
const route = useRoute();
const router = useRouter();
const db = useFirestore();
const isLoading = ref(true);
const post = ref({});
const lang = navigator.language || navigator.userLanguage;
const store = useAppStore();

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

const copyURL = () => {
  navigator.clipboard.writeText(window.location.href);
  store.getSnackbar("Gönderinin link'i kopyalandı");
};

const lookForTopic = (id) => {
  router.push({ name: names.GROUPS, params: { id } });
};
</script>
