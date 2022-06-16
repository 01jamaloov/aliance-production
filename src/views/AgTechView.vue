<template>
  <div id="ag-tech">
    <transition appear @before-enter="beforeEnterOne" @enter="enterOne">
      <div class="hero__layer">
        <transition
          appear
          @before-enter="beforeEnterPreloader"
          @enter="enterPreloader"
        >
          <img src="../assets/img/preloader.svg" alt="" />
        </transition>
      </div>
    </transition>
    <div class="page__section">
      <div class="container">
        <div class="section">
          <div class="section__wrapper">
            <div class="section__item">
              <img src="../assets/img/line.svg" alt="" />
              <h1 class="section__title">
                {{ $store.state.sectionTitle.title16 }}
              </h1>
              <p class="section__link">
                <router-link class="section__link--item" :to="{ name: 'home' }">
                  {{ $store.state.pageLinks.title1 }}</router-link
                >
                —
                <router-link
                  class="section__link--item"
                  :to="{ name: 'trade-marks' }"
                >
                  {{ $store.state.sectionTitle.title3 }}</router-link
                >
                — Автохимия AG-Tech
              </p>
            </div>
            <div class="section__item">
              <img
                class="section__image"
                src="../assets/img/avto-him.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppAgTech />
    <AppPluses />
    <AppDistributor />
    <AboutBlog />
    <AppWork />
    <AppMore />
    <AppContact />
  </div>
</template>

<script>
import AppAgTech from '@/components/AppAgTech.vue'
import AppPluses from '@/components/AppPluses.vue'
import AppDistributor from '@/components/AppDistributor.vue'
import AboutBlog from '@/components/AboutBlog.vue'
import AppWork from '@/components/AppWork.vue'
import AppMore from '@/components/AppMore.vue'
import AppContact from '@/components/AppContact.vue'
import gsap from 'gsap'

export default {
  name: 'AgTechView',
  components: {
    AppAgTech,
    AppPluses,
    AppDistributor,
    AboutBlog,
    AppWork,
    AppMore,
    AppContact
  },
  methods: {
    beforeEnterOne(el) {
      el.style.transform = 'translateY(0)'
      el.opacity = 0
    },
    enterOne(el) {
      gsap.to(el, {
        duration: 1.5,
        y: '-100%',
        opacity: 1,
        delay: 2
      })
    },
    beforeEnterPreloader(el) {
      el.opacity = 1
    },
    enterPreloader(el) {
      gsap.to(el, {
        duration: 1,
        opacity: 0,
        delay: 1
      })
    }
  }
}
</script>

<style></style>
