<template>
  <div class="hero">
    <div class="container">
      <div class="hero__content">
        <img src="../assets/img/line.svg" alt="" />
        <h1 class="hero__title">
          Комплексное обеспечение товарами и расходными материалами бизнеса
        </h1>
        <p class="hero__subtitle">
          Высокий уровень вовлечения представителей целевой аудитории является
          четким доказательством простого факта: высококачественный прототип
          будущего проекта напрямую зависит от анализа существующих паттернов
          поведения.
        </p>
        <router-link :to="{ name: 'about' }">
          <button class="main-btn">Подробнее о компании</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHero'
}
</script>

<style lang="scss">
.hero {
  background: url('../assets/img/hero.jpg') no-repeat center / cover;
  padding: 250px 0;

  @media (max-width: 576px) {
    padding: 200px 0;
  }

  .container {
    position: relative;
    height: 100%;
  }

  &__content {
    max-width: 80%;
    width: 100%;

    @media (max-width: 992px) {
      max-width: 100%;
    }
  }

  &__title {
    color: #fff;
    font-family: 'Oswald';
    font-weight: 400;
    font-size: 54px;
    line-height: 120%;
    text-transform: uppercase;
    margin: 30px 0;

    @media (max-width: 992px) {
      font-size: 46px;
    }
    @media (max-width: 576px) {
      font-size: 32px;
    }
  }

  &__subtitle {
    color: #fff;
    width: 70%;
    margin-bottom: 50px;

    @media (max-width: 992px) {
      width: 90%;
    }
    @media (max-width: 576px) {
      font-size: 12px;
    }
  }
}
</style>
