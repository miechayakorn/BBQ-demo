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
      array: [
        { type: "จิตแพทย์", date: "18 เมษายน 2563", time: "13.30" },
        { type: "จิตแพทย์", date: "20 เมษายน 2563", time: "10.30" },
        { type: "จิตวิทยา", date: "30 เมษายน 2563", time: "8.30" }
      ]
    };
  }
};
</script>

<style></style>
