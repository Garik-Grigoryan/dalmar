(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{588:function(t,e,r){"use strict";r.r(e);r(23),r(33);var n=r(6),o=(r(527),{fetch:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.store,r.next=3,n.dispatch("brands/fetch");case 3:return r.next=5,n.dispatch("wishListAndCart/fetch");case 5:if(!e.user){r.next=10;break}return r.next=8,n.dispatch("wishListAndCart/getWishListAndCartData",[e.user.id]);case 8:r.next=12;break;case 10:return r.next=12,n.dispatch("wishListAndCart/getWishListAndCartData",[0]);case 12:return r.next=14,n.dispatch("menus/fetch");case 14:case"end":return r.stop()}}),r)})))()},name:"Wishlist",data:function(){return{headers:[{text:"Image",value:"image",sortable:!1,align:"start"},{text:"Name",value:"name",sortable:!1,align:"center"},{text:"Size",value:"size",sortable:!1,align:"center"},{text:"Color",value:"color",sortable:!1,align:"center"},{text:"Count",value:"count",sortable:!1,align:"center"},{text:"Price",value:"price",sortable:!1,align:"center"},{text:"Add to cart",value:"addToCart",sortable:!1,align:"center"},{text:"Remove",value:"remove",sortable:!1,align:"center"}],desserts:[]}},mounted:function(){var t=this;this.wishListData.forEach((function(e){t.desserts.push({image:JSON.parse(e.product.images)[0],name:e.product.name,size:void 0!==e.size[0]?e.size[0]:"",color:void 0!==e.color[0]?e.color[0]:"",count:e.count,price:e.product.price,addToCart:e.product.id,remove:"mdi-delete"})}))},methods:{addTocart:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(t),n=0,e.user&&(n=e.user.id),r.next=5,e.$store.dispatch("wishListAndCart/setCArt",[t.addToCart,n,t.color,t.size,t.count]);case 5:case"end":return r.stop()}}),r)})))()},cahngeCount:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=e.desserts.indexOf(t),o=0,e.user&&(o=e.user.id),e.$store.dispatch("wishListAndCart/updateFromWhishList",[n,o,t.count]).then((function(){}));case 4:case"end":return r.stop()}}),r)})))()},deleteItem:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.desserts.indexOf(t),o=0,e.user&&(o=e.user.id),e.desserts.splice(n,1),r.next=6,e.$store.dispatch("wishListAndCart/removeFromWhishList",[n,o]).then((function(){}));case 6:case"end":return r.stop()}}),r)})))()}},computed:{wishListData:function(){return this.$store.getters["wishListAndCart/wishListData"]}}}),c=r(22),d=r(25),l=r.n(d),m=r(187),h=r(465),f=r(482),v=r(579),x=r(100),w=r(160),C=r(470),k=r(58),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"hide-default-footer":""},scopedSlots:t._u([{key:"item.image",fn:function(t){var e=t.item;return[r("v-img",{attrs:{src:e.image,contain:!0,width:"100",height:"100"}})]}},{key:"item.count",fn:function(e){var n=e.item;return[r("v-text-field",{staticStyle:{"max-width":"60px",margin:"0 auto !important","text-align":"center"},attrs:{type:"number",placeholder:"0",min:"1"},on:{change:function(e){return t.cahngeCount(n)}},model:{value:n.count,callback:function(e){t.$set(n,"count",e)},expression:"item.count"}})]}},{key:"item.color",fn:function(t){var e=t.item;return[r("v-card",{staticClass:"d-flex text-center align-center mx-3",staticStyle:{margin:"0 auto !important"},attrs:{color:e.color.toLowerCase(),dark:"",height:"30",width:"30"}})]}},{key:"item.addToCart",fn:function(e){var n=e.item;return[r("v-icon",{on:{click:function(e){return e.stopPropagation(),t.addTocart(n)}}},[t._v("mdi-cart-outline")])]}},{key:"item.remove",fn:function(e){var n=e.item;return[r("v-icon",{on:{click:function(e){return t.deleteItem(n)}}},[t._v("mdi-delete")])]}}])})],1)],1)],1)}),[],!1,null,"6f722ccd",null);e.default=component.exports;l()(component,{VCard:m.a,VCol:h.a,VContainer:f.a,VDataTable:v.a,VIcon:x.a,VImg:w.a,VRow:C.a,VTextField:k.a})}}]);