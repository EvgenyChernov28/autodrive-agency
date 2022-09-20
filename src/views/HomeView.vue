<template>
  <div class="home">
    <ButtonsGroup />
    <ModalOrder />
    <ModalResponce />
  </div>
</template>

<script>
import ButtonsGroup from "@/components/ButtonsGroup.vue";
import ModalOrder from "@/components/ModalOrder.vue";
import ModalResponce from "@/components/ModalResponce.vue";
export default {
  components: {
    ButtonsGroup,
    ModalOrder,
    ModalResponce,
  },
};
</script>
