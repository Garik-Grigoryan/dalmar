(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{595:function(e,r,t){"use strict";t.r(r);t(33);var o=t(6),n={layout:"dashboard",data:function(){return{name:"login",checkbox:!1,loginForm:{email:"",password:""},nameRules:[function(e){return!!e||"Name is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"}]}},methods:{loginAction:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$auth.login({data:e.loginForm}).then((function(r){e.menu=!1,e.$router.push("/dashboard")})).catch((function(r){e.loginError=r.response}));case 2:case"end":return r.stop()}}),r)})))()}}},l=t(22),c=t(25),d=t.n(c),m=t(464),v=t(119),f=t(188),w=t(84),x=t(467),h=t(468),k=t(469),_=t(473),V=t(474),F=t(58),component=Object(l.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{lg:"4",md:"6",sm:"12"}},[t("v-card",{attrs:{flat:"",tile:"",elevation:3}},[t("v-card-title",[e._v("Login")]),e._v(" "),t("v-card-text",[t("v-form",{ref:"form",attrs:{"lazy-validation":!0},on:{submit:function(e){return e.preventDefault(),(!1)(e)}}},[e.errors.email?t("v-alert",{attrs:{text:"",type:"error"}},[e._v("\n              "+e._s(e.errors.email[0])+"\n            ")]):e._e(),e._v(" "),t("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.loginForm.email,callback:function(r){e.$set(e.loginForm,"email",r)},expression:"loginForm.email"}}),e._v(" "),t("v-text-field",{attrs:{rules:e.passwordRules,label:"Password",type:"password",required:""},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}}),e._v(" "),t("v-checkbox",{attrs:{rules:[function(e){return!!e||"You must agree to continue!"}],label:"Do you agree?",required:""},model:{value:e.checkbox,callback:function(r){e.checkbox=r},expression:"checkbox"}}),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{attrs:{color:"primary",text:""},on:{click:e.loginAction}},[e._v("Login")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"ad0d9b18",null);r.default=component.exports;d()(component,{VAlert:m.a,VBtn:v.a,VCard:f.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VCheckbox:x.a,VCol:h.a,VForm:k.a,VRow:_.a,VSpacer:V.a,VTextField:F.a})}}]);