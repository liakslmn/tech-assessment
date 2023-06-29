<template>
  <div class="wrapper">
    <div class="row">
      <div class="col-lg-8 col-md-12">
        <img src="../assets/images/image1.svg" alt="Image 1" />
      </div>
      <div class="col-lg-4 col-md-12 articles">
        <div class="circle">{{ circle }}</div>
        <h3>{{ title }}</h3>
        <h5>{{ text1 }}</h5>
        <h5>{{ text2 }}</h5>
        <h5>{{ text3 }}</h5>
        <h5>{{ text4 }}</h5>
        <div class="button">
          <a href="#">See more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextContainerR",
  props: {
    circle: String,
    title: String,
    text1: String,
    text2: String,
    text3: String,
    text4: String,
  },
};
</script>

<style scoped>
.wrapper {
  margin: 70px 0;
}

.wrapper img {
  width: 100%;
}

.wrapper h3 {
  font-size: 40px;
  font-weight: 800;
  line-height: 49px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 20px;
}

.wrapper h5 {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #cccccc;
}

.circle {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 7px;
  border: 2px solid #fff;
  text-align: center;
  margin-bottom: 20px;
}

.button {
  border: 2px solid #f5f5f5;
  width: fit-content;
  padding: 12px 24px;
  border-radius: 48px;
  gap: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.button a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
}

.articles {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

@media (max-width: 768px) {
  .wrapper {
    margin: 40px 0;
  }
  .wrapper .row {
    display: flex;
    flex-direction: column;
  }

  .wrapper h3 {
    font-size: 24px;
    font-weight: 800;
    line-height: 29px;
  }
  .articles {
    margin: 30px 0;
  }
}
</style>
