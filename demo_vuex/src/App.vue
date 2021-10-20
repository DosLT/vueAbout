<template>
  <div id="app">
    <router-link
      :style="{ marginRight: '10px' }"
      v-for="item in routes"
      :key="item.path"
      :to="item.path"
      >{{ item.name }}</router-link
    >
    <router-view />
  </div>
</template>

<script>
import { routes } from "./router";
export default {
  name: "App",
  data() {
    return {
      routes,
    };
  },
};
</script>