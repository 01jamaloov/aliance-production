<template>
  <div class="header" :class="{ fixed: scrollHeight }">
    <div class="header__container">
      <div class="header__logo">
        <router-link class="header__logo--link" :to="{ name: 'home' }">
          <AppLogo
            :check-nav="checkNav"
            :mobile-nav="mobileNav"
            :scroll-height="scrollHeight"
          />
        </router-link>
      </div>
      <nav class="header__nav" v-show="!mobile">
        <ul class="header__list">
          <li class="header__item">
            <router-link class="header__link" :to="{ name: 'about' }">
              О компании
            </router-link>
          </li>
          <li class="header__item" id="dropdown-hover">
            <router-link class="header__link" :to="{ name: 'production' }">
              Контрактное производство
              <div>
                <ul class="header__list--dropdown">
                  <li class="header__item--dropdown">
                    <router-link
                      class="header__link--dropdown"
                      :to="{ name: 'chemical' }"
                    >
                      Автомобильная химия
                    </router-link>
                  </li>
                  <li class="header__item--dropdown">
                    <router-link
                      class="header__link--dropdown active"
                      :to="{ name: 'about' }"
                    >
                      Бытовая химия
                    </router-link>
                  </li>
                  <li class="header__item--dropdown">
                    <router-link
                      class="header__link--dropdown"
                      :to="{ name: 'about' }"
                    >
                      Дезинфицирующие средства
                    </router-link>
                  </li>
                  <li class="header__item--dropdown">
                    <router-link
                      class="header__link--dropdown"
                      :to="{ name: 'about' }"
                    >
                      Пищевые аэрозоли
                    </router-link>
                  </li>
                  <li class="header__item--dropdown">
                    <router-link
                      class="header__link--dropdown"
                      :to="{ name: 'about' }"
                    >
                      Косметическая продукция
                    </router-link>
                  </li>
                  <li class="header__item--dropdown">
                    <router-link
                      class="header__link--dropdown"
                      :to="{ name: 'about' }"
                    >
                      Краски аэрозольные
                    </router-link>
                  </li>
                </ul>
              </div>
            </router-link>
          </li>
          <li class="header__item">
            <router-link class="header__link" :to="{ name: 'trade-marks' }">
              Собственные торговые марки
            </router-link>
          </li>
          <li class="header__item">
            <router-link class="header__link" :to="{ name: 'about' }">
              Новости
            </router-link>
          </li>
          <li class="header__item">
            <router-link class="header__link" :to="{ name: 'contact' }">
              Контакты
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="header__contact" v-show="!mobile">
        <div class="header__contact--item">
          <img src="../assets/img/phone.svg" alt="" />
          <span>+7 (499) 686-10-14</span>
        </div>
      </div>
      <div
        id="navMenu"
        :class="{ active: mobileNav, black: scrollHeight, dark: checkNav }"
        @click="toggleMenu"
        v-show="mobile"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <transition name="mobile-nav">
        <nav class="mobile-nav" id="mobile-nav" v-show="mobileNav">
          <div class="header__logo">
            <router-link
              class="header__logo--link"
              :to="{ name: 'home' }"
              @click="mobileNav = false"
            >
              <img src="../assets/img/logo.svg" alt="" />
            </router-link>
          </div>
          <ul class="mobile-nav__list">
            <li class="mobile-nav__item">
              <router-link
                class="header__link"
                :to="{ name: 'about' }"
                @click="mobileNav = false"
              >
                О компании
              </router-link>
            </li>
            <li class="mobile-nav__item">
              <router-link
                class="header__link"
                :to="{ name: 'production' }"
                @click="mobileNav = false"
              >
                Контрактное производство</router-link
              >

              <div>
                <ul class="header__list--dropdown">
                  <li class="header__item--dropdown">
                    <router-link
                      class="header__link--dropdown"
                      :to="{ name: 'chemical' }"
                      @click="mobileNav = false"
                    >
                      Автомобильная химия
                    </router-link>
                  </li>
                  <li class="header__item--dropdown">
                    <router-link
                      class="header__link--dropdown"
                      :to="{ name: 'production' }"
                      @click="mobileNav = false"
                    >
                      Бытовая химия
                    </router-link>
                  </li>
                  <li class="header__item--dropdown">
                    <router-link
                      class="header__link--dropdown"
                      :to="{ name: 'production' }"
                      @click="mobileNav = false"
                    >
                      Дезинфицирующие средства
                    </router-link>
                  </li>
                  <li class="header__item--dropdown">
                    <router-link
                      class="header__link--dropdown"
                      :to="{ name: 'production' }"
                      @click="mobileNav = false"
                    >
                      Пищевые аэрозоли
                    </router-link>
                  </li>
                  <li class="header__item--dropdown">
                    <router-link
                      class="header__link--dropdown"
                      :to="{ name: 'production' }"
                      @click="mobileNav = false"
                    >
                      Косметическая продукция
                    </router-link>
                  </li>
                  <li class="header__item--dropdown">
                    <router-link
                      class="header__link--dropdown"
                      :to="{ name: 'production' }"
                      @click="mobileNav = false"
                    >
                      Краски аэрозольные
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="mobile-nav__item">
              <router-link
                class="header__link"
                :to="{ name: 'trade-marks' }"
                @click="mobileNav = false"
              >
                Собственные торговые марки
              </router-link>
            </li>
            <li class="mobile-nav__item">
              <router-link
                class="header__link"
                :to="{ name: 'about' }"
                @click="mobileNav = false"
              >
                Новости
              </router-link>
            </li>
            <li class="mobile-nav__item">
              <router-link
                class="header__link"
                :to="{ name: 'contact' }"
                @click="mobileNav = false"
              >
                Контакты
              </router-link>
            </li>
          </ul>
          <div class="header__contact">
            <div class="header__contact--item">
              <img src="../assets/img/phone.svg" alt="" />
              <span>+7 (499) 686-10-14</span>
            </div>
          </div>
        </nav>
      </transition>
    </div>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo'

export default {
  name: 'AppNavigation',
  components: {
    AppLogo
  },
  props: ['checkNav'],
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      scrollHeight: null,
      activeColor: null
    }
  },

  mounted() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
    this.navScroll()
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 992) {
        this.mobile = true
      } else {
        this.mobile = false
        this.mobileNav = false
      }
    },
    toggleMenu() {
      this.mobileNav = !this.mobileNav
      if (this.mobileNav) {
        document.body.classList.add('locked')
      } else {
        document.body.classList.remove('locked')
      }
    },
    navScroll() {
      window.addEventListener('scroll', event => {
        const scrollY = window.scrollY
        if (scrollY >= document.querySelector('.header').offsetHeight) {
          this.scrollHeight = true
        } else {
          this.scrollHeight = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 25px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  transition: 0.1s ease-in all;

  &.fixed {
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    filter: drop-shadow(0px 2px 2px rgba(41, 45, 51, 0.25));
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #fff;
  }

  &__container,
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list {
    align-content: flex-start;
  }

  &__item {
    margin: 0 15px;
  }

  &__link {
    color: #fff;
  }

  &.fixed &__link {
    color: #292d33;
  }

  &__contact--item {
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: #fff;

    @media (min-width: 992px) and (max-width: 1200px) {
      display: none;
    }
  }

  &.fixed &__contact--item {
    color: #292d33;
  }

  #dropdown-hover {
    position: relative;
    transition: 0.3s;
  }

  #dropdown-hover div {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 25px;
    left: 0;
    width: 300px;
    background-color: #fff;
    color: #292d33;
    padding: 20px 30px;
    transition: all 0.3s;
  }

  #dropdown-hover:hover div {
    opacity: 1;
    pointer-events: all;
  }

  &__link--dropdown:hover {
    color: #5c8ee5;
    text-decoration: underline;
  }

  &__item--dropdown:not(:last-child) {
    margin-bottom: 15px;
  }

  &__link--dropdown {
    color: #292d33;
  }
}

#navMenu {
  position: relative;
  z-index: 999;
}

#navMenu > span {
  display: block;
  width: 28px;
  height: 2px;
  background-color: #fff;
}

#navMenu > span:not(:last-child) {
  margin-bottom: 7px;
}

#navMenu,
#navMenu > span {
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}

#navMenu > span:nth-child(2) {
  width: 20px;
}

#navMenu.active {
  transition-delay: 0.8s;
  transform: rotate(45deg);
}

#navMenu.active > span:nth-child(2) {
  width: 0;
}

#navMenu.active > span:nth-child(1),
#navMenu.active > span:nth-child(3) {
  transition-delay: 0.4s;
}

#navMenu.active > span:nth-child(1) {
  transform: translateY(9px);
}

#navMenu.active > span:nth-child(3) {
  transform: translateY(-9px) rotate(90deg);
}

#navMenu.black > span {
  background-color: #292d33;
}

#navMenu.active.black > span {
  background-color: #fff;
}

#navMenu.dark > span {
  background-color: #292d33;
}

#navMenu.active.dark > span {
  background-color: #fff;
}

.mobile-nav {
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  .header__logo {
    padding: 25px;
    border-bottom: 1px solid #fff;
  }

  &__list {
    padding: 40px 50px 0;
  }

  .header__contact--item {
    padding-left: 50px;
    color: #fff !important;
  }

  &__item {
    margin: 25px 0;
  }

  .header__link {
    font-size: 20px;
    font-weight: 600;
    color: #fff !important;
  }

  .header__link--dropdown {
    color: #828a99;
  }

  .header__link--dropdown.active {
    color: #5c8ee5;
  }

  .header__contact {
    margin-top: -80px;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.5s ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-100%);
}
</style>
