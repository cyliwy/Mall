<template>
  <div class="detail">
    <nav-bar>
      <div slot="left">
        <div class="back" @click="backButton"/>
      </div>
      <div slot="moddle" class="center">
        <div v-for="(item,index) in title"
             @click="actived(index)"
             :class="{highColor : currentIndex ===index}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navigrationBar/NavBar";
  export default {
    name: "detailNavBar",
    components:{
      NavBar
    },
    data(){
      return{
        title:['商品' , '参数' , '评论' , '推荐'],
        currentIndex : 0,
      }
    },
    methods:{
      backButton(){
        this.$router.back();
        // this.$router.go(-1);
      },
      actived(index){
        this.currentIndex = index;
        this.$emit('btnClick',this.currentIndex);
      }
    }
  }
</script>

<style scoped>
  .back{
    /*box-sizing: border-box;*/
    position: fixed;
    left: 18px;
    top: 12px;
    bottom: 0;
    right: 0;
    height: 15px;
    width: 15px;
    border: 2px solid #000000;
    border-top: hidden;
    border-right: hidden;
    transform: rotate(45deg);
  }
  .center{
    font-size: 12px;
    display: flex;
    justify-content: space-evenly;
  }
  .highColor{
    color: var(--color-high-text);
  }
</style>
