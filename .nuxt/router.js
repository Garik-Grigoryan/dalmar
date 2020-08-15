import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6eedf6e3 = () => interopDefault(import('../pages/aboutUs.vue' /* webpackChunkName: "pages/aboutUs" */))
const _6058a105 = () => interopDefault(import('../pages/account.vue' /* webpackChunkName: "pages/account" */))
const _6fe35a10 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _f4f7b84e = () => interopDefault(import('../pages/category/index.vue' /* webpackChunkName: "pages/category/index" */))
const _5cada922 = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _4d350d5f = () => interopDefault(import('../pages/deliveryCondition.vue' /* webpackChunkName: "pages/deliveryCondition" */))
const _5aaf131d = () => interopDefault(import('../pages/wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _579b89cc = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _5ce9f542 = () => interopDefault(import('../pages/dashboard/brands/index.vue' /* webpackChunkName: "pages/dashboard/brands/index" */))
const _04be67dc = () => interopDefault(import('../pages/dashboard/categories/index.vue' /* webpackChunkName: "pages/dashboard/categories/index" */))
const _c95e62f4 = () => interopDefault(import('../pages/dashboard/login.vue' /* webpackChunkName: "pages/dashboard/login" */))
const _750de3d5 = () => interopDefault(import('../pages/dashboard/menu/index.vue' /* webpackChunkName: "pages/dashboard/menu/index" */))
const _0306981a = () => interopDefault(import('../pages/dashboard/products/index.vue' /* webpackChunkName: "pages/dashboard/products/index" */))
const _00efd5ac = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _454e3510 = () => interopDefault(import('../pages/dashboard/brands/new.vue' /* webpackChunkName: "pages/dashboard/brands/new" */))
const _346c7fe0 = () => interopDefault(import('../pages/dashboard/categories/new.vue' /* webpackChunkName: "pages/dashboard/categories/new" */))
const _1365ade8 = () => interopDefault(import('../pages/dashboard/products/new.vue' /* webpackChunkName: "pages/dashboard/products/new" */))
const _6d55d675 = () => interopDefault(import('../pages/dashboard/brands/edit/_id.vue' /* webpackChunkName: "pages/dashboard/brands/edit/_id" */))
const _2af464b6 = () => interopDefault(import('../pages/dashboard/categories/edit/_id.vue' /* webpackChunkName: "pages/dashboard/categories/edit/_id" */))
const _0bc0249d = () => interopDefault(import('../pages/dashboard/products/edit/_id.vue' /* webpackChunkName: "pages/dashboard/products/edit/_id" */))
const _d77548ec = () => interopDefault(import('../pages/brand/_id.vue' /* webpackChunkName: "pages/brand/_id" */))
const _09696efe = () => interopDefault(import('../pages/category/_id.vue' /* webpackChunkName: "pages/category/_id" */))
const _67c2c6a2 = () => interopDefault(import('../pages/product/_name.vue' /* webpackChunkName: "pages/product/_name" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutUs",
    component: _6eedf6e3,
    name: "aboutUs___am"
  }, {
    path: "/account",
    component: _6058a105,
    name: "account___am"
  }, {
    path: "/cart",
    component: _6fe35a10,
    name: "cart___am"
  }, {
    path: "/category",
    component: _f4f7b84e,
    name: "category___am"
  }, {
    path: "/dashboard",
    component: _5cada922,
    name: "dashboard___am"
  }, {
    path: "/deliveryCondition",
    component: _4d350d5f,
    name: "deliveryCondition___am"
  }, {
    path: "/wishlist",
    component: _5aaf131d,
    name: "wishlist___am"
  }, {
    path: "/auth/login",
    component: _579b89cc,
    name: "auth-login___am"
  }, {
    path: "/dashboard/brands",
    component: _5ce9f542,
    name: "dashboard-brands___am"
  }, {
    path: "/dashboard/categories",
    component: _04be67dc,
    name: "dashboard-categories___am"
  }, {
    path: "/dashboard/login",
    component: _c95e62f4,
    name: "dashboard-login___am"
  }, {
    path: "/dashboard/menu",
    component: _750de3d5,
    name: "dashboard-menu___am"
  }, {
    path: "/dashboard/products",
    component: _0306981a,
    name: "dashboard-products___am"
  }, {
    path: "/en/",
    component: _00efd5ac,
    name: "index___en"
  }, {
    path: "/en/aboutUs",
    component: _6eedf6e3,
    name: "aboutUs___en"
  }, {
    path: "/en/account",
    component: _6058a105,
    name: "account___en"
  }, {
    path: "/en/cart",
    component: _6fe35a10,
    name: "cart___en"
  }, {
    path: "/en/category",
    component: _f4f7b84e,
    name: "category___en"
  }, {
    path: "/en/dashboard",
    component: _5cada922,
    name: "dashboard___en"
  }, {
    path: "/en/deliveryCondition",
    component: _4d350d5f,
    name: "deliveryCondition___en"
  }, {
    path: "/en/wishlist",
    component: _5aaf131d,
    name: "wishlist___en"
  }, {
    path: "/ru/",
    component: _00efd5ac,
    name: "index___ru"
  }, {
    path: "/ru/aboutUs",
    component: _6eedf6e3,
    name: "aboutUs___ru"
  }, {
    path: "/ru/account",
    component: _6058a105,
    name: "account___ru"
  }, {
    path: "/ru/cart",
    component: _6fe35a10,
    name: "cart___ru"
  }, {
    path: "/ru/category",
    component: _f4f7b84e,
    name: "category___ru"
  }, {
    path: "/ru/dashboard",
    component: _5cada922,
    name: "dashboard___ru"
  }, {
    path: "/ru/deliveryCondition",
    component: _4d350d5f,
    name: "deliveryCondition___ru"
  }, {
    path: "/ru/wishlist",
    component: _5aaf131d,
    name: "wishlist___ru"
  }, {
    path: "/dashboard/brands/new",
    component: _454e3510,
    name: "dashboard-brands-new___am"
  }, {
    path: "/dashboard/categories/new",
    component: _346c7fe0,
    name: "dashboard-categories-new___am"
  }, {
    path: "/dashboard/products/new",
    component: _1365ade8,
    name: "dashboard-products-new___am"
  }, {
    path: "/en/auth/login",
    component: _579b89cc,
    name: "auth-login___en"
  }, {
    path: "/en/dashboard/brands",
    component: _5ce9f542,
    name: "dashboard-brands___en"
  }, {
    path: "/en/dashboard/categories",
    component: _04be67dc,
    name: "dashboard-categories___en"
  }, {
    path: "/en/dashboard/login",
    component: _c95e62f4,
    name: "dashboard-login___en"
  }, {
    path: "/en/dashboard/menu",
    component: _750de3d5,
    name: "dashboard-menu___en"
  }, {
    path: "/en/dashboard/products",
    component: _0306981a,
    name: "dashboard-products___en"
  }, {
    path: "/ru/auth/login",
    component: _579b89cc,
    name: "auth-login___ru"
  }, {
    path: "/ru/dashboard/brands",
    component: _5ce9f542,
    name: "dashboard-brands___ru"
  }, {
    path: "/ru/dashboard/categories",
    component: _04be67dc,
    name: "dashboard-categories___ru"
  }, {
    path: "/ru/dashboard/login",
    component: _c95e62f4,
    name: "dashboard-login___ru"
  }, {
    path: "/ru/dashboard/menu",
    component: _750de3d5,
    name: "dashboard-menu___ru"
  }, {
    path: "/ru/dashboard/products",
    component: _0306981a,
    name: "dashboard-products___ru"
  }, {
    path: "/en/dashboard/brands/new",
    component: _454e3510,
    name: "dashboard-brands-new___en"
  }, {
    path: "/en/dashboard/categories/new",
    component: _346c7fe0,
    name: "dashboard-categories-new___en"
  }, {
    path: "/en/dashboard/products/new",
    component: _1365ade8,
    name: "dashboard-products-new___en"
  }, {
    path: "/ru/dashboard/brands/new",
    component: _454e3510,
    name: "dashboard-brands-new___ru"
  }, {
    path: "/ru/dashboard/categories/new",
    component: _346c7fe0,
    name: "dashboard-categories-new___ru"
  }, {
    path: "/ru/dashboard/products/new",
    component: _1365ade8,
    name: "dashboard-products-new___ru"
  }, {
    path: "/en/dashboard/brands/edit/:id?",
    component: _6d55d675,
    name: "dashboard-brands-edit-id___en"
  }, {
    path: "/en/dashboard/categories/edit/:id?",
    component: _2af464b6,
    name: "dashboard-categories-edit-id___en"
  }, {
    path: "/en/dashboard/products/edit/:id?",
    component: _0bc0249d,
    name: "dashboard-products-edit-id___en"
  }, {
    path: "/ru/dashboard/brands/edit/:id?",
    component: _6d55d675,
    name: "dashboard-brands-edit-id___ru"
  }, {
    path: "/ru/dashboard/categories/edit/:id?",
    component: _2af464b6,
    name: "dashboard-categories-edit-id___ru"
  }, {
    path: "/ru/dashboard/products/edit/:id?",
    component: _0bc0249d,
    name: "dashboard-products-edit-id___ru"
  }, {
    path: "/dashboard/brands/edit/:id?",
    component: _6d55d675,
    name: "dashboard-brands-edit-id___am"
  }, {
    path: "/dashboard/categories/edit/:id?",
    component: _2af464b6,
    name: "dashboard-categories-edit-id___am"
  }, {
    path: "/dashboard/products/edit/:id?",
    component: _0bc0249d,
    name: "dashboard-products-edit-id___am"
  }, {
    path: "/en/brand/:id?",
    component: _d77548ec,
    name: "brand-id___en"
  }, {
    path: "/en/category/:id",
    component: _09696efe,
    name: "category-id___en"
  }, {
    path: "/en/product/:name?",
    component: _67c2c6a2,
    name: "product-name___en"
  }, {
    path: "/ru/brand/:id?",
    component: _d77548ec,
    name: "brand-id___ru"
  }, {
    path: "/ru/category/:id",
    component: _09696efe,
    name: "category-id___ru"
  }, {
    path: "/ru/product/:name?",
    component: _67c2c6a2,
    name: "product-name___ru"
  }, {
    path: "/brand/:id?",
    component: _d77548ec,
    name: "brand-id___am"
  }, {
    path: "/category/:id",
    component: _09696efe,
    name: "category-id___am"
  }, {
    path: "/product/:name?",
    component: _67c2c6a2,
    name: "product-name___am"
  }, {
    path: "/",
    component: _00efd5ac,
    name: "index___am"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
