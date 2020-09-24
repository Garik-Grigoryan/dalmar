import Vue from 'vue'
import vueAnalytics from 'vue-analytics'

const getGDPR = localStorage.getItem('GDPR:accepted')

// if (typeof getGDPR !== 'undefined' && getGDPR === 'true') {
//   Vue.use(vueAnalytics, {
//     id: 'UA-177199673-1',
//     disabled: false,
//     debug: {
//       enabled: true,
//       trace: true,
//       sendHitTask: true
//     },
//   })
// } else if (typeof getGDPR !== 'undefined' && getGDPR === 'false') {
//   Vue.use(vueAnalytics, {
//     id: 'UA-177199673-1',
//     disabled: true,
//     debug: {
//       enabled: true,
//       trace: true,
//       sendHitTask: true
//     }
//   })
// }
export default (ctx) => {
  const getGDPR = localStorage.getItem("GDPR:accepted");

  Vue.use(vueAnalytics, {
    id: "UA-177199673-1",
    disabled: () => {
      const getGDPR = window.localStorage.getItem("GDPR:accepted");
      if (typeof getGDPR !== null && getGDPR === "no") {
        return true;
      }
      if (typeof getGDPR !== null && getGDPR === "yes") {
        return false;
      }
      return true;
    },
    router: ctx.app.router,
    //Remove debug before deployment
    debug: {
      enabled: false,
      trace: true,
      sendHitTask: true
    },
    autoTracking: {
      pageviewOnLoad: false,
      page: false,
    },
  });
};
