<template>
  <div class="card">
    <div class="card-header">
      {{ item.type }}
    </div>
    <div class="card-body">
      <h5 class="card-title">เวลานัดหมาย</h5>
      <p class="card-text">
        {{ item.date }}
      </p>
      <div href="#" class="btn btn-primary">{{ item.time }}</div>
    </div>
    <div class="card-body">
      <a href="#" class="card-link">ยกเลิก</a>
      <a href="#" class="card-link">เลื่อนนัด</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: null, date: null, time: null }
  }
};
</script>

<style></style>
