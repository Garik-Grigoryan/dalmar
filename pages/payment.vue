<template>
    <div>
      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </div>
</template>

<script>
    export default {
        name: "payment",
      async asyncData({store}){
        await store.dispatch('brands/fetch');
        await store.dispatch('products/filterAsType', ['new']);
        await store.dispatch('products/filterAsType', ['best']);
        await store.dispatch('products/filterAsType', ['sales']);
        await store.dispatch('components/getComponent', [1]);
        await store.dispatch('components/getComponent', [2]);
        // await store.dispatch('wishListAndCart/fetch');
        await store.dispatch('menus/fetch');
      },
      data () {
        return {
          overlay: true
        }
      },
      async mounted() {
        if(this.$route.query.resposneCode){
          if(this.$route.query.resposneCode == '00'){

            await this.$store.dispatch('user/getPayment', [this.$route.query.paymentID, this.$route.query.orderID]).then((res) => {
              if(res.success == true){
                this.$router.push('/?payment=success')
              }else if(this.$route.query.payment = 'fail'){
                this.$router.push('/?payment=fail');
              }
            });
          }else if(this.$route.query.payment = 'fail'){
                this.$router.push('/?payment=fail');
          }
        }

        await this.$store.dispatch('wishListAndCart/fetch');
        if(this.user){
          await this.$store.dispatch('wishListAndCart/getWishListAndCartData', [this.user.id]);
        }else{
          await this.$store.dispatch('wishListAndCart/getWishListAndCartData', [0]);
        }
      },
    }
</script>

<style scoped>

</style>
