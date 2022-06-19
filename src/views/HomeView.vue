<template>
  <div id="home">
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
    <AppModal />
    <AppHero />
    <AppWork />
    <AppProduct />
    <AppMark />
    <AppClient />
    <AppMore />
    <AppBlog />
    <AppContact />
  </div>
</template>

<script>
import AppModal from '@/components/AppModal.vue'
import AppHero from '@/components/AppHero.vue'
import AppWork from '@/components/AppWork.vue'
import AppProduct from '@/components/AppProduct.vue'
import AppMark from '@/components/AppMark.vue'
import AppClient from '@/components/AppClient.vue'
import AppMore from '@/components/AppMore.vue'
import AppBlog from '@/components/AppBlog.vue'
import AppContact from '@/components/AppContact.vue'
import gsap from 'gsap'

export default {
  name: 'HomeView',
  components: {
    AppModal,
    AppHero,
    AppWork,
    AppProduct,
    AppMark,
    AppClient,
    AppMore,
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
