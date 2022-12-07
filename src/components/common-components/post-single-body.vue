<script>
    export default {
        name: "postSingleBody",
        data: function data() {
            return {
                author: 'محمد سبحان سجایی فر',
                date: '28 تیر 1400',
                image: 'https://source.unsplash.com/JuR8sxg9aYo',
                postTitle: 'طراحی کنترل کننده زیردریایی نظامی در دانشگاه صنعتی شریف تهران',
                postDescription: `
                        کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین 10 زیردریایی برتر جهان
                        قرار گرفت.
                    `,
                readingTime: "7 دقیقه مطالعه",
                postCategory: "تکنولوژی",
            }
        },
        methods: {

        }
    }
</script>


<template>
    <section class="post-single">
        <div class="post-single__body">
            <div class="post-single__header">
                <div class="post-card__author">
                    <figure class="post-card__author-img">
                        <img src="assets/img/autor-2.png" alt="author-avatar">
                    </figure>
                    <div class="post-card__author-info">
                        <p class="post-card__author-name">نحند سبحان سجایی فر</p>
                        <p class="post-card__author-time">۲۸ تیر ۱۴۰۰</p>
                    </div>
                </div>
                <div class="post-single__heading">
                    <h1 class="post-single__heading-title">
                        <a href="./single.html" target="_blank">کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه
                            صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.</a></h1>
                    <div class="post-card__badge">
                        <span class="post-card__reading-time">7 دقیقه مطالعه</span>
                        <span class="post-card__seperator">.</span>
                        <a class="post-card__category" href="#" target="_blank">تکنولوژی</a>
                    </div>
                </div>
                <figure><img class="post-single__image" src="assets/img/post-signle-featured-img.png"
                        alt="a brand new sports car" />
                </figure>
            </div>
            <div class="post-single__body-text">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                    ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که
                    تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                    دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <div class="post-single__body-text-h3">
                    <p>کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران
                        در بین ۱۰ زیردریایی برتر جهان قرار گرفت.</p>
                </div>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                    ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که
                    تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                    دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <figure><img class="post-single__body-text-img" src="assets/img/post-single-inner-img.png"
                        alt="a brand new sports car" />
                </figure>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                    ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که
                    تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                    دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </div>
        </div>
        
    </section>
</template>
<style scoped lang="scss">
    @import '../../assets/scss/variable.scss';


    .post-single {
        @include center-elements();

        &__body {
            overflow: auto;
        }

        &__featured-img {
            width: 798px;
            height: 528px;
        }
    }

    .post-single {
        background-color: #fff;
        margin: auto;
        overflow: hidden;
        font-family: kalameh;
        @include center-elements();
        flex-direction: column;

        &__body {
            width: 800px;
        }

        &__holder {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 1200px;
        }

        &__rightside {
            padding-left: 20px;
        }

        &__heading {
            display: flex;
            flex-direction: column;
            align-items: start;
            min-height: 200px;

        }

        &__image {
            width: 798px;
            height: 528px;
            border-radius: 4px;
            background-size: contain;
            padding-top: 32px;

        }

        &__heading-title {
            @include H2();
        }

        &__subtitle {
            @include typography-body-reg();
        }

        &__author {
            padding: 14px 0;
            display: flex;
            align-items: center;

            &-img {
                border-radius: 50%;
                height: 48px;
                width: 48px;
                margin-top: auto;
                padding-left: 10px;
            }

            &-name {
                @include typography-body2-reg();
            }

            &-time {
                @include typography-Small-Text();
            }

            &-time {
                color: #888;
            }
        }

        &__badge {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-family: kalameh;

        }

        &__badge_blue {
            background-color: #DEEAF5;
            @include typography-Small-Text();
            color: $primary-color;
            padding: 5px;
            border-radius: 5px;
            margin: 0;
            font-size: 11px;
        }

        &__badge__reading-time {
            font-size: 11px;
        }

        &__body-text {
            @include typography-body-reg();
            padding: 24px 0 32px 0;

            &-h3 {
                @include H3();
                padding: 32px 0 16px 0;
            }

            &-img {
                width: 798px;
                height: 528px;
                border-radius: 4px;
                background-size: contain;
                padding: 32px 0 24px 0;
            }

        }

        &__related-post {
            & .container-post-single {
                @include center-elements();
                column-gap: 5px;
                width: 1200px;
                padding-top: 20px;
            }
        }

        &__related-post-author {
            @include H3();
            border-bottom: 2px solid $primary-color;
        }

        &__comments {

            &-box {
                @include center-elements(column, 800px);
                margin: 0 auto;
                @include H3();
            }

            &-title {
                border-bottom: 2px solid $primary-color;
                padding: 8px 0;
            }

            &_form_title {
                @include Subtitle();
            }

            &__writer {

                display: flex;
                justify-content: space-between;
                padding: 16px 0 6px 0;
            }

            &__writer-name {
                @include Body-Bold();
            }

            &__writer-date {
                @include Small-Text;
                color: #8593A6;

            }

            &__text {
                @include typography-body-reg();

            }

            &_seperator {
                color: $primary-color;
                border: 1px solid rgba(19, 158, 202, 0.3);
                width: 100%;
            }
        }

    }
</style>