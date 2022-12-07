<template>
    <section class="horizontal-post-content">
        <div class="container">
            <div class="post-card">
                <div class="post-card__author">
                    <figure class="post-card__author-img">
                        <img src="@/assets/img/Ellipse-1.png" alt="author-avatar">
                    </figure>
                    <div class="post-card__author-info">
                        <p class="post-card__author-name">محمد سبحان سجایی فر</p>
                        <p class="post-card__author-time">۲۸ تیر ۱۴۰۰</p>
                    </div>
                </div>
                <figure class="post-card__image">
                    <img src="@/assets/img/post-card-1.png" alt="a brand new sports car">
                </figure>
                <div class="post-card__body-content">
                    <h1 class="post-card__title">
                        <router-link to="/single">طراحی کنترل کننده زیردریایی نظامی در دانشگاه صنعتی شریف تهران</router-link>
                    </h1>
                    <p class="post-card__subtitle">کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی...</p>                    
                    <div class="post-card__badge">
                        <span class="post-card__reading-time">7 دقیقه مطالعه</span>
                        <span class="post-card__seperator">.</span>
                        <router-link class="post-card__category" to="/home">تکنولوژی</router-link>
                    </div>
                </div>
            </div>
            <div class="post-card">
                <div class="post-card__author">
                    <figure class="post-card__author-img">
                        <img src="@/assets/img/Ellipse-2.png" alt="author-avatar">
                    </figure>
                    <div class="post-card__author-info">
                        <p class="post-card__author-name">محمد سبحان سجایی فر</p>
                        <p class="post-card__author-time">۲۸ تیر ۱۴۰۰</p>
                    </div>
                </div>
                <figure class="post-card__image">
                    <img src="@/assets/img/post-card-2.png" alt="a brand new sports car">
                </figure>
                <div class="post-card__body-content">
                    <h1 class="post-card__title">
                        <router-link to="/single">طراحی کنترل کننده زیردریایی نظامی در دانشگاه صنعتی شریف تهران</router-link>
                    </h1>
                    <p class="post-card__subtitle">کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی...</p>                    
                    <div class="post-card__badge">
                        <span class="post-card__reading-time">7 دقیقه مطالعه</span>
                        <span class="post-card__seperator">.</span>
                        <router-link class="post-card__category" to="/home">تکنولوژی</router-link>
                    </div>
                </div>
            </div>
            <div class="post-card">
                <div class="post-card__author">
                    <figure class="post-card__author-img">
                        <img src="@/assets/img/Ellipse-3.png" alt="author-avatar">
                    </figure>
                    <div class="post-card__author-info">
                        <p class="post-card__author-name">محمد سبحان سجایی فر</p>
                        <p class="post-card__author-time">۲۸ تیر ۱۴۰۰</p>
                    </div>
                </div>
                <figure class="post-card__image">
                    <img src="@/assets/img/post-card-3.png" alt="a brand new sports car">
                </figure>
                <div class="post-card__body-content">
                    <h1 class="post-card__title">
                        <router-link to="/single">طراحی کنترل کننده زیردریایی نظامی در دانشگاه صنعتی شریف تهران</router-link>
                    </h1>
                    <p class="post-card__subtitle">کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی...</p>                    
                    <div class="post-card__badge">
                        <span class="post-card__reading-time">7 دقیقه مطالعه</span>
                        <span class="post-card__seperator">.</span>
                        <router-link class="post-card__category" to="/home">تکنولوژی</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
//     import axios from 'axios'
//     export default {
//         name: "HorizontalPost",
//         mounted(){
//         axios
//         .get("http://87.107.30.143:3014/articles?page=1")
//         .then(response =>{
//         this.posts = response.data.data;
//         console.log(this.posts)
//         })
//         .catch(function (error){
//         console.log(error)
//         });
//         },     
//         data() {
//             return {
//                 posts : null,
//             }
//         },
//     }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/variable.scss';
    @import '@/assets/scss/responsive.scss';


    .horizontal-post-content {
        margin: 0px 0px 100px;

        .container {
            @include center-elements($align-items:baseline);
            column-gap: 5px;
        }
    }

    .post-card {
        max-width: 397px;
        @include responsive(phone){
            max-width: 374px;
        }
        @include responsive(tablet){
            max-width: 374px;
        }
        &__author {
            display: flex;
            align-items: center;
            padding-bottom: 8px;
            padding-top: 32px;

            &-img {
                margin-left: 12px;
            }
            &-img img{
                width: 36px;
                height: 36px;
                border-radius: 100%;
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

        &__vertical-img {
            padding-left: 20px;
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
        &__image {
            @include responsive (tablet) {
                width: 100%;
            }

            @include responsive (phone) {
                width: 100%;
            }

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
            }

            @include responsive (sm) {
                width: 100%;
            }
        }
    }

    .horizontal-post-content {
        @include responsive (tablet) {
            margin: 0 0 50px;
            flex-direction: column;
        }

        @include responsive (phone) {
            margin: 0 0 50px;
            flex-direction: column;
        }

        @include responsive (sm) {}

        & .container {
            @include responsive (tablet) {
                margin: 0 0 50px;
                flex-direction: column;
                align-items: center;
            }

            @include responsive (phone) {
                margin: 0 0 50px;
                flex-direction: column;
                align-items: center;
            }
        }
    }

    //END responsive SINGLE.html page
</style>