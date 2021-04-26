<template>
  <grid-view>
    <good-item v-for="(item, index) in categoryDetail" :key="index" :gooditem="item"></good-item>
  </grid-view>
</template>

<script>
  import GridView from "../../../components/common/gridView/GridView";
  import GoodItem from "../../../components/content/goods/GoodItem";

  export default {
    name: "TabContentDetail",
    components: {
      GridView,
      GoodItem
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
