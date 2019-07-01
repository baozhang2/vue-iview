import Vue from "vue";
import Router from "vue-router";
import iView from "iview";

// 引入路由配置模块
import organization from "./organization";
import achievements from './achievements'
import certification from './certification'
import managementSettings from './managementSettings'
Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "/home",
      component: () => import("views/index.vue"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("views/userPanel/UserPanel.vue")
        },
        organization, // 组织机构路由模块
        achievements, // 成果路由模块
        certification, // 认证路由模块
        managementSettings // 管理模块
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("views/Login.vue")
    },
    {
      path: "*",
      redirect: "/home"
    }
  ]
});

// 全局守卫
/* eslint-disable */
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.accessToken ? true : false; // 获取token
  const LoginFlag = localStorage.isLogin == 'true' ? true : false;  // 获取登录状态

  if (to.path == "/login") {
    next();
  } else {
    if (isLogin && LoginFlag) {
      iView.LoadingBar.start();
      next();
      return true;
    }
    router.push('/login');
    alert("请登录！！！");
  }
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});

export default router;
