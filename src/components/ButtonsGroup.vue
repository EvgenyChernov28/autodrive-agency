<template>
  <div>
    <div class="m-[10px] flex flex-col sm:ml-[40px] sm:flex-row sm:m-[20px]">
      <button
        :class="{
          'py-[9px]': true,
          'px-[17px]': true,
          'mb-[10px]': true,
          'bg-color3B82F6': true,
          'text-white': true,
          'rounded-[8px]': true,
          'hover:bg-[#5B82F6]': true,
          'sm:ml-[40px]': true,
          'sm:mb-[0px]': true,
          'sm:mr-[17px]': true,
          'lg:ml-[80px]': true,
          'lg:mr-[20px]': true,
        }"
        @click="setShowCard((nameCity = 'Москва'), !getShowCard)"
      >
        Заказать в Москву
      </button>
      <button
        class="py-[9px] px-[17px] bg-color0D9488 text-white rounded-[8px] hover:bg-[#3D9488]"
        @click="setShowCard((nameCity = 'Санкт-Петербург'), !getShowCard)"
      >
        Заказать в Санкт-Петербург
      </button>
    </div>
  </div>
</template>

<script>
import "@/assets/tailwind.css";
import { computed } from "vue";
import store from "@/store";
export default {
  name: "ButtonsGroup",
  setup() {
    const getShowCard = computed({
      get() {
        return store.getters["order/getShowCard"];
      },
    });
    const setShowCard = (nameCity, showCard) => {
      store.commit("order/setCity", nameCity);
      store.dispatch("order/setShowCardAC", showCard);
    };
    return {
      getShowCard,
      setShowCard,
    };
  },
};
</script>
