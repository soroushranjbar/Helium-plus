<script>
export default {
    name: "profileModal",
    props: {
        show: Boolean,
    }
}
</script>
<template>
  <Transition name="modal">
    <div v-if="show" class="profile-modal">
    <div class="profile-modal__content">
        <figure class="profile-modal__author-avatar">
            <img src="@/assets/img/author-avatar.png" alt="author-avatar">
        </figure>
        <div class="profile-modal__author-information">
            <h2 class="profile-modal__name">محمد سبحان سجایی فر</h2>
            <div class="profile-modal__username">
                <figure class="profile-modal__username-icon">
                    <img src="@/assets/img/username-icon.png" alt="username-icon">
                </figure>
                <span class="profile-modal__username-id">Mojtabaa_2890</span>
               </div>            
            <ul class="profile-modal__contact-information">
                <li class="profile-modal__email">
                    <figure class="profile-modal__email-icon">
                         <img src="@/assets/img/icon/email.svg" alt="email-icon">
                    </figure>
                    <span class="profile-modal__email">example@helium.com</span>
                </li>
                <li class="profile-modal__phone">
                    <figure class="profile-modal__phone-icon">
                        <img src="@/assets/img/icon/mobile.svg" alt="mobile-icon">
                    </figure>
                    <span class="profile-modal__phone-number">۰۹۱۵۱۲۳۴۵۶۷</span>
                </li>
            </ul>
            <div class="profile-modal__close-modal">
                <button href="#" class="profile-modal__close-modal-btn" @click="$emit('close')">بستن</button>
            </div>
        </div>
    </div>
    <div class="profile-modal__mask"></div>
</div>
  </Transition>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/reset.scss";
  @import "@/assets/scss/variable.scss";
.profile-modal {
    position: fixed;
    z-index: 999;
    transition: opacity 0.3s ease;
    &__mask{
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 32, 50, 0.3);;
        position: fixed;
        top: 0;
        left: 0;
    }
    &__content{
        display: flex;
        background-color: white;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0px 4px 10px rgba(40, 57, 79, 0.1);
        padding: 32px;
        border-radius: 12px;
        z-index: 3;
        @include responsive(phone){
            max-width: 295px;
            padding: 25px;
        }
    }
    &__name{
        @include H2();
        color: #243447;
    }
    &__author-avatar{
        margin-left: 24px;
    }
    &__username-id{
        @include Subtitle();
        color: #445161;
    }
    &__contact-information > li{
        display: flex;
        align-items: center;
    }
    &__contact-information > li > span{
        margin-right: 14px;
    }
    &__email-icon{
        opacity: 0.5;
    }
    &__email{
        margin: 8px 0px;
    }
    &__close-modal{
        display: flex;
        justify-content: flex-end;
        margin-top: 24px;
    }
    &__close-modal-btn{
        border: 1px solid rgba(36, 52, 71, 0.15);
        background-color: transparent;
        border-radius: 4px;
        padding: 8px 24px;
        font-family: 'kalameh';
        @include text-button();
        color: $primary-color;
        text-align: left;
        cursor: pointer;
    }
    &__username{
        display: flex;
        align-items: center;
        margin-top: 8px;
    }
    &__username-icon{
        margin-left: 10px;
        filter: invert(1);
        opacity: 0.5;
    }
}
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

</style>