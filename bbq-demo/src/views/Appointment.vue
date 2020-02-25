<template>
  <div class="container">
    <div
      class="mb-2"
      v-for="(item, index) in array"
      :key="index"
    >
      <CardAppointment :item="item"></CardAppointment>
    </div>
  </div>
</template>

<script>
import CardAppointment from "../components/CardAppointment";
export default {
  components: {
    CardAppointment
  },
  data() {
    return {
      array: []
    };
  },
  mounted() {
    const appointment = JSON.parse(localStorage.getItem('appointment'))
    this.array = appointment
  },
};
</script>

<style></style>
