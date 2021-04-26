import {itemImage} from "../common/mixin";

export default  {
  goodLength(state){
    let finalNum = 0;
    for(let item of state.cartList){
      finalNum = finalNum + item.count;
    }
    return finalNum
  },
    getCartList(state){
    return state.cartList
  },
    getCounter(state){
      let counterArr = []
      let finalCount = 0
      counterArr = state.cartList.filter(item => {
      return item.isChecked
    }).forEach(each => {
      finalCount += each.count;
      })
      // for(let item of counterArr){
      //   finalCount += item.count;
      // }
      return finalCount
    }
}
