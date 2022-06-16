<template>
  <div id="blogs">
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
            {{ $store.state.sectionTitle.title22 }}
          </h1>
          <p class="section__link">
            <router-link class="section__link--item" :to="{ name: 'home' }">
              {{ $store.state.pageLinks.title1 }}</router-link
            >
            —
            <router-link class="section__link--item" :to="{ name: 'blog' }">
              {{ $store.state.sectionTitle.title21 }}</router-link
            >
            — Современная методология разработки одухотворила всех причастных
          </p>
        </div>
      </div>
    </div>
    <AppMethod />
    <AppBlog />
    <AppContact />
  </div>
</template>

<script>
import AppMethod from '@/components/AppMethod.vue'
import AppBlog from '@/components/AppBlog.vue'
import AppContact from '@/components/AppContact.vue'
import gsap from 'gsap'
export default {
  name: 'ProductionView',
  components: {
    AppMethod,
    AppBlog,
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

<style lang="scss" scoped>
.page__section {
  background: url('../assets/img/method.jpg') no-repeat center / cover;
}

.section__title {
  color: #fff;
  width: 70%;
}

.section__link--item,
.section__link {
  color: #fff;
}
</style>
