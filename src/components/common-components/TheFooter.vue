<template>
        <footer>
        <div class="container">
            <div class="about-helium">
                <router-link to="/">
                    <figure class="about-helium__logo">
                        <img class="about-helium__footer-logo" src="@/assets/img/hellium+logo-footer.png" alt="helium-plus-logo-footer">
                    </figure>
                </router-link>
                <p class="about-helium__description">هلیوم بستری برای اشتراک گزاری ایده ها و فکر افراد پیشرو در زمینه
                    علم و دانش است. در هلیوم میتوانید به<br> جدیدترین مقالات علمی در کشور دسترسی داشته باشید و خود نیز
                    در ترویج علم و دانش نقشی داشته باشید.</p>
            </div>
            <nav class="footer-navbar">
                <ul class="footer-navbar__menu">
                    <li class="footer-navbar__item">
                        <a href="#" class="footer-navbar__item-link">بنویسید</a>
                    </li>
                    <li class="footer-navbar__item">
                        <a href="#" class="footer-navbar__item-link">راهنما</a>
                    </li>
                    <li class="footer-navbar__item">
                        <a href="#" class="footer-navbar__item-link">معرفی به دوستان</a>
                    </li>
                    <li class="footer-navbar__item">
                        <a href="#" class="footer-navbar__item-link">قوانین</a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>    
</template>

<script> 
    export default {
        name:'footer',
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/responsive.scss';
footer {
    background: url(@/assets/img/Pattern-footer.svg) rgba(35, 47, 61, 1) no-repeat center left;
    border-radius: 10px 10px 0px 0px;
    height: 131px;
    padding: 37px 0;
    @include responsive(phone){
        height: 100%;
        background-size: cover;
    }
    @include responsive(tablet){
        height: 100%;
        background-size: cover;
    }

    .container {
        display: flex;
        max-width: 1500px;
        margin: 0px auto;
        @include responsive(phone){
            flex-direction: column;
        }
        @include responsive(tablet){
            flex-direction: column;
        }
    }

    .about-helium {
        display: flex;
        align-items: center;
        flex-basis: 50%;
        height: 131px;
        @include responsive(phone){
            flex-direction: column; 
            br{
                display: none;
            }
        }
        @include responsive(tablet){
            flex-direction: column;
        }
        &__description {
            padding-right: 40px;
            @include typography-body2-reg(white);
            @include responsive(phone){
                margin-top: 20px;
                padding: 0px 10px;
            }
            @include responsive(tablet){
                margin-top: 20px;
                padding: 0px 10px;
            }
        }
    }

    .footer-navbar {
        display: flex;
        justify-content: end;
        align-items: center;
        flex-basis: 50%;
        @include responsive(phone){
            justify-content: center;
            margin-top: 20px;
        }
        @include responsive(tablet){
            justify-content: center;
            margin-top: 20px;
        }
        &__menu {
            display: flex;
            @include responsive(phone){
                flex-wrap: wrap;
                justify-content: center;
            }
            
        }

        &__item-link {
            padding: 0px 20px;
            color: white;
            @include typography-link();
        }

    }
}
</style>
