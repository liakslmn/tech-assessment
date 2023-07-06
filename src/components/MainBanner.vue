<template>
  <div v-show="elementVisible" class="badger">
    <div class="words">
      <div class="white-texts">
        <h2>We're</h2>
        <h2>GrowthOps</h2>
      </div>
      <h2 class="skewed">Asia</h2>
    </div>
  </div>
  <div class="main-banner">
    <div class="background-circle">
      <div class="first-circle"></div>
      <div class="second-circle"></div>
      <div class="third-circle"></div>
      <div class="forth-circle"></div>
      <div class="fifth-circle"></div>
    </div>
    <Header></Header>
    <HeroText></HeroText>
  </div>
  <div class="secondary-banner">
    <div class="words">
      <div class="white-texts">
        <h2>We're</h2>
        <h2>GrowthOps</h2>
      </div>
      <h2 class="skewed">Asia</h2>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import HeroText from "./HeroText.vue";

export default {
  name: "MainBanner",
  components: {
    Header,
    HeroText,
  },
  data() {
    return {
      elementVisible: true,
    };
  },

  created() {
    setTimeout(() => (this.elementVisible = false), 4000);
  },
};
</script>

<style>
.main-banner {
  padding-top: 20px;
  position: relative;
  z-index: 99;
  overflow: hidden;
  height: 1100px;
  animation: bannerAnimation 2s;
  animation-delay: 2s;
}

.background-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 98;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -235px;
}

.background-circle .first-circle {
  width: 374px;
  height: 374px;
  border-radius: 50%;
  border: 1px solid #fffbfc;
  animation: glow 3s ease-in infinite;
  position: absolute;
  animation-delay: 0.1s;
}

.background-circle .second-circle {
  width: 607px;
  height: 607px;
  border-radius: 50%;
  border: 1px solid #fffbfc;
  animation: glow 3s ease-in infinite 0.7s forwards;
  position: absolute;
}

.background-circle .third-circle {
  width: 841px;
  height: 841px;
  border-radius: 50%;
  border: 1px solid #fffbfc;
  animation: glow 3s ease-in infinite 1.3s forwards;
  position: absolute;
}

.background-circle .forth-circle {
  width: 1098px;
  height: 1098px;
  border-radius: 50%;
  border: 1px solid #fffbfc;
  animation: glow 3s ease-in infinite 1.9s forwards;
  position: absolute;
}

.background-circle .fifth-circle {
  width: 1331px;
  height: 1331px;
  border-radius: 50%;
  border: 1px solid #fffbfc;
  animation: glow 3s ease-in infinite 2.4s forwards;
  position: absolute;
}

/* Badger animations starts */

.badger {
  display: flex;
  background: #33fff3;
  padding: 60px 30px;
  height: 100vh;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 101;
  top: 0;
  animation: badgerAnimation 2s;
  animation-delay: 2s;
}

.badger .words {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
}

.badger h2 {
  color: #f5f5f5;
  font-size: 88px;
  font-weight: 800;
  margin: 0;
}

.badger .words .skewed {
  background: #fff;
  color: #33fff3;
  margin-left: 20px;
  padding: 10px 20px;
  border-radius: 30px;
  transform: rotate(-10deg);
  text-align: left;
}

@keyframes badgerAnimation {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

@keyframes bannerAnimation {
  from {
    transform: translateY(20%);
  }
  to {
    transform: translateY(0);
  }
}

/* Badger animation ends */

.secondary-banner {
  display: none;
  background: #33fff3;
  padding: 30px 30px;
  height: 100vh;
}
.secondary-banner .words {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
}

.secondary-banner h2 {
  color: #f5f5f5;
  font-size: 35px;
  font-weight: 800;
  margin: 0;
}

.secondary-banner .words .skewed {
  background: #fff;
  color: #33fff3;
  margin-left: 20px;
  padding: 10px 20px;
  border-radius: 30px;
  transform: rotate(-10deg);
  text-align: left;
}

@keyframes glow {
  0% {
    opacity: 0.3;
  }
  10% {
    opacity: 1;
  }
  20% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.3;
  }
}

@media (max-width: 769px) {
  .main-banner,
  .badger {
    display: none;
  }

  .secondary-banner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}

@media (max-width: 426px) {
  .secondary-banner .words {
    justify-content: flex-start;
  }

  .secondary-banner .words .skewed {
    margin: 20px 0 0 20px;
  }
}
</style>
