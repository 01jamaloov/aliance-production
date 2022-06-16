<template>
  <div class="pluses">
    <div class="container">
      <div class="pluses__wrapper">
        <div class="pluses__item">
          <div class="pluses__image">
            <img src="../assets/img/clock.svg" alt="" />
          </div>
          <p class="pluses__text">Непрерывная работа c 2017 года</p>
        </div>
        <div class="pluses__item">
          <div class="pluses__image">
            <img src="../assets/img/sertificate.svg" alt="" />
          </div>
          <p class="pluses__text">Вся продукция сертифицирована</p>
        </div>
        <div class="pluses__item">
          <div class="pluses__image">
            <img src="../assets/img/worker.svg" alt="" />
          </div>
          <p class="pluses__text">Контроль качества на всех этапах</p>
        </div>
        <div class="pluses__item">
          <div class="pluses__image">
            <img src="../assets/img/track.svg" alt="" />
          </div>
          <p class="pluses__text">Возможны поставки по всей России</p>
        </div>
        <div class="pluses__item">
          <div class="pluses__image">
            <img src="../assets/img/speed.svg" alt="" />
          </div>
          <p class="pluses__text">Оперативное производство</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPluses'
}
</script>

<style lang="scss">
.pluses {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    @media (max-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__item {
    padding: 30px;
    border: 1px solid #ebebf0;
  }

  &__image {
    @media (max-width: 576px) {
      display: flex;
      justify-content: center;
    }
  }

  &__text {
    color: #292d33;
		@media (max-width: 576px) {
			text-align: center;
			margin-top: 15px;
		}
  }
}
</style>
