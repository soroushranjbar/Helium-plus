<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from './components/common-components/TheHeader.vue';
import Footer from './components/common-components/TheFooter.vue';
export default {
  name: 'app',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/reset.scss";
  @import "@/assets/scss/variable.scss";
</style>