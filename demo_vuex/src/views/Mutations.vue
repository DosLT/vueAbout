<template>
  <div>
    <ul>
      <li
        v-for="(item,index) in list"
        :key="index"
        @click="listChose(item)"
      >{{item.name}}</li>
    </ul>
    <br>
    <input type="text" v-model="newObj.name">
    <input type="text" v-model="newObj.id">
    <input type="button" value="add obj" @click="addObj">
    <br>
    <h2>{{listName}}</h2>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Mutations",
  data(){
    return{
      newObj:{
        name: '',
        id: ''
      }
    }
  },
  computed: {
    ...mapState(["list", "listName"])
  },
  methods: {
    ...mapMutations(["setListName","setAddList"]),
    addObj(){
      let list = this.list 
      list.push({...this.newObj,...{id:+this.newObj.id}})
      this.$store.commit("setAddList",list)
    },
    listChose(item) {
      // vuex 传递多个值时候。 用单一对象的格式来搞，记住就好了。之后不管什么值（单，多）都是要以对象的形式
      // this.setListName({
      //   listName: item.name,
      //   id: 100
      // });
      //也可以用 commit 来调用mutations的方法
      this.$store.commit("setListName", {
        listName: item.name,
        id: item.id
      });
    }
  }
};
</script>

<style>
</style>