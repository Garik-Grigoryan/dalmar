import Vue from 'vue'
import VuetifyConfirm from 'vuetify-confirm'

export default ({ app }) => {
  Vue.use(VuetifyConfirm, {
    vuetify: app.vuetify,
    buttonTrueText: 'Accept',
    buttonFalseText: 'Discard',
    color: 'warning',
    icon: 'mdi-alert-circle-outline',
    title: 'Warning',
    width: 400,
    property: '$confirm'
  })
}
