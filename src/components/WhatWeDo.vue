<template>
  <div class="container">
    <h2>What We Do</h2>
    <TextContainer
      circle="01"
      title="Performance Marketing & Analytics"
      text1="Performance Media"
      text2="Search Engine Optimisation"
      text3="Web & App Analytics"
      text4="Conversion Rate Optimisation Through Personalisation"
    ></TextContainer>
    <TextContainerR
      circle="02"
      title="Digital-First Creative"
      text1="Brand & Marketing Strategy"
      text2="Content Hubs"
      text3="Creative Services"
    ></TextContainerR>
    <TextContainer
      circle="03"
      title="Marketing Technology"
      text1="Technology Consulting"
      text2="MarTech Deployment & Partnerships"
      text3="Cloud Readiness & Migration"
      text4="Mobile Development"
      text5="Custom Web Development"
      text6="Solution Architecture"
    ></TextContainer>
    <TextContainerR
      circle="04"
      title="Experience Design & Strategy"
      text1="Digital Transformation & Change Management"
      text2="User Experience Strategy and Design"
    ></TextContainerR>
  </div>
</template>

<script>
import TextContainer from "./TextContainer.vue";
import TextContainerR from "./TextContainerR.vue";

export default {
  name: "WhatWeDo",
  components: {
    TextContainer,
    TextContainerR,
  },
};
</script>

<style scoped>
.container h2 {
  font-size: 88px;
  font-weight: 800;
  line-height: 84px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;
}

@media (max-width: 769px) {
  .container h2 {
    font-size: 35px;
    line-height: 40px;
  }
}
</style>
