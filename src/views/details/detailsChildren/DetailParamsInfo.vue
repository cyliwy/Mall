<template>
  <div v-if="Object.keys(params).length" class="detail-table">
    <table v-for="(table,index) in params.rules.tables" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(item,indez) in tr" :key="indez" class="paramTd">
          {{item}}
        </td>
      </tr>
    </table>

    <table class="info-param">
      <caption>产品参数</caption>
      <tr v-for="(item,index) in params.info" :key="index">
        <td class="td-key">
          {{item["key"]}}
        </td>
        <td class="td-value">
          {{item["value"]}}
        </td>
      </tr>
    </table>
    <p class="p">{{params.rules.desc}}</p>
    <div class="info-img" v-if="params.img.length !== 0">
      <img :src="params.img" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamsInfo",
    props: {
      params:{
        type : Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-table{
    padding: 10px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .detail-table table{
    width: 100%;
    border-collapse: collapse;
  }
  .detail-table .paramTd{
    width: 90px;
  }
  .detail-table table tr{
    height: 42px;
    /*display: flex;*/
    /*justify-content: space-between;*/
  }
  .detail-table table tr td{
    border-bottom: 1px  solid rgba(100,100,100,.1);
  }
  .info-param{
    border-top: 1px solid rgba(0,0,0,.1);
    margin-top: 5px;
  }
  .info-param caption{
    color: #ff5777;
  }
  .td-key{
    width: 95px;
  }
  .td-value{
    color: #eb4868
  }
  .info-img img {
    width: 100%;
  }
  .detail-table .p{
    font-size: 10px;
  }
</style>
