<template>
  <div>
    <transition name="modal">
      <div
        class="fixed flex flex-row justify-center items-center z-50 inset-0 w-full h-full bg-color6b7280bf transition-opacity ease duration-1000"
        v-if="getShowCard"
        @click.self="setShowCard(false)"
      >
        <div
          class="w-[793px] h-[492px] sm:h-[216px] p-[24px] m-[10px] bg-white rounded-lg shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_15px_-5px_rgba(0,0,0,0.04)] flex flex-col gap-[16px]"
        >
          <div class="text-left text-[24px] leading-[24px] font-medium">
            Заказать звонок
          </div>
          <div
            class="flex flex-col sm:flex-row sm:justify-between gap-[16px] text-left font-medium leading-[20px] text-[16px] sm:max-h-[62px]"
          >
            <UserName />
            <UserPhone />
            <UserEmail />
            <UserCity />
          </div>
          <button
            class="py-[11px] px-[42px] w-full sm:w-[170px] bg-[#16A34A] shadow-[0_1px_2px_0px_rgba(0,0,0,0.05)] rounded-[6px] text-white sm:self-end hover:bg-sky-700"
            @click="sendOrder"
          >
            Отправить
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import "@/assets/tailwind.css";
import { computed } from "vue";
import store from "@/store";
import UserName from "./orderComponent/UserName.vue";
import UserCity from "./orderComponent/UserCity.vue";
import UserEmail from "./orderComponent/UserEmail.vue";
import UserPhone from "./orderComponent/UserPhone.vue";
export default {
  components: { UserName, UserCity, UserEmail, UserPhone },
  setup() {
    const getShowCard = computed({
      get() {
        return store.getters["order/getShowCard"];
      },
    });
    const setShowCard = (event) => {
      store.dispatch("order/setShowCardAC", event);
    };
    const sendOrder = () => {
      store.dispatch("order/setOrderAC");
    };
    return {
      getShowCard,
      setShowCard,
      sendOrder,
    };
  },
};
</script>

<style scoped>
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
