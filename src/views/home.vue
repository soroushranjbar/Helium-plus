<script>
import TheSlider from '@/components/view-components/TheSlider.vue'
import horizontalPost from '@/components/common-components/HorizontalPost.vue'
import VerticalPost from '@/components/common-components/VerticalPost.vue'
export default{
  name : "app",
  components :{
    TheSlider,
    horizontalPost,
    VerticalPost,
  }
}
</script>

<template>
  <main>
    <the-slider/>
    <horizontal-post />
    <Vertical-post />
  </main>
</template>
<style lang="scss">
  @import "@/assets/scss/reset.scss";
  @import "@/assets/scss/variable.scss";
  // start body style 
body {
    font-family: 'kalameh';
}

</style>