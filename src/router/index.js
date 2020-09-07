import Vue from 'vue';
import Router from 'vue-router';
import homePage from '@/components/homePage';
import helloWorld from '@/components/helloWorld';
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'homePage',
    component: homePage
  },{
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: helloWorld
  }]
});
