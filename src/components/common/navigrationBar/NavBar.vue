<template>
  <div class="items nav-bar">
    <div class="item left-style">
      <slot name="left"></slot>
    </div>
    <div class="item moddle-style">
      <slot name="moddle"></slot>
    </div>
    <div class="item right-style">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    height: 44px;
    width: 100%;
  }
  .items{
    display: flex;
    justify-content: space-evenly;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }
  .left-style{
    width: 20%;
    /*height: 100%;*/
    /*background-color: #eeeeee;*/
  }
  .moddle-style{
    width: 60%;
    /*height: 100%;*/
    /*background-color: cadetblue;*/
  }
  .right-style{
    width: 20%;
    /*height: 100%;*/
    /*background-color: mediumseagreen;*/
  }
</style>
