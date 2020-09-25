import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1c733412 = () => interopDefault(import('..\\pages\\aboutUs.vue' /* webpackChunkName: "pages_aboutUs" */))
const _707bd3ce = () => interopDefault(import('..\\pages\\account\\index.vue' /* webpackChunkName: "pages_account_index" */))
const _46dabc29 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _5b274b3c = () => interopDefault(import('..\\pages\\condition.vue' /* webpackChunkName: "pages_condition" */))
const _119574c7 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages_dashboard_index" */))
const _7e6cf18d = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages_payment" */))
const _f51d755a = () => interopDefault(import('..\\pages\\sales.vue' /* webpackChunkName: "pages_sales" */))
const _5dd17bce = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages_wishlist" */))
const _b990d3ce = () => interopDefault(import('..\\pages\\account\\orders.vue' /* webpackChunkName: "pages_account_orders" */))
const _6e3323c8 = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages_auth_login" */))
const _2807a20a = () => interopDefault(import('..\\pages\\dashboard\\brands\\index.vue' /* webpackChunkName: "pages_dashboard_brands_index" */))
const _6ad7c62b = () => interopDefault(import('..\\pages\\dashboard\\categories\\index.vue' /* webpackChunkName: "pages_dashboard_categories_index" */))
const _5ee888f1 = () => interopDefault(import('..\\pages\\dashboard\\components\\index.vue' /* webpackChunkName: "pages_dashboard_components_index" */))
const _4985d044 = () => interopDefault(import('..\\pages\\dashboard\\login.vue' /* webpackChunkName: "pages_dashboard_login" */))
const _3e3288c8 = () => interopDefault(import('..\\pages\\dashboard\\menu\\index.vue' /* webpackChunkName: "pages_dashboard_menu_index" */))
const _2c8cf842 = () => interopDefault(import('..\\pages\\dashboard\\orders\\index.vue' /* webpackChunkName: "pages_dashboard_orders_index" */))
const _5d13e0ae = () => interopDefault(import('..\\pages\\dashboard\\pages\\index.vue' /* webpackChunkName: "pages_dashboard_pages_index" */))
const _ae461dba = () => interopDefault(import('..\\pages\\dashboard\\products\\index.vue' /* webpackChunkName: "pages_dashboard_products_index" */))
const _7972afce = () => interopDefault(import('..\\pages\\dashboard\\regions\\index.vue' /* webpackChunkName: "pages_dashboard_regions_index" */))
const _93056280 = () => interopDefault(import('..\\pages\\dashboard\\subscribers.vue' /* webpackChunkName: "pages_dashboard_subscribers" */))
const _5a48d219 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _5ce58909 = () => interopDefault(import('..\\pages\\dashboard\\brands\\new.vue' /* webpackChunkName: "pages_dashboard_brands_new" */))
const _e9c5a78e = () => interopDefault(import('..\\pages\\dashboard\\categories\\new.vue' /* webpackChunkName: "pages_dashboard_categories_new" */))
const _283e959e = () => interopDefault(import('..\\pages\\dashboard\\products\\new.vue' /* webpackChunkName: "pages_dashboard_products_new" */))
const _3d9c229c = () => interopDefault(import('..\\pages\\dashboard\\regions\\new.vue' /* webpackChunkName: "pages_dashboard_regions_new" */))
const _18b055ce = () => interopDefault(import('..\\pages\\dashboard\\brands\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_brands_edit__id" */))
const _40f7576e = () => interopDefault(import('..\\pages\\dashboard\\categories\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_categories_edit__id" */))
const _044a440f = () => interopDefault(import('..\\pages\\dashboard\\components\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_components_edit__id" */))
const _1ee9797e = () => interopDefault(import('..\\pages\\dashboard\\products\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_products_edit__id" */))
const _25089728 = () => interopDefault(import('..\\pages\\dashboard\\regions\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_regions_edit__id" */))
const _39342f5e = () => interopDefault(import('..\\pages\\dashboard\\pages\\_id.vue' /* webpackChunkName: "pages_dashboard_pages__id" */))
const _e9518448 = () => interopDefault(import('..\\pages\\brand\\_id.vue' /* webpackChunkName: "pages_brand__id" */))
const _ede7657a = () => interopDefault(import('..\\pages\\category\\_id.vue' /* webpackChunkName: "pages_category__id" */))
const _6e00bb38 = () => interopDefault(import('..\\pages\\product\\_name.vue' /* webpackChunkName: "pages_product__name" */))

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
    component: _1c733412,
    name: "aboutUs___am"
  }, {
    path: "/account",
    component: _707bd3ce,
    name: "account___am"
  }, {
    path: "/cart",
    component: _46dabc29,
    name: "cart___am"
  }, {
    path: "/condition",
    component: _5b274b3c,
    name: "condition___am"
  }, {
    path: "/dashboard",
    component: _119574c7,
    name: "dashboard___am"
  }, {
    path: "/payment",
    component: _7e6cf18d,
    name: "payment___am"
  }, {
    path: "/sales",
    component: _f51d755a,
    name: "sales___am"
  }, {
    path: "/wishlist",
    component: _5dd17bce,
    name: "wishlist___am"
  }, {
    path: "/account/orders",
    component: _b990d3ce,
    name: "account-orders___am"
  }, {
    path: "/auth/login",
    component: _6e3323c8,
    name: "auth-login___am"
  }, {
    path: "/dashboard/brands",
    component: _2807a20a,
    name: "dashboard-brands___am"
  }, {
    path: "/dashboard/categories",
    component: _6ad7c62b,
    name: "dashboard-categories___am"
  }, {
    path: "/dashboard/components",
    component: _5ee888f1,
    name: "dashboard-components___am"
  }, {
    path: "/dashboard/login",
    component: _4985d044,
    name: "dashboard-login___am"
  }, {
    path: "/dashboard/menu",
    component: _3e3288c8,
    name: "dashboard-menu___am"
  }, {
    path: "/dashboard/orders",
    component: _2c8cf842,
    name: "dashboard-orders___am"
  }, {
    path: "/dashboard/pages",
    component: _5d13e0ae,
    name: "dashboard-pages___am"
  }, {
    path: "/dashboard/products",
    component: _ae461dba,
    name: "dashboard-products___am"
  }, {
    path: "/dashboard/regions",
    component: _7972afce,
    name: "dashboard-regions___am"
  }, {
    path: "/dashboard/subscribers",
    component: _93056280,
    name: "dashboard-subscribers___am"
  }, {
    path: "/en/",
    component: _5a48d219,
    name: "index___en"
  }, {
    path: "/en/aboutUs",
    component: _1c733412,
    name: "aboutUs___en"
  }, {
    path: "/en/account",
    component: _707bd3ce,
    name: "account___en"
  }, {
    path: "/en/cart",
    component: _46dabc29,
    name: "cart___en"
  }, {
    path: "/en/condition",
    component: _5b274b3c,
    name: "condition___en"
  }, {
    path: "/en/dashboard",
    component: _119574c7,
    name: "dashboard___en"
  }, {
    path: "/en/payment",
    component: _7e6cf18d,
    name: "payment___en"
  }, {
    path: "/en/sales",
    component: _f51d755a,
    name: "sales___en"
  }, {
    path: "/en/wishlist",
    component: _5dd17bce,
    name: "wishlist___en"
  }, {
    path: "/ru/",
    component: _5a48d219,
    name: "index___ru"
  }, {
    path: "/ru/aboutUs",
    component: _1c733412,
    name: "aboutUs___ru"
  }, {
    path: "/ru/account",
    component: _707bd3ce,
    name: "account___ru"
  }, {
    path: "/ru/cart",
    component: _46dabc29,
    name: "cart___ru"
  }, {
    path: "/ru/condition",
    component: _5b274b3c,
    name: "condition___ru"
  }, {
    path: "/ru/dashboard",
    component: _119574c7,
    name: "dashboard___ru"
  }, {
    path: "/ru/payment",
    component: _7e6cf18d,
    name: "payment___ru"
  }, {
    path: "/ru/sales",
    component: _f51d755a,
    name: "sales___ru"
  }, {
    path: "/ru/wishlist",
    component: _5dd17bce,
    name: "wishlist___ru"
  }, {
    path: "/dashboard/brands/new",
    component: _5ce58909,
    name: "dashboard-brands-new___am"
  }, {
    path: "/dashboard/categories/new",
    component: _e9c5a78e,
    name: "dashboard-categories-new___am"
  }, {
    path: "/dashboard/products/new",
    component: _283e959e,
    name: "dashboard-products-new___am"
  }, {
    path: "/dashboard/regions/new",
    component: _3d9c229c,
    name: "dashboard-regions-new___am"
  }, {
    path: "/en/account/orders",
    component: _b990d3ce,
    name: "account-orders___en"
  }, {
    path: "/en/auth/login",
    component: _6e3323c8,
    name: "auth-login___en"
  }, {
    path: "/en/dashboard/brands",
    component: _2807a20a,
    name: "dashboard-brands___en"
  }, {
    path: "/en/dashboard/categories",
    component: _6ad7c62b,
    name: "dashboard-categories___en"
  }, {
    path: "/en/dashboard/components",
    component: _5ee888f1,
    name: "dashboard-components___en"
  }, {
    path: "/en/dashboard/login",
    component: _4985d044,
    name: "dashboard-login___en"
  }, {
    path: "/en/dashboard/menu",
    component: _3e3288c8,
    name: "dashboard-menu___en"
  }, {
    path: "/en/dashboard/orders",
    component: _2c8cf842,
    name: "dashboard-orders___en"
  }, {
    path: "/en/dashboard/pages",
    component: _5d13e0ae,
    name: "dashboard-pages___en"
  }, {
    path: "/en/dashboard/products",
    component: _ae461dba,
    name: "dashboard-products___en"
  }, {
    path: "/en/dashboard/regions",
    component: _7972afce,
    name: "dashboard-regions___en"
  }, {
    path: "/en/dashboard/subscribers",
    component: _93056280,
    name: "dashboard-subscribers___en"
  }, {
    path: "/ru/account/orders",
    component: _b990d3ce,
    name: "account-orders___ru"
  }, {
    path: "/ru/auth/login",
    component: _6e3323c8,
    name: "auth-login___ru"
  }, {
    path: "/ru/dashboard/brands",
    component: _2807a20a,
    name: "dashboard-brands___ru"
  }, {
    path: "/ru/dashboard/categories",
    component: _6ad7c62b,
    name: "dashboard-categories___ru"
  }, {
    path: "/ru/dashboard/components",
    component: _5ee888f1,
    name: "dashboard-components___ru"
  }, {
    path: "/ru/dashboard/login",
    component: _4985d044,
    name: "dashboard-login___ru"
  }, {
    path: "/ru/dashboard/menu",
    component: _3e3288c8,
    name: "dashboard-menu___ru"
  }, {
    path: "/ru/dashboard/orders",
    component: _2c8cf842,
    name: "dashboard-orders___ru"
  }, {
    path: "/ru/dashboard/pages",
    component: _5d13e0ae,
    name: "dashboard-pages___ru"
  }, {
    path: "/ru/dashboard/products",
    component: _ae461dba,
    name: "dashboard-products___ru"
  }, {
    path: "/ru/dashboard/regions",
    component: _7972afce,
    name: "dashboard-regions___ru"
  }, {
    path: "/ru/dashboard/subscribers",
    component: _93056280,
    name: "dashboard-subscribers___ru"
  }, {
    path: "/en/dashboard/brands/new",
    component: _5ce58909,
    name: "dashboard-brands-new___en"
  }, {
    path: "/en/dashboard/categories/new",
    component: _e9c5a78e,
    name: "dashboard-categories-new___en"
  }, {
    path: "/en/dashboard/products/new",
    component: _283e959e,
    name: "dashboard-products-new___en"
  }, {
    path: "/en/dashboard/regions/new",
    component: _3d9c229c,
    name: "dashboard-regions-new___en"
  }, {
    path: "/ru/dashboard/brands/new",
    component: _5ce58909,
    name: "dashboard-brands-new___ru"
  }, {
    path: "/ru/dashboard/categories/new",
    component: _e9c5a78e,
    name: "dashboard-categories-new___ru"
  }, {
    path: "/ru/dashboard/products/new",
    component: _283e959e,
    name: "dashboard-products-new___ru"
  }, {
    path: "/ru/dashboard/regions/new",
    component: _3d9c229c,
    name: "dashboard-regions-new___ru"
  }, {
    path: "/en/dashboard/brands/edit/:id?",
    component: _18b055ce,
    name: "dashboard-brands-edit-id___en"
  }, {
    path: "/en/dashboard/categories/edit/:id?",
    component: _40f7576e,
    name: "dashboard-categories-edit-id___en"
  }, {
    path: "/en/dashboard/components/edit/:id?",
    component: _044a440f,
    name: "dashboard-components-edit-id___en"
  }, {
    path: "/en/dashboard/products/edit/:id?",
    component: _1ee9797e,
    name: "dashboard-products-edit-id___en"
  }, {
    path: "/en/dashboard/regions/edit/:id?",
    component: _25089728,
    name: "dashboard-regions-edit-id___en"
  }, {
    path: "/ru/dashboard/brands/edit/:id?",
    component: _18b055ce,
    name: "dashboard-brands-edit-id___ru"
  }, {
    path: "/ru/dashboard/categories/edit/:id?",
    component: _40f7576e,
    name: "dashboard-categories-edit-id___ru"
  }, {
    path: "/ru/dashboard/components/edit/:id?",
    component: _044a440f,
    name: "dashboard-components-edit-id___ru"
  }, {
    path: "/ru/dashboard/products/edit/:id?",
    component: _1ee9797e,
    name: "dashboard-products-edit-id___ru"
  }, {
    path: "/ru/dashboard/regions/edit/:id?",
    component: _25089728,
    name: "dashboard-regions-edit-id___ru"
  }, {
    path: "/dashboard/brands/edit/:id?",
    component: _18b055ce,
    name: "dashboard-brands-edit-id___am"
  }, {
    path: "/dashboard/categories/edit/:id?",
    component: _40f7576e,
    name: "dashboard-categories-edit-id___am"
  }, {
    path: "/dashboard/components/edit/:id?",
    component: _044a440f,
    name: "dashboard-components-edit-id___am"
  }, {
    path: "/dashboard/products/edit/:id?",
    component: _1ee9797e,
    name: "dashboard-products-edit-id___am"
  }, {
    path: "/dashboard/regions/edit/:id?",
    component: _25089728,
    name: "dashboard-regions-edit-id___am"
  }, {
    path: "/en/dashboard/pages/:id",
    component: _39342f5e,
    name: "dashboard-pages-id___en"
  }, {
    path: "/ru/dashboard/pages/:id",
    component: _39342f5e,
    name: "dashboard-pages-id___ru"
  }, {
    path: "/dashboard/pages/:id",
    component: _39342f5e,
    name: "dashboard-pages-id___am"
  }, {
    path: "/en/brand/:id?",
    component: _e9518448,
    name: "brand-id___en"
  }, {
    path: "/en/category/:id?",
    component: _ede7657a,
    name: "category-id___en"
  }, {
    path: "/en/product/:name?",
    component: _6e00bb38,
    name: "product-name___en"
  }, {
    path: "/ru/brand/:id?",
    component: _e9518448,
    name: "brand-id___ru"
  }, {
    path: "/ru/category/:id?",
    component: _ede7657a,
    name: "category-id___ru"
  }, {
    path: "/ru/product/:name?",
    component: _6e00bb38,
    name: "product-name___ru"
  }, {
    path: "/brand/:id?",
    component: _e9518448,
    name: "brand-id___am"
  }, {
    path: "/category/:id?",
    component: _ede7657a,
    name: "category-id___am"
  }, {
    path: "/product/:name?",
    component: _6e00bb38,
    name: "product-name___am"
  }, {
    path: "/",
    component: _5a48d219,
    name: "index___am"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
