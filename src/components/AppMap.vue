<template>
  <div class="map">
    x
    <div class="footer">
      <div class="container">
        <div class="footer__top">
          <div class="footer__logo" v-show="logoShow">
            <router-link class="footer__logo--link" :to="{ name: 'home' }">
              <img src="../assets/img/logo-fixed.svg" alt="" />
            </router-link>
          </div>
          <h4 class="footer__phone">+7 (499) 686-10-14</h4>
          <div class="footer__address">
            <img src="../assets/img/location.svg" alt="" />
            <p class="footer__text">г. Мосвка, Холодильный пер. 4к1с8</p>
          </div>
          <div class="footer__address">
            <img src="../assets/img/mail.svg" alt="" />
            <p class="footer__text">a.dragunov@tdaliance.ru</p>
          </div>
          <div class="footer__social">
            <img src="../assets/img/vk.svg" alt="" />
            <img src="../assets/img/instagram.svg" alt="" />
          </div>
        </div>
        <div class="map__wrapper">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Tashkent+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMap',
  computed: {
    logoShow() {
      return !this.$route.name === 'contact'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  &__top {
    border-bottom: none;
  }
}
</style>
