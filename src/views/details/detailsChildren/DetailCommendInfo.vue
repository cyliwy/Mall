<template>
  <div v-if="commendInfo.length !== 0" class="info">
    <div class="info-top">
      <span>用户评价</span>
      <span @click="Show" id="change">更多</span>
    </div>
    <div class="info-context">
      <img :src="commendInfo[0].user.avatar" alt=""/>
      <div>{{commendInfo[0].user.uname}}</div>
    </div>

    <div class="info-end">{{commendInfo[0].content}}</div>
    <span class="info-final" v-show="isShow">(tel:{{commendInfo[0].created}} )</span>
    <span v-for="item in commendInfo[0].extraInfo" class="extra" v-show="isShow">{{item}}&nbsp &nbsp</span>
    <p class="explain" v-show="isShow">{{commendInfo[0].explain}}</p>

    <div class="info-final">{{commendInfo[0].style}}</div>
    <div class="img">
      <img  v-for="item in commendInfo[0].images"  :src="item" alt="" class="images"/>
    </div>
    <p class="data">{{commendInfo[0].created | formDate}}years</p>
  </div>
</template>

<script>
  import {formatDate} from '../../../common/utils'
  export default {
    name: "DetailCommendInfo",
    props: {
      commendInfo:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        isShow : false
      }
    },
    methods:{
      Show(){
        if( (this.commendInfo[0].extraInfo || this.commendInfo[0].explain) && this.isShow === false)
        {this.isShow = true;document.getElementById('change').innerText = '收起';}
        else
          {this.isShow = false;document.getElementById('change').innerText = '更多';}
      }
    },
    filters:{
      formDate(value){
        const date = new Date(value * 1000);
        return  formatDate(date,'yyyy')
      }
    }
  }
</script>

<style scoped>
  .info{
    padding: 10px 5px;
    border-bottom: 3px solid #f2f5f8;
  }
  .info-top{
    font-size: 12px;
    width: 310px;
    display: flex;
    justify-content: space-between;
    border-bottom: 3px solid #f2f5f8;
    padding-bottom: 5px;
  }
  .info-context{
    position: relative;
    height: 40px;

  }
  .info-context img{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 0px;
    top: 5px;
    border-radius: 50%;
  }
  .info-context div{
    line-height: 40px;
    padding-left: 40px;
    color: #333333;
    font-size: 15px;
  }
  .info-end , .info-final{
    font-size: 10px;
  }
  .info-end{
    margin-bottom: 5px;
  }
  .extra{
    font-size: 10px;
  }
  .explain{
    font-size: 10px;
    color:#ff8198;
    display: inline-block;
    overflow: hidden;
  }
  .info-final{
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .images{
    width: 50px;
    height: 50px;
    margin-right: 3px;
  }
  .data{
    font-size: 10px;
  }
</style>
