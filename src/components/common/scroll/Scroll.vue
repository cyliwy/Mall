<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return{
        scroll: null,
        message:'dada'
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        click:true
      });
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll',(position) =>{
          // console.log(position);
          this.$emit('contextScroll',position);
        });
      }
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',() =>{
          // console.log('加载更多');
          this.$emit('pullingUp');
        });
      }
    },
    methods:{
      scrollTo(x,y,time=500) {
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
      },
      imageLoads(){
        // console.log('-----');
        this.scroll && this.scroll.refresh && this.scroll.refresh();
      },
      getY(){
        // console.log(this.scroll.y);
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
