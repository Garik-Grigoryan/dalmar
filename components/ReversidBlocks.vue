<template>
  <v-container>
    <h1 class="text-center mb-5">Title</h1>
    <v-row class="mb-5" :justify="justifyCenter">
      <v-col lg="4" md="6" sm="12">
        <h2  class="text-center">Title</h2>
        <p class="text-md-left text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum dolorum fugiat id iusto nesciunt officia quia rem reprehenderit temporibus. Accusamus beatae modi mollitia non nostrum pariatur quidem sapiente, tenetur!
        </p>
      </v-col>
      <v-col lg="4" md="6" sm="12">
        <v-row :justify="justifyCenter">
          <v-img
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            max-width="570"
            width="100%"
          ></v-img>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mb-5 flex-sm-row-reverse" :justify="justifyCenter">
      <v-col lg="4" md="6" sm="12">
        <h2  class="text-center">Title</h2>
        <p class="text-md-right text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum dolorum fugiat id iusto nesciunt officia quia rem reprehenderit temporibus. Accusamus beatae modi mollitia non nostrum pariatur quidem sapiente, tenetur!
        </p>

      </v-col>
      <v-col lg="4" md="6" sm="12">
        <v-row :justify="justifyCenter">
          <v-img
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            max-width="570"
            width="100%"
          ></v-img>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mb-5" :justify="justifyCenter">
      <v-col lg="4" md="6" sm="12">
        <h2  class="text-center">Title</h2>
        <p class="text-md-left text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum dolorum fugiat id iusto nesciunt officia quia rem reprehenderit temporibus. Accusamus beatae modi mollitia non nostrum pariatur quidem sapiente, tenetur!
        </p>
      </v-col>
      <v-col lg="4" md="6" sm="12">
        <v-row :justify="justifyCenter">
          <v-img
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            max-width="570"
            width="100%"
          ></v-img>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="flex-sm-row-reverse" :justify="justifyCenter">
      <v-col lg="4" md="6" sm="12">
        <h2  class="text-center">Title</h2>
        <p class="text-md-right text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum dolorum fugiat id iusto nesciunt officia quia rem reprehenderit temporibus. Accusamus beatae modi mollitia non nostrum pariatur quidem sapiente, tenetur!
        </p>
      </v-col>
      <v-col lg="4" md="6" sm="12">
        <v-row :justify="justifyCenter">
          <v-img
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            max-width="570"
            width="100%"
          ></v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default{

  }
</script>
