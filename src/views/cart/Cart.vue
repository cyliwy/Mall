<template>
  <div>
    <nav-bar v-slot:moddle class="cart">
      <div class="center">购物车({{length}})</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <cart-list class="content"/>
    </scroll>
    <cart-bottom-nar/>
<!--    <div>{{$store.getters.goodLength}}</div>-->
  </div>
</template>

<script>
  import NavBar from "../../components/common/navigrationBar/NavBar";
  import {mapGetters} from 'vuex';
  import CartList from "./childComponents/CartList";
  import Scroll from "../../components/common/scroll/Scroll";
  import CartBottomNar from "./childComponents/CartBottomNar";
  export default {
    name: "Cart",
    components : {
      NavBar,
      CartList,
      Scroll,
      CartBottomNar
    },
    computed : {
      ...mapGetters({
        length : "goodLength"
      })
    },
    activated() {
      this.$refs.scroll.imageLoads();
    }
  }
</script>

<style scoped>
  .cart{
    color: #ffffff;
    text-align: center;
    background-color: var(--color-tint);
  }
  .scroll{
    height: calc(100vh - 93px - 44px);
    overflow: hidden;
  }
  .content{
    height: 100%;
  }
</style>
