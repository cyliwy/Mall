<template>
  <div>
    <cart-list-item
      v-for="(item,index) in getCartList"
      :goodInfo="item"
      :key="index"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import CartListItem from "./CartListItem";
  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    computed: {
      ...mapGetters(['getCartList'])
    }
  }
</script>

<style scoped>

</style>
