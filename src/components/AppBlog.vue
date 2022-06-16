<template>
  <div class="blog">
    <div class="container">
      <div class="section">
        <img src="../assets/img/line.svg" alt="" />
        <h1 class="section__title">
          {{ $store.state.sectionTitle.title6 }}
        </h1>
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
          <div>
            <router-link class="cta" :to="{ name: 'about' }"
              >Весь блог</router-link
            >
          </div>
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
            <div class="blog__content">
              <h3 class="blog__title">
                Современная методология разработки одухотворила всех причастных
              </h3>
              <p class="blog__text">
                Действия представителей оппозиции, превозмогая сложившуюся
                непростую экономическую ситуацию, в равной степени
                предоставлены...
              </p>
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link class="blog__slider" :to="{ name: 'blog' }">
            <img class="blog__img" src="../assets/img/blog-02.jpg" alt="" />
            <div class="blog__content">
              <h3 class="blog__title">
                Сложно сказать, почему жизнь прекрасна
              </h3>
              <p class="blog__text">
                Сложно сказать, почему элементы политического процесса
                функционально разнесены на независимые элементы. Безусловно,
                высокотехнологичная...
              </p>
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link class="blog__slider" :to="{ name: 'blog' }">
            <img class="blog__img" src="../assets/img/blog-01.jpg" alt="" />
            <div class="blog__content">
              <h3 class="blog__title">
                Современная методология разработки одухотворила всех причастных
              </h3>
              <p class="blog__text">
                Действия представителей оппозиции, превозмогая сложившуюся
                непростую экономическую ситуацию, в равной степени
                предоставлены...
              </p>
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link class="blog__slider" :to="{ name: 'blog' }">
            <img class="blog__img" src="../assets/img/blog-02.jpg" alt="" />
            <div class="blog__content">
              <h3 class="blog__title">
                Сложно сказать, почему жизнь прекрасна
              </h3>
              <p class="blog__text">
                Сложно сказать, почему элементы политического процесса
                функционально разнесены на независимые элементы. Безусловно,
                высокотехнологичная...
              </p>
            </div>
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

<style lang="scss">
.blog {
  width: 100%;

  &__img {
    width: 100%;
  }

  &__slider {
    position: relative;
  }

  &__content {
    position: absolute;
    width: 90%;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (min-width: 320px) and (max-width: 425px) {
      top: 60%;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 18px;
    color: #fff;
    line-height: 30px;

    @media (max-width: 425px) {
      font-size: 14px;
    }
  }

  &__text {
    font-weight: 300;
    font-size: 14px;
    color: #fff;

    @media (max-width: 425px) {
      font-size: 10px;
    }
  }
}

.slider-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  .cta {
    margin-top: 0;
  }
}

.slider__arrows {
  display: flex;
}

.slider-arrow {
  background-color: #5c8ee6;
  color: #fff;
  cursor: pointer;
}

.prevArrow {
  padding: 15px 15px 15px 25px;

  @media (max-width: 768px) {
    padding: 10px 10px 10px 20px;
  }
}

.nextArrow {
  padding: 15px 25px 15px 15px;

  @media (max-width: 768px) {
    padding: 10px 20px 10px 10px;
  }
}
</style>
