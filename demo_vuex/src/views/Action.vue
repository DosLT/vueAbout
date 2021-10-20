<template>
  <div>
    <!-- 同步的计数器 -->
    <button @click="re_tongbu">-</button><span>{{ count }}</span
    ><button @click="add_tongbu">+</button>
    <hr />
    <span>{{ totalMoney }}</span>
    <h1>------ 计数器 分阁--------</h1>
    <!-- 异步计数器 -->
    <button @click="re_yibu">-</button><span>{{ count }}</span
    ><button @click="add_yibu">+</button>
    <hr />
    <span>{{ totalMoney }}</span>
    <!-- <button @click="reOradd_yibu">+-</button> -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Action",
  computed: {
    ...mapState(["count", "totalMoney"]),
  },
  methods: {
    ...mapMutations(["ADD_MUTATION", "RE_MUTATION"]),
    ...mapActions(["add_actions", "re_actions", "add_re_actions"]),
    re_tongbu() {
      let countTemp = this.count;
      // this.$store.commit('RE_MUTATION',{
      //   count: --countTemp,
      // })
      this.RE_MUTATION({
        count: --countTemp,
      });
    },
    add_tongbu() {
      let countTemp = this.count;
      this.ADD_MUTATION({
        count: ++countTemp,
      });
    },
    add_yibu() {
      let countTemp = this.count;
      this.add_actions({
        count: ++countTemp,
      });
    },
    re_yibu() {
      let countTemp = this.count;
      this.$store.dispatch("re_actions", {
        count: --countTemp,
      }); 
    },
  },
};
</script>

<style>
</style>