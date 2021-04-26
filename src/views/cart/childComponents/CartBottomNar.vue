<template>
  <div class="bottom">
    <div class="item-click">
      <item-click class="click" id="all" :is-show="isSelectAll"/>
      <label for="all"@click="allSelect">全选</label>
      <span class="every">合计：{{totalPrice}}</span>
    </div>
    <div class="right" @click="rightClick">
      <span>去计算({{getCounter}})</span>
    </div>
  </div>
</template>

<script>
  import ItemClick from "../../../components/common/itemClick/ItemClick";
  import {mapGetters} from 'vuex'
  export default {
    name: "CartBottomNar",
    components:{
      ItemClick
    },
    computed: {
      ...mapGetters(['getCartList','getCounter']),
      totalPrice(){
        // return this.$store.state.cartList;
        // return this.$store.getters.getCartList
        return this.getCartList.filter(item => item.isChecked)
          .reduce((preV,val) => {
          return preV + val.count * val.realPrice
        },0).toFixed(2)
      },
      isSelectAll(){
        if(this.getCartList.length === 0){return false}
        // else {
        //   if (this.getCartList.some(item => {
        //     if(item.isChecked === false){
        //       return true
        //     }
        //   }) ){
        //     return false
        //   }
        //   else return true
          return  !this.getCartList.find(item => {
            return  !item.isChecked
          })
      }
    },
    methods: {
      allSelect(){
        if(this.isSelectAll){
          this.getCartList.forEach(item => item.isChecked = false);
        }
        else {
          this.getCartList.forEach(item => item.isChecked = true);
        }
      },
      rightClick(){
        if(!this.isSelectAll){
          this.$toast.show('请先选择商品',1500);
        }
      }
    }
  }
</script>

<style scoped>
  .bottom{
    width: 100%;
    height: 44px;
    background-color: #a3a3a5;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .bottom .item-click{
    width: 50%;
    height: 44px;
    display: flex;
    align-items: center;
  }
  .bottom .item-click .every{
    margin-left: 16px;
  }
  .bottom .item-click .click{
    margin:0 5px;
  }
  .bottom .right{
    display: inline-block;
    width: 30%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #ff5777;
  }
</style>
