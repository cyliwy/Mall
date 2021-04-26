import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:5000
  })
  //拦截器
  instance.interceptors.request.use(config => {
    // console.log('拦截成功');
    return config
  },error => {
    console.log('拦截失败');
    console.log(error);
  });

  instance.interceptors.response.use(result => {
    // console.log('响应拦截成功');
    return result.data
  },error => {
    console.log('响应失败');
    console.log(error);
  })

  return instance(config)
}
