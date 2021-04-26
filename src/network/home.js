import {request} from './request'
// request({
//   url:'/home/data',
//   params:{
//     type:'home',
//     page:1
//   }
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })
export function homeData(judge) {
  if(judge == 'swiper'){
    return request({
      url:'/home/multidata'
    })

  };
  if (judge == 'tabControl'){
    return request({
      url:'/home/data',
      params:{
        type:'sell',
        page:1
      }
    })
  }
}
export function homeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
