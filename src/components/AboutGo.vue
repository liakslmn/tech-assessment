<template>
  <div class="wrapper">
    <div class="container">
      <div class="word-wrap">
        <h3>
          With a focus in fusing <span class="strategy">strategy</span>,
          <span class="design"></span>
          and <span class="technologies">&lt;technologies/&gt;</span> to build
          and sustain market leaders
        </h3>
        <h3 class="extra-margin">this is</h3>
      </div>
      <h2 class="gradients">GrowthOps Asia</h2>
    </div>
    <div class="bg">
      <img src="../assets/images/vector1.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutGo",
};
</script>

<style scoped>
.wrapper {
  padding: 50px 0 200px;
  position: relative;
}

.bg {
  position: absolute;
  top: -20px;
  left: 0;
}

.wrapper h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: -0.01em;
  text-align: center;
}
.word-wrap {
  width: 55%;
  margin: 0 auto;
  text-align: center;
}

.strategy,
.design,
.technologies {
  color: #33fff3;
}

.technologies {
  font-family: "Source Code Pro", monospace;
  font-size: 32px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
}
.design:after {
  content: "design";
  width: 150px;
  height: 60px;
  background-image: url("../assets/images/design.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: inline-block;
  padding: 8px;
}

.gradients {
  font-size: 96px;
  font-weight: 800;
  letter-spacing: -0.01em;
  text-align: center;
  background: linear-gradient(
    to right,
    #004cba 0.06%,
    #19b2a7 44.49%,
    #fdd196 83.69%
  );
  background-size: 500% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animate 2s ease-in-out infinite alternate;
}

@keyframes animate {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

@media (max-width: 767px) {
  .wrapper {
    padding: 80px 0;
  }
  .word-wrap {
    width: 100%;
  }

  .bg {
    display: none;
  }

  .wrapper h3,
  .technologies {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }

  .design:after {
    width: 100px;
    height: 40px;
  }

  .gradients {
    font-size: 36px;
    font-weight: 800;
    line-height: 44px;
  }
}
</style>
