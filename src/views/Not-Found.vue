<template>
  <section class="not-found">
    <figure class="not-found__pic">
      <img src="@/assets/img/404.gif" alt="this slowpoke moves" width="500" />
    </figure>
    <button @click="goHome" class="not-found__back-home">برگشت به خانه</button>
  </section>
</template>

<script>
  export default {
    name: 'not-found',
    methods: {
      goHome(){
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped lang="scss">
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/responsive.scss';
body{
  margin: 0;
}
.not-found{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  &__back-home{
    padding: 11px 68px;
    border-radius: 4px;
    background-color: rgb(32, 139, 238);
    color: #fff;
    border: none;
    cursor: pointer;
    margin-top: 32px;
    @include Text-Button();
  }
}
</style>