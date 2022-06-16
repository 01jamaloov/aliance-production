<template>
  <div class="contact">
    <div class="container">
      <div class="contact__wrapper">
        <div class="contact__image">
          <img src="../assets/img/spray.png" alt="" />
        </div>
        <div class="contact__content">
          <div class="section">
            <img src="../assets/img/line.svg" alt="" />
            <h1 class="section__title">
              {{ $store.state.sectionTitle.title7 }}
            </h1>
          </div>
          <p class="contact__text">
            Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время
            ответит на все интересующие вопросы и поможем даже в самых сложных
            случаях!
          </p>
          <div class="contact__form">
            <q-form @submit.prevent="onSubmit">
              <div class="inputs">
                <q-input
                  filled
                  v-model.trim="name"
                  label="Имя"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Введите ваше имя!'
                  ]"
                />
                <q-input
                  filled
                  v-model="phone"
                  label="+_ (___) __-__-___"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Введите ваш номер телефона!'
                  ]"
                />
              </div>
              <div>
                <div class="claim__box">
                  <button type="submit" class="main-btn">
                    Отправить заявку
                  </button>
                  <div class="claim__accept">
                    <div>
                      <img src="../assets/img/shield.svg" alt="" />
                    </div>
                    <p class="claim__text">
                      Обращаясь к нам вы получаете не только профессиональную
                      работу, но и абсолютную
                      <router-link class="claim__config" :to="{ name: 'config' }"
                        >конфиденциальность информации!</router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup() {
    const $q = useQuasar()

    const name = ref(null)
    const phone = ref(null)

    return {
      name,
      phone,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      }
    }
  }
}
</script>

<style lang="scss">
.contact {
  padding: 80px 0;
  background: #f0f2f5;
  margin-top: 100px;
  position: relative;

  @media (max-width: 992px) {
    padding-bottom: 80px;
  }

  .section {
    margin-top: 0;
    padding-bottom: 20px;
  }

  &__image {
    width: 600px;
    position: absolute;
    left: 10%;
    bottom: 0;
    transform: translateX(-50%);

    img {
      width: 100%;
    }

    @media (max-width: 992px) {
      display: none;
    }
  }

  &__content {
    width: 65%;
    margin-left: auto;

    @media (max-width: 992px) {
      width: 100%;
    }
  }

  .inputs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
		padding-bottom: 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .claim__box {
    display: flex;
    align-items: center;
    column-gap: 30px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .claim__accept {
    width: 60%;
    display: flex;
    column-gap: 10px;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 30px;
    }
  }

	.claim__text{
		font-size: 12px;
	}

  .claim__config {
    color: #5c8ee6;
		font-size: 12px;
  }

  .main-btn {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
