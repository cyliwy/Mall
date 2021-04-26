import {ADD_COUNTER,ADD_GOOD} from "./mutatons-type";

export default {
  addCart(context,payload){
    return new Promise((resolve,reject) => {
      let oldGood = null;
      oldGood = context.state.cartList.find(function (item) {
        return item.id === payload.id;
      });
      if(oldGood){
        context.commit(ADD_COUNTER,oldGood);
        resolve('商品数量+1');
      }
      else {
        payload.count = 1;
        context.commit(ADD_GOOD,payload);
        // context.state.cartList.push(payload);
        resolve('添加了新的商品');
      }
    })
  }
}
