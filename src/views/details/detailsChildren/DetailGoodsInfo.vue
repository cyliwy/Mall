<template>
  <div class="good-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="good-desc">
      <div class="good-start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="good-end"></div>
    </div>
    <div class="good-key"><b>{{detailInfo.detailImage[0].key}}</b></div>
    <div>
        <img  class="good-img" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="图片" @load="image"/>
    </div>

    <div v-for="item in itemTags" class="itemTag">
      <img :src="item.icon" alt="图片"/>
      <span>{{item.name}}</span>
      <span>({{item.content}})</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    data(){
      return{
        counter : 0
      }
    },
    props: {
      detailInfo: {
        type : Object,
        default(){
          return {}
        }
      },
      itemTags: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      image(){
        // console.log('====');
        //防止多次发送事件，类似防抖
        if(++this.counter === this.detailInfo.detailImage[0].list.length){
          this.$emit('imageOver');
        }
      }
    }
  }
</script>

<style scoped>
  .good-info{
    padding: 0 6px;
  }
  .good-desc{
    margin-top: 15px;
  }
  .desc{
    font-size: 10px;
    clear: both;
  }
  .good-start , .good-end{
    height: 1px;
    width: 90px;
    background-color: #a3a3a5;
    position: relative;
  }
  .good-start::before , .good-end::after {
    content: '';
    height: 3px;
    width: 3px;
    background-color: #333;
    position: absolute;
  }
  .good-start::before{
    top:-3px;
  }
  .good-end::after{
    right: 0px;
  }
  .good-start{
    float: left;
    margin-bottom: 10px;
  }
  .good-end{
    float: right;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .good-key{
    font-size: 12px;
    clear: both;
  }
  .good-img{
    width: 100%;
  }
  .itemTag img{
    width: 10px;
    height: 10px;
  }
  .itemTag span{
    font-size: 12px;
    color: #000000;
    padding-right: 3px;
  }
</style>
