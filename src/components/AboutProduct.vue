<template>
  <div class="about-product">
    <div class="container">
      <div class="about-product__wrapper">
        <div class="about-product__item">
          <div class="section">
            <img src="../assets/img/line.svg" alt="" />
            <h1 class="section__title">
              {{ $store.state.sectionTitle.title10 }}
            </h1>
          </div>
          <p class="experts__text">
            Предварительные выводы неутешительны: разбавленное изрядной долей
            эмпатии, рациональное мышление обеспечивает широкому кругу
            (специалистов) участие в формировании глубокомысленных рассуждений.
            Но граница обучения кадров создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса кластеризации усилий. Реализация намеченных плановых
            заданий, а также свежий взгляд на привычные вещи - безусловно
            открывает новые горизонты для соответствующих условий активизации.
            Предварительные выводы неутешительны: экономическая повестка
            сегодняшнего дня требует анализа анализа существующих паттернов
            поведения.
          </p>
          <div class="more__content">
            <div class="more__info">
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/car.svg" alt="" />
                </div>
                <p class="more__text">Автомобильная химия</p>
              </div>
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/home.svg" alt="" />
                </div>
                <p class="more__text">Бытовая химия</p>
              </div>
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/dis.svg" alt="" />
                </div>
                <p class="more__text">Дезинфицирующие средства</p>
              </div>
            </div>
            <div class="more__info">
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/aerozol.svg" alt="" />
                </div>
                <p class="more__text">Пищевые аэрозоли</p>
              </div>
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/cosmetic.svg" alt="" />
                </div>
                <p class="more__text">Косметическая продукция</p>
              </div>
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/brush.svg" alt="" />
                </div>
                <p class="more__text">Краски аэрозольные</p>
              </div>
            </div>
          </div>
        </div>
        <div class="about-product__item">
          <div class="about-product__image">
            <img src="../assets/img/about-02.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutProduct'
}
</script>

<style lang="scss">
.about-product {
  padding-top: 150px;
  position: relative;

  @media (max-width: 1200px) {
    padding: 150px 0;
  }
  @media (max-width: 992px) {
    padding: 100px 0 150px;
  }

  @media (max-width: 576px) {
    padding: 100px 0 0;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 100px;
    align-items: center;

    @media (max-width: 992px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 30px;
    }
  }

  &__item:nth-child(1) {
    @media (max-width: 576px) {
      order: 2;
    }
  }

  &__image {
    img {
      width: 100%;
    }
  }

  .section {
    margin-top: 0;
    padding-bottom: 20px;
  }

  .more__content {
    grid-gap: 20px;

    @media (max-width: 1200px) {
      position: absolute;
      bottom: -70px;
    }

    @media (max-width: 576px) {
      position: static;
      margin-top: 30px;
    }
  }
}
</style>
