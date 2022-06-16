<template>
  <div class="app">
    <AppNavigation :class="{ fixed: checkNav }" :check-nav="checkNav" />
    <div class="wrapper">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNavigation,
    AppFooter
  },
  data() {
    return {
      checkNav: null
    }
  },
  methods: {
    checkNavigation() {
      if (
        this.$route.name === 'about' ||
        this.$route.name === 'production' ||
        this.$route.name === 'trade-marks' ||
        this.$route.name === 'chemical' ||
        this.$route.name === 'ag-tech' ||
        this.$route.name === 'config' ||
        this.$route.name === 'contact' ||
        this.$route.name === 'blog' ||
        this.$route.name === 'blog-more' || this.$route.name === 'not-found'
      ) {
        this.checkNav = true
        return
      } else {
        this.checkNav = false
        return
      }
    }
  },
  created() {
    this.checkNavigation()
  },
  watch: {
    $route() {
      this.checkNavigation()
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&family=Oswald&display=swap');

html,
body,
.app,
#app {
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-weight: 400;
  color: #828a99;
  font-family: 'Noto Sans' !important;
  font-size: 16px !important;
  line-height: 160%;

  &.locked {
    overflow: hidden;
  }
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

img {
  object-fit: cover;
  vertical-align: middle;
}

svg {
  display: block;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.wrapper {
  flex: 1 1 auto;
}

.container {
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 576px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 992px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

@media (min-width: 1600px) {
  .container {
    max-width: 1536px;
  }
}

.main-btn {
  background: #5c8ee6;
  border: none;
  color: #fff;
  padding: 25px 60px;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: #3a71d1;
    color: #fff;
  }

  @media (max-width: 992px) {
    padding: 20px 35px;
    font-size: 12px;
  }
}

.cta {
  color: #5c8ee5;
  font-weight: 600;
  position: relative;
  display: block;
  padding-left: 60px;
  margin-top: 20px;

  &::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 40px;
    background: #5c8ee5;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: all 0.3s ease;
  }

  &:hover::before {
    left: 10px;
  }
}

.section {
  padding-bottom: 75px;
  margin-top: 150px;
  position: relative;

  @media (max-width: 576px) {
    margin-top: 100px;
    padding-bottom: 50px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-family: 'Oswald';
    font-weight: 400;
    font-size: 46px;
    line-height: 120%;
    color: #292d33;
    margin-top: 15px;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 36px;
    }

    @media (max-width: 576px) {
      font-size: 30px;
    }
  }
}

.hero__layer {
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100px;
    width: 100%;
  }
}

.page__section {
  background: #f0f2f5;
  position: relative;
  width: 100%;
  padding: 50px 0;

  .section {
    margin-top: 94px;
    padding-bottom: 0;

    &__image {
      position: absolute;
      bottom: -50px;
      right: 0;

      @media (max-width: 992px) {
        display: none;
      }
    }

    &__link {
      margin-top: 20px;
      color: #292d33;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;

      &--item {
        color: #828a99;
      }
    }
  }
}
</style>
