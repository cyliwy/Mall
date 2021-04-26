<template>
  <div class="goods-item" @click="goodItemDetail">
    <img :src="showimage" alt="图片" @load="imageLoaded">
    <div class="goods-info">
      <p>{{gooditem.title}}</p>
      <span class="price">{{gooditem.price}}</span>
      <span class="collect">{{gooditem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodItem",
    data(){
      return{
        iid : null
      }
    },
    props:{
      gooditem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showimage(){
        return this.gooditem.img || this.gooditem.image  || this.gooditem.show.img
      }
    },
    methods:{
      imageLoaded(){
        //根据路由
        // if(this.$route.path.indexOf('/home') !== -1){
        //   this.$bus.$emit('homeImage');
        // }else if(this.$route.path.indexOf('/detail') !== -1){
        //   this.$bus.$emit('detailImage');
        // }
        // console.log('图片加载完成');
        this.$bus.$emit('imageLoad');
      },
      goodItemDetail(){
        this.iid = this.gooditem.iid;
        this.$router.push('/detail' + this.iid);
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 45%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
