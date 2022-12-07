import { createRouter, createWebHistory } from 'vue-router'

const routes=[
{
  path: '/',
  name: 'home',
  component: ()=> import ('@/views/Home.vue'),
  meta : {
    title : 'Home | Helium Plus'
  }
},
{
  path: '/single',
  name: 'single-page',
  component: ()=> import ('../views/single.vue'),
  meta : {
    title : 'Single | Helium Plus'
  }
},
{
  path: '/login',
  name: 'login',
  component: ()=> import ('../views/login.vue'),
  meta : {
    title : 'login | Helium Plus'
  }
},
{
  path: '/Signup',
  name: 'Signup',
  component: ()=> import ('../views/Signup.vue'),
  meta : {
    title : 'signup | Helium Plus'
  }
},
{
  path: '/Signup-2',
  name: 'Signup-2',
  component: ()=> import ('../views/Signup-2.vue'),
  meta : {
    title : 'signup | Helium Plus'
  }
},
{
  path: '/Signup-successful',
  name: 'Signup-successful',
  component: ()=> import ('../views/Signup-successful.vue'),
  meta : {
    title : 'Signup-successful | Helium Plus'
  }
},
{
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: ()=> import ('@/views/Not-Found.vue'),
  meta : {
    title : '404 | Helium Plus'
  }
},
{
  path: '/profile',
  name: 'profile',
  component: ()=> import('@/views/Profile.vue'),
  meta : {
    title : 'profile | Helium Plus'
  }
  },
  {
  path: '/story-writing',
  name: 'story-writing',
  component: ()=> import('@/views/StoryWriting.vue'),
  meta : {
    title : 'Story-writing | Helium Plus'
  }
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// guard
const authenticated = true;
router.beforeEach((to,from) => {
  if(to.name === 'panel'){
    if (authenticated) return true;
    return {name: 'terms'};
  }
});

router.afterEach((to)=> {
  const title = to.meta?.title;
  if(!title) return ;
  document.title=title;
});

export default router;
