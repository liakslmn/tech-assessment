<template>
  <div class="header-wrapper">
    <Header></Header>
  </div>
  <div class="content-wrapper">
    <div class="container">
      <Form></Form>
    </div>
  </div>
  <div class="stripes">
    <img src="../assets/images/vector2.svg" alt="" />
  </div>
  <div class="wrapper">
    <div class="container">
      <Office></Office>
    </div>
    <div class="bg-vector">
      <img src="../assets/images/vector3.svg" alt="" />
    </div>
    <div class="bg-vector2">
      <img src="../assets/images/vector4.svg" alt="" />
    </div>
  </div>

  <Footer></Footer>
</template>

<script>
import Header from "../components/Header.vue";
import Form from "../components/Form.vue";
import Footer from "../components/Footer.vue";
import Office from "../components/Offices.vue";

export default {
  name: "Contact",
  components: {
    Header,
    Form,
    Footer,
    Office,
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
}
.header-wrapper {
  padding-top: 20px;
}

.content-wrapper {
  position: relative;
}

.stripes img {
  width: 100%;
}

.bg-vector {
  position: absolute;
  right: 0;
  top: 0;
}

.bg-vector2 {
  position: absolute;
  left: 0;
  bottom: 0;
}

@media (max-width: 769px) {
  .bg-vector,
  .bg-vector2 {
    display: none;
  }
}
</style>
