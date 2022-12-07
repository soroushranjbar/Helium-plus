<script>
export default{
    name: 'slider'
}
</script>
<template>
    <section class="slider">
            <div class="slider__arrow-right">
                <a href="#" class="slider__arrow-link">
                    <figure class="slider__arrow-icon">
                        <img src="@/assets/img/icon/arrow-right.svg" alt="arrow-right">
                    </figure>
                 </a>
            </div>
            <div class="post-card">
                <div class="post-card__author">
                    <figure class="post-card__author-img">
                        <img src="@/assets/img/autor.png" alt="author-avatar">
                    </figure>
                    <div class="post-card__author-info">
                        <p class="post-card__author-name">محمد سبحان سجایی فر</p>
                        <p class="post-card__author-time">۲۸ تیر ۱۴۰۰</p>
                    </div>
                </div>
                <div class="post-card__body-content">
                    <h1 class="post-card__title">
                        <router-link to="/single">طراحی کنترل کننده زیردریایی نظامی در دانشگاه
                                    صنعتی شریف تهران</router-link>
                    </h1>
                    <p class="post-card__subtitle">
                        کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین 10 زیردریایی برتر جهان
                        قرار گرفت.
                    </p>
                    <div class="post-card__badge">
                        <span class="post-card__reading-time">7 دقیقه مطالعه</span>
                        <span class="post-card__seperator">.</span>
                        <a class="post-card__category" href="#" target="_blank">تکنولوژی</a>
                    </div>
                </div>
            </div>
            <div class="slider__arrow-left">
                <a href="#" class="slider__arrow-link">
                    <figure class="slider__arrow-icon">
                        <img src="@/assets/img/icon/arrow-left.svg" alt="arrow-left">
                    </figure>
                 </a>
            </div>
        </section>
</template>
<style scoped lang="scss">
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/responsive.scss';
.slider {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 692px;
    padding: 0px 24px;
    background: url(@/assets/img/slider-1.png) center;
    background-repeat: no-repeat;
    background-size: cover;
    @include responsive(phone){
        height: 500px;
        padding: 0px 10px;
    }
    @include responsive(tablet){
        height: 550px;
        padding: 0px 10px;
    }

    &__arrow-icon {
        @include arrow-slider();
        @include responsive(phone){
            img{
                width: 18px;
                height: 18px;
            }
        }
        @include responsive(tablet){
            img{
                width: 22px;
                height: 22px;
            }
        }
    }

    .post-card {
        padding: 32px;
        transform: translateY(150px);
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 4px 10px 35px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(50px);
        border-radius: 12px;
        @include responsive(phone){
            padding: 20px;
            margin: 0px 10px;
            transform: translateY(0px);
        }
        @include responsive(tablet){
            padding: 20px;
            margin: 0px 10px;
            transform: translateY(0px);
        }
        &__title {
            @include Subtitle();
            color: white;
        }

        &__subtitle {
            @include typography-body-reg();
            color: #CCCCCC;
            margin-top: 8px;
        }

        &__author-name {
            @include typography-body2-reg(white);
        }

        &__author-time {
            @include typography-Small-Text();
            color: #CCCCCC;
        }
        &__reading-time{
            @include typography-Small-Text();
            color: #CCCCCC;
        }
        &__body-content{
            margin-top: 16px;
        }
        &__category{
            @include category-button();
        }
        &__seperator {
            color: white;
            margin: 0px 8px;
        }
        &__author-info{
            margin-right: 12px;
        }
        &__badge{
            margin-top: 16px;
        }
        &__author{
            display: flex;
            align-items: center;
        }
    }
}
</style>