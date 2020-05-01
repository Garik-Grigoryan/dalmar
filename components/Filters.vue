<template>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      fixed
      app
      :clipped="true"
    >
      <v-list-item class="px-2 mt-3">
        <v-img src="/poloLogo.png" width="80%"  :contain="true"></v-img>

<!--        <v-list-item-title>John Leider</v-list-item-title>-->

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item>
          <v-text-field label="Search">
            <v-icon slot="append">mdi-magnify</v-icon>
          </v-text-field>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
              <div v-if="item.type === 'color'">
                <v-item-group
                  :multiple="true"
                >
                  <v-row>
                    <v-item  v-for="(color, n) in item.data" :key="n" v-slot:default="{ active, toggle }">
                      <v-card
                        :color="color.toLowerCase()"
                        class="d-flex text-center align-center mx-3"
                        dark
                        height="30"
                        width="30"
                        @click="toggle"
                      >
                        <v-scroll-y-transition>
                          <v-icon
                            v-if="active"
                            color="white"
                            size="20"
                            v-text="'mdi-close-circle-outline'"
                            class="mx-auto"
                          ></v-icon>
                        </v-scroll-y-transition>
                      </v-card>
                    </v-item>
                  </v-row>
                </v-item-group>
              </div>
                <v-combobox
                  v-else
                  v-model="item.select"
                  :items="item.data"
                  label=""
                  dense
                  chips
                  small-chips
                  multiple
                >

                </v-combobox>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Sex', icon: 'mdi-home-city', data: ['Men', 'Women',], select: [], type: 'sex' },
          { title: 'Size', icon: 'mdi-account', data: ['S', 'M', 'XS', 'L'], select: [], type: 'size'},
          { title: 'Color', icon: 'mdi-account-group-outline', data: ['#dbdbdb', 'Green', 'Black', 'Red'], select: [], type: 'color'},
        ],
        select: [],
        mini: false,
      }
    },
  }
</script>
