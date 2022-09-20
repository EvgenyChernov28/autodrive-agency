<template>
  <div>
    <div>Город*</div>
    <select v-model="setCity" class="form-select w-full sm:w-[170px]">
      <option v-for="city in getCity" :key="city.id" :value="city.name">
        {{ city.name }}
      </option>
    </select>
  </div>
</template>

<script>
import "@/assets/tailwind.css";
import { computed } from "vue";
import store from "@/store";
export default {
  setup() {
    const getCity = computed({
      get() {
        return store.getters["order/getCity"];
      },
    });
    const setCity = computed({
      get() {
        return store.getters["order/getCurrentCity"];
      },
      set(e) {
        store.commit("order/setCity", e);
      },
    });
    return {
      getCity,
      setCity,
    };
  },
};
</script>

<style scoped lang="scss"></style>
