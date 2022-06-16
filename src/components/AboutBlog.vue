<template>
  <div class="blog">
    <div class="container">
      <div class="section">
        <img src="../assets/img/line.svg" alt="" />
        <h1 class="section__title">
          {{ $store.state.sectionTitle.title11 }}
        </h1>
      </div>
      <div class="about-blog__wrapper">
        <div class="about-blog__item">
          <p class="about-blog__text">
            Явные признаки победы институционализации рассмотрены исключительно
            в разрезе маркетинговых и финансовых предпосылок. Приятно, граждане,
            наблюдать, как активно развивающиеся страны третьего мира могут быть
            ограничены исключительно образом мышления. Лишь независимые
            государства набирают популярность среди определенных слоев
            населения, а значит, должны быть указаны как претенденты на роль
            ключевых факторов. Лишь акционеры крупнейших компаний могут быть
            призваны к ответу.
          </p>
        </div>
        <div class="about-blog__item">
          <p class="about-blog__text">
            Явные признаки победы институционализации рассмотрены исключительно
            в разрезе маркетинговых и финансовых предпосылок. Приятно, граждане,
            наблюдать, как активно развивающиеся страны третьего мира могут быть
            ограничены исключительно образом мышления. Лишь независимые
            государства набирают популярность среди определенных слоев
            населения, а значит, должны быть указаны как претенденты на роль
            ключевых факторов. Лишь акционеры крупнейших компаний могут быть
            призваны к ответу.
          </p>
        </div>
      </div>
      <swiper
        :modules="modules"
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        :breakpoints="{
          '992': {
            slidesPerView: 1,
            spaceBetween: 20
          },
          '1024': {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <div class="slider-navigation">
          <div class="slider__arrows">
            <div class="slider-arrow prevArrow">
              <img src="../assets/img/arrow-prev.svg" alt="" />
            </div>
            <div class="slider-arrow nextArrow">
              <img src="../assets/img/arrow-next.svg" alt="" />
            </div>
          </div>
        </div>
        <swiper-slide>
          <router-link class="blog__slider" :to="{ name: 'blog' }">
            <img class="blog__img" src="../assets/img/blog-01.jpg" alt="" />
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link class="blog__slider" :to="{ name: 'blog' }">
            <img class="blog__img" src="../assets/img/blog-02.jpg" alt="" />
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link class="blog__slider" :to="{ name: 'blog' }">
            <img class="blog__img" src="../assets/img/blog-01.jpg" alt="" />
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link class="blog__slider" :to="{ name: 'blog' }">
            <img class="blog__img" src="../assets/img/blog-02.jpg" alt="" />
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = swiper => {}
    const onSlideChange = () => {}
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation]
    }
  }
}
</script>

<style lang="scss" scoped>
.about-blog__wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  margin-bottom: 35px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
  }
}

.section {
  max-width: 600px;
  width: 100%;
}

.slider-navigation {
  justify-content: flex-end;
}
</style>
