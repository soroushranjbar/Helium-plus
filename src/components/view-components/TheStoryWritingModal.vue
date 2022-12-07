<script>
export default {
    name: "storyWritingModal",
    props: {
        show: Boolean,
    }
}
</script>
<template>
  <Transition name="modal">
    <div v-if="show" class="modal">
                <div class="modal__content">
                    <div class="modal__close">
                        <figure class="modal__close-iocn" @click="$emit('close')">
                            <img src="@/assets/img/icon/cross.svg" alt="close-icon">
                        </figure>
                    </div>
                    <form class="modal__select-category">                            
                        <p class="modal__select-category-text">لطفا دسته‌بندی موضوعی خود را انتخاب کنید</p>
                        <select class="form-comment__input">
                            <option value="">نانوتکنولوژی</option>
                            <option value="">زندگی هوشمند</option>
                            <option value="">ارز دیجیتال</option>
                        </select>
                        <div class="modal__add-category">
                            <button class="modal__add-category-btn">تایید</button>
                        </div>
                    </form>
                </div>
                <div class="modal__mask"></div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/reset.scss";
  @import "@/assets/scss/variable.scss";
.modal {
  position: fixed;
  z-index: 999;
  transition: opacity 0.3s ease;
  &__content {
        width: 555px;
        position: fixed;
        top: 50%;
        left: 50%;
        padding: 30px 30px 50px;
        border-radius: 12px;
        transform: translate(-50%, -50%);
        background: #FAFBFC;
        box-shadow: 0px 4px 10px rgba(40, 57, 79, 0.1);
        @include responsive(phone){
            max-width: 290px;
            padding: 20px;
        }
        @include responsive(tablet){
            max-width: 600px;
            padding: 20px;
        }
    }

    &__close {
        text-align: left;
        padding-bottom: 37px;
        @include responsive(phone){
            padding-bottom: 15px;
        }
        @include responsive(tablet){
            padding-bottom: 20px;
        }
    }
    &__close-iocn{
        cursor: pointer;
    }
    &__mask {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background: rgba(0, 32, 50, 0.3);
    }
    &__select-category-text{
        @include typography-body-reg();
    }
    &__add-category{
        text-align: left;
    }
    &__add-category-btn {
        margin-top: 31px;
        padding: 11px 70px;
        @include Text-Button();
        background-color: rgb(32, 139, 238);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        @include responsive(phone){
            padding: 8px 20px;
            font-size: 12px;
            line-height: 20px;
        }
        @include responsive(tablet){
            padding: 10px 30px;
            line-height: 20px;
        }
    }
    &__select-category {
        display: flex;
        flex-direction: column;

        .form-comment__input,
        .form-comment__textarea {
            background: transparent;
            padding: 7px 16px;
            border-radius: 2px;
            margin-top: 2px;
            border-radius: 2px;
            border: 0;
            border-bottom: 3px solid #406080;
            font-family: 'kalameh';
            @include typography-body-reg();
            margin-top: 20px;
            &[type=email] {
                flex: 2;
            }
    
            &:focus {
                background-color: #EDEDED;
                box-shadow: 0px 2px 0px $primary-color;
            }
        }
    }
}
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

</style>