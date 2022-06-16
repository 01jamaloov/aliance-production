<template>
  <div class="client">
    <div class="container">
      <div class="client__wrapper">
        <div class="client__image">
          <img src="../assets/img/relationship.jpg" alt="" />
        </div>
        <div class="client__content">
          <div class="section">
            <img src="../assets/img/line.svg" alt="" />
            <h1 class="section__title">{{ $store.state.sectionTitle.title4 }}</h1>
          </div>
          <p class="client__text">
            Кстати, интерактивные прототипы описаны максимально подробно.
            Повседневная практика показывает, что укрепление и развитие
            внутренней структуры говорит о возможностях соответствующих условий
            активизации. Внезапно, независимые государства, которые представляют
            собой яркий пример континентально-европейского типа политической
            культуры, будут подвергнуты целой серии независимых исследований.
          </p>
          <p class="client_text">
            А ещё действия представителей оппозиции, превозмогая сложившуюся
            непростую экономическую ситуацию, в равной степени предоставлены
            сами себе. Не следует, однако, забывать, что выбранный нами
            инновационный путь в значительной степени обусловливает важность
            дальнейших направлений развития.
          </p>
          <router-link class="cta" :to="{ name: 'about' }"
            >Подробнее о компании</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppClient'
}
</script>

<style lang="scss">
.client {
  padding-top: 150px;
  position: relative;

	@media (max-width: 576px) {
		padding-top: 100px;
	}

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    align-items: center;

    @media (max-width: 992px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__wrapper .section {
    margin-top: 0;
    max-width: 480px;
    width: 100%;
    padding-bottom: 20px;
  }

  &__image {
    margin-left: 0;
    @media (min-width: 992px) and (max-width: 1800px) {
      margin-left: -23%;
    }
  }

  &__image img {
    width: 100%;
  }

  &__text:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
