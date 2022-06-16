<template>
  <div class="type">
    <div class="container">
      <div class="section">
        <img src="../assets/img/line.svg" alt="" />
        <h1 class="section__title">
          {{ $store.state.sectionTitle.title15 }}
        </h1>
        <p class="section__text">
          Но современная методология разработки позволяет оценить значение
          прогресса профессионального сообщества. Есть над чем задуматься:
          тщательные исследования конкурентов набирают популярность среди
          определенных слоев населения, а значит, должны быть ассоциативно
          распределены по отраслям.
        </p>
      </div>
      <div class="type__wrapper">
        <div class="type__item">
          <ul class="type__list">
            <li class="type__link">Антискотч</li>
            <li class="type__link">Многоцелевая смазка</li>
            <li class="type__link">Жидкий ключ</li>
            <li class="type__link">Высокотемпературная смазка</li>
            <li class="type__link">Универсальный очиститель деталей</li>
          </ul>
        </div>
        <div class="type__item">
          <ul class="type__list">
            <li class="type__link">Силиконовая смазка</li>
            <li class="type__link">Цепная смазка</li>
            <li class="type__link">Медная смазка</li>
            <li class="type__link">Графитовая смазка</li>
            <li class="type__link">Очиститель кондиционера пенный</li>
          </ul>
        </div>
        <div class="type__item">
          <ul class="type__list">
            <li class="type__link">Очиститель тормозных дисков</li>
            <li class="type__link">Очиститель битумных пятен</li>
            <li class="type__link">Очиститель кондционера</li>
            <li class="type__link">Очиститель дросельной заслонки</li>
            <li class="type__link">Очиститель обивки</li>
          </ul>
        </div>
        <div class="type__item">
          <ul class="type__list">
            <li class="type__link">Тефлоновая смазка</li>
            <li class="type__link">Очиститель двигателя</li>
            <li class="type__link">Универсальный очиститель</li>
            <li class="type__link">Чернитель шин</li>
            <li class="type__link">Чернитель шин + очистка</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppType'
}
</script>

<style lang="scss">
.type {
  .section {
    width: 70%;
    padding-bottom: 50px;

    @media (max-width: 992px) {
      width: 100%;
    }

    &__text {
      margin-top: 20px;
    }
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 0;
    }
  }

  &__link {
    position: relative;
    padding-left: 30px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &::before {
      content: '';
      position: absolute;
      background: #5c8ee5;
      height: 1px;
      width: 16px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    img {
      margin-right: 10px;
    }
  }
}
</style>
