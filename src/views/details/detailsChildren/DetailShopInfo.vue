<template>
  <div class="shop-info">
    <div class="border">
      <div class="top-info">
        <div class="top-logo">
          <img :src="shop.logo" alt="Logo">
          <span>{{shop.name}}</span>
        </div>
      </div>

      <div class="center">
        <div class="moddle">
          <div class="mm">
            <div class="moddle-left">
              <div>{{shop.sells | sellCountFilter}}</div>
              <div class="content">总销量</div>
            </div>
            <div class="moddle-moddle">
              <div class="num">{{shop.goodsCount}}</div>
              <div class="content">全部宝贝</div>
            </div>
          </div>
        </div>

        <div class="moddle-right">
          <div v-for="(item,index) in shop.score" class="moddle-right-item" :key="index">
            <span class="span_1">{{item.name}}</span>
            <span class="span_2" :class="{heightColor : item.isBetter}">{{item.score}}</span>
            <span :class="{span_3 : item.isBetter}" class="span3">{{item.isBetter ? '高' : '低'}}</span>
          </div>
        </div>
      </div>
      <a href="http://m.meilishuo.com/?acm=3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119">
        <div class="shop">
          进店逛逛
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    data(){
      return{
        isShow : true
      }
    },
    props:{
      shop : {
        type : Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      sellCountFilter : function (value) {
    if(value < 10000) return value
    return (value/10000).toFixed(1) + '万'
  }
    }
  }
</script>

<style scoped>
  .shop-info{
    padding: 0 5px;
  }
  .border{
    padding-bottom: 20px;
    border-bottom:2px solid gainsboro ;
  }
  .top-info{
    padding: 25px 8px;
    border-bottom: 1px solid #f2f5f8;
  }
  .top-logo{
    line-height: 45px;
    display: flex;
    align-items: center;
  }
  .top-logo img{
    width: 45px;
    height: 45px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 50%;
  }
  .top-logo span{
    padding-left: 5px;
  }
  .moddle{
    font-size: 18px;
    /*margin-top: 10px;*/
    /*margin-left: 8px;*/
    /*display: flex;*/
    /*justify-content: space-around;*/
    text-align: left;
    width: 180px;
  }
  .moddle .mm{
    /*width: 150px;*/
    padding-top: 10px;
  }
  .moddle .content{
    font-size: 10px;
  }
  .moddle-moddle{
    padding-top: 3px;
    border-right: 1px solid rgba(0,0,0,.1);
    padding-right: 30px;
    display: inline-block;
  }
  .moddle-moddle .num{
    text-align: center;
  }
  .moddle-left{
    padding-top: 3px;
    display: inline-block;
    margin: 0 10px;
  }
  .moddle .mm .moddle-left .content{
    text-align: center;
  }
  .center{
    padding-top: 5px;
    display: flex;
    justify-content: space-around;
  }
  .moddle-right-item{
    font-size: 10px;
    padding-bottom: 10px;
  }
  .moddle-right-item .span_1{
    padding-right: 4px;
  }
  .span_2{
    display: inline-block;
    padding-right: 10px;
    margin-left: 10px;
    color: green;
    width: 30px;
  }
  .heightColor{
    color: var(--color-high-text);
  }
  .span3{
    background-color: green;
    color: #ffffff;
  }
  .span_3{
    background-color: var(--color-high-text);
    color: #ffffff;
  }
  .shop{
    margin: 0 auto;
    width: 80px;
    height: 20px;
    background-color: var(--color-tint);
    text-align: center;
    line-height: 20px;
    color: #ffffff;
    border-radius: 10px;
    font-size: 12px;
  }
</style>
