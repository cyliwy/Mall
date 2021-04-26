<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="moddle">
        购物街
      </div>
    </nav-bar>

    <tab-control :tab-controls="tabControls"
                 class="tab-control"
                 @getTitle="getTitle"
                 ref="tabControl_1"
                 v-show="isTabControlShow"/>

    <scroll class="content" ref="scroll"
            :probeType="3"
            @contextScroll = "contextScroll"
            :pull-up-load="true"
            @pullingUp="pullingUp">
      <home-swiper
        :banners="banners"
        @imageLoad="imageLoad"/>
      <recommend-view :recommends="command"/>
      <feature-view/>
      <tab-control :tab-controls="tabControls"
                   @getTitle="getTitle"
                   ref="tabControl_2"/>
      <goods-list :goods="showGoods" class="goods-list"/>
    </scroll>

    <back-top @click.native="backTop" v-show="judgeShowBackTop"/>
  </div>

</template>

<script>
  import NavBar from "../../components/common/navigrationBar/NavBar";
  import HomeSwiper from "./childComponents/HomeSwiper";
  import RecommendView from "./childComponents/RecommendView";

  import FeatureView from "./childComponents/FeatureView";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  // import BackTop from "../../components/content/backTop/BackTop";

  import { homeData , homeGoods } from "../../network/home";
  import {debounce} from "../../common/utils";
  import {itemImage,backTop} from "../../common/mixin";

  export default {
    name: "Home",
    mixins:[itemImage,backTop],
    data(){
      return{
        banners:[],
        command:[],
        tabControls:[],
        goods:{
          'pop':{page: 0 , list: []},
          'sell':{page: 0 , list: []},
          'new':{page: 0 , list: []}
        },
        currentType : 'pop',
        // judgeShowBackTop : false,
        tabOffSetTop : 0,
        // fixed : false
        isTabControlShow : false,
        saveActiveY : 0
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      // BackTop

    },
    created() {
      homeData('swiper')
        .then(result => {
          // console.log(result);
          // this.list = result;
          this.banners = result.data.banner.list;
          this.command = result.data.recommend.list;
        })
        .catch(err => {
          console.log(err);
        });

      homeData('tabControl')
        .then(result =>{
          // console.log(result);
          this.tabControls = result.data.filter.list;
        });
      this.homeGoods('pop');
      this.homeGoods('sell');
      this.homeGoods('new');
    },
    destroyed() {
      console.log('destroy');
    },
    activated() {
      // console.log('actived');
      this.$refs.scroll.scroll.refresh();
      this.$refs.scroll.scrollTo(0,this.saveActiveY,0);
    },
    deactivated() {
      // console.log('deactived');
      // console.log(this.$refs.scroll.getY());
      this.saveActiveY = this.$refs.scroll.getY();
    },
    mounted() {
      this.getTitle(0);
    },
    // mounted() {
    //   //监听图片的加载
    //   const refresh = debounce(this.$refs.scroll.imageLoads,500);
    //   this.$bus.$on('imageLoad',() => {
    //     refresh();
    //   })
    // },
    methods:{
      getTitle(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'sell'
            break
          case 2:
            this.currentType = 'new'
            break
        }
        if (this.$refs.tabControl_1 && this.$refs.tabControl_2 !== null){
          this.$refs.tabControl_1.activeItem = index;
          this.$refs.tabControl_2.activeItem = index;
        }
        // this.$refs.tabControl_1.activeItem = index;
        // this.$refs.tabControl_2.activeItem = index;
        //再次点击控制按钮时刷新高度
        this.$refs.scroll.scroll.refresh();
        this.$refs.scroll.scrollTo(0,-546,0);

      },
      homeGoods(type){
        const page = this.goods[type].page + 1;
        homeGoods(type,page)
          .then(result => {
            // console.log(result);
            this.goods[type].list.push(...result.data.list);
            this.goods[type].page +=1;
          })
      },
      // backTop() {
      //   this.$refs.scroll.scrollTo(0,0,500);
      // },
      contextScroll(position){
        // this.judgeShowBackTop = -position.y > 1000;
        this.listenShowBackTop(position)
        this.isTabControlShow = -position.y > 546;

      },
      pullingUp(){
        this.homeGoods(this.currentType);
        this.$refs.scroll.finishPullUp();
      },
      imageLoad(){
        // console.log(this.$refs.tabControl.$el.offsetTop);
        this.tabOffSetTop = this.$refs.tabControl_2.$el.offsetTop;
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    }
  }
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    /*height: 100vh;*/
    height: 100vh;
    position: relative;
  }
  .nav-bar{
    /*background-color: #ff8198;*/
    background-color:var(--color-tint) ;
    color: #eeeeee;
    text-align: center;
    /*position: fixed;*/
    /*left: 0;*/
    /*top: 0;*/
    /*right: 0;*/
    /*z-index: 9;*/
  }
  .tab-control{
    /*position: sticky;*/
    position: relative;
    z-index: 9;
  }
  .content{
    /*height: 535px;*/
    /*overflow: hidden;*/

    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/

    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /*.fixed{*/
  /*  position: fixed;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  top: 44px;*/
  /*  bottom: 0;*/
  /*}*/
</style>
