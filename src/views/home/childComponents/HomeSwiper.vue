<template>
  <div id="homeSwiper">
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="图片" @load="imageLoad"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
  export default {
    name: "HomeSwiper",
    data(){
      return{
        isLoad : true
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      imageLoad(){
        if(this.isLoad){
          this.$emit('imageLoad');
          // console.log('图片成功');
          this.isLoad = false
        }
      }
    }
  }
</script>

<style scoped>

</style>
