<template>
  <div id="chemical">
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
                {{ $store.state.sectionTitle.title12 }}
              </h1>
              <p class="section__link">
                <router-link class="section__link--item" :to="{ name: 'home' }">
                  {{ $store.state.pageLinks.title1 }}</router-link
                >
                —
                <router-link
                  class="section__link--item"
                  :to="{ name: 'production' }"
                >
                  {{ $store.state.sectionTitle.title2 }}</router-link
                >
                — Автомобильная химия
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
    <AppChemistry />
    <AppPluses />
    <AppMake />
    <AppType />
    <AboutBlog />
    <AppWork />
    <AppMore />
    <AppContact />
  </div>
</template>

<script>
import AppChemistry from '@/components/AppChemistry.vue'
import AppPluses from '@/components/AppPluses.vue'
import AppMake from '@/components/AppMake.vue'
import AppType from '@/components/AppType.vue'
import AboutBlog from '@/components/AboutBlog.vue'
import AppWork from '@/components/AppWork.vue'
import AppMore from '@/components/AppMore.vue'
import AppContact from '@/components/AppContact.vue'
import gsap from 'gsap'

export default {
  name: 'ChemicalView',
  components: {
    AppChemistry,
    AppPluses,
    AppMake,
    AppType,
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
