<template>
  <div class="make">
    <div class="container">
      <div class="make__wrapper">
        <div class="make__item">
          <div class="section">
            <img src="../assets/img/line.svg" alt="" />
            <h1 class="section__title">
              {{ $store.state.sectionTitle.title18 }}
            </h1>
          </div>
          <p class="make__subtitle">
            Внезапно, активно развивающиеся страны третьего мира могут быть
            объявлены нарушающими общечеловеческие нормы этики и морали.
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
            </div>
          </div>
          <button class="main-btn"><img src="../assets/img/download.svg" alt=""> Скачать каталог</button>
        </div>
        <div class="make__image">
          <img src="../assets/img/distributor.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
