<template>
  <Transition name="modal" appear>
    <div class="modal" v-show="isOpen">
      <div class="modal__card">
        <div class="modal__content">
          <h1 class="modal__title">Есть вопросы?</h1>
          <p class="modal__text">
            Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время
            ответит на все интересующие вопросы и поможем даже в самых сложных
            случаях!
          </p>
          <div class="modal__close" @click="closeModal">
            <img src="../assets/img/close-modal.svg" alt="" />
          </div>
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
                    val =>
                      (val && val.length > 0) || 'Введите ваш номер телефона!'
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
                      <router-link
                        class="claim__config"
                        :to="{ name: 'config' }"
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
  </Transition>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  name: 'AppModal',
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
  },

  data() {
    return {
      isOpen: null
    }
  },

  mounted() {
    setTimeout(() => {
      this.isOpen = true
      document.body.classList.add('locked')
    }, 10000)
  },

  methods: {
    closeModal() {
      this.isOpen = false
      document.body.classList.remove('locked')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  &__card {
    max-width: 500px;
    width: 100%;
    background: #fff;

    @media (max-width: 576px) {
      max-width: 80%;
    }
  }

  &__content {
    padding: 40px 50px;
    position: relative;

    @media (max-width: 576px) {
      padding: 20px 30px;
    }
  }

  &__close {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }

  &__title {
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    color: #292d33;

    @media (max-width: 576px) {
      font-size: 30px;
    }
  }

  &__text {
    margin: 20px 0 30px;
  }

  .claim__accept {
    display: flex;
    column-gap: 10px;
    margin-top: 20px;
  }

  .main-btn {
    width: 100%;
  }

  .claim__config {
    color: #828a99;
    text-decoration: underline;
  }
}

.modal-enter-from,
.modal-leave-to {
  transition: opacity 0.5s ease;
  opacity: 0;
}

.modal-enter-to,
.modal-leave-from {
  transition: opacity 0.5s ease;
  opacity: 1;
}
</style>
