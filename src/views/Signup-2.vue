<template>
    <main>
        <section class="register">
            <div class="container">
                <div class="register__header">
                    <p>شما هنوز در هلیوم ثبت نام نکرده اید.</p>
                </div>
                <div class="register__sub-header">
                    <p>لطفا اطلاعات زیر را برای ثبت نام تکمیل کنید.</p>
                </div>
                <form class="register__form">
                    <div class="register__username">
                        <label for="username" class="register__input-title"><span class="star">*</span>نام
                            کاربری
                        </label>
                        <input id="username" type="text" placeholder="نام کاربری دلخواه خود را به انگلیسی وارد کنید"
                            name="username">
                    </div>
                    <div class="register__password">
                        <label for="password" class="register__input-title"><span class="star">*</span> رمز
                            عبور
                        </label>
                        <input id="password" type="text" placeholder="رمز عبور دلخواه خود را به انگلیسی وارد کنید"
                            name="password">
                    </div>
                    <div class="register__password-repeat">
                        <label for="password-repeat" class="register__input-title"><span class="star">*</span>تکرار رمز
                            عبور
                        </label>
                        <input id="password-repeat register__error" type="text"
                            placeholder="رمز عبور خود را مجدد وارد کنید" name="password-repeat">
                        <p class="register__error">! تکرار رمز عبور مطابقت ندارد</p>
                    </div>
                    <div class="register__upload-profile-image">
                        <p class="register__upload-profile-image-tilte">انتخاب تصویر پرفایل</p>
                        <label class="avatar__uploadtext" for="file">
                            <div class="avatar">
                                <div class="avatar__uploadbtn">
                                    <input type='file' id="file" @change="selectFile" ref="myfiles" class="avatar__input"
                                        accept=".png, .jpg, .jpeg" style="display: none;"/>
                                </div>
                                <figure class="avatar__img">
                                    <img id="imgid" class="avatar__picture" width="100px" height="100px"
                                        :src="imgUrl" alt="">
                                </figure>
                            </div>
                        </label>
                    </div>
                    <button class="register__button" formaction="./Register-done.html" type="submit">
                        ادامه</button>
                </form>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'signup-2',
        data() {
            return {
                files: '',
                imgUrl: '',
                imageUpload:''
            }
            
        },
        methods:{
        selectFile(){
            this.files = this.$refs.myfiles.files[0];
            console.log(this.imgUrl = URL.createObjectURL(this.files))
        },
       
    },
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/variable.scss';

    //REGISTER 22 PAGE STYLE - Start
    .register {
        @include center-elements(column, 1200px);
        height: 900px;

        & .container {
            @include center-elements(column, auto);
            align-items: flex-start;
            overflow: hidden;
            background-color: #FAFBFC;
            box-shadow: 0px 8px 16px rgba(32, 48, 64, 0.15);
            border-radius: 12px;
            padding: 51px 71px;
        }

        &__header {
            @include H3();
            align-self: center;
            padding-bottom: 10px;

        }

        &__sub-header {
            @include Subtitle();
            color: #8593A6;
            align-self: center;
            padding-bottom: 50px;

        }

        &__input-title {
            @include typography-body-reg();
            margin-left: 100px;
        }

        &__form {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            overflow: hidden;
            width: 100%;
        }

        &__error {
            @include Small-Text();
            color: $error-color;
        }

        &__upload-profile-image-tilte {
            @include typography-body-reg();
            padding-bottom: 10px;
        }

        &__username,
        &__password,
        &__password-repeat {

            padding-bottom: 40px;
            position: relative;

            & input {
                border: none;
                color: #00365b;
                width: 100%;
                background: transparent;
                overflow: visible;
                font-family: inherit;
                font-size: 100%;
                border-radius: 2px;
                border-bottom: 2px solid #406080;
                padding: 10px;
            }

            & input[type="number"]::placeholder {

                text-align: left;
            }

            & input:focus {
                border-bottom: 2px solid $primary-color;
                background-color: #edeeef;
                border-radius: 5px;
            }

            & input:focus-visible {
                outline: -webkit-focus-ring-color auto 0px;
            }
        }

        &__button {
            @include Text-Button();
            align-self: center;
            padding: 11px 68px;
            border-radius: 4px;
            background-color: $primary-color;
            color: #fff;
            border: none;
            cursor: pointer;
            margin-top: 32px;
        }
    }

    .avatar {
        position: relative;
        background-color: $gray-bg;
        border-radius: 12px;
        display: flex;
        justify-content: flex-start;
        // height: 100px;
        // padding: 5px 20px;

        &__input {
            display: none;
            padding: 5px 0;
        }

        &__uploadtext {
            display: inline-block;
            width: 100%;
            height: 50px;
            margin-bottom: 0;
            border: 1px solid transparent;
            cursor: pointer;
            font-weight: normal;
            transition: all .2s ease-in-out;
            position: relative;

            &:after {
                content: "بارگذاری تصویر";
                font-family: kalameh;
                @include text-button();
                color: $primary-color;
                position: absolute;
                top: 50%; //center بارگذاری تصویر in middle of box with top and transform
                transform: translateY(50%);
                left: 20px;
                text-align: center;
                margin: auto;
            }
        }
        &__img {
        
        background: url(@/assets/img/avatar-img-h.png) #EDF0F2 center no-repeat;
        border-radius: 50%;
        overflow: hidden;
        
    }

        &__picture {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            padding: 5px;
        }

        &__uploadbtn {
            position: absolute;
            left: 12px;
            z-index: 1;
            top: 10px;
        }
    }

    // register 22 page style - END
    //left placeholder
    .left-placeholder {
        position: absolute;
        top: 27%;
        left: 0px;
        @include typography-body-reg();
        color: #8593A6;
        padding-left: 10px;
    }

    .register {

        &__button {
            @include responsive (tablet) {}

            @include responsive (phone) {
                margin: 20px 0;
            }

            @include responsive (sm) {}
        }

    }
</style>