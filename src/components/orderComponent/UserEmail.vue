<template>
  <div>
    <div>Email*</div>
    <input
      v-model="setEmail"
      type="email"
      placeholder="you@example.com"
      class="form-input w-full sm:w-[170px]"
      @blur="validateEmail"
    />
    <div class="w-full sm:w-[170px] text-red-700 text-[12px]">
      {{ msg["email"] }}
    </div>
  </div>
</template>

<script>
import "@/assets/tailwind.css";
import { computed } from "vue";
import store from "@/store";
export default {
  setup() {
    const setEmail = computed({
      get() {
        return store.getters["order/getCurrentEmail"];
      },
      set(e) {
        store.commit("order/setEmail", e);
      },
    });
    const msg = computed({
      get() {
        return store.getters["order/getErrorMessage"];
      },
    });
    const validateEmail = () => {
      if (setEmail.value == "") {
        store.commit("order/setErrorMessge", {
          key: "email",
          text: "*Обязательное поле",
        });
      } else if (
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(setEmail.value)
      ) {
        store.commit("order/setErrorMessge", { key: "email", text: "" });
      } else {
        store.commit("order/setErrorMessge", {
          key: "email",
          text: "*Введите валидный email",
        });
      }
    };
    return {
      validateEmail,
      setEmail,
      msg,
    };
  },
};
</script>
