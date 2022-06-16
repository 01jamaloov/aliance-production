<template>
  <div class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__logo">
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
      <div class="footer__main">
        <div class="footer__column">
          <h4 class="footer__title">Контрактное производство</h4>
          <ul class="footer__list">
            <li class="footer__item">
              <router-link class="footer__link" :to="{ name: 'chemical' }">
                Автомобильная химия
              </router-link>
            </li>
            <li class="footer__item">
              <router-link class="footer__link" :to="{ name: 'production' }">
                Бытовая химия
              </router-link>
            </li>
            <li class="footer__item">
              <router-link class="footer__link" :to="{ name: 'production' }">
                Дезинфицирующие средства
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer__column">
          <h4 class="footer__title">Дополнительные услуги</h4>
          <ul class="footer__list">
            <li class="footer__item">
              <router-link class="footer__link" :to="{ name: 'production' }">
                Пищевые аэрозоли
              </router-link>
            </li>
            <li class="footer__item">
              <router-link class="footer__link" :to="{ name: 'production' }">
                Косметическая продукция
              </router-link>
            </li>
            <li class="footer__item">
              <router-link class="footer__link" :to="{ name: 'production' }">
                Краски аэрозольные
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer__column">
          <h4 class="footer__title">Собственные марки</h4>
          <ul class="footer__list">
            <li class="footer__item">
              <router-link class="footer__link" :to="{ name: 'ag-tech' }">
                Автохимия AG-Tech
              </router-link>
            </li>
            <li class="footer__item">
              <router-link class="footer__link" :to="{ name: 'chemical' }">
                Автохимия AP
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer__column">
          <h4 class="footer__title">О компании</h4>
          <ul class="footer__list">
            <li class="footer__item">
              <router-link class="footer__title" :to="{ name: 'about' }">
                Новости
              </router-link>
            </li>
            <li class="footer__item">
              <router-link class="footer__title" :to="{ name: 'contact' }">
                Контакты
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__copyright">
          <p class="footer__copy">
            © 2022 «Aliance Production». Все права защищены.
          </p>
          <router-link class="footer__copy" :to="{ name: 'config' }">
            Политики конфиденциальности
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss">
.footer {
  padding: 50px 0 20px;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    padding-bottom: 30px;
    border-bottom: 1px solid #ebebf0;

    @media (max-width: 576px) {
      flex-direction: column;
      align-items: start;
    }
  }

  &__column {
    margin-bottom: 30px;
  }

  &__phone {
    font-weight: 600;
    font-size: 24px;
    line-height: 160%;
    text-decoration-line: underline;
    color: #292d33;
  }

  &__address {
    display: flex;
    column-gap: 10px;
  }

  &__text {
    margin-bottom: 0;
    color: #292d33;
  }

  &__social {
    display: flex;
    column-gap: 15px;
  }

  &__main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding-top: 30px;
    border-bottom: 1px solid #ebebf0;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 160%;
    color: #292d33;
    margin-bottom: 30px;
  }

  &__item:not(:last-child) {
    margin-bottom: 15px;
  }

  &__link {
    font-weight: 400;
    font-size: 16px;
    color: #828a99;
  }

  &__bottom {
    margin-top: 20px;
  }

  &__copyright {
    display: flex;
    column-gap: 100px;
  }

  &__copy {
    font-weight: 400;
    font-size: 12px;
    color: #828a99;
  }
}
</style>
