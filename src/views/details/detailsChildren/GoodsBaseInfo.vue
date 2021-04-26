<template>
  <div class="detail">
    <div class="title">
      <b>【
        {{goods.title}}
        】
      </b>
    </div>

    <div class="price">
      <span class="nprice">{{goods.newPrice}}</span>
      <s class="oprice">{{goods.oldPrice}}</s>
      <span class="discount">{{goods.discount}}</span>
    </div>

    <div class="columns">
      <div v-for="item in goods.columns">{{item}}</div>
    </div>

    <div class="services">
      <div v-for="item in goods.services">
        <img :src="item.icon" alt="图标">
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsBaseInfo",
    props: {
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail{
    /*width: 310px;*/
    padding: 0 3px;
    border-bottom: 3px gainsboro solid;
  }
 .title{
   margin-top: 8px;
   font-size: 14px;
   color: #222222;
 }
  .price{
    margin-top: 5px;
    color: var(--color-high-text);
    font-size: 20px;
  }
  .oprice{
    font-size: 10px;
    color: #666666;
    padding:0 5px;
  }
  .discount{
    font-size: 6px;
    background-color: var(--color-high-text);
    color: #ffffff;
    padding: 2px;
    border-radius: 8px;
  }
  .columns{
    color: #999999;
    font-size: 10px;
    margin-top: 15px;
    padding-bottom: 5px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px gainsboro solid;
  }
  .services{
    color: #000000;
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
  .services div{
    display: inline-block;
  }
  .services img{
    width: 12px;
    height: 12px;
  }
</style>
