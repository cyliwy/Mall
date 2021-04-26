import vueRouter from 'vue-router';
import vue from 'vue';

const Home = () =>  import('../views/home/Home');
const cart = () =>  import('../views/cart/Cart');
const category = () =>  import('../views/category/Category');
const Profile = () =>  import('../views/profile/Profile');
const Detail = () => import('../views/details/Detail');

vue.use(vueRouter);

const router = new vueRouter({
  routes : [
    {
      path : '',
      redirect : '/home'
    },
    {
      path : '/home',
      component : Home
    },
    {
      path : '/category',
      component : category
    },
    {
      path : '/cart',
      component : cart
    },
    {
      path : '/profile',
      component : Profile
    },
    {
      path: '/detail:iid',
      component : Detail
    }
  ],
  mode : "history"
})

export default router
