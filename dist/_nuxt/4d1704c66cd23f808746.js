(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{482:function(t,e,r){"use strict";r(85),r(7),r(5),r(11),r(259),r(200);var o=r(2);var n,c=r(48);e.a=(n="container",o.a.extend({name:"v-".concat(n),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,o=e.children;data.staticClass="".concat(n," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,o=e.props,data=e.data,n=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(r||[])}),n)}})},488:function(t,e,r){var content=r(506);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("1bde3552",content,!0,{sourceMap:!1})},490:function(t,e,r){"use strict";var o=r(126),n=r(32),c=r(3),l=r(13);e.a=Object(c.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},502:function(t,e,r){var content=r(503);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("2d62e390",content,!0,{sourceMap:!1})},503:function(t,e,r){(e=r(14)(!1)).push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=e},504:function(t,e,r){var content=r(543);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("1a050cce",content,!0,{sourceMap:!1})},505:function(t,e,r){"use strict";var o=r(488);r.n(o).a},506:function(t,e,r){(e=r(14)(!1)).push([t.i,".blue-text[data-v-78de1f0d]{color:#01235e}.blue_bg[data-v-78de1f0d]{background-color:#01235e}.price[data-v-78de1f0d]{font-size:18px}.v-card--reveal[data-v-78de1f0d]{align-items:center;bottom:0;justify-content:center;position:absolute;width:100%}",""]),t.exports=e},507:function(t,e,r){var content=r(546);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("0dd460d6",content,!0,{sourceMap:!1})},523:function(t,e,r){"use strict";var o={props:["count","type"],name:"promoProductComponent",data:function(){return{model:null}},methods:{addToWishlist:function(t,e){var r=0;this.user&&(r=this.user.id),this.$store.dispatch("wishListAndCart/setWishList",[e,r])},addToCart:function(t,e){var r=0;this.user&&(r=this.user.id),this.$store.dispatch("wishListAndCart/setCArt",[e,r])}},computed:{products:function(){return"new"===this.type?this.$store.getters["products/newProducts"]:"best"===this.type?this.$store.getters["products/bestProducts"]:"sales"===this.type?this.$store.getters["products/salesProducts"]:void 0}}},n=(r(505),r(22)),c=r(25),l=r.n(c),d=r(118),h=r(187),v=r(84),f=r(490),m=r(100),w=r(160),y=r(55),_=r(124),x=r(544),j=r(47),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticClass:"mx-auto",attrs:{"max-width":"1300"}},[r("v-slide-group",{staticClass:"pa-4",attrs:{"center-active":"","show-arrows":!1},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.products,(function(e,o){return r("v-slide-item",{key:o,scopedSlots:t._u([{key:"default",fn:function(o){o.active,o.toggle;return[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){o.hover;return[r("v-card",{staticClass:"ma-4",attrs:{color:"grey lighten-4",width:"270",height:"270"}},[r("nuxt-link",{attrs:{to:"/product/"+e.id}},[r("v-img",{attrs:{"aspect-ratio":16/9,src:JSON.parse(e.images)[0],height:"100%",cover:""}})],1),t._v(" "),r("v-slide-y-reverse-transition",[r("v-card-text",{staticClass:"pt-6",staticStyle:{position:"absolute",bottom:"0","background-color":"#b20839c9",height:"80px"}},[r("v-btn",{staticClass:"white--text",attrs:{absolute:"",color:"#01235e",fab:"",right:"",top:""},on:{click:function(r){return t.addToCart(r,e.id)}}},[r("v-icon",[t._v("mdi-cart")])],1),t._v(" "),r("v-btn",{staticClass:"white--text",staticStyle:{right:"90px"},attrs:{absolute:"",color:"#01235e",fab:"",top:""},on:{click:function(r){return t.addToWishlist(r,e.id)}}},[r("v-icon",[t._v("mdi-heart")])],1),t._v(" "),r("nuxt-link",{attrs:{to:"/product/"+e.id}},[r("h3",{staticClass:" font-weight-light font-weight-bold white--text mb-2"},[t._v("QW cooking utensils")]),t._v(" "),r("p",{staticClass:"price white--text"},[r("span",{staticClass:"font-weight-bold"},[t._v("Price")]),t._v(" 15.000 AMD")])])],1)],1)],1)]}}],null,!0)})]}}],null,!0)})})),1)],1)}),[],!1,null,"78de1f0d",null);e.a=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardText:v.b,VHover:f.a,VIcon:m.a,VImg:w.a,VSheet:y.a,VSlideGroup:_.b,VSlideItem:x.a,VSlideYReverseTransition:j.g})},524:function(t,e,r){"use strict";var o={data:function(){return{email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}]}},methods:{submit:function(){this.$refs.observer.validate()}}},n=r(22),c=r(25),l=r.n(c),d=r(118),h=r(465),v=r(482),f=r(470),m=r(58),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{md:"8",sm:"12"}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{md:"6",sm:"10",xs:"12"}},[r("h2",{staticClass:"grey--text text-center mb-5"},[t._v("ԲԱԺԱՆՈՐԴԱԳՐՎԵԼ")]),t._v(" "),r("p",{staticClass:"grey--text "},[t._v(" Բաժանորդագրվեք Մեր նամակներին և առաջինը տեղեկացեք նորույթների, զեղչերի և ակցիաների վերաբերյալ:")]),t._v(" "),r("form",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{md:"10",sm:"12"}},[r("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),r("v-col",{staticClass:"text-right",attrs:{md:"2"}},[r("v-btn",{on:{click:t.submit}},[t._v("submit")])],1)],1)],1)])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:d.a,VCol:h.a,VContainer:v.a,VRow:f.a,VTextField:m.a})},541:function(t,e,r){"use strict";r(12),r(9),r(7),r(5),r(11);var o=r(1),n=r(183),c=r(160),l=r(3),d=r(0),h=r(40);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=Object(l.a)(n.a,h.a);e.a=m.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(c.a,{staticClass:"v-carousel__item",props:f({},this.$attrs,{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(d.q)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})},542:function(t,e,r){"use strict";var o=r(504);r.n(o).a},543:function(t,e,r){(e=r(14)(!1)).push([t.i,".blue-text[data-v-16379eb4]{color:#01235e}.blue_bg[data-v-16379eb4]{background-color:#01235e}.price[data-v-16379eb4]{font-size:18px}.v-card--reveal[data-v-16379eb4]{align-items:center;bottom:0;justify-content:center;position:absolute;width:100%}",""]),t.exports=e},544:function(t,e,r){"use strict";var o=r(453),n=r(59),c=r(3);e.a=Object(c.a)(o.a,Object(n.a)("slideGroup")).extend({name:"v-slide-item"})},545:function(t,e,r){"use strict";var o=r(507);r.n(o).a},546:function(t,e,r){(e=r(14)(!1)).push([t.i,".longImage[data-v-3125788d]{padding-top:25px;padding-bottom:25px}@media (max-width:1263px){.longImage[data-v-3125788d]{padding-top:0}.longImage[data-v-3125788d],.thirdImage[data-v-3125788d]{max-height:250px}}",""]),t.exports=e},575:function(t,e,r){"use strict";r(12),r(9),r(7),r(5),r(11);var o=r(1),n=(r(18),r(502),r(184)),c=r(63),l=r(29),d=r(208),h=r(61),v=h.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return h.a.options.computed.classes.call(this)}},methods:{genData:h.a.options.methods.genData}}),f=r(0),m=r(13);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=n.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},n.a.options.computed.classes.call(this),{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(m.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:n.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,r=[],i=0;i<e;i++){var o=this.$createElement(c.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(l.a,{props:{size:18}},this.delimiterIcon)]);r.push(o)}return this.$createElement(v,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},r)},genProgress:function(){return this.$createElement(d.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=n.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(f.g)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},577:function(t,e,r){"use strict";r.r(e);r(33);var o=r(6),n={data:function(){return{slides:[{text:"First",src:"/slider_1.jpg",color:"#ffffff"},{text:"Second",src:"/slider_2.jpg",color:"#ffffff"},{text:"Third",src:"/slider_3.jpg",color:"#ffffff"},{text:"Fourth",src:"/slider_4.jpg",color:"#ffffff"}],sliderMaxWidth:750}},mounted:function(){this.onResize()},methods:{onResize:function(){window.innerWidth<=960?this.sliderMaxWidth=550:this.sliderMaxWidth=750,this.windowSize={x:window.innerWidth,y:window.innerHeight}}}},c=r(22),l=r(25),d=r.n(l),h=r(575),v=r(541),f=r(470),m=r(145),w=r.n(m),y=r(60),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-carousel",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],attrs:{cycle:"",height:t.sliderMaxWidth,"hide-delimiters":!0,"show-arrows-on-hover":""}},t._l(t.slides,(function(e,i){return r("v-carousel-item",{key:i,attrs:{src:e.src}},[r("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[r("div",{staticClass:"display-3",style:{color:e.color}},[t._v(t._s(e.text)+" Slide")])])],1)})),1)}),[],!1,null,null,null),_=component.exports;d()(component,{VCarousel:h.a,VCarouselItem:v.a,VRow:f.a}),w()(component,{Resize:y.a});var x={data:function(){return{model:null,slides:[{text:"US Polo",src:"/uspolo.jpg",color:"#ffffff"},{text:"Second",src:"/giordano.jpg",color:"#000000"},{text:"US Polo",src:"/uspolo.jpg",color:"#ffffff"}]}},computed:{brands:function(){return this.$store.getters["brands/brands"]}}},j=r(187),C=r(160),O=r(55),S=Object(c.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-sheet",{staticClass:"mx-auto",attrs:{"max-width":""}},[e("v-row",{attrs:{justify:"center"}},this._l(this.brands,(function(t,i){return e("v-card",{key:i,staticClass:"ma-4",attrs:{color:t.color,height:"300",width:"30%","min-width":"300",to:"/brand/"+t.id+"?page=1"}},[e("v-img",{attrs:{src:t.image,height:"300",contain:!0}})],1)})),1)],1)}),[],!1,null,null,null),V=S.exports;d()(S,{VCard:j.a,VImg:C.a,VRow:f.a,VSheet:O.a});var k={props:["count"],data:function(){return{model:null}}},P=(r(542),r(118)),T=r(84),$=r(490),D=r(100),I=r(124),E=r(544),R=r(47),z=Object(c.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticClass:"mx-auto",attrs:{"max-width":"1300"}},[r("v-slide-group",{staticClass:"pa-4",attrs:{"center-active":"","show-arrows":!1},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.count,(function(e){return r("v-slide-item",{key:e,scopedSlots:t._u([{key:"default",fn:function(e){e.active,e.toggle;return[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[r("v-card",{staticClass:"ma-4",attrs:{color:"grey lighten-4",width:"270"}},[r("v-img",{attrs:{"aspect-ratio":16/9,src:"https://cdn.vuetifyjs.com/images/cards/kitchen.png"}}),t._v(" "),r("v-slide-y-reverse-transition",[r("v-card-text",{directives:[{name:"show",rawName:"v-show",value:o,expression:"hover"}],staticClass:"pt-6",staticStyle:{position:"absolute",bottom:"0","background-color":"#b20839c9",height:"80px"}},[r("v-btn",{staticClass:"white--text",attrs:{absolute:"",color:"#01235e",fab:"",right:"",top:""}},[r("v-icon",[t._v("mdi-cart")])],1),t._v(" "),r("v-btn",{staticClass:"white--text",staticStyle:{right:"90px"},attrs:{absolute:"",color:"#01235e",fab:"",top:""}},[r("v-icon",[t._v("mdi-heart")])],1),t._v(" "),r("h3",{staticClass:" font-weight-light font-weight-bold white--text mb-2"},[t._v("QW cooking utensils")]),t._v(" "),r("p",{staticClass:"price white--text"},[r("span",{staticClass:"font-weight-bold"},[t._v("Price")]),t._v(" 15.000 AMD")])],1)],1)],1)]}}],null,!0)})]}}],null,!0)})})),1)],1)}),[],!1,null,"16379eb4",null),B=z.exports;d()(z,{VBtn:P.a,VCard:j.a,VCardText:T.b,VHover:$.a,VIcon:D.a,VImg:C.a,VSheet:O.a,VSlideGroup:I.b,VSlideItem:E.a,VSlideYReverseTransition:R.g});var A=r(523),M=r(524),W={name:"MiddleBanner",data:function(){return{contain:!0}},mounted:function(){this.onResize()},methods:{onResize:function(){window.innerWidth<=1263?this.contain=!1:this.contain=!0,this.windowSize={x:window.innerWidth,y:window.innerHeight}}}},H=(r(545),r(465)),L=r(482),N=Object(c.a)(W,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"resize",rawName:"v-resize",value:this.onResize,expression:"onResize"}]},[e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{lg:"8",md:"12"}},[e("v-row",[e("v-col",{attrs:{lg:"8",md:"12"}},[e("v-row",[e("v-col",{attrs:{cols:"6"}},[e("v-img",{attrs:{src:"/men.jpg","max-height":"280",height:"100%"}})],1),this._v(" "),e("v-col",{attrs:{cols:"6"}},[e("v-img",{attrs:{src:"/women.jpg",position:"top","max-height":"280"}})],1)],1),this._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-img",{staticClass:"thirdImage",attrs:{src:"/shouse_red.jpg",contain:this.contain}})],1)],1)],1),this._v(" "),e("v-col",{staticClass:"longImage",attrs:{lg:"4",md:"12"}},[e("v-img",{attrs:{src:"/accessories.jpg",height:"100%"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,"3125788d",null),F=N.exports;d()(N,{VCol:H.a,VContainer:L.a,VImg:C.a,VRow:f.a}),w()(N,{Resize:y.a});var G={fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("brands/fetch");case 3:return e.next=5,r.dispatch("products/filterAsType",["new"]);case 5:return e.next=7,r.dispatch("products/filterAsType",["best"]);case 7:return e.next=9,r.dispatch("products/filterAsType",["sales"]);case 9:return e.next=11,r.dispatch("wishListAndCart/fetch");case 11:return e.next=13,r.dispatch("menus/fetch");case 13:case"end":return e.stop()}}),e)})))()},components:{HeadSlider:_,Brands:V,ProductsSlider:B,PromoProducts:A.a,Subscribe:M.a,MiddleBanner:F},data:function(){return{justifyCenter:"center"}}},J=Object(c.a)(G,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("HeadSlider"),t._v(" "),r("v-container",[r("Brands"),t._v(" "),r("MiddleBanner"),t._v(" "),r("h1",{staticClass:"text-center mb-5"},[t._v("Top Sales")]),t._v(" "),r("PromoProducts",{attrs:{count:7,type:"best"}}),t._v(" "),r("h1",{staticClass:"text-center mb-5"},[t._v("New Products")]),t._v(" "),r("PromoProducts",{attrs:{count:7,type:"new"}}),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{lg:"8",md:"12"}},[r("v-img",{attrs:{src:"/baner.png",cover:"",width:"100%","max-height":"640","aspect-ratio":"1"}})],1)],1),t._v(" "),r("Subscribe")],1)],1)}),[],!1,null,null,null);e.default=J.exports;d()(J,{VCol:H.a,VContainer:L.a,VImg:C.a,VRow:f.a})}}]);