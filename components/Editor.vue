<template>
  <div>
    <!-- Use the component in the right place of the template -->
    <tiptap-vuetify :value="value" :extensions="extensions" @input="$emit('input', arguments[0])"/>
  </div>
</template>
<script>
// import the component and the necessary extensions
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from "tiptap-vuetify";
export default {
  components: { TiptapVuetify },
  props: {
    value: {
      type: String,
      default: `
<h1>Yay Headlines!</h1>
<p>All these <strong>cool tags</strong> are working now.</p>`
    } },
  data: () => ({
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Link,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ]
  })
};
</script>
