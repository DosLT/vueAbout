<template>
  <div class="home">
    <p>$store.state.str ==> {{ $store.state.str }}</p>
    <p>$store.state.a.str ==> {{ $store.state.a.str }}</p>
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
