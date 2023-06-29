<template>
  <div class="fixed-box">
    <div class="container">
      <div class="wrapper">
        <h2>What Clients Say</h2>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="#">Telco</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Insurance</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Fintech</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">IT</a>
          </li>
        </ul>
        <div class="testimonial">
          <div class="row">
            <div class="col-md-1">
              <span>“</span>
            </div>
            <div class="col-md-11">
              <h3 class="mb-5">
                Through this initiative, GrowthOps have shown to have the right
                capabilities to take our platform to the next level. We believe
                the refreshed U.COM.MY will equip us with more insights,
                enabling us to make more data-led decisions that will result in
                new digital experiences that will truly benefit our customers.
              </h3>
              <p>Jasmine Lee</p>
              <p class="slick">[Position], [Company Name]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg">
      <img src="../assets/images/vector.svg" alt="vector" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Clients",
};
</script>

<style scoped>
.fixed-box {
  padding: 80px 0 150px;
  position: relative;
}

.bg {
  position: absolute;
  right: 0;
  top: 0;
}
.wrapper h2 {
  text-transform: uppercase;
  font-size: 88px;
  font-weight: 800;
  line-height: 84px;
  letter-spacing: 0em;
  text-align: center;
}

.nav {
  width: fit-content;
  margin: 60px auto;
  border: 1.5px solid #2b2b2b;
  border-radius: 30px;
  padding: 6px;
}

.nav .nav-link {
  border-radius: 30px;
  color: white;
}

.nav .nav-link.active {
  background: #07ddda;
  color: #010101;
  font-weight: 700;
}

.testimonial h3 {
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.01em;
  text-align: left;
}

.testimonial p {
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}

.testimonial p.slick {
  font-weight: 400;
  color: #cccccc;
}

.testimonial span {
  font-size: 40px;
  font-weight: 700;
  line-height: 49px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #07ddda;
}

@media (max-width: 769px) {
  .wrapper h2 {
    font-size: 35px;
    font-weight: 800;
    line-height: 40px;
  }

  .bg {
    display: none;
  }
}
</style>
