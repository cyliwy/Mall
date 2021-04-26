<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="moddle">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories"
                @selectItem="selectItem"/>

      <scroll id="tab-content"
              :data="[categoryData]"
              ref="scroll">
        <div>
          <tab-control :tabControls="[{title : '综合'} ,{title : '新品'} , {title : '销量'}]"
                       @itemClick="tabClick"/>

          <tab-content-category :subcategories="showSubcategory"/>

          <goods-list :goods="showCategoryDetail"/>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navigrationBar/NavBar";
  import TabMenu from "./childComps/TabMenu";
  import Scroll from "../../components/common/scroll/Scroll";
  import TabControl from "../../components/content/tabControl/TabControl";
  // import TabContentDetail from "./childComps/TabContentDetail";
  import TabContentCategory from "./childComps/TabContentCategory";
  import GoodsList from "../../components/content/goods/GoodsList";

  import {category,getSubcategory,getCategoryDetail} from "../../network/category";
  import {POP,NEW,SELL} from "../../common/const";
  import {tabControlMixin,itemImage} from "../../common/mixin";

  export default {
    name: "CateGory",
    components : {
      Scroll,
      NavBar,
      TabMenu,
      TabControl,
      // TabContentDetail,
      TabContentCategory,
      GoodsList
    },
    mixins: [tabControlMixin,itemImage],
    data(){
      return{
        categories : [],
        categoryData : {},
        currentIndex : -1
      }
    },
    created() {
      // 1.请求分类数据
      this._getCategory()

      // 2.监听图片加载完成
      this.$bus.$on('imgLoad', () => {
        this.$refs.scroll.refresh()
      })
    },
    activated() {
      this.$refs.scroll.imageLoads();
    },
    computed: {
      showSubcategory() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
        if (this.currentIndex === -1) return []
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods:{
      _getCategory(){
        category().then(res => {
          // console.log(res);
          this.categories = res.data.category.list;
          // console.log(this.categories);
          //初始化子类别数据
          for(let i = 0; i < this.categories.length; i++){
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          this._getSubcategories(0)
        })
      },
      _getSubcategories(index) {
        this.currentIndex = index;
        const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          this._getCategoryDetail(POP)
          this._getCategoryDetail(SELL)
          this._getCategoryDetail(NEW)
        })
      },
      _getCategoryDetail(type) {
        // 1.获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
        getCategoryDetail(miniWallkey, type).then(res => {
          // 3.将获取的数据保存下来
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      },
      /**
       * 事件响应相关的方法
       */
      selectItem(index) {
        this._getSubcategories(index)
      }

    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;
    background-color: #ffffff;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
    text-align: center;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
  }

  #tab-content {
    height: calc(100vh - 93px);
    overflow: hidden;
    flex: 1;
  }
  .control{
    position: relative;
    z-index: 1;
  }
</style>

