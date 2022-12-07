<template>
  <section class="profile">
    <div class="container">
        <div class="profile__author-information">
            <div class="profile__author-detail">
                <figure class="profile__author-avatar">
                    <img src="@/assets/img/author.png" alt="author-avatar">
                </figure>
                <div class="profile__author-user">
                    <h2 class="profile__author-name">محمد سبحان سجایی فر</h2>
                    <div class="profile__username">
                        <figure class="profile__usernamr-icon">
                            <img src="@/assets/img/username-icon.png" alt="username-icon">
                        </figure>
                        <span class="profile__username-id">Mojtabaa_2890</span>
                    </div>
                </div>
            </div>
            <button class="profile__contact-information" @click="showModal = true">اطلاعات کامل ارتباطی</button>
        </div>
    </div>
</section>
        <!-- modal  -->
        <Teleport to="body">
            <modal :show="showModal" @close="showModal = false"></modal>
        </Teleport>
</template>

<script>
import Modal from '@/components/view-components/TheProfileModal.vue'
export default {
    name: 'profile',
    data(){
        return{
            isActive: 'hide',
            user:"",
            name:'',
            showModal : false
        }
    },
    components : {
        Modal,
    }
}
</script>

<style lang="scss">
  @import "@/assets/scss/reset.scss";
  @import "@/assets/scss/variable.scss";
  .profile{
    .container{
        @include center-elements();
    }
    &__author-information{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 148px;
        padding: 0px 40px;
        background: url('@/assets/img/profile-2.png') center;
        background-size: cover;
        border-radius: 10px;
        @include responsive(phone){
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
            padding: 20px 40px;
        }
        @include responsive(tablet){
            padding: 0px 20px;
        }

    }
    &__author-detail{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    &__author-name{
        @include H2();
        color : #FAFBFC;
    }
    &__username{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    &__usernamr-icon{
        opacity: 0.8;
        margin-left: 10px
    }
    &__username-id{
        @include Subtitle();
        color: #FAFBFC;
        opacity: 0.8;
    }
    &__contact-information{
        padding: 8px 24px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background-color: #ffffff00;
        border-radius: 4px;
        @include text-button();
        font-family: 'kalameh';
        color: #FAFBFC;
        cursor: pointer;
    }
  }
</style>