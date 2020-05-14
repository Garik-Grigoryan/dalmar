<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-toolbar-title style="display: flex; justify-content: space-between;">
          Add new brands
        </v-toolbar-title>
        <v-form ref="form" v-model="valid" >
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required ></v-text-field>
          <v-col cols="5" class="pl-0">
            <v-text-field type="number" v-model="order" :counter="10" :rules="nameRules" label="Order" required ></v-text-field>
          </v-col>
          <v-col cols="3" class="pl-0">
            <v-card @click.stop="dialog = true" class="mx-auto add_iamge" min-height="200" >
              <v-icon size="40">mdi-plus</v-icon>
            </v-card>
          </v-col>
          <v-btn :disabled="!valid" color="success" class="mr-4" >Save</v-btn>
        </v-form>
      </v-col>
    </v-row>



    <v-dialog v-model="dialog" max-width="996" >
      <v-card>
        <v-card-title  style="display: flex; justify-content: space-between;" class="headline">Choose image <v-btn small @click.stop="uploadDialog = true" dark color="purple" >Add new image</v-btn></v-card-title>
        <v-container fluid>
          <v-row>
            <v-col v-for="(image, i) in images" :key="i" class="d-flex child-flex" cols="3" >
              <v-card flat tile class="d-flex">
                <v-img :src="image" aspect-ratio="1" class="grey lighten-2" >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center" >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false" >close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="uploadDialog" max-width="400" >
      <v-card>
        <v-card-title  style="display: flex; justify-content: space-between;" class="headline">Choose image</v-card-title>
        <v-container fluid>
          <v-file-input v-model="files" :rules="fileRules" @change="uploadImage" label="Choose Image" accept="image/*" />
        </v-container>
<!--        <v-card-actions>-->
<!--          <v-spacer></v-spacer>-->
<!--          <v-btn color="green darken-1" text @click="uploadImage($event)" >Upload</v-btn>-->
<!--        </v-card-actions>-->
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
    export default {
      name: "new",
      layout: 'dashboard',
      middleware: 'admin',
      async fetch({store}) {
        if(store.getters['multimedia/images'].length === 0){
          await store.dispatch('multimedia/fetch')
        }
      },
      data () {
        return {
          valid: true,
          name: '',
          order: '',
          dialog: false,
          uploadDialog: false,
          nameRules: [
            v => !!v || 'Field is required',
          ],
          files: [],
          fileRules: [
            v => !!v || 'File is required',
            v => v.size > 524288 || 'File should be les then 500 KB',
          ]
        }
      },
      methods: {
        uploadImage(event) {
          this.$axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
          this.uploadDialog = false;
          let data = new FormData();
          data.append('name', 'image');
          data.append('image', this.files);

          let config = {
            headers : {
              'Content-Type' : this.files.type
            }
          }
          this.$axios.$post('http://localhost:8000/api/multimedia/upload', data).then(
            response => {
              console.log('image upload response > ', response)
            }
          ).catch(e => {
            console.log(e);
          })
        }
      },
      computed: {
        images() {
          return this.$store.getters['multimedia/images'];
        }
      },
    }
</script>

<style scoped>
  .add_iamge{
    position: relative;
    cursor: pointer;
  }
  .add_iamge i{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
