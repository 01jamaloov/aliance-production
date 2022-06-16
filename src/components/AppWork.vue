<template>
  <div class="work">
    <div class="container">
      <div class="section">
        <img src="../assets/img/line.svg" alt="" />
        <h1 class="section__title">{{ $store.state.sectionTitle.title1 }}</h1>
      </div>
      <div class="work__wrapper">
        <div class="work__item">
          <div class="work__number">
            <span>01</span>
          </div>
          <h3 class="work__title">Знакомство</h3>
          <p class="work__text">
            Безусловно, сплочённость команды профессионалов позволяет оценить
            значение форм воздействия.
          </p>
          <router-link class="cta" :to="{ name: 'about' }"
            >Оставить заявку</router-link
          >
        </div>
        <div class="work__item">
          <div class="work__number">
            <span>02</span>
          </div>
          <h3 class="work__title">Заключение договора</h3>
          <p class="work__text">
            Лишь интерактивные прототипы призваны к ответу.
          </p>
        </div>
        <div class="work__item">
          <div class="work__number">
            <span>03</span>
          </div>
          <h3 class="work__title">Производство</h3>
          <p class="work__text">
            А также стремящиеся вытеснить традиционное производство,
            нанотехнологии функционально разнесены на независимые элементы.
          </p>
        </div>
        <div class="work__item">
          <div class="work__number">
            <span>04</span>
          </div>
          <h3 class="work__title">Доставка</h3>
          <p class="work__text">
            В частности, экономическая повестка сегодняшнего дня говорит о
            возможностях приоритизации разума над эмоциями.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppWork'
}
</script>

<style lang="scss">
.work {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 30px;
  }

  &__item {
    max-width: 20%;
    width: 100%;

    @media (max-width: 1200px) {
      max-width: 30%;
    }
    @media (max-width: 992px) {
      max-width: 45%;
    }
    @media (max-width: 576px) {
      max-width: 100%;
    }
  }

  &__number {
    position: relative;
  }

  &__number span {
    font-family: 'Oswald';
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    color: #5c8ee6;

    &::before {
      content: '';
      position: absolute;
      height: 1px;
      width: 70%;
      background: #ebebf0;
      top: 50%;
      left: 60%;
      transform: translate(-50%, -50%);
    }
  }

  &__title {
    font-weight: 400;
    font-size: 28px;
    color: #292d33;
    margin: 30px 0 10px;
    line-height: 160%;
  }
}
</style>
