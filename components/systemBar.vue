<template>
  <div>
    <v-navigation-drawer v-resize="onResize" v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" :right="right" fixed app >
      <v-list>
        <v-list-item v-for="(item, i) in rightSide" :key="i" :to="item.to" router exact >
          <v-list-item-content >
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-system-bar height="64" color="#01235E" fixed app dark id="create" >
      <v-col cols="5">
        <v-row justify="end" class="hidden-sm-and-down" no-gutters >
          <v-menu :open-on-hover="true" bottom offset-y v-for="(item, i) in leftSide" dark :key="i">
            <template v-slot:activator="{ on }">
              <v-btn exact :to="localePath(item.to)" router exact color="#fff" text class="my-2 nav_button" v-on="on" bottom >
                {{item.title}}
              </v-btn>
            </template>
            <v-list v-if="item.items" style="background-color: #01235E">
              <v-list-item-content style="align-items: normal">
                <v-list-item-group v-if="item.items" v-for="(item, index) in item.items" :key="index">
                  <v-list-item style="text-align: center;" exact :to="localePath(item.to)">
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-divider style="background-color: #fff"></v-divider>
                  <v-list-item-content class="">
                    <v-list-item-group style="max-width: 150px;" v-if="item.items" v-for="(item, index) in item.items" :key="index">
                      <v-list-item style="text-align: center;" exact :to="localePath(item.to)">
                        <v-list-item-title>
                          {{ item.title }}
                        </v-list-item-title>
                      </v-list-item>
                      <v-list-item-content class="mainDivide">
                        <v-list-item-group style="max-width: 150px;" v-if="item.items" v-for="(item, index) in item.items" :key="index" exact :to="localePath(item.to)">
                          <v-list-item-title style="text-align: center;">{{ item.title }}</v-list-item-title>
                        </v-list-item-group>
                        <v-list-item v-else exact :to="localePath(item.to)">
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list-item-content>
                    </v-list-item-group>
                    <v-list-item v-else exact :to="localePath(item.to)">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list-item-content>
                </v-list-item-group>
                <v-list-item v-else exact :to="localePath(item.to)">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
                <v-list-item-group>
                  <v-list-item disabled>
                    <v-img src="/men.jpg" max-width="250" min-height="400" cover></v-img>
                  </v-list-item>
                </v-list-item-group>
              </v-list-item-content>
            </v-list>
          </v-menu>
        </v-row>
      </v-col>
      <v-col cols="2" class="text-center">
        <nuxt-link :to="localePath('/')" style="text-decoration: none;">
          <v-toolbar-title class="font-weight-bold" style="color: #b20839; font-size: 35px" v-text="$t('title')" />
        </nuxt-link>
      </v-col>
      <v-col cols="5">
        <v-row justify="start" class="hidden-sm-and-down" no-gutters >

          <v-menu :open-on-hover="true" bottom offset-y v-for="(item, i) in rightSide" dark :key="i">
            <template v-slot:activator="{ on }">
              <v-btn exact :to="localePath(item.to)" router exact color="#fff" text class="my-2 nav_button" v-on="on" bottom >
                {{item.title}}
              </v-btn>
            </template>
            <v-list v-if="item.items" style="background-color: #01235E">
              <v-list-item-content style="align-items: normal">
                <v-list-item-group  style="max-width: 150px;"  v-if="item.items" v-for="(item, index) in item.items" :key="index">
                  <v-list-item style="text-align: center;" exact-active-class="activeLink" exact :to="localePath(item.to)">
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-divider style="background-color: #fff"></v-divider>
                  <v-list-item-content class="">
                    <v-list-item-group style="max-width: 150px;" v-if="item.items" v-for="(item, index) in item.items" :key="index">
                      <v-list-item style="text-align: center;" exact exact-active-class="activeLink" :to="localePath(item.to)">
                        <v-list-item-title>
                          {{ item.title }}
                        </v-list-item-title>
                      </v-list-item>
                      <v-list-item-content class="mainDivide">
                        <v-list-item-group style="max-width: 150px;" v-if="item.items" v-for="(item, index) in item.items" :key="index" exact exact-active-class="activeLink" :to="localePath(item.to)">
                          <v-list-item-title style="text-align: center;">{{ item.title }}</v-list-item-title>
                        </v-list-item-group>
                        <v-list-item v-else  exact exact-active-class="activeLink" :to="localePath(item.to)">
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list-item-content>
                    </v-list-item-group>
                    <v-list-item v-else exact exact-active-class="activeLink" :to="localePath(item.to)">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list-item-content>
                </v-list-item-group>
                <v-list-item v-else exact exact-active-class="activeLink" :to="localePath(item.to)">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list-item-content>
            </v-list>
          </v-menu>
        </v-row>
      </v-col>
      <v-row justify="end" class="hidden-lg-and-down" no-gutters style="position: absolute; right: 0" id="dropdown-language">
        <v-badge color="error" content="6" >
          <v-btn :to="localePath('/wishlist')" color="#fff" text class="my-2 nav_button" width="50px" >
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
        </v-badge>
        <v-badge color="error" content="6" >
          <v-btn :to="localePath('/cart')" color="#fff" text class="my-2 nav_button" width="50px" >
            <v-icon >mdi-cart-outline</v-icon>
          </v-btn>
        </v-badge>

        <v-menu  v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y bottom >
          <template v-slot:activator="{ on }">
            <v-btn color="#fff" text class="my-2 nav_button" v-on="on" >
              <v-icon >mdi-account-outline</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-list v-if="authenticated" style="background-color: #01235E" dark>
              <v-list-item :to="localePath('/account')" v-text="$t('myAccount')">
              </v-list-item>
              <v-list-item @click="logout" v-text="$t('logout')">
              </v-list-item>
            </v-list>
            <v-tabs v-else background-color="#01235E" class="elevation-2" dark :centered="true" :prev-icon="'mdi-arrow-left-bold-box-outline'" :next-icon="'mdi-arrow-right-bold-box-outline'" :icons-and-text="true" >
              <v-tabs-slider></v-tabs-slider>
              <v-tab :href="`#tab-1`" >
                Login
              </v-tab>
              <v-tab-item :value="'tab-1'">
                <v-card flat tile >
                  <v-card-text>
                    <v-form @submit.prevent="false" ref="form" v-model="valid" :lazy-validation="true" >
                      <v-alert v-if="errors.email" text type="error">
                        {{errors.email[0]}}
                      </v-alert>
                      <v-text-field v-model="loginForm.email" :rules="emailRules" label="E-mail" required ></v-text-field>
                      <v-text-field v-model="loginForm.password" :rules="passwordRules" label="Password" required ></v-text-field>

                      <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required ></v-checkbox>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="loginAction">Login</v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <v-tab :href="`#tab-2`" >
                Register
              </v-tab>
              <v-tab-item :value="'tab-2'">
                <v-card flat tile >
                  <v-card-text>
                    <v-form @submit.prevent="false" ref="form" v-model="valid" :lazy-validation="true" >
                      <v-alert v-if="registrationError" text type="error">
                        {{registrationError.data.errors.email[0]}}
                      </v-alert>
                      <v-text-field v-model="registerForm.name" :rules="nameRules" label="Name" required ></v-text-field>
                      <v-text-field v-model="registerForm.email" :rules="emailRules" label="E-mail" required ></v-text-field>
                      <v-text-field v-model="registerForm.password" :rules="passwordRules" label="Password" required ></v-text-field>
                      <v-text-field v-model="registerForm.password_confirmation" :rules="passwordConfirmation" label="Password" required ></v-text-field>
                      <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required ></v-checkbox>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="registerAction">Register</v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>

          </v-card>
        </v-menu>
          <v-overflow-btn
            v-model="MainLanguage"
            :items="languages"
            label="Overflow Btn"
            target="#dropdown-language"
            style="width: 85px; height: 50px; margin-top: 0; padding: 0;"
          >
              <template v-slot:selection="{item, index}">
                  <v-img  :src="item.icon" max-width="50"></v-img>
              </template>
              <template v-slot:item="{item, index}">
                <nuxt-link :to="switchLocalePath(item.to)" style="text-decoration: none;">
                  <v-img  :src="item.icon" max-width="50"></v-img>
                </nuxt-link>
              </template>
          </v-overflow-btn>

      </v-row>
      <v-app-bar-nav-icon class="hidden-md-and-up" style="position: absolute; right: 0" @click.stop="drawer = !drawer" />
      <v-speed-dial class="hidden-lg-and-up"  v-model="fab" :top="top" :bottom="bottom" :right="right" :left="left" :direction="direction" :open-on-hover="hover" :transition="transition" >
        <template v-slot:activator>
          <v-btn small  v-model="fab" color="#01235E" dark fab >
            <v-icon style="margin: 0;" v-if="fab">mdi-close</v-icon>
            <v-icon style="margin: 0;" v-else>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-badge color="error" content="6" >
          <v-btn to="/wishlist" fab color="#01235E" class="my-2 nav_button" small >
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
        </v-badge>
        <v-badge color="error" content="6" >
          <v-btn to="/cart" fab color="#01235E" class="my-2 nav_button" small >
            <v-icon >mdi-cart-outline</v-icon>
          </v-btn>
        </v-badge>

        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x >
          <template v-slot:activator="{ on }">
            <v-btn fab color="#01235E" class="my-2 nav_button" small v-on="on" >
              <v-icon style="margin: 0;">mdi-account-outline</v-icon>
            </v-btn>
          </template>
        </v-menu>
        <v-btn v-for="(item, key) in languages" :key="key" to="/cart" fab color="#01235E" class="my-2 nav_button" small >
          <v-img :src="item.icon" max-width="50"></v-img>
        </v-btn>
      </v-speed-dial>
    </v-system-bar>

  </div>
</template>

<script>
    export default {
      data () {
          return {
            registrationError: false,
            loginError: false,
            fab: false,
            direction: 'bottom',
            fling: false,
            hover: false,
            tabs: null,
            top: false,
            bottom: true,
            left: false,
            transition: 'slide-y-reverse-transition',
            registerForm: {
              name: '',
              email: '',
              password: '',
              password_confirmation: '',
            },
            loginForm: {
              email: '',
              password: ''
            },
            passwordRules: [
              v => !!v || 'Password is required',
            ],
            passwordConfirmation: [
              v => !!v || 'Confirm password',
              v => v === this.registerForm.password || 'Password is note correct'
            ],
            nameRules: [
              v => !!v || 'Name is required',
            ],
            emailRules: [
              v => !!v || 'E-mail is required',
              v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            clipped: true,
            right: true,
            miniVariant: false,
            drawer: false,
            valid: true,
            checkbox: false,
            menu: false,
            MainLanguage: "armenian",
            languages: [
              { text: 'armenian', to: 'am', icon: '/arm.png', callback: () => console.log('list') },
              { text: 'russian', to: 'ru', icon: '/rus.png', callback: () => console.log('favorite') },
              { text: 'english', to: 'en', icon: '/eng.png', callback: () => console.log('delete') },
            ],
            leftSide: [
              { title: 'Brands',
                to: '/',
                items: [
                  { title: 'Polo',
                    to: '/brand/polo',
                    items: [
                      {
                        title: 'For Men',
                        to: '/brand/polo',
                        items: [
                          {title: 'Shoes', to: '/'},
                          {title: 'Clothing', to: '/'},
                          {title: 'Bags', to: '/'},
                          {title: 'Eyewear', to: '/'},
                          {title: 'Watches', to: '/'},
                        ],
                      },
                      {
                        title: 'For Women',
                        to: '/brand/polo',
                        items: [
                          {title: 'Shoes', to: '/'},
                          {title: 'Clothing', to: '/'},
                          {title: 'Bags', to: '/'},
                          {title: 'Eyewear', to: '/'},
                          {title: 'Watches', to: '/'},
                        ],
                      }
                    ],
                  },
                  { title: 'Giordano',
                    to: '/brand/Giordano',
                    items: [
                      {
                        title: 'For Men',
                        to: '/brand/polo',
                        items: [
                          {title: 'Shoes', to: '/'},
                          {title: 'Clothing', to: '/'},
                          {title: 'Bags', to: '/'},
                          {title: 'Eyewear', to: '/'},
                          {title: 'Watches', to: '/'},
                        ],
                      }
                    ],
                  },
                  { title: 'Giordano',
                    to: '/brand/Giordano',
                    items: [
                      {
                        title: 'For Women',
                        to: '/brand/polo',
                        items: [
                          {title: 'Shoes', to: '/'},
                          {title: 'Clothing', to: '/'},
                          {title: 'Bags', to: '/'},
                          {title: 'Eyewear', to: '/'},
                          {title: 'Watches', to: '/'},
                        ],
                      }
                    ],
                  },
                ],
              },
              { title: 'Sales',
                to: '/'
              },
              { title: 'News',
                to: '/'
              }
            ],
            rightSide: [
              {
                title: 'For Men',
                to: '/brand/polo',
                items: [
                  {
                    title: 'Shoes',
                    to: '/',
                    items: [
                      {title: 'Shoes', to: '/'},
                      {title: 'Clothing', to: '/'},
                      {title: 'Bags', to: '/'},
                      {title: 'Eyewear', to: '/'},
                      {title: 'Watches', to: '/'},
                    ],
                  },
                  {title: 'Clothing',  to: '/',
                    items: [
                      {title: 'Shoes', to: '/'},
                      {title: 'Clothing', to: '/'},
                      {title: 'Bags', to: '/'},
                      {title: 'Eyewear', to: '/'},
                      {title: 'Watches', to: '/'},
                    ],
                  },
                  {title: 'Bags', to: '/',
                    items: [
                      {title: 'Shoes', to: '/'},
                      {title: 'Clothing', to: '/'},
                      {title: 'Bags', to: '/'},
                      {title: 'Eyewear', to: '/'},
                      {title: 'Watches', to: '/'},
                    ],
                  },
                  {title: 'Eyewear',  to: '/',
                    items: [
                      {title: 'Shoes', to: '/'},
                      {title: 'Clothing', to: '/'},
                      {title: 'Bags', to: '/'},
                      {title: 'Eyewear', to: '/'},
                      {title: 'Watches', to: '/'},
                    ],
                  },
                ],
              },
              {
                title: 'For Women',
                to: '/brand/polo',
                items: [
                  {title: 'Shoes', to: '/'},
                  {title: 'Clothing', to: '/'},
                  {title: 'Bags', to: '/'},
                  {title: 'Eyewear', to: '/'},
                  {title: 'Watches', to: '/'},
                ],
              },
              {
                title: 'Contact Us',
                to: '/'
              }
            ],
          }
      },
      mounted () {
        this.onResize()
      },

      methods: {
        onResize () {
          if(window.innerWidth >= 960){
            this.drawer = false;
          }
          this.windowSize = { x: window.innerWidth, y: window.innerHeight }
        },
       async registerAction() {

         await this.$axios.post('http://localhost:8000/api/auth/register', this.registerForm).then(response => {
           this.menu = false;
           this.$auth.login({data: this.registerForm});
         }).catch(e => {
           this.registrationError = e.response;
         });
        },
       async loginAction() {
         await this.$auth.login({data: this.loginForm}).then(response => {
           this.menu = false;
         }).catch(e => {
           this.loginError = e.response;
         });
       },
        async logout(){
          await this.$auth.logout().then(response => {
            this.menu = false;

          }).catch(e => {


          });
        }
      },
    }
</script>

<style>
  .v-input__slot {
    border-color: transparent !important;
  }
  #create .v-speed-dial {
    position: absolute;
  }

  #create .v-btn--floating {
    position: relative;
  }
  #create .v-speed-dial--right {
    right: 10px;
  }
  #create .v-speed-dial--bottom {
    bottom: 13px;
  }
</style>
