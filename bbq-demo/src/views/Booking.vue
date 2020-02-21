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
        <select id="inputState" class="form-control">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    }
  }
};
</script>
