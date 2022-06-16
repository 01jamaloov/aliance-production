<template>
  <div class="more">
    <div class="container">
      <div class="more__wrapper">
        <div class="more__item">
          <div class="section">
            <img src="../assets/img/line.svg" alt="" />
            <h1 class="section__title">
              {{ $store.state.sectionTitle.title5 }}
            </h1>
          </div>
          <div class="more__content">
            <div class="more__info">
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/chemistry.svg" alt="" />
                </div>
                <p class="more__text">Химические производства</p>
              </div>
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/car.svg" alt="" />
                </div>
                <p class="more__text">Автомойки</p>
              </div>
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/eat.svg" alt="" />
                </div>
                <p class="more__text">Пищевая продукция</p>
              </div>
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/brush.svg" alt="" />
                </div>
                <p class="more__text">Лаки и краски</p>
              </div>
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/cosmetic.svg" alt="" />
                </div>
                <p class="more__text">Косметические средства</p>
              </div>
            </div>
            <div class="more__info">
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/car-cosm.svg" alt="" />
                </div>
                <p class="more__text">Автомобильная косметика</p>
              </div>
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/shirt.svg" alt="" />
                </div>
                <p class="more__text">Косметика по уходу за одеждой</p>
              </div>
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/boots.svg" alt="" />
                </div>
                <p class="more__text">Косметика по уходу за обувью</p>
              </div>
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/bricks.svg" alt="" />
                </div>
                <p class="more__text">Строительные материалы</p>
              </div>
              <div class="more__box">
                <div class="more__image">
                  <img src="../assets/img/more.svg" alt="" />
                </div>
                <p class="more__text">И многих других</p>
              </div>
            </div>
          </div>
        </div>
        <div class="more__item">
          <div class="more__brands">
            <div class="more__brand">
              <img src="../assets/img/partner.svg" alt="" />
            </div>
            <div class="more__brand">
              <img src="../assets/img/partner.svg" alt="" />
            </div>
            <div class="more__brand">
              <img src="../assets/img/partner.svg" alt="" />
            </div>
            <div class="more__brand">
              <img src="../assets/img/partner.svg" alt="" />
            </div>
            <div class="more__brand">
              <img src="../assets/img/partner.svg" alt="" />
            </div>
            <div class="more__brand">
              <img src="../assets/img/partner.svg" alt="" />
            </div>
            <div class="more__brand">
              <img src="../assets/img/partner.svg" alt="" />
            </div>
            <div class="more__brand">
              <img src="../assets/img/partner.svg" alt="" />
            </div>
            <div class="more__brand">
              <img src="../assets/img/partner.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMore'
}
</script>

<style lang="scss">
.more {
  padding-top: 150px;

  @media (max-width: 576px) {
    padding-top: 100px;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    align-items: end;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .section {
    max-width: 600px;
    width: 100%;
    margin-top: 0;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__box {
    display: flex;
    column-gap: 20px;
    column-gap: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__text {
    color: #292d33;
    line-height: 160%;
  }

  &__brands {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__brand {
    border: 1px solid #ebebf0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 45px;
    cursor: pointer;
    filter: grayscale(1);
    transition: all 0.2s ease;

    &:hover {
      filter: grayscale(0);
    }
  }
}
</style>
