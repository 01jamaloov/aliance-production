<template>
  <div class="make">
    <div class="container">
      <div class="make__wrapper">
        <div class="make__item">
          <div class="section">
            <img src="../assets/img/line.svg" alt="" />
            <h1 class="section__title">
              {{ $store.state.sectionTitle.title14 }}
            </h1>
          </div>
          <p class="make__subtitle">
            Но современная методология разработки позволяет оценить значение
            прогресса профессионального сообщества. Есть над чем задуматься:
            тщательные исследования конкурентов набирают популярность среди
            определенных слоев населения, а значит, должны быть ассоциативно
            распределены по отраслям. В своём стремлении повысить качество
            жизни, они забывают, что дальнейшее развитие различных форм
            деятельности, а также свежий взгляд на привычные вещи - безусловно
            открывает новые горизонты для поставленных обществом задач.
          </p>
          <div class="make__content">
            <div class="make__info">
              <div class="make__box">
                <div class="make__icon">
                  <img src="../assets/img/chemistry.svg" alt="" />
                </div>
                <p class="make__text">Полное описание товаров</p>
              </div>
              <div class="make__box">
                <div class="make__icon">
                  <img src="../assets/img/car.svg" alt="" />
                </div>
                <p class="make__text">Актуальные цены</p>
              </div>
              <div class="make__box">
                <div class="make__icon">
                  <img src="../assets/img/chemistry.svg" alt="" />
                </div>
                <p class="make__text">Полное описание товаров</p>
              </div>
              <div class="make__box">
                <div class="make__icon">
                  <img src="../assets/img/car.svg" alt="" />
                </div>
                <p class="make__text">Актуальные цены</p>
              </div>
            </div>
            <div class="make__info">
              <div class="make__box">
                <div class="make__icon">
                  <img src="../assets/img/brash.svg" alt="" />
                </div>
                <p class="make__text">Лаки и краски</p>
              </div>
              <div class="make__box">
                <div class="make__icon">
                  <img src="../assets/img/chemistry.svg" alt="" />
                </div>
                <p class="make__text">Химические производства</p>
              </div>
              <div class="make__box">
                <div class="make__icon">
                  <img src="../assets/img/brash.svg" alt="" />
                </div>
                <p class="make__text">Лаки и краски</p>
              </div>
              <div class="make__box">
                <div class="make__icon">
                  <img src="../assets/img/chemistry.svg" alt="" />
                </div>
                <p class="make__text">Химические производства</p>
              </div>
            </div>
          </div>
        </div>
        <div class="make__image">
          <img src="../assets/img/avto-chim.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMake'
}
</script>

<style lang="scss">
.make {
  padding-top: 150px;
  position: relative;
  overflow: hidden;

  @media (max-width: 576px) {
    padding-top: 100px;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 50px;

    @media (max-width: 992px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__item {
    @media (max-width: 992px) {
      order: 2;
      margin-top: 50px;
    }
  }

  &__wrapper .section {
    margin-top: 0;
    width: 100%;
    padding-bottom: 20px;
  }

  &__image {
    margin-right: 0;
    @media (min-width: 992px) and (max-width: 1800px) {
      margin-right: -20%;
    }
  }

  &__image img {
    width: 100%;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    margin-top: 30px;

    @media (min-width: 992px) and (max-width: 1200px) {
      display: none;
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 0;
    }
  }

  &__box {
    display: flex;
    column-gap: 20px;
  }

  .main-btn {
    margin-top: 50px;
  }
}
</style>
