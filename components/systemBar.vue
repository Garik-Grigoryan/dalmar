<template>
  <v-system-bar height="64" color="#01235E" fixed app dark >
    <v-row justify="end" class="hidden-sm-and-down" no-gutters >
      <v-menu :open-on-hover="true" bottom offset-y v-for="(item, i) in leftSide" dark :key="i">
        <template v-slot:activator="{ on }">
          <v-btn exact :to="item.to" router exact color="#fff" text class="my-2 nav_button" v-on="on" bottom >
            {{item.title}}
          </v-btn>
        </template>
        <v-list v-if="item.items" style="background-color: #01235E">
          <v-list-item-content style="align-items: normal">
            <v-list-item-group v-if="item.items" v-for="(item, index) in item.items" :key="index">
              <v-list-item style="text-align: center;" exact :to="item.to">
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
              <v-divider style="background-color: #fff"></v-divider>
              <v-list-item-content class="">
                <v-list-item-group style="max-width: 150px;" v-if="item.items" v-for="(item, index) in item.items" :key="index">
                  <v-list-item style="text-align: center;" exact :to="item.to">
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item-content class="mainDivide">
                    <v-list-item-group style="max-width: 150px;" v-if="item.items" v-for="(item, index) in item.items" :key="index" exact :to="item.to">
                      <v-list-item-title style="text-align: center;">{{ item.title }}</v-list-item-title>
                    </v-list-item-group>
                    <v-list-item v-else exact :to="item.to">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list-item-content>
                </v-list-item-group>
                <v-list-item v-else exact :to="item.to">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list-item-content>
            </v-list-item-group>
            <v-list-item v-else exact :to="item.to">
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
    <v-spacer />
    <nuxt-link to="/" style="text-decoration: none;">
      <v-toolbar-title class="font-weight-bold" style="color: #b20839; font-size: 35px" to="/" v-text="title" />
    </nuxt-link>
    <v-spacer />

    <v-row justify="start" class="hidden-sm-and-down" no-gutters >

      <v-menu :open-on-hover="true" bottom offset-y v-for="(item, i) in rightSide" dark :key="i">
        <template v-slot:activator="{ on }">
          <v-btn exact :to="item.to" router exact color="#fff" text class="my-2 nav_button" v-on="on" bottom >
            {{item.title}}
          </v-btn>
        </template>
        <v-list v-if="item.items" style="background-color: #01235E">
          <v-list-item-content style="align-items: normal">
            <v-list-item-group  style="max-width: 150px;"  v-if="item.items" v-for="(item, index) in item.items" :key="index">
              <v-list-item style="text-align: center;" exact-active-class="activeLink" exact :to="item.to">
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
              <v-divider style="background-color: #fff"></v-divider>
              <v-list-item-content class="">
                <v-list-item-group style="max-width: 150px;" v-if="item.items" v-for="(item, index) in item.items" :key="index">
                  <v-list-item style="text-align: center;" exact exact-active-class="activeLink" :to="item.to">
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item-content class="mainDivide">
                    <v-list-item-group style="max-width: 150px;" v-if="item.items" v-for="(item, index) in item.items" :key="index" exact exact-active-class="activeLink" :to="item.to">
                      <v-list-item-title style="text-align: center;">{{ item.title }}</v-list-item-title>
                    </v-list-item-group>
                    <v-list-item v-else  exact exact-active-class="activeLink" :to="item.to">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list-item-content>
                </v-list-item-group>
                <v-list-item v-else exact exact-active-class="activeLink" :to="item.to">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list-item-content>
            </v-list-item-group>
            <v-list-item v-else exact exact-active-class="activeLink" :to="item.to">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item-content>
        </v-list>
      </v-menu>
    </v-row>
    <v-row justify="end" class="hidden-sm-and-down" no-gutters style="position: absolute; right: 0" >
      <v-badge color="error" content="6" >
        <v-btn to="/wishlist" color="#fff" text class="my-2 nav_button" width="50px" >
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
      </v-badge>
      <v-badge color="error" content="6" >
        <v-btn to="/cart" color="#fff" text class="my-2 nav_button" width="50px" >
          <v-icon >mdi-cart-outline</v-icon>
        </v-btn>
      </v-badge>
      <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x >
        <template v-slot:activator="{ on }">
          <v-btn color="#fff" text class="my-2 nav_button" v-on="on" >
            <v-icon >mdi-account-outline</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-tabs background-color="deep-purple accent-4" class="elevation-2" dark :centered="true" :prev-icon="'mdi-arrow-left-bold-box-outline'" :next-icon="'mdi-arrow-right-bold-box-outline'" :icons-and-text="true" >
            <v-tabs-slider></v-tabs-slider>

            <v-tab :href="`#tab-1`" >
              Login
            </v-tab>

            <v-tab-item :value="'tab-1'">
              <v-card flat tile >
                <v-card-text>
                  <v-form ref="form" v-model="valid" :lazy-validation="true" >

                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>
                    <v-text-field v-model="password" :rules="passwordRules" label="Password" required ></v-text-field>

                    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required ></v-checkbox>
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
                  <v-form ref="form" v-model="valid" :lazy-validation="true" >
                    <v-text-field v-model="name" :rules="nameRules" label="Name" required ></v-text-field>

                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>
                    <v-text-field v-model="password" :rules="passwordRules" label="Password" required ></v-text-field>
                    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required ></v-checkbox>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>

          </v-tabs>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="menu = false">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>

    </v-row>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />

  </v-system-bar>
</template>

<script>
    export default {
        name: "systemBar",
      data () {
          return {
            password: '',
            passwordRules: [
              v => !!v || 'Password is required',
            ],
            name: '',
            nameRules: [
              v => !!v || 'Name is required',
            ],
            email: '',
            emailRules: [
              v => !!v || 'E-mail is required',
              v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            valid: true,
            checkbox: false,
            menu: false,
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
            title: 'Dalmar',
          }
      }
    }
</script>

<style scoped>

</style>
