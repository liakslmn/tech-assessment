<template>
  <div class="fixed-padding">
    <div class="wrapper">
      <div class="container">
        <h2 class="text-uppercase">
          <div class="gradient">
            <div class="circle"></div>
            super
          </div>
          proud to work with
        </h2>
      </div>
      <div class="image-wrapper">
        <div class="box-shadows"></div>
        <div class="box-shadows2"></div>
        <div class="image-group1 left-move">
          <img src="../assets/icons/company1.svg" alt="alt" />
        </div>
        <div class="image-group2 right-move">
          <img src="../assets/icons/company2.svg" alt="" />
        </div>
        <div class="image-group3 left-move-l">
          <img src="../assets/icons/company3.svg" alt="" />
        </div>
      </div>
      <div class="button">
        <a href="/contact">Let's Chat</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Companies",
};
</script>

<style scoped>
.fixed-padding {
  padding: 80px 0;
}

.image-wrapper {
  position: relative;
}

.image-wrapper .box-shadows {
  position: absolute;
  left: 0;
  width: 10%;
  height: 100%;
  background: linear-gradient(90deg, #010101 0%, rgba(1, 1, 1, 0) 100%);
}

.image-wrapper .box-shadows2 {
  position: absolute;
  right: 0;
  width: 10%;
  height: 100%;
}

.wrapper h2 {
  font-size: 88px;
  font-weight: 800;
  line-height: 84px;
  letter-spacing: 0em;
  text-align: center;
}

.gradient {
  display: inline;
  background: linear-gradient(91.91deg, #9747ff 0.18%, #96bffd 32.82%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}
.circle {
  display: inline;
  border-radius: 50%;
  width: 100%;
  height: 80px;
  padding: 7px;
  border: 1px solid #9747ff;
  text-align: center;
  position: absolute;
  left: 45%;
  transform: translate(-50%, 0);
}

.image-wrapper {
  margin: 30px 0;
  position: relative;
  overflow: hidden;
}

.left-move {
  transform: translateX(0);
  animation: background-shift 8s linear 1 forwards;
}

.left-move-l {
  transform: translateX(0);
  animation: background-shift-l 8s linear 1 forwards;
}

.right-move {
  transform: translateX(0);
  animation: background-shift-r 8s linear 1 forwards;
}

@keyframes background-shift {
  to {
    transform: translateX(-10%);
  }
}

@keyframes background-shift-r {
  to {
    transform: translateX(10%);
  }
}

@keyframes background-shift-l {
  to {
    transform: translateX(-10%);
  }
}

.image-group1,
.image-group2,
.image-group3 {
  margin: 40px 0;
}

.image-group1 img,
.image-group2 img,
.image-group3 img {
  opacity: 0.5;
}
.image-group2 {
  display: flex;
  justify-content: flex-end;
}

.button {
  display: flex;
  justify-content: center;
  margin: 150px 0;
}

.button a {
  padding: 16px 40px;
  border-radius: 48px;
  color: #fff;
  background-color: #33ff85;
  box-shadow: 0px 0px 16px 0px #ff336680;
  text-decoration: none;
  width: fit-content;
  font-weight: 800;
}

@media (max-width: 769px) {
  .wrapper h2 {
    text-align: center;
    font-size: 35px;
    font-weight: 800;
    line-height: 40px;
  }

  .circle {
    height: 40px;
  }
}
</style>
