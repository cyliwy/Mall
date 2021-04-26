import {ADD_COUNTER,ADD_GOOD} from "./mutatons-type";

export default {
  [ADD_COUNTER](state,payload){
    payload.count += 1;
  },
  [ADD_GOOD](state,payload){
    payload.isChecked = true;
    state.cartList.push(payload);
  }
}
