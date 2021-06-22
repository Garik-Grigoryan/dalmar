<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-row justify="end">
          <v-col cols="1">
            <v-card @click.stop="addElement" class="mx-auto add_iamge" min-height="50" max-width="50" >
              <v-icon size="25">mdi-plus</v-icon>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mainFrame elevation-1" v-for="(elem, i) in data" :key="i" justify="center">

          <v-col cols="12" style="position:relative;">
            <v-row>
              <v-col cols="5" class="pl-0">
                <v-text-field type="text" v-model="elem.name" :rules="reqRules" label="Name" ></v-text-field>
              </v-col>
              <v-col cols="5" class="pl-0">
                <v-text-field type="text" v-model="elem.url" :rules="reqRules" label="URL" ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col v-if="elem.image != ''" class=" d-flex child-flex" cols="3" >
                <v-hover v-slot:default="{ hover }">
                  <v-card class="d-flex">
                    <v-img :src="elem.image"  aspect-ratio="1" class="grey lighten-2" >
                      <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center" >
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                      </template>
                      <div v-show="hover" class="align-self-center" style="position:relative; height: 100%;">
                        <v-btn @click="removeImage($event, i)"  icon fab style=" position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); ">
                          <v-icon size="50" color="error">
                            mdi-delete
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
              <v-col cols="3">
                <v-card v-if="elem.image == ''" @click.stop="dialog = true; rowId = i" class="mx-auto add_iamge" min-height="200" >
                  <v-icon size="40">mdi-plus</v-icon>
                </v-card>
              </v-col>
            </v-row>
            <div class="align-self-center" style="position:absolute; right: 15px; top: 05px; height: 100%;">
              <v-btn @click="removeRow($event, i)"  icon fab style=" position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); ">
                <v-icon size="50" color="error">
                  mdi-delete
                </v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-col class="text-right" cols="12">
          <v-btn  @click="updateComponent" color="success" class="mr-4" >Update</v-btn>
        </v-col>
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
            <v-text-field v-model="imageName" :rules="reqRules" label="Name" required ></v-text-field>
            <v-file-input v-model="files" :rules="fileRules" label="Choose Image" accept="image/*" />
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
        name: "EditComponent",
        layout: 'dashboard',
        middleware: 'admin',


        async fetch({store, route}) {
          await store.dispatch('multimedia/fetch');
          await store.dispatch('components/getComponent', [route.params.id]);
        },
        data() {
            return {
              selectedImages: '',
              imageUpladForm: true,
              uploadDialog: false,
              dialog: false,
              data: [{name: '', image: '', url: ''}],
              rowId: '',
              reqRules: [
                v => !!v || 'Field is required',
              ],
              imageName: '',
              files: [],
              fileRules: [
                v => !!v || 'File is required',
                v => !!v && v.size < 500000 || 'File should be les then 500 KB',
              ],
            }
        },
        methods: {
          updateComponent(){
            this.$store.dispatch('components/updateComponent', [this.$route.params.id, this.data]).then(r => {
              this.$router.push('/dashboard/components')
            })
          },
          uploadImage() {
            this.uploadDialog = false;
            let data = new FormData();
            data.append('name', this.imageName);
            data.append('image', this.files);
            this.$axios.$post(this.$axios.defaults.baseURL+'/multimedia/upload', data).then(
              response => {
                this.files = []
                this.$store.dispatch('multimedia/fetch')
              }
            ).catch(e => {
            })
          },
          removeImage(event, i) {
            this.data[i].image = '';
          },
          removeRow(event, i) {
            this.$delete(this.data, i);
          },
          selectImage(event, imageUrl) {
            this.dialog = false;
            this.data[this.rowId].image = imageUrl;
          },
          addElement(){
            if(this.$route.params.id == 2){
              if(this.data.length < 4){
                this.data.push({name: '', image: '', url: ''});
              }
            }else{
              this.data.push({name: '', image: '', url: ''});
            }
          }
        },
      computed: {
        images() {
          return this.$store.getters['multimedia/images'];
        },
        component() {
          return this.$store.getters['components/component'];
        },
      },
      mounted() {
        if(this.component.componentElements.length > 0){
          this.data = [];
        }
        this.component.componentElements.forEach((el) => {
          this.data.push({name: el.name, image: el.image, url: el.url});
        })
      }
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
  .mainFrame{
    border: 1px solid #dbdbdb;
    border-radius: 15px;
    margin-bottom: 25px;
    padding: 0 15px;
  }
</style>
