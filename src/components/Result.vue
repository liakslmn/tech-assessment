<template>
  <div class="wrapper">
    <div class="container">
      <h2>
        <div class="rainbow">
          <div class="circle"></div>
          Unforgettable
        </div>
        Results
      </h2>
      <TextBox></TextBox>
    </div>
  </div>
</template>

<script>
import TextBox from "./TextBox.vue";
export default {
  name: "Result",
  components: {
    TextBox,
  },
};
</script>

<style scoped>
.wrapper {
  padding: 80px 0;
}
.wrapper h2 {
  font-size: 88px;
  font-weight: 800;
  line-height: 84px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;
}

.wrapper h2 .circle {
  border-radius: 50%;
  width: 80%;
  height: 80px;
  padding: 7px;
  border: 1.5px solid #07ddda;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}

.wrapper h2 .rainbow {
  background: linear-gradient(
    90.54deg,
    #004cba 0.06%,
    #19b2a7 44.49%,
    #fdd196 83.69%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}
.wrapper h2 span {
  width: 100%;
  display: block;
}

@media (max-width: 769px) {
  .wrapper h2 {
    font-size: 35px;
    line-height: 40px;
  }

  .wrapper h2 .circle {
    width: 50%;
    height: 40px;
  }
}

@media (max-width: 426px) {
  .wrapper h2 {
    font-size: 28px;
  }
  .wrapper h2 .circle {
    width: 80%;
  }
}
</style>
