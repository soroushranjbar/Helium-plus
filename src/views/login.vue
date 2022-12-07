<template>
    <main>
        <section class="login">
            <div class="container">
                <div class="login__header">
                    <p>ورود/ثبت نام</p>
                </div>
                <!-- temp change <form class="login__form"> -->
                <div class="login__form">
                    <div class="login__tel-number">
                        <label for="tel-number" class="register__form__fullname__title"><span class="star"></span>
                            لطفا شماره تلفن همراه خود را وارد کنید
                        </label>
                        <input id="tel-number" v-model="telNumber" type="text" placeholder="مثال: " name="tel-number">
                        <span class="left-placeholder">09155602894</span>
                    </div>
                    <span class="login__validation" v-if="msg.telNumber">{{msg.telNumber}}</span>
                    <button class="login__button" v-on:click="login"> ادامه </button>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'login',
        data() {
            return {
                name: '',
                telNumber: '',
                msg: [],
                isUserExist: '',
                userValidate: '',
                result: '',
            }
        },
        watch: {
            telNumber(value) {
                // console.log(value);
                this.telNumber = value;
                this.validatePassword(value);
            }
        },
        methods: {
            // کار این تابع این است که هشدار بدهد تعداد کاراکتر لازم را کاربر وارد کند
            validatePassword(value) {
                let difference = 11 - value.length;
                if (value.length < 11) {
                    this.msg['telNumber'] = '،میبایست 11 رقم باشد ' + difference + ' رقم باقی مانده';
                } else {
                    this.msg['telNumber'] = '';
                }
            },
            // در این تابع اگر یوزر شماره ش داخل دیتا بیس باشد هدایت میشه به صفحه پرفایل خودش ولی اگر نباشد هدایت میشه به صفحه ثبت نام
            async login() {
                console.log(this.telNumber);
                const userTelNumber = {
                    "phone_number": this.telNumber
                };
                let result = await axios.post("http://87.107.30.143:3014/auth/user-exist", {
                    "phone_number": this.telNumber,
                });
                if (result.status == 200 && result.data.isUserExist) {
                    localStorage.setItem("isUser", JSON.stringify(result.data))
                    this.$router.push({
                        name: 'profile'
                    })
                }
                else if (!result.data.isUserExist){
                    this.$router.push({
                        name: 'Signup'
                    })
                }
            }
        },
        //if user has been login redirect to profile
        mounted() {
            let user = localStorage.getItem('user-info');
            if (user) {
                this.$router.push({
                    name: 'profile'
                })
            }
        },
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/variable.scss';
    @import '@/assets/scss/responsive.scss';
    //REGISTER 1 PAGE STYLE - STRAT

    .login {
        @include center-elements(column, 1200px);
        height: 700px;

        & .container {
            @include center-elements(column, 478px);
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
            padding-bottom: 50px;

        }

        &__input-lable {
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

        &__tel-number {
            flex: 0 1 100%;
            position: relative;

            //hide left palceholder
            & input:not(:placeholder-shown)+span {
                display: none;
            }

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
                padding: 7px 16px;
            }

            & input:focus {
                border-bottom: 2px solid $primary-color;
                background-color: #edeeef;
                border-radius: 5px;
            }

            & input:focus-visible {
                outline: -webkit-focus-ring-color auto 0px;
            }

            flex: 0 1 100%;
            @include typography-body-reg();
        }

        &__validation {
            color: rgb(255, 23, 23);
            text-align: center;
            padding-top: 5px;
            padding-bottom: 10px;


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
        top: 50%;
        left: 0px;
        color: #8593A6;
        padding-left: 10px;
    }


    //REGISTER 1 PAGE STYLE - END
    //Start responsive Register pages<<<<<<<<<<
.login .container {
    @include responsive (tablet) {
        width: 300px;
        padding: 20px 30px;
    }

    @include responsive (phone) {
        width: 200px;
        padding: 10px;
    }
}

.register {
    & .container {
        @include responsive (tablet) {
            width: 300px;
            padding: 20px 40px;
        }

        @include responsive (phone) {
            width: 200px;
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
            font-size: .8rem;
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
</style>