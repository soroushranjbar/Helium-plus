<template>
<main>
    <section class="story-writing">
            <div class="container">
                <div class="story-writing__heading">
                    <figure class="story-writing__heading-icon">
                        <img src="@/assets/img/icon/edit.svg" alt="edit-icon">
                    </figure>
                    <h3 class="story-writing__title">ایجاد مطلب جدید</h3>
                </div>
                <div class="story-writing__image">
                    <figure class="story-writing__background">
                        <img class="story-writing__img-post" :src="imgUrl" width="796">
                    </figure>
                    <div class="story-writing__image-btn">
                        <div class="story-writing__change-style-btn">
                            <figure class="story-writing__change-style-btn-icon">
                                <img src="@/assets/img/icon/change-style.svg" alt="change-style">
                            </figure>
                        </div>
                        <div class="story-writing__add-image-btn">
                            <label for="file">
                                <figure class="story-writing__add-image-icon">
                                    <img src="@/assets/img/icon/add-image.svg" alt="add-image">                                
                                </figure>
                            </label>
                            <input type="file" id="file" @change="selectFile" ref="myfiles" accept=".png, .jpg, .jpeg" style="display: none;">
                        </div>
                    </div>
                    <p class="story-writing__upload-image-content">عکس مورد نظر خود را آپلود کنید</p>
                </div>
                <div class="story-writing__add-information">
                    <input class="story-writing__add-title" type="text" name="title" placeholder="عنوان مطلب خود را وارد کنید">
                    <div class="story-writing__add-tag-btn">
                        <figure class="story-writing__add-tag-btn-icon" id="show-modal" @click="showModal = true">
                            <img src="@/assets/img/icon/tag.svg" alt="add-tag">
                        </figure>
                    </div>
                    <textarea ref="textarea" @focus="autoGrow" @keyup="autoGrow"  class="story-writing__add-main-text" name="content" id="textarea"  placeholder="متن اصلی خود را وارد کنید..."></textarea>
                    <div class="story-writing__add-gallery-btn">
                        <label for="upload-gallery-img">
                            <figure class="story-writing__add-gallery-btn-icon">
                                <img src="@/assets/img/icon/add-image.svg" alt="add gallery">
                            </figure>
                        </label>
                        <input type="file" id="upload-gallery-img" accept="image/*" style="display:none;">
                    </div>
                    <button class="story-writing__publish-content">انتشار مطلب</button>
                </div>
            </div>
        </section>
</main>
      <!-- modal  -->
        <Teleport to="body">
            <modal :show="showModal" @close="showModal = false"></modal>
        </Teleport>
</template>

<script>
import Modal from '@/components/view-components/TheStoryWritingModal.vue'
export default {
    name: 'story-writing',
    components:{
        Modal,
    },
    data(){
        return{
            files: '',
            imgUrl : '',
            showModal : false
        }
    },
    methods:{
        selectFile(){
            this.files = this.$refs.myfiles.files[0];
            console.log(this.imgUrl = URL.createObjectURL(this.files))
        },
        autoGrow() {
        const { textarea } = this.$refs;
        textarea.style.height = '5px'
        textarea.style.height = textarea.scrollHeight - 4 + 'px';
        }
    },
    mounted(){
        this.autoGrow()
    }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/reset.scss";
  @import "@/assets/scss/variable.scss";
.story-writing {
    z-index: 1;
    margin: 60px 0px 175px;
    @include responsive(phone){
        margin: 40px 0px 100px;
    }
    @include responsive(tablet){
        margin: 40px 0px 100px;
    }

    .container {
        @include center-elements($dir:column, $maxWidth:796px, $justify-content:start, $align-items:start);
    }

    &__heading {
        display: flex;
        justify-content: start;
        align-items: center;
    }
    &__background{
        position: absolute;
        max-width: 796px;
        max-height: 496px;
    }
    &__background::after{
        content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 45, 67, 0.55);
    z-index: 2;
    top: 0;
    left: 0;
    }
    &__img-post{
    max-width: 798px;
    max-height: 496px;
    object-fit: cover;
    }
    &__title {
        margin-right: 10px;
        @include H3();
        color: #243447;
    }
    &__image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 496px;
        width: 100%;
        margin-top: 40px;
        background: url(@/assets/img/upload-image.png) #EDF0F2 center no-repeat;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        @include responsive(phone){
            margin-top: 20px;
            max-height: 350px;
            background-size: 100%;
        }
        @include responsive(tablet){
            margin-top: 20px;
            max-height: 400px;
        }
    }

    &__image-btn {
        display: flex;
        padding-top: 122px;
        z-index: 2;
    }

    &__change-style-btn {
        margin-left: 53px;
        cursor: pointer;
    }

    &__add-image-icon{
        cursor: pointer;
    }

    &__upload-image-content {
        display: flex;
        align-items: flex-end;
        height: 98px;
        @include typography-body-reg();
        color: #8593A6;
    }

    &__add-information {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin-top: 28px;
        @include responsive(phone){
            margin-top: 20px;
        }
        @include responsive(tablet){
            margin-top: 20px;
        }
    }

    &__add-title {
        margin-bottom: 16px;
        font-family: 'kalameh';
        @include Subtitle();
        color: #243447;
        border: none;
        outline: none;
    }

    &__add-title::placeholder {
        color: #8593A6;
    }
    &__add-tag-btn-icon{
        cursor: pointer;
    }
    &__add-gallery-btn-icon{
        cursor: pointer;
    }
    &__add-main-text {
        width: 100%;
        margin: 28px 0px 16px;
        font-family: 'kalameh';
        @include typography-body-reg();
        color: #445161;
        border: none;
        outline: none;
        resize: none;
        overflow: hidden;
    }

    &__add-main-text::placeholder {
        color: #8593A6;
    }

    &__publish-content {
        margin-left: auto;
        margin-right: auto;
        margin-top: 60px;
        padding: 11px 47px;
        font-family: 'kalameh';
        @include text-button();
        background: rgba(32, 139, 238, 0.45);
        color: white;
        border: none;
        border-radius: $btn-radius;
        @include responsive(phone){
            margin-top: 30px;
        }
        @include responsive(tablet){
            margin-top: 40px;
        }
        &--publish{
            margin-left: auto;
            margin-right: auto;
            margin-top: 60px;
            padding: 11px 47px;
            font-family: 'kalameh';
            @include text-button();
            background-color: $primary-color;
            color: white;
            border: none;
            border-radius: $btn-radius;   
        }
    }
}
</style>