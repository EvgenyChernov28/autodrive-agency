<template>
  <div>
    <div>Телефон*</div>
    <input
      v-phone
      v-focus
      v-model="setPhone"
      @blur="changePhone"
      type="tel"
      placeholder="+7 (___) ___-__-__"
      class="form-input w-full sm:w-[170px]"
    />
    <div class="w-full sm:w-[170px] text-red-700 text-[12px]">
      {{ msg["phone"] }}
    </div>
  </div>
</template>

<script>
import "@/assets/tailwind.css";
import { computed } from "vue";
import store from "@/store";
const focus = {
  mounted: (el) => el.focus(),
};
export default {
  directives: {
    phone: {
      beforeMount(el) {
        function replaceNumberForInput(value) {
          let val = "";
          const x = value
            .replace(/\D/g, "")
            .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
          if (x[1] === "7" || x[1] === "8") {
            x[1] = "+7";
          } else {
            x[2] = x[1];
            x[1] = "+7";
          }
          val = !x[3]
            ? x[1] + " (" + x[2]
            : x[1] +
              " (" +
              x[2] +
              ") " +
              x[3] +
              (x[4] ? "-" + x[4] : "") +
              (x[5] ? "-" + x[5] : "");

          return val;
        }

        function replaceNumberForPaste(value) {
          const r = value.replace(/\D/g, "");
          let val = r;
          if (val.charAt(0) === "7") {
            val = "8" + val.slice(1);
          }
          return replaceNumberForInput(val);
        }

        el.oninput = function (e) {
          if (!e.isTrusted) {
            return;
          }
          this.value = replaceNumberForInput(this.value);
        };

        el.onpaste = function () {
          setTimeout(() => {
            const pasteVal = el.value;
            this.value = replaceNumberForPaste(pasteVal);
          });
        };
      },
    },
    focus,
  },
  setup() {
    const setPhone = computed({
      get() {
        return store.getters["order/getCurrentPhone"];
      },
      set(e) {
        store.commit("order/setPhone", e);
      },
    });
    const msg = computed({
      get() {
        return store.getters["order/getErrorMessage"];
      },
    });
    const changePhone = (e) => {
      store.commit("order/setPhone", e.target.value);
    };
    return {
      setPhone,
      msg,
      changePhone,
    };
  },
};
</script>

<style scoped lang="scss"></style>
