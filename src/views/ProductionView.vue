<template>
  <div id="production">
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
          <img src="../assets/img/line.svg" alt="" />
          <h1 class="section__title">
            {{ $store.state.sectionTitle.title2 }}
          </h1>
          <p class="section__link">
            <router-link class="section__link--item" :to="{ name: 'home' }">
              {{ $store.state.pageLinks.title1 }}</router-link
            >
            — Контрактное производство
          </p>
        </div>
      </div>
    </div>
    <AppProduct />
    <AppSeo />
    <AppContact />
  </div>
</template>

<script>
import AppProduct from '@/components/AppProduct.vue'
import AppSeo from '@/components/AppSeo.vue'
import AppContact from '@/components/AppContact.vue'
import gsap from 'gsap'
export default {
  name: 'ProductionView',
  components: {
    AppProduct,
    AppSeo,
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
