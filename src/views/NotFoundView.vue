<template>
  <div class="notFound">
    <div class="notFound__wrapper">
      <span class="notFound__number">404</span>
      <h4 class="notFound__title">Страница не найдена</h4>
      <p class="notFound__text">
        Мы не смогли найти страницу с таким адресом, попробуйте перейти на
        главную или напишите нам.
      </p>
      <router-link :to="{ name: 'home' }">
        <button class="main-btn">Вернуться на главную</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.notFound {
  width: 100%;
  height: 80vh;
  display: grid;
  place-content: center;
  padding-top: 100px;

  &__wrapper {
    max-width: 500px;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  &__number {
    font-weight: 400;
    font-size: 200px;
    line-height: 100%;
    color: #5c8ee6;
    font-family: 'Oswald';
    margin-top: 100px;

		@media (max-width: 992px) {
			font-size: 150px;
		}
  }

  &__title {
    font-weight: 400;
    font-size: 28px;
    line-height: 160%;
    margin: 10px 0 20px;
    color: #292d33;
  }

  &__text {
    color: #292d33;
		margin-bottom: 30px;
  }
}
</style>
