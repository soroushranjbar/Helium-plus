<template>
    <main>
        <section class="register-done">
            <div class="container">
                <figure class="register-done__image">
                    <img src="@/assets/img/register-done-img.png" alt="تایید ثبت نام">
                </figure>
                <div class="register-done__success-message">
                    <p>ثبت نام شما با موفقیت انجام شد.</p>
                </div>
                <!-- <a href="./index.html" class="register-done__enterSitebtn">ورود به سایت</a> -->
                <router-link class="register-done__enterSitebtn" to="/">ورود به سایت</router-link>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'not-found'

    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/variable.scss';

    .register-done {
        @include center-elements(column, 100%);
        height: 700px;

        & .container {
            @include center-elements(column, 478px);
            overflow: hidden;
            border-radius: 12px;
            padding: 51px 71px;
            width: 478px;
        }

        &__image {
            width: 250px;
            height: 150px;
            padding-bottom: 35px;
        }

        &__success-message {
            @include typography-body-reg();
            padding-bottom: 35px;
        }

        &__enterSitebtn {
            padding: 11px 46px;
            background-color: $primary-color;
            border-radius: 4px;
            color: #fff;
        }

    }

    .register-done {
        & .container {
            @include responsive (tablet) {
                width: 300px;
                padding: 20px 20px;
                margin: 0;
            }

            @include responsive (phone) {
                width: 300px;
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
</style>