<template>
  <div
    v-for="(item, index) in data"
    :key="index"
    @click="fetchPost(item.id)"
    class="my-5 cursor-pointer mx-1 border dark:border-zinc-800 border-zinc-100"
  >
    <div class="h-full w-full bg-white dark:bg-zinc-900 p-5">
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
        <div class="flex space-x-1 items-center truncate">
          <small>
            {{
              new Date(item.created_at.seconds * 1000).toLocaleString(lang, {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }}
          </small>
          <mdicon name="circle-small" />
          <small>
            {{ Math.ceil(item.post.split(/\s+/).length / 200) }} min read
          </small>
        </div>

        <div v-if="item.group != null" class="rounded-full flex font-semibold">
          <div
            class="rounded-full bg-zinc-100 dark:bg-zinc-800 h-full w-full m-0.5 px-3 py-1 overflow-hidden truncate"
          >
            {{ item.group.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { names } from "../router";

const router = useRouter();

const props = defineProps({
  data: Object,
});
const lang = navigator.language || navigator.userLanguage;
function fetchPost(index) {
  router.push({ name: names.POST, params: { id: index } });
}
</script>
