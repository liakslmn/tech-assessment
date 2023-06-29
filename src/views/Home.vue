<template>
  <MainBanner></MainBanner>
  <AboutGo></AboutGo>
  <WhatWeDo></WhatWeDo>
  <Result></Result>
  <Client></Client>
  <Companies></Companies>
  <Footer></Footer>
</template>

<script setup>
import MainBanner from "../components/MainBanner.vue";
import Footer from "../components/Footer.vue";
import WhatWeDo from "../components/WhatWeDo.vue";
import AboutGo from "../components/AboutGo.vue";
import Result from "../components/Result.vue";
import Client from "../components/Clients.vue";
import Companies from "../components/Companies.vue";
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
  color: white;
}
</style>
