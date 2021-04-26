<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @btnClick="btnClick" ref="navBar"/>

    <scroll class="scroll" ref="scroll" @contextScroll="contextScroll" :probe-type="3">
        <detail-swiper :detail-swiper="topImages" ref="swiper"/>
        <goods-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :detail-info="detailInfo" :item-tags="itemTags" @imageOver="imageOver"/>
        <detail-params-info :params="params" ref="paramsInfo"/>
        <detail-commend-info :commend-info="commend" ref="commendInfo"/>
        <goods-list :goods="recommends" ref="GoodsList"/>
    </scroll>
    <back-top @click.native="backTop" v-show="judgeShowBackTop"/>
    <detail-bottom-bar ref="bottomBar" @inCart="joinCart"/>
<!--    <toast :message="message" :is-show="isShow"/>-->
  </div>
</template>

<script>
  import DetailNavBar from "./detailsChildren/DetailNavBar";
  import {getDetailData,Goods,Shop,params,getCommends} from "../../network/details";
  import DetailSwiper from "./detailsChildren/DetailSwiper";
  import GoodsBaseInfo from "./detailsChildren/GoodsBaseInfo";
  import DetailShopInfo from "./detailsChildren/DetailShopInfo";
  import Scroll from "../../components/common/scroll/Scroll";
  import DetailGoodsInfo from "./detailsChildren/DetailGoodsInfo";
  import DetailParamsInfo from "./detailsChildren/DetailParamsInfo";
  import DetailCommendInfo from "./detailsChildren/DetailCommendInfo";
  import GoodsList from "../../components/content/goods/GoodsList";
  import {itemImage,backTop} from '../../common/mixin';
  import {debounce} from "../../common/utils";
  import DetailBottomBar from "./detailsChildren/DetailBottomBar";
  import {mapActions} from 'vuex';
  // import Toast from "../../components/common/Toast/Toast";
  export default {
    name: "Detail",
    mixins:[itemImage,backTop],
    data(){
      return{
        iid : null,
        topImages:[],
        goods : {},
        shop : {},
        detailInfo : {},
        itemTags : [],
        params : {},
        commend : [],
        recommends : [],
        themeTopY : [],
        getThemeTopY : null,
        currentIndex : 0,
        // isShow : false,
        // message : ''
      }
    },
    components:{
      DetailNavBar,
      DetailSwiper,
      GoodsBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommendInfo,
      GoodsList,
      DetailBottomBar,
      // Toast
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetailData(this.iid).then((res) => {
        // console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        // console.log(this.topImages);
        //获取商铺信息
        this.goods = new Goods(data.itemInfo , data.columns , data.shopInfo.services);
        //商铺详情
        this.shop = new Shop(data.shopInfo);
        //获取商品信息
        this.detailInfo = data.detailInfo;
        this.itemTags = data.itemTags;
        //获得参数
        this.params = new params(data.itemParams.info,data.itemParams.rule);
        //获得评论
        this.commend = data.rate.list;
        // console.log(this.commend);

      });
      getCommends().then((res) => {
        // console.log(res);
        this.recommends = res.data.list;
      });
      //进行防抖操作
      this.getThemeTopY = debounce(() => {
        this.themeTopY = [];
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.paramsInfo.$el.offsetTop);
        this.themeTopY.push(this.$refs.commendInfo.$el.offsetTop);
        this.themeTopY.push(this.$refs.GoodsList.$el.offsetTop);
        this.themeTopY.push(Number.MAX_VALUE);
        // console.log(this.themeTopY);
      },100);
    },
    mounted() {
      // this.themeTopY = []
      // this.themeTopY.push(0);
      // this.themeTopY.push(this.$refs.paramsInfo.$el.offsetTop);
      // this.themeTopY.push(this.$refs.commendInfo.$el.offsetTop);
      // this.themeTopY.push(this.$refs.GoodsList.$el.offsetTop);
      // console.log(this.themeTopY);
    },
    methods: {
      ...mapActions(['addCart']),
      imageOver(){
        // this.$refs.scroll.imageLoads();
        // this.$refs.scroll.scroll.refresh();
        this.refresh();
        this.getThemeTopY();
        // this.themeTopY = [];
        // this.themeTopY.push(0);
        // this.themeTopY.push(this.$refs.paramsInfo.$el.offsetTop);
        // this.themeTopY.push(this.$refs.commendInfo.$el.offsetTop);
        // this.themeTopY.push(this.$refs.GoodsList.$el.offsetTop);
        // console.log(this.themeTopY);
      },
      btnClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopY[index],200);
        // console.log(index);
      },
      contextScroll(position){
        // console.log(position);
        let positionY = -position.y
        let length = this.themeTopY.length;
        // for(let i = 0; i < length; i++){
          // if(this.currentIndex !== i && (i < length-1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1])||(i === length-1 && positionY >= this.themeTopY[i])){
          //   this.currentIndex = i;
          //   this.$refs.navBar.currentIndex = this.currentIndex;
          //   // console.log(i);
          // }
        // }
        for(let i =0 ;i < length -1; i++){
          if(this.currentIndex !==i && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1]){
              this.currentIndex = i;
              this.$refs.navBar.currentIndex = this.currentIndex;
          }
        }
        this.listenShowBackTop(position);
      },
      joinCart(){
        let cartObj = {};
        cartObj.title = this.goods.title;
        cartObj.desc = this.goods.desc;
        cartObj.realPrice = this.goods.realPrice;
        cartObj.img = this.goods.topImage;
        cartObj.id = this.iid;
        // this.$store.dispatch('addCart',cartObj).then(result => {
        //   console.log(result);
        // })
        this.addCart(cartObj).then(result => {
          // this.isShow = true;
          // this.message = result;
          // setTimeout(() => {
          //   this.message = ''
          //   this.isShow = false;
          // },2000);
          this.$toast.show(result , 1500);
        })

        // this.$store.commit('addCart',cartObj);
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 12;
    background-color: #ffffff;
    height: 100vh;
  }
  .scroll{
    height:calc(100% - (44px + 49px));
    overflow: hidden;
  }
</style>
