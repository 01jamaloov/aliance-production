<template>
  <div class="production">
    <div class="container">
      <div class="section" v-show="sectionShow">
        <img src="../assets/img/line.svg" alt="" />
        <h1 class="section__title">{{ $store.state.sectionTitle.title2}}</h1>
      </div>
      <div class="production__wrapper">
        <router-link class="production__item" :to="{ name: 'chemical' }">
          <div class="production__content">
            <h4 class="production__title">Автомобильная химия</h4>
            <p class="production__text">
              Безусловно, сплочённость команды профессионалов позволяет оценить
              значение форм воздействия.
            </p>
          </div>
          <div class="production__image">
            <img src="../assets/img/production-01.png" alt="" />
          </div>
        </router-link>
        <router-link class="production__item" :to="{ name: 'production' }">
          <div class="production__content">
            <h4 class="production__title">Бытовая химия</h4>
            <p class="production__text">
              А также стремящиеся вытеснить традиционное производство,
              нанотехнологии функционально разнесены на независимые элементы.
            </p>
          </div>
          <div class="production__image">
            <img src="../assets/img/production-02.png" alt="" />
          </div>
        </router-link>
        <router-link class="production__item" :to="{ name: 'production' }">
          <div class="production__content">
            <h4 class="production__title">Дезинфицирующие средства</h4>
            <p class="production__text">
              Лишь интерактивные прототипы призваны к ответу.
            </p>
          </div>
          <div class="production__image">
            <img src="../assets/img/production-03.png" alt="" />
          </div>
        </router-link>
        <router-link class="production__item" :to="{ name: 'production' }">
          <div class="production__content">
            <h4 class="production__title">Пищевые аэрозоли</h4>
            <p class="production__text">
              Безусловно, сплочённость команды профессионалов позволяет оценить
              значение форм воздействия.
            </p>
          </div>
          <div class="production__image">
            <img src="../assets/img/production-03.png" alt="" />
          </div>
        </router-link>
        <router-link class="production__item" :to="{ name: 'production' }">
          <div class="production__content">
            <h4 class="production__title">Косметическая продукция</h4>
            <p class="production__text">
              Лишь интерактивные прототипы призваны к ответу.
            </p>
          </div>
          <div class="production__image">
            <img src="../assets/img/production-01.png" alt="" />
          </div>
        </router-link>
        <router-link class="production__item" :to="{ name: 'production' }">
          <div class="production__content">
            <h4 class="production__title">Краски аэрозольные</h4>
            <p class="production__text">
              А также стремящиеся вытеснить традиционное производство,
              нанотехнологии функционально разнесены на независимые элементы.
            </p>
          </div>
          <div class="production__image">
            <img src="../assets/img/production-02.png" alt="" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppProduct',
	computed: {
		sectionShow() {
			return this.$route.name === 'home'
		}
	}
}
</script>

<style lang="scss">
.production {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
		padding-top: 75px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

	.section{
		padding-bottom: 0;
	}

  &__item {
    border: 1px solid #ebebf0;
    transition: all 0.3s ease;

    &:hover {
      border-color: #5c8ee5;
    }
  }

  &__item:hover &__title {
    color: #5c8ee5;
  }

  &__content {
    height: 300px;
    width: 100%;
    padding: 40px 50px 0 50px;

    @media (max-width: 768px) {
      height: 250px;
    }
    @media (max-width: 576px) {
      padding: 20px 10px 0 10px;
      height: 200px;
    }
  }

  &__title {
    font-weight: 400;
    font-size: 28px;
    line-height: 160%;
    color: #292d33;
    transition: all 0.3s ease;
  }

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #828a99;
    margin-top: 10px;
  }

  &__image {
    width: 100%;
    height: 300px;
    img {
      width: inherit;
      height: 100%;
    }
  }
}
</style>
