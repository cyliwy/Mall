<template>
  <div class="toast" v-show="isShow">
    <div>
      {{message}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    // props: {
    //   isShow:{
    //     type: Boolean,
    //     default: false
    //   },
    //   message:{
    //     type: String,
    //     default: ''
    //   }
    // },
    data(){
      return{
        isShow : false,
        message : ''
      }
    },
    methods: {
      show(message='默认值',duration=2000){
        this.isShow = true;
        this.message = message;
        setTimeout(() => {
          this.message = ''
          this.isShow = false
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    font-size: 12px;
    text-align: center;
    left: calc(50% - 50px);
    top: calc(50% - 20px);
    color: #ffffff;
    width: 100px;
    height: 30px;
    line-height: 30px;
    background-color: rgba(0,0,0,0.5);
    z-index: 999;
    border-radius: 5px;
  }
</style>
