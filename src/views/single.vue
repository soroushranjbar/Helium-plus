<script>
  export default {
    name: "single",
    data: function data() {
      return {
        author: 'محمد سبحان سجایی فر',
        date: '28 تیر 1400',
        postTitle: 'طراحی کنترل کننده زیردریایی نظامی در دانشگاه صنعتی شریف تهران',
        postDescription: `
                        کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین 10 زیردریایی برتر جهان
                        قرار گرفت.
                    `,
        readingTime: "7 دقیقه مطالعه",
        postCategory: "تکنولوژی",
        input: "",
        reply: "",
        total_comments: 0,
        comments: [],
        commentWriter:'',
        commentWriter2:'',
      }
    },
    //methods for comment
    methods: {
      
      getSingleTon: function (comment) {
        return function () {
          return {
            comment,
          }
        }
      },
      submit() {
        var comment = this.getSingleTon(this.input);
        var old = this.comments;
        var newc = [...old, comment()];
        this.comments = newc;
        this.input = "";
        this.commentWriter2=commentWriter;
      },
      
    }
  }
</script>

<template>
  <main>
    <section class="post-single">
      <div class="post-single__body">
        <div class="post-single__header">
          <div class="post-card__author">
            <figure class="post-card__author-img">
              <img src="@/assets/img/autor-2.png" alt="author-avatar">
            </figure>
            <div class="post-card__author-info">
              <p class="post-card__author-name">محمد سبحان سجایی فر</p>
              <p class="post-card__author-time">۲۸ تیر ۱۴۰۰</p>
            </div>
          </div>
          <div class="post-single__heading">
            <h1 class="post-single__heading-title">
              <router-link to="/single">طراحی کنترل کننده زیردریایی نظامی در دانشگاه
                صنعتی شریف تهران</router-link>
            </h1>
            <div class="post-card__badge">
              <span class="post-card__reading-time">7 دقیقه مطالعه</span>
              <span class="post-card__seperator">.</span>
              <a class="post-card__category" href="#" target="_blank">تکنولوژی</a>
            </div>
          </div>
          <figure><img class="post-single__image" src="@/assets/img/post-signle-featured-img.png"
              alt="a brand new sports car">
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
          <figure><img class="post-single__body-text-img" src="@/assets/img/post-single-inner-img.png"
              alt="a brand new sports car">
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
      <section>
        <div class="post-single__related-post">
          <div class="post-single__related-post-author">
            <h3>از همین نویسنده</h3>
          </div>
          <section class="horizontal-post-content">
            <div class="container">
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
                <figure class="post-card__image">
                  <img src="@/assets/img/post-card-1.png" alt="a brand new sports car">
                </figure>
                <div class="post-card__body-content">
                  <h1 class="post-card__title">
                    <router-link to="/single">طراحی کنترل کننده زیردریایی نظامی در دانشگاه
                      صنعتی شریف تهران</router-link>
                  </h1>
                  <p class="post-card__subtitle">
                    کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین 10
                    زیردریایی
                    برتر جهان
                    قرار گرفت.
                  </p>
                  <div class="post-card__badge">
                    <span class="post-card__reading-time">7 دقیقه مطالعه</span>
                    <span class="post-card__seperator">.</span>
                    <a class="post-card__category" href="#" target="_blank">تکنولوژی</a>
                  </div>
                </div>
              </div>
              <div class="post-card">
                <div class="post-card__author">
                  <figure class="post-card__author-img">
                    <img src="@/assets/img/autor-2.png" alt="author-avatar">
                  </figure>
                  <div class="post-card__author-info">
                    <p class="post-card__author-name">محمدرضا علیزاده</p>
                    <p class="post-card__author-time">۲۸ تیر ۱۴۰۰</p>
                  </div>
                </div>
                <figure class="post-card__image">
                  <img src="@/assets/img/post-card-2.png" alt="a brand new sports car">
                </figure>
                <div class="post-card__body-content">
                  <h1 class="post-card__title">
                    <router-link to="/single">طراحی کنترل کننده زیردریایی نظامی در دانشگاه
                      صنعتی شریف تهران</router-link>
                  </h1>
                  <p class="post-card__subtitle">
                    کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین 10
                    زیردریایی
                    برتر جهان
                    قرار گرفت.
                  </p>
                  <div class="post-card__badge">
                    <span class="post-card__reading-time">7 دقیقه مطالعه</span>
                    <span class="post-card__seperator">.</span>
                    <a class="post-card__category" href="#" target="_blank">تکنولوژی</a>
                  </div>
                </div>
              </div>
              <div class="post-card">
                <div class="post-card__author">
                  <figure class="post-card__author-img">
                    <img src="@/assets/img/autor-3.png" alt="author-avatar">
                  </figure>
                  <div class="post-card__author-info">
                    <p class="post-card__author-name">عاطفه مجتبی نژاد</p>
                    <p class="post-card__author-time">۲۸ تیر ۱۴۰۰</p>
                  </div>
                </div>
                <figure class="post-card__image">
                  <img src="@/assets/img/post-card-3.png" alt="a brand new sports car">
                </figure>
                <div class="post-card__body-content">
                  <h1 class="post-card__title">
                    <a href="./single.html" target="_blank">طراحی کنترل کننده زیردریایی نظامی در دانشگاه
                      صنعتی شریف تهران</a>
                  </h1>
                  <p class="post-card__subtitle">
                    کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین 10
                    زیردریایی
                    برتر جهان
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
          </section>
        </div>
      </section>

      <section class="post-single__comments-box">
        <div class="post-single__comments">
          <div class="post-single__comments-title">
            <h3>نظرات</h3>
          </div>          
          <div class="post-single__comments__writer">
            <div class="post-single__comments__writer-name">
              <p>سروش صفائی زاده</p>
            </div>
            <div class="post-single__comments__writer-date">
              <p>28 تیر 1401</p>
            </div>
          </div>
          <div class="post-single__comments__text" >
            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
          </div>
          <hr class="post-single__comments_seperator">
          <div class="comment-wrapper" v-for="comment,index in comments" :key="index.id">
            <div class="post-single__comments__writer">
              <div class="post-single__comments__writer-name">
                <p>سروش صفائی زاده</p>
                <!-- <p>{{commentWriter2}}</p> -->
              </div>
              <div class="post-single__comments__writer-date">
                <p>28 تیر 1401</p>
              </div>
            </div>
            <div class="post-single__comments__text">
               <p>{{comment.comment}}</p>
            </div>
            <hr class="post-single__comments_seperator">
          </div>
          <!-- comment-form- -->
          <section class="comment-form">
            <div class="comment-form__title">
              <p>نظر دادن</p>
            </div>
            <form class="comment-form__fields" v-on:submit.prevent='submit'>
              <div class="comment-form__name">
                <input v-model='commentWriter' class="comment-form__inputbox" id="fullname" type="text" placeholder="نام*" name="fullname">
              </div>
              <div class="comment-form__family">
                <input class="comment-form__inputbox" id="fullname" type="text" placeholder="نام خانوادگی*"
                  name="fullname"></div>
              <div class="comment-form__email"><input class="comment-form__inputbox" id="email" type="email"
                  placeholder="پست الکترونیک*" name="email"></div>
              <div class="comment-form__message">
                <textarea cols="40" rows="1" id="message" type="text" placeholder="نظر دادن*" name="message"
                  v-model='input'>
                </textarea>
              </div>
              <button class="comment-form__button" type="submit"> ثبت نظر </button>
            </form>
          </section>
        </div>
      </section>

    </section>

  </main>
</template>

<style lang="scss">
  @import "../assets/scss/reset.scss";
  @import "../assets/scss/variable.scss";

  // start body style 
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
      min-height: 100px;

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

  .comment-form {
    padding-bottom: 100px;

    &__inputbox {
      border: none;
      color: #00365b;
      width: 100%;
      padding: 7px 0px;
      background: transparent;
      overflow: visible;
      font-family: inherit;
      font-size: 100%;
      border-radius: 2px;
      border-bottom: 2px solid #406080;
    }

    &__title {
      @include Subtitle();
      padding: 14px 0 16px 0;
    }

    &__name {
      flex: 0 1 25%;
      @include typography-body-reg();
      padding-left: 15px;
    }

    &__name,
    &__family,
    &__email {
      background: transparent;
      color: $text-3;
    }

    &__family {
      flex: 0 1 25%;
      @include typography-body-reg();
      padding-left: 15px;
    }

    &__email {
      flex: 0 1 calc(100% - 30px - 50%);
      ;
      @include typography-body-reg();
    }

    &__message {
      flex: 0 1 100%;
      @include typography-body-reg();

      & textarea {
        font-size: 14px;
        border: none;
        border-bottom: 2px solid #406080;
        @include typography-body-reg();
        font-family: kalameh;
        width: 100%;
        padding-top: 39px;
        resize: vertical;
        min-height: 50px;

        &:focus {
          border: none;
          border-bottom: 2px solid $primary-color;
        }

        &:focus-visible {
          outline: auto 0px;
        }
      }
    }

    &__button {
      @include Text-Button();
      padding: 8px 24px;
      border-radius: 4px;
      background-color: $primary-color;
      color: #fff;
      border: none;
      cursor: pointer;
      align-self: flex-end;
      margin-top: 32px;
    }

    &__fields {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;

      & input:focus {
        border-bottom: 2px solid $primary-color;
      }

      & input:focus-visible {
        outline: -webkit-focus-ring-color auto 0px;
      }


    }
  }

  // start horizontal post content
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
      padding-top: 32px;

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

  // end of horizontal post content
  //responsive code of single page exclude component
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

  // responsive comment section in single page
  .comment-form {

    @include responsive (tablet) {
      text-align: justify;
    }

    @include responsive (phone) {
      text-align: justify;
    }

    @include responsive (sm) {
      text-align: justify;
    }

    &__fields {
      @include responsive (phone) {
        flex-direction: column;
        row-gap: 20px;
      }

    }

    &__family,
    &__name {

      @include responsive (phone) {
        padding-left: 0;
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
  }

  .horizontal-post-content .container {
    @include responsive (tablet) {
      flex-direction: column;
    }

    @include responsive (phone) {
      flex-direction: column;
    }

    @include responsive (sm) {}
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
        width: 100%;
      }

      @include responsive (sm) {
        width: 100%;
      }
    }
  }

  //END responsive SINGLE.html page
</style>