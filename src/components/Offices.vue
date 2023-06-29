<template>
  <div class="wrapper">
    <h1>Our Offices</h1>
    <OfficeBox />
  </div>
</template>

<script>
import OfficeBox from "./OfficesBox.vue";

export default {
  name: "Office",
  components: { OfficeBox },
};
</script>

<style scoped>
.wrapper {
  padding: 80px 0;
  position: relative;
  z-index: 99;
}
.wrapper h1 {
  font-size: 88px;
  font-weight: 800;
  line-height: 84px;
  text-transform: uppercase;
  text-align: center;
}

@media (max-width: 769px) {
  .wrapper {
    position: relative;
    z-index: 99;
  }
  .wrapper h1 {
    font-size: 35px;
    font-weight: 800;
    line-height: 40px;
  }
}
</style>
