import Vue from 'vue'
import PhoneNumber from 'awesome-phonenumber'

if (process.client) {
  Vue.use(PhoneNumber)
}
