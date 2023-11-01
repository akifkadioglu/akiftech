<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <component :is="$route.meta.layout">
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </component>
    </router-view>
  </div>
  
</template>
<script>
export default {};
</script>
