<template>
    <swiper class="detailSwiper">
      <swiper-item v-for="(item,index) in detailSwiper" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from '../../../components/common/swiper'
  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      detailSwiper: {
        type : Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.detailSwiper{
  height: 300px;
  overflow: hidden;
}
</style>
