<template>
  <div class="chemistry">
    <div class="container">
      <div class="chemistry__wrapper">
        <div class="chemistry__item">
          <div class="chemistry__image">
            <img src="../assets/img/avto.jpg" alt="" />
          </div>
        </div>
        <div class="chemistry__item">
          <div class="section">
            <img src="../assets/img/line.svg" alt="" />
            <h1 class="section__title">
              {{ $store.state.sectionTitle.title13 }}
            </h1>
          </div>
          <p class="chemistry__text">
            Но социально-экономическое развитие напрямую зависит от поставленных
            обществом задач! Безусловно, постоянный количественный рост и сфера
            нашей активности предоставляет широкие возможности для системы
            обучения кадров, соответствующей насущным потребностям. В целом,
            конечно, выбранный нами инновационный путь обеспечивает широкому
            кругу (специалистов) участие в формировании своевременного
            выполнения сверхзадачи. А ещё элементы политического процесса
            представлены в исключительно положительном свете. Высокий уровень
            вовлечения представителей целевой аудитории является четким
            доказательством простого факта: высокотехнологичная концепция
            общественного уклада создаёт предпосылки для глубокомысленных
            рассуждений. В своём стремлении повысить качество жизни, они
            забывают, что дальнейшее развитие различных форм деятельности, а
            также свежий взгляд на привычные вещи - безусловно открывает новые
            горизонты для поставленных обществом задач.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppChemistry'
}
</script>

<style lang="scss">
.chemistry {
  padding: 100px 0;

  .section {
    margin-top: 0;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    align-items: center;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__image {
		@media (max-width: 1200px) {
			display: flex;
			justify-content: center;
		}
    img {
      @media (max-width: 1200px) {
        width: 60%;
      }
      @media (max-width: 992px) {
        width: 80%;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
}
</style>
