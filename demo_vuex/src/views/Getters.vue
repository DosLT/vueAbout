<template>
  <div class="getters">
    <h1>This is an getters page</h1>
    {{str}}
    <br>
    {{getStr}}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: "Getters",
  computed:{
    ...mapState(['str']),
    ...mapGetters(['getStr'])
  },
  mounted() {
    console.log("这是getters页面",this.str);
  }
};
</script>