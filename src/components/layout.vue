<template>
  <Header />
  <slot />
</template>

<script>
import Header from "@/components/header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style></style>
