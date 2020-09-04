<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <h1>Edit Page</h1>
        <div class="mt-5">
          <v-form ref="form">
            <v-text-field  v-model="name"  label="Name"  required  ></v-text-field>
            <client-only>
              <p class="mb-0 mt-5">Text in English</p>
              <quill-editor
                ref="editor"
                v-model="html"
                :options="editorOption"
              />
              <p class="mb-0 mt-5">Text in Russian</p>
              <quill-editor
                ref="editor"
                v-model="html_am"
                :options="editorOption"
              />
              <p class="mb-0 mt-5">Text in Armenian</p>
              <quill-editor
                ref="editor"
                v-model="html_ru"
                :options="editorOption"
              />
            </client-only>
            <div class="text-right">
              <v-btn color="success" class="mt-3" @click="update" >
                Update
              </v-btn>
            </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
    export default {
      layout: 'dashboard',
      middleware: 'admin',
      data: () => {
        return {
          name: '',
          html: '',
          html_ru: '',
          html_am: '',
          editorOption: {
            // Some Quill options...
            theme: 'snow',
            modules: {
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'font': [] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'align': [] }],
                ['clean'],
                ['link', 'image', 'video']
              ],
              syntax: {
                highlight: text => hljs.highlightAuto(text).value
              }
            }
          }
        }
      },
        name: "page",
        async fetch({store, route}) {
          await store.dispatch('pages/getById', [route.params.id])
        },
        computed: {
          page() {
            return this.$store.getters['pages/page'];
          }
        },
      methods: {
        async update() {
          await this.$store.dispatch('pages/update', [this.$route.params.id, this.name, this.html, this.html_am, this.html_ru])
        }
      },
      mounted() {
          this.name = this.page.name;
          this.html = this.page.html;
          this.html_am = this.page.html_am;
          this.html_ru = this.page.html_ru;

      }
    }
</script>

<style scoped>

</style>
