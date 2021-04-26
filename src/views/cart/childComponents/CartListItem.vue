<template>
  <div class="good">
    <div class="left">
      <item-click class="click" :is-show="this.goodInfo.isChecked" @click.native="changeShow"/>
      <div>
        <img :src="goodInfo.img" alt="图片"/>
      </div>
    </div>
    <div class="right">
      <p class="title">{{goodInfo.title}}</p>
      <p class="desc">{{goodInfo.desc}}</p>
      <span class="price">￥{{goodInfo.realPrice}}</span>
      <span class="count">×{{goodInfo.count}}</span>
    </div>
  </div>
</template>

<script>
  import ItemClick from "../../../components/common/itemClick/ItemClick";
  export default {
    name: "CartListItem",
    components:{
      ItemClick
    },
    props: {
      goodInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      changeShow(){
        this.goodInfo.isChecked = !this.goodInfo.isChecked;
      }
    }
  }
</script>

<style scoped>
  .good{
    height: 120px;
    border-bottom: 1px solid #a3a3a5;
    display: flex;
    justify-content: space-around;
  }
  .good .left{
    width: 100px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
  }
  .good .left img{
    width: 80px;
    height: 100px;
    border-radius:5px ;
  }
  .good .left .click{
    margin-top: 40px;
  }
  .good .right{
    width: 200px;
    margin-top: 10px;
  }
  .good .right .title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
    margin-bottom: 20px;
  }
  .good .right .desc{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 10px;
    margin-bottom: 20px;
  }
  .good .right .price {
    margin-right: 100px;
    color: #ff5777;
  }
  .good .right.count{

  }
</style>
