<template>
  <div class="tabControl">
    <div v-for="(item,index) in tabControls"
         @click="activeStyle(index)"
         :class="{active : index===activeItem}">
      <span>
        {{item.title}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      tabControls:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        activeItem:0
      }
    },
    methods:{
      activeStyle(index){
        this.activeItem = index;
        this.$emit('getTitle',index);
        console.log(index);
      }
    }
  }
</script>

<style scoped>
  .tabControl{
    display: flex;
    font-size: 15px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tabControl div{
    flex: 1;
    /*border-bottom: 2px solid palevioletred;*/
  }
  .tabControl div span{
    /*border-bottom: 2px solid var(--color-tint);*/
    padding-bottom: 5px;
  }
  .tabControl div span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 2px solid var(--color-tint);
  }
</style>
