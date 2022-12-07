<script>
export default{
    name: 'verticalpost'
}
</script>

<template>
    <section class="vertical-post-content">
        <div class="container">
            <div class="post-card">
                <div class="post-card__vertical">
                    <div class="post-card__vertical-img">
                        <figure class="post-card__image image-vertical">
                            <img src="@/assets/img/post-vr-1.png" alt="a brand new sports car">
                        </figure>
                    </div>
                    <div class="post-card__vertical-content">
                        <div class="post-card__author">
                            <figure>
                                <img class="post-card__author-img" src="@/assets/img/Ellipse-1.png" alt="author avatar">
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
                                کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین 10
                                زیردریایی برتر
                                جهان
                                قرار گرفت.
                            </p>
                            <div class="post-card__badge">
                                <span class="post-card__reading-time">7 دقیقه مطالعه</span>
                                <span class="post-card__seperator">.</span>
                                <a class="post-card__category" href="#" target="_blank">تکنولوژی</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="post-card">
                <div class="post-card__vertical">
                    <div class="post-card__vertical-img">
                        <figure class="post-card__image image-vertical">
                            <img src="@/assets/img/post-vr-2.png" alt="a brand new sports car">
                        </figure>
                    </div>
                    <div class="post-card__vertical-content">
                        <div class="post-card__author">
                            <figure><img class="post-card__author-img" src="@/assets/img/Ellipse-2.png"
                                    alt="author avatar" />
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
                                کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین 10
                                زیردریایی برتر
                                جهان
                                قرار گرفت.
                            </p>
                            <div class="post-card__badge">
                                <span class="post-card__reading-time">7 دقیقه مطالعه</span>
                                <span class="post-card__seperator">.</span>
                                <a class="post-card__category" href="#" target="_blank">تکنولوژی</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="post-card">
                <div class="post-card__vertical">
                    <div class="post-card__vertical-img">
                        <figure class="post-card__image image-vertical">
                            <img src="@/assets/img/post-vr-3.png" alt="a brand new sports car">
                        </figure>
                    </div>
                    <div class="post-card__vertical-content">
                        <div class="post-card__author">
                            <figure>
                                <img class="post-card__author-img" src="@/assets/img/Ellipse-3.png"
                                    alt="author avatar" />
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
                                کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین 10
                                زیردریایی برتر
                                جهان
                                قرار گرفت.
                            </p>
                            <div class="post-card__badge">
                                <span class="post-card__reading-time">7 دقیقه مطالعه</span>
                                <span class="post-card__seperator">.</span>
                                <a class="post-card__category" href="#" target="_blank">تکنولوژی</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @import '@/assets/scss/variable.scss';
    @import '@/assets/scss/responsive.scss';

    .horizontal-post-content {
        margin: 0px 0px 100px;

        .container {
            @include center-elements();
            column-gap: 5px;
        }
    }

    .post-card {
        &__author {
            display: flex;
            align-items: center;
            padding-bottom: 8px;
            padding-top: 20px;

            &-img {
                padding-left: 12px;
            }

            &-name {
                @include typography-body2-reg();
            }

            &-time {
                @include typography-Small-Text();
                color: #888;
            }
        }

        &__image {
            width: 374px;
            height: 247px;
            overflow: hidden;
            position: relative;
            border-radius: 4px;
        }

        &__title {
            margin: 8px 0;
            padding-left: 12px;
            @include Subtitle();
        }

        &__subtitle {
            @include typography-body-reg();
        }

        &__badge {
            display: flex;
            align-items: baseline;
            padding-top: 14px;
        }

        &__seperator {
            margin: 0px 8px;
        }

        &__category {
            @include category-button();
        }

        &__reading-time {
            @include typography-Small-Text();
            color: #8593A6;
        }

        &__vertical {
            display: flex;
            justify-content: flex-start;
            align-items: center;

        }
    }

    figure.post-card__image:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #288fee42;
        left: 0;
        top: 0;
        opacity: 0;
        transform: translateY(100%);
        transition: 0.3s;
        z-index: 1;
    }

    .post-card:hover figure.post-card__image:after {
        transform: translateY(0);
        transition: 0.3s;
        opacity: 1;
    }

    .vertical-post-content {
        margin-bottom: 60px;

        .container {
            @include center-elements(column);
            gap: 36px;

        }

        & .image-vertical {
            width: 586px;
            height: 387px;
        }
    }

    //Start responsive SINGLE.html page
    .post-single {

        @include responsive (tablet) {}

        @include responsive (phone) {}

        @include responsive (sm) {}

        &__body {
            @include responsive (tablet) {
                width: $break-phone;
            }

            @include responsive (phone) {
                width: $break-sm;
            }

            @include responsive (sm) {}
        }

        &__related-post {
            @include responsive (tablet) {
                width: $break-phone;
            }

            @include responsive (phone) {
                width: $break-sm;
            }

            @include responsive (sm) {}
        }

        &__comments-box {
            @include responsive (tablet) {
                width: $break-phone;
            }

            @include responsive (phone) {
                width: $break-sm;
            }

            @include responsive (sm) {}
        }

        &__image {
            @include responsive (tablet) {
                width: 100%;
            }

            @include responsive (phone) {
                width: 100%;
            }

            @include responsive (sm) {}
        }

        &__heading-title {
            @include responsive (tablet) {
                text-align: justify;
            }

            @include responsive (phone) {
                text-align: justify;
            }

            @include responsive (sm) {
                text-align: justify;
            }

        }

    }

    .comment-form {
        &__fields {
            flex-direction: column;
            row-gap: 20px;
        }

        &__family,
        &__name {
            padding-left: 0;
        }
    }

    .post-card {
        @include responsive (tablet) {
            width: 500px;
        }

        @include responsive (phone) {
            width: 300px;
        }

        @include responsive (sm) {}

        &__image {
            @include responsive (tablet) {
                width: 100%;
            }

            @include responsive (phone) {}

            @include responsive (sm) {
                width: 100%;
            }

        }

        &__image img {
            @include responsive (tablet) {
                width: 100%;
            }

            @include responsive (phone) {
                max-width: 374px;
                height: 100%;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }

            @include responsive (sm) {
                width: 100%;
            }
        }

        &__vertical {

            @include responsive (phone) {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
            }

            @include responsive (tablet) {
                flex-direction: column;
            }

        }

        &__vertical-content {
            @include responsive (tablet) {
                width: 500px;

            }

            @include responsive (phone) {
                width: 350px;
            }

            @include responsive (sm) {
                width: 100%;
            }
        }

        &__vertical-img {
            padding-left: 20px;

            @include responsive (phone) {
                padding-left: 0;
            }

            @include responsive (sm) {
                width: 100%;
            }
        }
    }

    .horizontal-post-content .container {
        @include responsive (tablet) {
            flex-direction: column;
            width: 500px;
        }

        @include responsive (phone) {
            flex-direction: column;
        }

        @include responsive (sm) {
            flex-direction: column;
        }
    }

    .vertical-post-content {

        & .image-vertical {

            @include responsive (full) {
                width: 100%;
                height: 247px;
                margin: 0 auto;
            }


            @include responsive (tablet) {
                height: 287px;
                padding-left: 0;
            }

            @include responsive (phone) {
                padding-left: 0;
            }

            @include responsive (sm) {}

        }

    }

    //END responsive SINGLE.html page
</style>