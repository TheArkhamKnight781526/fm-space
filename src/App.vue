<template>
  <router-view />
</template>

<script lang="ts">
export default {
  watch: {
    $route(to: any) {
      document.body.dataset.page =
        to.path !== "/" ? to.path.substring(1) : "home";
    },
  },
};
</script>

<style lang="scss"></style>
