<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">เลือกบริการ</label>
        <div class="form">
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary active">
              <input
                type="radio"
                name="options"
                id="option1"
                autocomplete="off"
                checked
              />
              จิตแพทย์
            </label>
            <label class="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option2"
                autocomplete="off"
              />
              จิตวิทยา
            </label>
            <label class="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autocomplete="off"
              />
              แพทย์
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">เลือกวัน</label>
        <a-date-picker
          class="form-control"
          style="border: none;"
          @change="onChange"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">เลือกเวลา</label>
        <div
          v-if="this.dataDate == null"
          class="alert alert-warning"
          role="alert"
        >
          กรุณาเลือกวันให้เรียบร้อยก่อน
        </div>
        <select
          v-if="this.dataDate != null"
          id="inputState"
          class="form-control"
          v-model="time"
        >
          <option value="0" selected>Choose...</option>
          <option
            class="col-12 col-md-4 mb-md-3"
            v-for="(timeLoop, index) in dataTimes"
            :key="index"
          >
            {{timeLoop}}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">อาการ</label>
        <textarea rows="3" class="form-control" v-model="symptom"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Confirm</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataDate: null,
      time: 0,
      symptom: null,
      dataTimes: ["11.00 - 11.15","11.15 - 11.30","11.30 - 11.45","11.45 - 12.00","12.00 - 12.15"]
    };
  },
  methods: {
    onChange(date, dateString) {
      this.dataDate = dateString;
    }
  }
};
</script>
