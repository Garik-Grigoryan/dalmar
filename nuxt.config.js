import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00c48d' },
  /*
  ** Global CSS
  */
  css: [
    'quill/dist/quill.core.css',
    // for snow theme
    'quill/dist/quill.snow.css',
    // for bubble theme
    'quill/dist/quill.bubble.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/node_modules/vee-validate',
    './plugins/mixins/validation',
    './plugins/mixins/user',
    './plugins/axios',
    {
      src: './plugins/GoogleAnalytics.js',
      mode: 'client'
    },
    { src: '~plugins/vuedraggable.js', ssr: false },
    { src: '~plugins/editor', ssr: false }
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/login', method: 'post', propertyName: 'token'
          },
          checkPassword: {
            url: '/auth/checkPassword', method: 'post', propertyName: 'password'
          },
          user: {
            url: 'account', method: 'get', propertyName: 'data'
          },
          logout: {
            url: 'logout', method: 'get'
          }
        }
      }
    },
    redirect: {
      login: false,
      home: false
    }
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['nuxt-i18n', {
      lazy:true,
      locales: [
        {
          name: 'armenian',
          code: 'am',
          iso: 'am-ER',
          file: 'am-ER.js'
        },
        {
          name: 'russian',
          code: 'ru',
          iso: 'ru-MOS',
          file: 'ru-MOS.js'
        },
        {
          name: 'english',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        },
      ],
      langDir: 'lang/',
      defaultLocale: 'am',
    }],
    'cookie-universal-nuxt',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://apidavmar.neoteric-software.com/api'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ["vee-validate/dist/rules"],
    extend (config, ctx) {
    }
  }
}
