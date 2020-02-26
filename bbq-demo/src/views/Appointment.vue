<template>
  <div class="container">
    <div
        v-if="this.alertErrorStatus"
        class="alert alert-secondary"
        role="alert"
      >
        คุณยังไม่มีการจองการนัดหมาย
      </div>
    <div class="mb-2" v-for="(item, index) in array" :key="index">
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
      array: [],
      alertErrorStatus: false
    };
  },
  mounted() {
    if (localStorage.getItem("appointment")) {
      const appointment = JSON.parse(localStorage.getItem("appointment"));
      this.array = appointment;
    }else{
      this.alertErrorStatus = true
    }
  }
};
</script>

<style></style>
