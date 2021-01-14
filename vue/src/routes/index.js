import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../views/Index.vue';
import News from '../views/News.vue';
import Jobs from '../views/Jobs.vue';
import Ask from '../views/Ask.vue';
import User from '../views/User.vue';
import Inverstments from '../views/Investments.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/ask',
      name: 'ask',
      component: Ask
    },
    {
      path: '/user/:id',
      component: User
    },
    {
      path: '/investments',
      component: Inverstments
    }
  ]
})

export default router;