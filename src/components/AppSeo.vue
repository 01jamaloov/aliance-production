<template>
  <div class="seo">
    <div class="container">
      <h2 class="seo__title">SEO Заголовок</h2>
      <p class="seo__text">
        Также как дальнейшее развитие различных форм деятельности предполагает
        независимые способы реализации существующих финансовых и
        административных условий. Каждый из нас понимает очевидную вещь: курс на
        социально-ориентированный национальный проект играет важную роль в
        формировании как самодостаточных, так и внешне зависимых концептуальных
        решений. Внезапно, интерактивные прототипы набирают популярность среди
        определенных слоев населения, а значит, должны быть...
      </p>
      <router-link class="seo__link" :to="{ name: 'about' }">
        <img src="../assets/img/load.svg" alt="" />
        Читать больше
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSeo'
}
</script>

<style lang="scss">
.seo {
  padding-top: 100px;

  &__title {
    font-weight: 400;
    font-size: 28px;
    line-height: 160%;
    color: #292d33;
  }

  &__link {
    color: #5c8ee5;
		font-weight: 600;
  }
}
</style>
