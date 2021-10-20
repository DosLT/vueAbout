<template>
  <div>
    text:
    <p>vuex根state: {{ $store.state.str }}</p>
    <p>vuex A state: {{ $store.state.a.str }}</p>
    <br />
    <!-- mapState, mapGetters : {{ str }}, {{ getStr }} -->
    <br />
    <p>vuex根state: {{ $store.state.str }} === {{ str }}</p>
    <p>vuex A state: {{ $store.state.a.str }} === {{ a_str }}</p>

    <p>vuex 根 getStr: {{ $store.getters.getStr }} === {{ getStr }}</p>
    <p>vuex A getStr: {{ $store.getters.getStrA }} === {{ getStrA }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "TextOne",
  computed: {
    /**
     * 仅仅获取根 str
      ...mapState(["str"]),
      ...mapGetters(["getStr"]),
     */
    ...mapState({
      str(state) {
        return state.str;
      },
      a_str(state) {
        return state.a.str;
      },
    }),
    ...mapGetters(["getStr", "getStrA"]),
  },
  mounted() {
    console.log(this.$store.state.str);
  },
  methods: {
  },
};
</script>

<style>
</style>