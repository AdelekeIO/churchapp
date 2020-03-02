/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: '/app',
      meta: {
        rule: 'public'
      },
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/',
          name: 'home',
          meta: {
            breadcrumb: [
              { title: 'Home', active: true, url: '/app' },
            ],
            pageTitle: 'Home',
            rule: 'public'
          },
          component: () => import('./views/Home.vue')
        },
        {
          path: '/app/profile',
          name: 'profile',
          meta: {
            breadcrumb: [
              { title: 'Profile', active: true, url: '/app/profile' },
            ],
            pageTitle: 'Profile',
            rule: 'public'
          },
          component: () => import('./views/pages/dashboard/Profile.vue')
        },
        {
          path: '/app/permission',
          name: 'permission',
          meta: {
            breadcrumb: [
              { title: 'Permission', active: true, url: '/app/permission' },
            ],
            pageTitle: 'Permission',
            rule: 'public'
          },
          component: () => import('./views/pages/dashboard/Permission.vue')
        },
        {
          path: '/app/page2',
          name: 'page-2',
          meta: {
            rule: 'editor'
          },
          component: () => import('./views/Page2.vue')
        },
      ],
    },
    // =============================================================================
    // Auth Layouts
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/',
          name: 'page-login',
          alias: '/login',
          meta: {
            rule: 'guest'
          },
          component: () => import('@/views/pages/auth/Login.vue')
        },
        {
          path: '/forgot-password',
          name: 'page-forgot-password',
          meta: {
            rule: 'guest'
          },
          component: () => import('@/views/pages/auth/ForgotPassword.vue')
        },
        {
          path: '/reset-password',
          name: 'page-reset-password',
          meta: {
            rule: 'guest'
          },
          component: () => import('@/views/pages/auth/ResetPassword.vue')
        },
        {
          path: '/signup',
          name: 'page-signup',
          meta: {
            rule: 'guest'
          },
          component: () => import('@/views/pages/auth/SignUp.vue')
        },
        {
          path: '/church-confirm',
          name: 'page-church-confirm',
          meta: {
            rule: 'guest'
          },
          component: () => import('@/views/pages/auth/ChurchConfirm.vue')
        },
        {
          path: '/user-confirm',
          name: 'page-user-confirm',
          meta: {
            rule: 'guest'
          },
          component: () => import('@/views/pages/auth/UserConfirm.vue')
        },
        {
          path: '/pricing',
          name: 'page-pricing',
          meta: {
            rule: 'guest'
          },
          component: () => import('@/views/pages/auth/Pricing.vue')
        },
        {
          path: '/church-details',
          name: 'page-church-details',
          meta: {
            rule: 'guest'
          },
          component: () => import('@/views/pages/auth/ChurchDetails.vue')
        },
        {
          path: '/auth-success',
          name: 'page-auth-success',
          meta: {
            rule: 'guest'
          },
          component: () => import('@/views/pages/auth/Success.vue')
        },
        {
          path: '/no-auth',
          name: 'no-auth',
          meta: {
            rule: 'public'
          },
          component: () => import('@/views/pages/auth/NotAuthorized.vue')
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          meta: {
            rule: 'public'
          },
          component: () => import('@/views/pages/Error404.vue')
        },
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "none";
  }
})

router.beforeEach((to, from, next) => {
  let userSession = store.getters.userSession;
  if (userSession) {
    if (to.path == "/" || to.path == "/login") {
      next("/app");
    } else {
      next()
    }
    // console.log(from, isReload)
  } else {
    if (to.path.indexOf("/app") > -1) {
      next("/login");
    } else {
      next();
    }
  }
});


export default router
