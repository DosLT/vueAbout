<template>
  <div class="home">
    <h1>This is an home page</h1>
    {{ $store.state.str }}
    {{ $store.state.a.str }}
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log("这是home页面", this.$store.state.str);
  },
};
</script>
