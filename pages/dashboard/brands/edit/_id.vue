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
          <v-row>
            <v-col v-if="selectedImages !== ''" class=" d-flex child-flex" cols="3" >
              <v-hover v-slot:default="{ hover }">
                <v-card class="d-flex">
                  <v-img :src="selectedImages"  aspect-ratio="1" class="grey lighten-2" >
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center" >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                    <div v-show="hover" class="align-self-center" style="position:relative; height: 100%;">
                      <v-btn @click="removeImage"  icon fab style=" position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); ">
                        <v-icon size="50" color="error">
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
            <v-col cols="3" class="pl-0">
              <v-card @click.stop="dialog = true" class="mx-auto add_iamge" min-height="200" >
                <v-icon size="40">mdi-plus</v-icon>
              </v-card>
            </v-col>
          </v-row>


          <v-btn :disabled="!valid" @click="updateBrand" color="success" class="mr-4" >Update</v-btn>
        </v-form>
      </v-col>
    </v-row>



    <v-dialog v-model="dialog" max-width="996" >
      <v-card>
        <v-card-title  style="display: flex; justify-content: space-between;" class="headline">Choose image <v-btn small @click.stop="uploadDialog = true" dark color="purple" >Add new image</v-btn></v-card-title>
        <v-container fluid>
          <v-row>
            <v-col v-for="(image, i) in images" :key="i" class="d-flex child-flex" cols="3" >
              <v-card flat tile class="d-flex" :data-url="image.path" @click="selectImage($event, image.path)">
                <v-img :src="image.path" aspect-ratio="1" class="grey lighten-2" >
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
          <v-form v-model="imageUpladForm">
            <v-text-field v-model="imageName" :rules="nameRules" label="Name" required ></v-text-field>
            <v-file-input v-model="files" :rules="fileRules" @change="changeFunc" label="Choose Image" accept="image/*" />
          </v-form>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!imageUpladForm" color="green darken-1" text @click="uploadImage" >Upload</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
    export default {
        name: "",
        layout: 'dashboard',
        middleware: 'admin',
        async fetch({route, store}) {
          await store.dispatch('brands/getBrand', [route.params.id])
        },
        data () {
          return {
            valid: true,
            imageUpladForm: true,
            name: '',
            imageName: '',
            order: '',
            dialog: false,
            uploadDialog: false,
            selectedImages: '',
            nameRules: [
              v => !!v || 'Field is required',
            ],
            files: [],
            fileRules: [
              v => !!v || 'File is required',
              v => !!v && v.size < 500000 || 'File should be les then 500 KB',
            ]
          }
        },
        methods: {
          removeImage() {
            this.selectedImages = '';
          },
          selectImage(event, imageUrl) {
            this.dialog = false;
            this.selectedImages = imageUrl;
          },
          changeFunc() {
            console.log(this.files);
          },
          uploadImage() {
            this.uploadDialog = false;
            let data = new FormData();
            data.append('name', this.imageName);
            data.append('image', this.files);
            this.$axios.$post('http://localhost:8000/api/multimedia/upload', data).then(
              response => {
                this.files = []
                this.$store.dispatch('multimedia/fetch')
              }
            ).catch(e => {
              console.log(e);
            })
          },
          updateBrand() {
            this.$store.dispatch('brands/updateBrand', [this.$route.params.id, this.name, this.order, this.selectedImages]).then(r => {
              this.$router.push('/dashboard/brands')
            })
          }
        },
        mounted() {
          this.name = this.brand[0].name;
          this.selectedImages = this.brand[0].image;
          this.order = this.brand[0].order;
        },
      computed: {
          brand() {
            return this.$store.getters['brands/brand'];
          },
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
