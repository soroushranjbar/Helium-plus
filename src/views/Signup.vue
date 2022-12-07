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
                <!-- change form to div for test ==> <div class="register__form"> -->
                <div class="register__form">
                    <div class="register__tel-number">
                        <label for="tel-number" class="register__tel-number-title">
                            شماره تلفن همراه شما
                        </label>
                        <input id="tel-number" class="register__input" v-model="password" type="number" placeholder="09159677791"
                            name="tel-number">
                    </div>
                    <div class="register__fullname">
                        <label for="fullname" class="register__fullname-title"><span class="star">*</span>
                            نام و نام خانوادگی
                        </label>
                        <input id="fullname" class="register__input" v-model="name" type="text" placeholder="نام خود را به فارسی وارد کنید"
                            name="fullname">
                    </div>

                    <div class="register__Email">
                        <label for="fullname" class="register__Email-title"><span class="star">*</span>
                            پست الکترونیکی
                        </label>
                        <input id="email" class="register__input" v-model="email" type="email" placeholder="مثال" name="email">
                        <span class="left-placeholder">example@helium.com</span>
                    </div>
                    <button class="register__button" v-on:click="signup"> ادامه
                    </button>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import axios from "axios"
    import {
        onMounted
    } from '@vue/runtime-core';
    export default {
        name: 'Signup',
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            async signup() {
                let result = await axios.post("http://localhost:3000/user", {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                });
                console.warn(result);
                if (result.status == 201) {
                    // alert("signup done");
                    //if post user data to server ok in below user info set on local storage and redirect to profile
                    localStorage.setItem("user-info", JSON.stringify(result.data))
                    this.$router.push({
                        name: 'profile'
                    })
                }
            }
        },
        //if user loged in and user data is on local storage redirect to profile
        mounted() {
            let user = localStorage.getItem(' user-info ');
            if (user) {
                this.$router.push({
                    name: 'profile'
                })
            }
        },

    }
</script>

<style scoped lang="scss">
    //REGISTER 2 PAGE STYLE - STRAT
    @import '../assets/scss/variable.scss';

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
            max-width: 478px;
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

        &__input-lable {
            @include typography-body-reg();
            margin-left: 100px;
        }

        &__input-title {
            @include typography-body-reg();
        }

        &__form {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            overflow: hidden;
            width: 100%;
        }

        &__tel-number,
        &__fullname,
        &__Email {

            padding-bottom: 40px;
            position: relative;
            display: flex;
            flex-direction: column;

            & input:not(:placeholder-shown)+span {
                display: none;
            }

            & input {
                border: none;
                color: #00365b;
                background: transparent;
                overflow: visible;
                font-family: inherit;
                font-size: 100%;
                border-radius: 2px;
                border-bottom: 2px solid #406080;
                padding:10px;
                
            }
            & input[type=number]::-webkit-inner-spin-button {
              -webkit-appearance: none;
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

    .left-placeholder {
        position: absolute;
        top: 27%;
        left: 0px;
        color: #8593A6;
        padding-left: 10px;
    }

    //REGISTER 2 PAGE STYLE - END
    //Start responsive Register pages
    .login .container {
        @include responsive (tablet) {
            width: 300px;
        }

        @include responsive (phone) {
            width: 200px;
        }
    }

    .register {
        & .container {
            @include responsive (tablet) {
                width: 300px;
                padding: 20px 20px;
                margin: 0;

            }

            @include responsive (phone) {
                width: 300px;
                padding: 10px;
            }

            @include responsive (sm) {}
        }

        &__header {
            @include responsive (tablet) {
                font-size: 1rem;
                text-align: center;
            }

            @include responsive (phone) {
                font-size: 1rem;
                text-align: center;
            }

            @include responsive (sm) {}
        }

        &__sub-header {
            @include responsive (tablet) {
                font-size: 1rem;
                text-align: center;
            }

            @include responsive (phone) {
                font-size: .8rem;
                text-align: center;
            }

            @include responsive (sm) {}
        }
    }

    .left-placeholder {
        @include responsive (tablet) {}

        @include responsive (phone) {
            position: absolute;
            top: 35%;
            left: 0px;
            color: #8593A6;
            font-size: 13px;
        }

        @include responsive (sm) {}
    }
</style>