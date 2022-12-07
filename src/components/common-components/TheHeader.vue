<script>
    export default {
        name: 'header',
    }
</script>

<template>
    <header>
        <div class="container">
            <div class="header-logo">
                <router-link to="/">
                    <figure class="header-logo__helium-plus">
                        <img src="@/assets/img/logo-helium-plus.png" alt="helium-plus-logo-header">
                    </figure>
                </router-link>
            </div>
            <div class="header-box">
                <figure class="header-box__search-box">
                    <img class="header-box__search-icon" src="@/assets/img/icon/search-normal.svg" alt="search-icon">
                </figure>
                <router-link class="header-box__sign-up-in" to="/login">ورود / ثبت نام</router-link>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    @import '@/assets/scss/variable.scss';
    @import "@/assets/scss/reset.scss";
    header {
        background-color: white;
        position: sticky;
        top: 0;
        z-index: 4;
        transition: 0.4s;
        box-shadow: 0px 4px 8px rgba(19, 29, 38, 0.05);

        .container {
            display: flex;
            align-items: center;
            max-width: 1200px;
            height: 65px;
            margin: 0px auto;
            @include responsive(phone){
                padding: 0px 10px;
            }
            @include responsive(tablet){
                padding: 0px 10px;
            }
        }

        .header-logo {
            flex-basis: 50%;
            &__helium-plus{
                cursor: pointer;
            }
        }

        .header-box {
            display: flex;
            justify-content: end;
            align-items: center;
            flex-basis: 50%;

            &__search-icon {
                padding-left: 20px;
                @include responsive(phone){
                    padding-left: 5px;
                }
                @include responsive(tablet){
                    padding-left: 5px;
                }
            }

            &__sign-up-in {
                padding: 8px 24px;
                color: $primary-color;
                @include text-button();
                border: 1px solid #babdc0;
                border-radius: $btn-radius;
                @include responsive(phone){
                    padding: 8px 10px;
                }
                @include responsive(tablet){
                    padding: 8px 15px;
                }
            }
        }
    }
</style>