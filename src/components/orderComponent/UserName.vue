<template>
  <div>
    <div>Имя*</div>
    <input
      v-model="setName"
      type="text"
      class="form-input w-full sm:w-[170px]"
    />
    <div class="w-full sm:w-[170px] text-red-700 text-[12px]">
      {{ msg["name"] }}
    </div>
  </div>
</template>

<script>
import "@/assets/tailwind.css";
import { computed } from "vue";
import store from "@/store";
export default {
  setup() {
    const setName = computed({
      get() {
        return store.getters["order/getCurrentName"];
      },
      set(e) {
        store.commit("order/setName", e);
      },
    });
    const msg = computed({
      get() {
        return store.getters["order/getErrorMessage"];
      },
    });
    return {
      setName,
      msg,
    };
  },
};
</script>

<style scoped lang="scss"></style>
