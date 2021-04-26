<template>
  <div class="goodlist">
    <good-item  v-for="(item,index) in goods" :gooditem="item" :key="index"/>
  </div>
</template>

<script>
  import GoodItem from "./GoodItem";
  export default {
    name: "GoodsList",
    components:{
      GoodItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goodlist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
