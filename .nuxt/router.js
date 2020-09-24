import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c49f809 = () => interopDefault(import('..\\pages\\aboutUs.vue' /* webpackChunkName: "pages_aboutUs" */))
const _79540812 = () => interopDefault(import('..\\pages\\account\\index.vue' /* webpackChunkName: "pages_account_index" */))
const _12b85392 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _47a1fc99 = () => interopDefault(import('..\\pages\\condition.vue' /* webpackChunkName: "pages_condition" */))
const _168636b0 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages_dashboard_index" */))
const _e37894f8 = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages_payment" */))
const _35469b0a = () => interopDefault(import('..\\pages\\sales.vue' /* webpackChunkName: "pages_sales" */))
const _48d336b7 = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages_wishlist" */))
const _a8bb19e0 = () => interopDefault(import('..\\pages\\account\\orders.vue' /* webpackChunkName: "pages_account_orders" */))
const _6c89143f = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages_auth_login" */))
const _ea361038 = () => interopDefault(import('..\\pages\\dashboard\\brands\\index.vue' /* webpackChunkName: "pages_dashboard_brands_index" */))
const _64eff294 = () => interopDefault(import('..\\pages\\dashboard\\categories\\index.vue' /* webpackChunkName: "pages_dashboard_categories_index" */))
const _5900b55a = () => interopDefault(import('..\\pages\\dashboard\\components\\index.vue' /* webpackChunkName: "pages_dashboard_components_index" */))
const _3fa44c72 = () => interopDefault(import('..\\pages\\dashboard\\login.vue' /* webpackChunkName: "pages_dashboard_login" */))
const _f14b101e = () => interopDefault(import('..\\pages\\dashboard\\menu\\index.vue' /* webpackChunkName: "pages_dashboard_menu_index" */))
const _69147daa = () => interopDefault(import('..\\pages\\dashboard\\orders\\index.vue' /* webpackChunkName: "pages_dashboard_orders_index" */))
const _a567f4c0 = () => interopDefault(import('..\\pages\\dashboard\\pages\\index.vue' /* webpackChunkName: "pages_dashboard_pages_index" */))
const _30b723cc = () => interopDefault(import('..\\pages\\dashboard\\products\\index.vue' /* webpackChunkName: "pages_dashboard_products_index" */))
const _90b9f7f6 = () => interopDefault(import('..\\pages\\dashboard\\regions\\index.vue' /* webpackChunkName: "pages_dashboard_regions_index" */))
const _00b5842e = () => interopDefault(import('..\\pages\\dashboard\\subscribers.vue' /* webpackChunkName: "pages_dashboard_subscribers" */))
const _0a1e27d0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _b3e50f9c = () => interopDefault(import('..\\pages\\dashboard\\brands\\new.vue' /* webpackChunkName: "pages_dashboard_brands_new" */))
const _12f75ee2 = () => interopDefault(import('..\\pages\\dashboard\\categories\\new.vue' /* webpackChunkName: "pages_dashboard_categories_new" */))
const _ea6d03cc = () => interopDefault(import('..\\pages\\dashboard\\products\\new.vue' /* webpackChunkName: "pages_dashboard_products_new" */))
const _19721893 = () => interopDefault(import('..\\pages\\dashboard\\regions\\new.vue' /* webpackChunkName: "pages_dashboard_regions_new" */))
const _247ffcfc = () => interopDefault(import('..\\pages\\dashboard\\brands\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_brands_edit__id" */))
const _7f6e2432 = () => interopDefault(import('..\\pages\\dashboard\\categories\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_categories_edit__id" */))
const _b797d810 = () => interopDefault(import('..\\pages\\dashboard\\components\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_components_edit__id" */))
const _756c0d2c = () => interopDefault(import('..\\pages\\dashboard\\products\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_products_edit__id" */))
const _36691523 = () => interopDefault(import('..\\pages\\dashboard\\regions\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_regions_edit__id" */))
const _595ef008 = () => interopDefault(import('..\\pages\\dashboard\\pages\\_id.vue' /* webpackChunkName: "pages_dashboard_pages__id" */))
const _86543af6 = () => interopDefault(import('..\\pages\\brand\\_id.vue' /* webpackChunkName: "pages_brand__id" */))
const _49a7fbfa = () => interopDefault(import('..\\pages\\category\\_id.vue' /* webpackChunkName: "pages_category__id" */))
const _1bd9ca8d = () => interopDefault(import('..\\pages\\product\\_name.vue' /* webpackChunkName: "pages_product__name" */))

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
    component: _2c49f809,
    name: "aboutUs___am"
  }, {
    path: "/account",
    component: _79540812,
    name: "account___am"
  }, {
    path: "/cart",
    component: _12b85392,
    name: "cart___am"
  }, {
    path: "/condition",
    component: _47a1fc99,
    name: "condition___am"
  }, {
    path: "/dashboard",
    component: _168636b0,
    name: "dashboard___am"
  }, {
    path: "/payment",
    component: _e37894f8,
    name: "payment___am"
  }, {
    path: "/sales",
    component: _35469b0a,
    name: "sales___am"
  }, {
    path: "/wishlist",
    component: _48d336b7,
    name: "wishlist___am"
  }, {
    path: "/account/orders",
    component: _a8bb19e0,
    name: "account-orders___am"
  }, {
    path: "/auth/login",
    component: _6c89143f,
    name: "auth-login___am"
  }, {
    path: "/dashboard/brands",
    component: _ea361038,
    name: "dashboard-brands___am"
  }, {
    path: "/dashboard/categories",
    component: _64eff294,
    name: "dashboard-categories___am"
  }, {
    path: "/dashboard/components",
    component: _5900b55a,
    name: "dashboard-components___am"
  }, {
    path: "/dashboard/login",
    component: _3fa44c72,
    name: "dashboard-login___am"
  }, {
    path: "/dashboard/menu",
    component: _f14b101e,
    name: "dashboard-menu___am"
  }, {
    path: "/dashboard/orders",
    component: _69147daa,
    name: "dashboard-orders___am"
  }, {
    path: "/dashboard/pages",
    component: _a567f4c0,
    name: "dashboard-pages___am"
  }, {
    path: "/dashboard/products",
    component: _30b723cc,
    name: "dashboard-products___am"
  }, {
    path: "/dashboard/regions",
    component: _90b9f7f6,
    name: "dashboard-regions___am"
  }, {
    path: "/dashboard/subscribers",
    component: _00b5842e,
    name: "dashboard-subscribers___am"
  }, {
    path: "/en/",
    component: _0a1e27d0,
    name: "index___en"
  }, {
    path: "/en/aboutUs",
    component: _2c49f809,
    name: "aboutUs___en"
  }, {
    path: "/en/account",
    component: _79540812,
    name: "account___en"
  }, {
    path: "/en/cart",
    component: _12b85392,
    name: "cart___en"
  }, {
    path: "/en/condition",
    component: _47a1fc99,
    name: "condition___en"
  }, {
    path: "/en/dashboard",
    component: _168636b0,
    name: "dashboard___en"
  }, {
    path: "/en/payment",
    component: _e37894f8,
    name: "payment___en"
  }, {
    path: "/en/sales",
    component: _35469b0a,
    name: "sales___en"
  }, {
    path: "/en/wishlist",
    component: _48d336b7,
    name: "wishlist___en"
  }, {
    path: "/ru/",
    component: _0a1e27d0,
    name: "index___ru"
  }, {
    path: "/ru/aboutUs",
    component: _2c49f809,
    name: "aboutUs___ru"
  }, {
    path: "/ru/account",
    component: _79540812,
    name: "account___ru"
  }, {
    path: "/ru/cart",
    component: _12b85392,
    name: "cart___ru"
  }, {
    path: "/ru/condition",
    component: _47a1fc99,
    name: "condition___ru"
  }, {
    path: "/ru/dashboard",
    component: _168636b0,
    name: "dashboard___ru"
  }, {
    path: "/ru/payment",
    component: _e37894f8,
    name: "payment___ru"
  }, {
    path: "/ru/sales",
    component: _35469b0a,
    name: "sales___ru"
  }, {
    path: "/ru/wishlist",
    component: _48d336b7,
    name: "wishlist___ru"
  }, {
    path: "/dashboard/brands/new",
    component: _b3e50f9c,
    name: "dashboard-brands-new___am"
  }, {
    path: "/dashboard/categories/new",
    component: _12f75ee2,
    name: "dashboard-categories-new___am"
  }, {
    path: "/dashboard/products/new",
    component: _ea6d03cc,
    name: "dashboard-products-new___am"
  }, {
    path: "/dashboard/regions/new",
    component: _19721893,
    name: "dashboard-regions-new___am"
  }, {
    path: "/en/account/orders",
    component: _a8bb19e0,
    name: "account-orders___en"
  }, {
    path: "/en/auth/login",
    component: _6c89143f,
    name: "auth-login___en"
  }, {
    path: "/en/dashboard/brands",
    component: _ea361038,
    name: "dashboard-brands___en"
  }, {
    path: "/en/dashboard/categories",
    component: _64eff294,
    name: "dashboard-categories___en"
  }, {
    path: "/en/dashboard/components",
    component: _5900b55a,
    name: "dashboard-components___en"
  }, {
    path: "/en/dashboard/login",
    component: _3fa44c72,
    name: "dashboard-login___en"
  }, {
    path: "/en/dashboard/menu",
    component: _f14b101e,
    name: "dashboard-menu___en"
  }, {
    path: "/en/dashboard/orders",
    component: _69147daa,
    name: "dashboard-orders___en"
  }, {
    path: "/en/dashboard/pages",
    component: _a567f4c0,
    name: "dashboard-pages___en"
  }, {
    path: "/en/dashboard/products",
    component: _30b723cc,
    name: "dashboard-products___en"
  }, {
    path: "/en/dashboard/regions",
    component: _90b9f7f6,
    name: "dashboard-regions___en"
  }, {
    path: "/en/dashboard/subscribers",
    component: _00b5842e,
    name: "dashboard-subscribers___en"
  }, {
    path: "/ru/account/orders",
    component: _a8bb19e0,
    name: "account-orders___ru"
  }, {
    path: "/ru/auth/login",
    component: _6c89143f,
    name: "auth-login___ru"
  }, {
    path: "/ru/dashboard/brands",
    component: _ea361038,
    name: "dashboard-brands___ru"
  }, {
    path: "/ru/dashboard/categories",
    component: _64eff294,
    name: "dashboard-categories___ru"
  }, {
    path: "/ru/dashboard/components",
    component: _5900b55a,
    name: "dashboard-components___ru"
  }, {
    path: "/ru/dashboard/login",
    component: _3fa44c72,
    name: "dashboard-login___ru"
  }, {
    path: "/ru/dashboard/menu",
    component: _f14b101e,
    name: "dashboard-menu___ru"
  }, {
    path: "/ru/dashboard/orders",
    component: _69147daa,
    name: "dashboard-orders___ru"
  }, {
    path: "/ru/dashboard/pages",
    component: _a567f4c0,
    name: "dashboard-pages___ru"
  }, {
    path: "/ru/dashboard/products",
    component: _30b723cc,
    name: "dashboard-products___ru"
  }, {
    path: "/ru/dashboard/regions",
    component: _90b9f7f6,
    name: "dashboard-regions___ru"
  }, {
    path: "/ru/dashboard/subscribers",
    component: _00b5842e,
    name: "dashboard-subscribers___ru"
  }, {
    path: "/en/dashboard/brands/new",
    component: _b3e50f9c,
    name: "dashboard-brands-new___en"
  }, {
    path: "/en/dashboard/categories/new",
    component: _12f75ee2,
    name: "dashboard-categories-new___en"
  }, {
    path: "/en/dashboard/products/new",
    component: _ea6d03cc,
    name: "dashboard-products-new___en"
  }, {
    path: "/en/dashboard/regions/new",
    component: _19721893,
    name: "dashboard-regions-new___en"
  }, {
    path: "/ru/dashboard/brands/new",
    component: _b3e50f9c,
    name: "dashboard-brands-new___ru"
  }, {
    path: "/ru/dashboard/categories/new",
    component: _12f75ee2,
    name: "dashboard-categories-new___ru"
  }, {
    path: "/ru/dashboard/products/new",
    component: _ea6d03cc,
    name: "dashboard-products-new___ru"
  }, {
    path: "/ru/dashboard/regions/new",
    component: _19721893,
    name: "dashboard-regions-new___ru"
  }, {
    path: "/en/dashboard/brands/edit/:id?",
    component: _247ffcfc,
    name: "dashboard-brands-edit-id___en"
  }, {
    path: "/en/dashboard/categories/edit/:id?",
    component: _7f6e2432,
    name: "dashboard-categories-edit-id___en"
  }, {
    path: "/en/dashboard/components/edit/:id?",
    component: _b797d810,
    name: "dashboard-components-edit-id___en"
  }, {
    path: "/en/dashboard/products/edit/:id?",
    component: _756c0d2c,
    name: "dashboard-products-edit-id___en"
  }, {
    path: "/en/dashboard/regions/edit/:id?",
    component: _36691523,
    name: "dashboard-regions-edit-id___en"
  }, {
    path: "/ru/dashboard/brands/edit/:id?",
    component: _247ffcfc,
    name: "dashboard-brands-edit-id___ru"
  }, {
    path: "/ru/dashboard/categories/edit/:id?",
    component: _7f6e2432,
    name: "dashboard-categories-edit-id___ru"
  }, {
    path: "/ru/dashboard/components/edit/:id?",
    component: _b797d810,
    name: "dashboard-components-edit-id___ru"
  }, {
    path: "/ru/dashboard/products/edit/:id?",
    component: _756c0d2c,
    name: "dashboard-products-edit-id___ru"
  }, {
    path: "/ru/dashboard/regions/edit/:id?",
    component: _36691523,
    name: "dashboard-regions-edit-id___ru"
  }, {
    path: "/dashboard/brands/edit/:id?",
    component: _247ffcfc,
    name: "dashboard-brands-edit-id___am"
  }, {
    path: "/dashboard/categories/edit/:id?",
    component: _7f6e2432,
    name: "dashboard-categories-edit-id___am"
  }, {
    path: "/dashboard/components/edit/:id?",
    component: _b797d810,
    name: "dashboard-components-edit-id___am"
  }, {
    path: "/dashboard/products/edit/:id?",
    component: _756c0d2c,
    name: "dashboard-products-edit-id___am"
  }, {
    path: "/dashboard/regions/edit/:id?",
    component: _36691523,
    name: "dashboard-regions-edit-id___am"
  }, {
    path: "/en/dashboard/pages/:id",
    component: _595ef008,
    name: "dashboard-pages-id___en"
  }, {
    path: "/ru/dashboard/pages/:id",
    component: _595ef008,
    name: "dashboard-pages-id___ru"
  }, {
    path: "/dashboard/pages/:id",
    component: _595ef008,
    name: "dashboard-pages-id___am"
  }, {
    path: "/en/brand/:id?",
    component: _86543af6,
    name: "brand-id___en"
  }, {
    path: "/en/category/:id?",
    component: _49a7fbfa,
    name: "category-id___en"
  }, {
    path: "/en/product/:name?",
    component: _1bd9ca8d,
    name: "product-name___en"
  }, {
    path: "/ru/brand/:id?",
    component: _86543af6,
    name: "brand-id___ru"
  }, {
    path: "/ru/category/:id?",
    component: _49a7fbfa,
    name: "category-id___ru"
  }, {
    path: "/ru/product/:name?",
    component: _1bd9ca8d,
    name: "product-name___ru"
  }, {
    path: "/brand/:id?",
    component: _86543af6,
    name: "brand-id___am"
  }, {
    path: "/category/:id?",
    component: _49a7fbfa,
    name: "category-id___am"
  }, {
    path: "/product/:name?",
    component: _1bd9ca8d,
    name: "product-name___am"
  }, {
    path: "/",
    component: _0a1e27d0,
    name: "index___am"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
