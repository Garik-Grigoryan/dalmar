import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ae04157a = () => interopDefault(import('..\\pages\\aboutUs.vue' /* webpackChunkName: "pages_aboutUs" */))
const _399f897d = () => interopDefault(import('..\\pages\\account\\index.vue' /* webpackChunkName: "pages_account_index" */))
const _1645f098 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _026a004c = () => interopDefault(import('..\\pages\\category\\index.vue' /* webpackChunkName: "pages_category_index" */))
const _674b9353 = () => interopDefault(import('..\\pages\\condition.vue' /* webpackChunkName: "pages_condition" */))
const _20a27ab6 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages_dashboard_index" */))
const _b926c278 = () => interopDefault(import('..\\pages\\sales.vue' /* webpackChunkName: "pages_sales" */))
const _629ee0bd = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages_wishlist" */))
const _02ead36c = () => interopDefault(import('..\\pages\\account\\orders.vue' /* webpackChunkName: "pages_account_orders" */))
const _4827e479 = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages_auth_login" */))
const _6017d5ea = () => interopDefault(import('..\\pages\\dashboard\\brands\\index.vue' /* webpackChunkName: "pages_dashboard_brands_index" */))
const _ec4f44cc = () => interopDefault(import('..\\pages\\dashboard\\categories\\index.vue' /* webpackChunkName: "pages_dashboard_categories_index" */))
const _7de92060 = () => interopDefault(import('..\\pages\\dashboard\\components\\index.vue' /* webpackChunkName: "pages_dashboard_components_index" */))
const _2b6bc466 = () => interopDefault(import('..\\pages\\dashboard\\login.vue' /* webpackChunkName: "pages_dashboard_login" */))
const _1ccdc112 = () => interopDefault(import('..\\pages\\dashboard\\menu\\index.vue' /* webpackChunkName: "pages_dashboard_menu_index" */))
const _beaec19e = () => interopDefault(import('..\\pages\\dashboard\\orders\\index.vue' /* webpackChunkName: "pages_dashboard_orders_index" */))
const _ea3b624c = () => interopDefault(import('..\\pages\\dashboard\\pages\\index.vue' /* webpackChunkName: "pages_dashboard_pages_index" */))
const _f6aacf5c = () => interopDefault(import('..\\pages\\dashboard\\products\\index.vue' /* webpackChunkName: "pages_dashboard_products_index" */))
const _ee683282 = () => interopDefault(import('..\\pages\\dashboard\\regions\\index.vue' /* webpackChunkName: "pages_dashboard_regions_index" */))
const _78442b8a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _104c1fb8 = () => interopDefault(import('..\\pages\\dashboard\\brands\\new.vue' /* webpackChunkName: "pages_dashboard_brands_new" */))
const _66ead368 = () => interopDefault(import('..\\pages\\dashboard\\categories\\new.vue' /* webpackChunkName: "pages_dashboard_categories_new" */))
const _5ffc5c20 = () => interopDefault(import('..\\pages\\dashboard\\products\\new.vue' /* webpackChunkName: "pages_dashboard_products_new" */))
const _11ef3c66 = () => interopDefault(import('..\\pages\\dashboard\\regions\\new.vue' /* webpackChunkName: "pages_dashboard_regions_new" */))
const _12a86c88 = () => interopDefault(import('..\\pages\\dashboard\\brands\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_brands_edit__id" */))
const _5704c790 = () => interopDefault(import('..\\pages\\dashboard\\categories\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_categories_edit__id" */))
const _0d78e804 = () => interopDefault(import('..\\pages\\dashboard\\components\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_components_edit__id" */))
const _51c3baf0 = () => interopDefault(import('..\\pages\\dashboard\\products\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_products_edit__id" */))
const _a2e3ea46 = () => interopDefault(import('..\\pages\\dashboard\\regions\\edit\\_id.vue' /* webpackChunkName: "pages_dashboard_regions_edit__id" */))
const _548a3fc2 = () => interopDefault(import('..\\pages\\dashboard\\pages\\_id.vue' /* webpackChunkName: "pages_dashboard_pages__id" */))
const _db41b9ea = () => interopDefault(import('..\\pages\\brand\\_id.vue' /* webpackChunkName: "pages_brand__id" */))
const _8e58b498 = () => interopDefault(import('..\\pages\\category\\_id.vue' /* webpackChunkName: "pages_category__id" */))
const _dbb94fda = () => interopDefault(import('..\\pages\\product\\_name.vue' /* webpackChunkName: "pages_product__name" */))

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
    component: _ae04157a,
    name: "aboutUs___am"
  }, {
    path: "/account",
    component: _399f897d,
    name: "account___am"
  }, {
    path: "/cart",
    component: _1645f098,
    name: "cart___am"
  }, {
    path: "/category",
    component: _026a004c,
    name: "category___am"
  }, {
    path: "/condition",
    component: _674b9353,
    name: "condition___am"
  }, {
    path: "/dashboard",
    component: _20a27ab6,
    name: "dashboard___am"
  }, {
    path: "/sales",
    component: _b926c278,
    name: "sales___am"
  }, {
    path: "/wishlist",
    component: _629ee0bd,
    name: "wishlist___am"
  }, {
    path: "/account/orders",
    component: _02ead36c,
    name: "account-orders___am"
  }, {
    path: "/auth/login",
    component: _4827e479,
    name: "auth-login___am"
  }, {
    path: "/dashboard/brands",
    component: _6017d5ea,
    name: "dashboard-brands___am"
  }, {
    path: "/dashboard/categories",
    component: _ec4f44cc,
    name: "dashboard-categories___am"
  }, {
    path: "/dashboard/components",
    component: _7de92060,
    name: "dashboard-components___am"
  }, {
    path: "/dashboard/login",
    component: _2b6bc466,
    name: "dashboard-login___am"
  }, {
    path: "/dashboard/menu",
    component: _1ccdc112,
    name: "dashboard-menu___am"
  }, {
    path: "/dashboard/orders",
    component: _beaec19e,
    name: "dashboard-orders___am"
  }, {
    path: "/dashboard/pages",
    component: _ea3b624c,
    name: "dashboard-pages___am"
  }, {
    path: "/dashboard/products",
    component: _f6aacf5c,
    name: "dashboard-products___am"
  }, {
    path: "/dashboard/regions",
    component: _ee683282,
    name: "dashboard-regions___am"
  }, {
    path: "/en/",
    component: _78442b8a,
    name: "index___en"
  }, {
    path: "/en/aboutUs",
    component: _ae04157a,
    name: "aboutUs___en"
  }, {
    path: "/en/account",
    component: _399f897d,
    name: "account___en"
  }, {
    path: "/en/cart",
    component: _1645f098,
    name: "cart___en"
  }, {
    path: "/en/category",
    component: _026a004c,
    name: "category___en"
  }, {
    path: "/en/condition",
    component: _674b9353,
    name: "condition___en"
  }, {
    path: "/en/dashboard",
    component: _20a27ab6,
    name: "dashboard___en"
  }, {
    path: "/en/sales",
    component: _b926c278,
    name: "sales___en"
  }, {
    path: "/en/wishlist",
    component: _629ee0bd,
    name: "wishlist___en"
  }, {
    path: "/ru/",
    component: _78442b8a,
    name: "index___ru"
  }, {
    path: "/ru/aboutUs",
    component: _ae04157a,
    name: "aboutUs___ru"
  }, {
    path: "/ru/account",
    component: _399f897d,
    name: "account___ru"
  }, {
    path: "/ru/cart",
    component: _1645f098,
    name: "cart___ru"
  }, {
    path: "/ru/category",
    component: _026a004c,
    name: "category___ru"
  }, {
    path: "/ru/condition",
    component: _674b9353,
    name: "condition___ru"
  }, {
    path: "/ru/dashboard",
    component: _20a27ab6,
    name: "dashboard___ru"
  }, {
    path: "/ru/sales",
    component: _b926c278,
    name: "sales___ru"
  }, {
    path: "/ru/wishlist",
    component: _629ee0bd,
    name: "wishlist___ru"
  }, {
    path: "/dashboard/brands/new",
    component: _104c1fb8,
    name: "dashboard-brands-new___am"
  }, {
    path: "/dashboard/categories/new",
    component: _66ead368,
    name: "dashboard-categories-new___am"
  }, {
    path: "/dashboard/products/new",
    component: _5ffc5c20,
    name: "dashboard-products-new___am"
  }, {
    path: "/dashboard/regions/new",
    component: _11ef3c66,
    name: "dashboard-regions-new___am"
  }, {
    path: "/en/account/orders",
    component: _02ead36c,
    name: "account-orders___en"
  }, {
    path: "/en/auth/login",
    component: _4827e479,
    name: "auth-login___en"
  }, {
    path: "/en/dashboard/brands",
    component: _6017d5ea,
    name: "dashboard-brands___en"
  }, {
    path: "/en/dashboard/categories",
    component: _ec4f44cc,
    name: "dashboard-categories___en"
  }, {
    path: "/en/dashboard/components",
    component: _7de92060,
    name: "dashboard-components___en"
  }, {
    path: "/en/dashboard/login",
    component: _2b6bc466,
    name: "dashboard-login___en"
  }, {
    path: "/en/dashboard/menu",
    component: _1ccdc112,
    name: "dashboard-menu___en"
  }, {
    path: "/en/dashboard/orders",
    component: _beaec19e,
    name: "dashboard-orders___en"
  }, {
    path: "/en/dashboard/pages",
    component: _ea3b624c,
    name: "dashboard-pages___en"
  }, {
    path: "/en/dashboard/products",
    component: _f6aacf5c,
    name: "dashboard-products___en"
  }, {
    path: "/en/dashboard/regions",
    component: _ee683282,
    name: "dashboard-regions___en"
  }, {
    path: "/ru/account/orders",
    component: _02ead36c,
    name: "account-orders___ru"
  }, {
    path: "/ru/auth/login",
    component: _4827e479,
    name: "auth-login___ru"
  }, {
    path: "/ru/dashboard/brands",
    component: _6017d5ea,
    name: "dashboard-brands___ru"
  }, {
    path: "/ru/dashboard/categories",
    component: _ec4f44cc,
    name: "dashboard-categories___ru"
  }, {
    path: "/ru/dashboard/components",
    component: _7de92060,
    name: "dashboard-components___ru"
  }, {
    path: "/ru/dashboard/login",
    component: _2b6bc466,
    name: "dashboard-login___ru"
  }, {
    path: "/ru/dashboard/menu",
    component: _1ccdc112,
    name: "dashboard-menu___ru"
  }, {
    path: "/ru/dashboard/orders",
    component: _beaec19e,
    name: "dashboard-orders___ru"
  }, {
    path: "/ru/dashboard/pages",
    component: _ea3b624c,
    name: "dashboard-pages___ru"
  }, {
    path: "/ru/dashboard/products",
    component: _f6aacf5c,
    name: "dashboard-products___ru"
  }, {
    path: "/ru/dashboard/regions",
    component: _ee683282,
    name: "dashboard-regions___ru"
  }, {
    path: "/en/dashboard/brands/new",
    component: _104c1fb8,
    name: "dashboard-brands-new___en"
  }, {
    path: "/en/dashboard/categories/new",
    component: _66ead368,
    name: "dashboard-categories-new___en"
  }, {
    path: "/en/dashboard/products/new",
    component: _5ffc5c20,
    name: "dashboard-products-new___en"
  }, {
    path: "/en/dashboard/regions/new",
    component: _11ef3c66,
    name: "dashboard-regions-new___en"
  }, {
    path: "/ru/dashboard/brands/new",
    component: _104c1fb8,
    name: "dashboard-brands-new___ru"
  }, {
    path: "/ru/dashboard/categories/new",
    component: _66ead368,
    name: "dashboard-categories-new___ru"
  }, {
    path: "/ru/dashboard/products/new",
    component: _5ffc5c20,
    name: "dashboard-products-new___ru"
  }, {
    path: "/ru/dashboard/regions/new",
    component: _11ef3c66,
    name: "dashboard-regions-new___ru"
  }, {
    path: "/en/dashboard/brands/edit/:id?",
    component: _12a86c88,
    name: "dashboard-brands-edit-id___en"
  }, {
    path: "/en/dashboard/categories/edit/:id?",
    component: _5704c790,
    name: "dashboard-categories-edit-id___en"
  }, {
    path: "/en/dashboard/components/edit/:id?",
    component: _0d78e804,
    name: "dashboard-components-edit-id___en"
  }, {
    path: "/en/dashboard/products/edit/:id?",
    component: _51c3baf0,
    name: "dashboard-products-edit-id___en"
  }, {
    path: "/en/dashboard/regions/edit/:id?",
    component: _a2e3ea46,
    name: "dashboard-regions-edit-id___en"
  }, {
    path: "/ru/dashboard/brands/edit/:id?",
    component: _12a86c88,
    name: "dashboard-brands-edit-id___ru"
  }, {
    path: "/ru/dashboard/categories/edit/:id?",
    component: _5704c790,
    name: "dashboard-categories-edit-id___ru"
  }, {
    path: "/ru/dashboard/components/edit/:id?",
    component: _0d78e804,
    name: "dashboard-components-edit-id___ru"
  }, {
    path: "/ru/dashboard/products/edit/:id?",
    component: _51c3baf0,
    name: "dashboard-products-edit-id___ru"
  }, {
    path: "/ru/dashboard/regions/edit/:id?",
    component: _a2e3ea46,
    name: "dashboard-regions-edit-id___ru"
  }, {
    path: "/dashboard/brands/edit/:id?",
    component: _12a86c88,
    name: "dashboard-brands-edit-id___am"
  }, {
    path: "/dashboard/categories/edit/:id?",
    component: _5704c790,
    name: "dashboard-categories-edit-id___am"
  }, {
    path: "/dashboard/components/edit/:id?",
    component: _0d78e804,
    name: "dashboard-components-edit-id___am"
  }, {
    path: "/dashboard/products/edit/:id?",
    component: _51c3baf0,
    name: "dashboard-products-edit-id___am"
  }, {
    path: "/dashboard/regions/edit/:id?",
    component: _a2e3ea46,
    name: "dashboard-regions-edit-id___am"
  }, {
    path: "/en/dashboard/pages/:id",
    component: _548a3fc2,
    name: "dashboard-pages-id___en"
  }, {
    path: "/ru/dashboard/pages/:id",
    component: _548a3fc2,
    name: "dashboard-pages-id___ru"
  }, {
    path: "/dashboard/pages/:id",
    component: _548a3fc2,
    name: "dashboard-pages-id___am"
  }, {
    path: "/en/brand/:id?",
    component: _db41b9ea,
    name: "brand-id___en"
  }, {
    path: "/en/category/:id",
    component: _8e58b498,
    name: "category-id___en"
  }, {
    path: "/en/product/:name?",
    component: _dbb94fda,
    name: "product-name___en"
  }, {
    path: "/ru/brand/:id?",
    component: _db41b9ea,
    name: "brand-id___ru"
  }, {
    path: "/ru/category/:id",
    component: _8e58b498,
    name: "category-id___ru"
  }, {
    path: "/ru/product/:name?",
    component: _dbb94fda,
    name: "product-name___ru"
  }, {
    path: "/brand/:id?",
    component: _db41b9ea,
    name: "brand-id___am"
  }, {
    path: "/category/:id",
    component: _8e58b498,
    name: "category-id___am"
  }, {
    path: "/product/:name?",
    component: _dbb94fda,
    name: "product-name___am"
  }, {
    path: "/",
    component: _78442b8a,
    name: "index___am"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
