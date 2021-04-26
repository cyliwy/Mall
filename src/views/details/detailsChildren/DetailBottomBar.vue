<template>
  <div class="bottomBar">
    <div class="left">
      <div>
        <div class="icon serve"></div>
        <span>客服</span>
      </div>
      <div>
        <div class="icon shop"></div>
        <span>店铺</span>
      </div>
      <div>
        <div class="icon collect"></div>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="R" @click="inCart">
        加入购物车
      </div>
      <div class="L">
        购买
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    data(){
      return{
        isShow : false
      }
    },
    mounted() {

    },
    methods:{
      inCart(){
        this.$emit('inCart');
      }
    }
  }
</script>

<style scoped>
  .bottomBar{
    width: 100%;
    height: 49px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
  }
  .bottomBar .left{
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 5px;
  }
  .bottomBar .icon{
    display: block;
    width: 22px;
    height: 22px;
    /*margin: 10px auto 3px;*/
    background: url("../../../assets/img/detail/detail_bottom.png") no-repeat  0 0/100%;
  }
  .bottomBar .serve{
    background-position:0 -53px;
  }
  .bottomBar .serve + span{
    font-size: 8px;
  }
  .bottomBar .shop{
    background-position:0 -98px;
  }
  .bottomBar .shop + span{
    font-size: 8px;
  }
  .bottomBar .collect + span{
    font-size: 8px;
  }
  .bottomBar .right{
    width: 50%;
    height: 100%;
    /*background-color: red;*/
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    font-size: 16px;
  }
  .bottomBar .right .R{
    width: 50%;
    line-height: 49px;
    background-color: lightseagreen;
  }
  .bottomBar .right .L{
    width: 50%;
    line-height: 49px;
    background-color: #ff5777;
  }
</style>
