import {debounce} from "./utils";
import BackTop from "../components/content/backTop/BackTop";
import {POP,NEW,SELL} from "./const";

export const itemImage = {
  data(){
    return{
      itemImageListener : null,
      refresh : null
    }
  },
  mounted(){
    this.refresh = debounce(this.$refs.scroll.imageLoads,500);
    this.itemImageListener = () => {
      this.refresh();
    }
    this.$bus.$on('imageLoad',this.itemImageListener);
    // console.log('mixin');
  }
}
export const backTop ={
  data(){
    return{
      judgeShowBackTop : false,
    }
  },
  components:{
    BackTop
  },
  methods:{
    backTop() {
      // console.log('totop');
      this.$refs.scroll.scrollTo(0,0,500);
    },
    listenShowBackTop(position){
      this.judgeShowBackTop = -position.y > 1000;

    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
