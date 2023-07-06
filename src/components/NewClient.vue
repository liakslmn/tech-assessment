<template>
  <div id="el-app" class="container">
    <ul class="tabs-choose">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </ul>
    <div class="tabs-content">
      <div class="content-one">One</div>
      <div class="content-two">Two</div>
      <div class="content-three">Three</div>
      <div class="content-four">Four</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTabs: "1",
    };
  },
};
</script>

<style scoped>
.container {
  margin: 20px auto;
  width: 1200px;
}

.container .tabs-choose {
  margin-bottom: 0;
}

.container .tabs-choose li {
  display: inline-block;
  padding: 10px 20px;
  background-color: #eee;
  cursor: pointer;
  opacity: 0.3;
}

.container .tabs-choose li.active {
  opacity: 1;
}

.container .tabs-content {
  background-color: #eee;
  margin: 0 auto;
  padding: 20px;
}
</style>
