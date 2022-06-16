<template>
  <id class="blogs">
    <div class="container">
      <div class="blogs__wrapper">
        <router-link class="blog__slider" :to="{ name: 'blog-more' }">
          <img class="blog__img" src="../assets/img/blog-01.jpg" alt="" />
          <div class="blog__content">
            <h3 class="blog__title">
              Современная методология разработки одухотворила всех причастных
            </h3>
            <p class="blog__text">
              Действия представителей оппозиции, превозмогая сложившуюся
              непростую экономическую ситуацию, в равной степени
              предоставлены...
            </p>
          </div>
        </router-link>
        <router-link class="blog__slider" :to="{ name: 'blog-more' }">
          <img class="blog__img" src="../assets/img/blog-02.jpg" alt="" />
          <div class="blog__content">
            <h3 class="blog__title">Сложно сказать, почему жизнь прекрасна</h3>
            <p class="blog__text">
              Сложно сказать, почему элементы политического процесса
              функционально разнесены на независимые элементы. Безусловно,
              высокотехнологичная...
            </p>
          </div>
        </router-link>
        <router-link class="blog__slider" :to="{ name: 'blog-more' }">
          <img class="blog__img" src="../assets/img/blog-02.jpg" alt="" />
          <div class="blog__content">
            <h3 class="blog__title">Сложно сказать, почему жизнь прекрасна</h3>
            <p class="blog__text">
              Сложно сказать, почему элементы политического процесса
              функционально разнесены на независимые элементы. Безусловно,
              высокотехнологичная...
            </p>
          </div>
        </router-link>
        <router-link class="blog__slider" :to="{ name: 'blog-more' }">
          <img class="blog__img" src="../assets/img/blog-01.jpg" alt="" />
          <div class="blog__content">
            <h3 class="blog__title">
              Современная методология разработки одухотворила всех причастных
            </h3>
            <p class="blog__text">
              Действия представителей оппозиции, превозмогая сложившуюся
              непростую экономическую ситуацию, в равной степени
              предоставлены...
            </p>
          </div>
        </router-link>
        <router-link class="blog__slider" :to="{ name: 'blog-more' }">
          <img class="blog__img" src="../assets/img/blog-01.jpg" alt="" />
          <div class="blog__content">
            <h3 class="blog__title">
              Современная методология разработки одухотворила всех причастных
            </h3>
            <p class="blog__text">
              Действия представителей оппозиции, превозмогая сложившуюся
              непростую экономическую ситуацию, в равной степени
              предоставлены...
            </p>
          </div>
        </router-link>
        <router-link class="blog__slider" :to="{ name: 'blog-more' }">
          <img class="blog__img" src="../assets/img/blog-02.jpg" alt="" />
          <div class="blog__content">
            <h3 class="blog__title">Сложно сказать, почему жизнь прекрасна</h3>
            <p class="blog__text">
              Сложно сказать, почему элементы политического процесса
              функционально разнесены на независимые элементы. Безусловно,
              высокотехнологичная...
            </p>
          </div>
        </router-link>
        <router-link class="blog__slider" :to="{ name: 'blog-more' }">
          <img class="blog__img" src="../assets/img/blog-02.jpg" alt="" />
          <div class="blog__content">
            <h3 class="blog__title">Сложно сказать, почему жизнь прекрасна</h3>
            <p class="blog__text">
              Сложно сказать, почему элементы политического процесса
              функционально разнесены на независимые элементы. Безусловно,
              высокотехнологичная...
            </p>
          </div>
        </router-link>
        <router-link class="blog__slider" :to="{ name: 'blog-more' }">
          <img class="blog__img" src="../assets/img/blog-01.jpg" alt="" />
          <div class="blog__content">
            <h3 class="blog__title">
              Современная методология разработки одухотворила всех причастных
            </h3>
            <p class="blog__text">
              Действия представителей оппозиции, превозмогая сложившуюся
              непростую экономическую ситуацию, в равной степени
              предоставлены...
            </p>
          </div>
        </router-link>
        <router-link class="blog__slider" :to="{ name: 'blog-more' }">
          <img class="blog__img" src="../assets/img/blog-01.jpg" alt="" />
          <div class="blog__content">
            <h3 class="blog__title">
              Современная методология разработки одухотворила всех причастных
            </h3>
            <p class="blog__text">
              Действия представителей оппозиции, превозмогая сложившуюся
              непростую экономическую ситуацию, в равной степени
              предоставлены...
            </p>
          </div>
        </router-link>
        <router-link class="blog__slider" :to="{ name: 'blog-more' }">
          <img class="blog__img" src="../assets/img/blog-02.jpg" alt="" />
          <div class="blog__content">
            <h3 class="blog__title">Сложно сказать, почему жизнь прекрасна</h3>
            <p class="blog__text">
              Сложно сказать, почему элементы политического процесса
              функционально разнесены на независимые элементы. Безусловно,
              высокотехнологичная...
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </id>
</template>

<script>
export default {
  name: 'AppAllBlogs'
}
</script>

<style lang="scss">
.blogs {
  padding-top: 100px;
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    @media (max-width: 992px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
