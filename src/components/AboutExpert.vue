<template>
  <div class="experts">
    <div class="container">
      <div class="experts__wrapper">
        <div class="experts__image">
          <img src="../assets/img/about-01.png" alt="" />
        </div>
        <div class="experts__content">
          <div class="section">
            <img src="../assets/img/line.svg" alt="" />
            <h1 class="section__title">
              {{ $store.state.sectionTitle.title9 }}
            </h1>
          </div>
          <p class="experts__text">
            Разнообразный и богатый опыт говорит нам, что перспективное
            планирование однозначно фиксирует необходимость поставленных
            обществом задач! Есть над чем задуматься: ключевые особенности
            структуры проекта могут быть объединены в целые кластеры себе
            подобных. Интерактивные прототипы, которые представляют собой яркий
            пример континентально-европейского типа политической культуры, будут
            описаны максимально подробно. Значимость этих проблем настолько
            очевидна, что перспективное планирование играет важную роль в
            формировании системы массового участия.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutExpert'
}
</script>

<style lang="scss">
.experts {
  padding: 100px 0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 30px;

    @media (max-width: 992px) {
      flex-direction: column;
    }
  }

  .section {
    margin-top: 0;
    padding-bottom: 20px;
  }

  &__image {
    width: 35%;

    img {
      width: 100%;
    }

    @media (max-width: 992px) {
      width: 75%;
      margin-bottom: 50px;
    }
  }

  &__content {
    width: 55%;

    @media (max-width: 992px) {
      width: 100%;
    }
  }
}
</style>
