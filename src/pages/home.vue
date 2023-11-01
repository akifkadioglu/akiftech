<template>
  <div class="">
    <div
      v-for="(item, index) in 5"
      :key="index"
      class="container mx-auto max-w-2xl m-5 p-5 border dark:border-zinc-800 dark:hover:bg-zinc-800 border-zinc-100 hover:bg-zinc-100"
    >
      <div class="font-dmsans font-bold text-2xl my-5">Lorem, ipsum dolor.</div>
      <div class="font-josefin text-lg overflow-hidden truncate my-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corporis
        facere qui consectetur.
      </div>
      <div class="text-raleway overflow-hidden truncate">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque et quod
        illum dignissimos, aut praesentium magni animi, laudantium quisquam
        incidunt earum voluptatibus harum facere rerum. Error, explicabo. Quam
        quia optio obcaecati maiores sed vero aliquam nobis dolorem quaerat eius
        doloremque, tenetur temporibus odio reiciendis nesciunt beatae tempore
        vitae accusamus saepe.
      </div>
      <div class="flex justify-end">
        <button
          class="mt-3 px-5 py-1 border rounded-full dark:border-white dark:hover:bg-white border-zinc-800 hover:bg-zinc-800 hover:text-white dark:hover:text-black font-dmsans"
        >
          Read
        </button>
      </div>
    </div>
  </div>
</template>
