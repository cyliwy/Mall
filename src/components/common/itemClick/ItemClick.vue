<template>
  <div class="tick" :class="{show : isShow}">
    <img src="../../../assets/img/cart/tick.svg" alt="图片">
  </div>
</template>

<script>
  export default {
    name: "ItemClick",
    props: {
      isShow: {
        type: Boolean ,
        default: false
      }
    }
  }
</script>

<style scoped>
  .tick{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #a3a3a5;
    margin-right: 3px;
  }
  .show{
    background-color: #ff8198;
  }
</style>
