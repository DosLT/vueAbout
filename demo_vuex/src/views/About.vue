<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{$store.state.str}}
    <br/>
    {{str}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "About",
  computed:{
    ...mapState(['str'])
  },
  mounted() {
    console.log("这是About页面", this.$store.state.str,this.str);
  }
};
</script>