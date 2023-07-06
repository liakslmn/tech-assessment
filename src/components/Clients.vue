<template>
  <div class="fixed-box">
    <div class="container">
      <div class="wrapper">
        <h2>What Clients Say</h2>
        <ul class="nav justify-content-center">
          <li
            @click="activeTabs = '1'"
            :class="[activeTabs === '1' ? 'active nav-item' : 'nav-item']"
          >
            Telco
          </li>
          <li
            @click="activeTabs = '2'"
            :class="[activeTabs === '2' ? 'active nav-item' : 'nav-item']"
          >
            Insurance
          </li>
          <li
            @click="activeTabs = '3'"
            :class="[activeTabs === '3' ? 'active nav-item' : 'nav-item']"
          >
            Fintech
          </li>
          <li
            @click="activeTabs = '4'"
            :class="[activeTabs === '4' ? 'active nav-item' : 'nav-item']"
          >
            IT
          </li>
        </ul>
        <div class="testimonial">
          <div class="row descriptions" v-if="activeTabs === '1'">
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
              <p class="slick">HR, Grab</p>
            </div>
          </div>
          <div class="row descriptions" v-if="activeTabs === '2'">
            <div class="col-md-1">
              <span>“</span>
            </div>
            <div class="col-md-11">
              <h3 class="mb-5">
                GrowthOps has brought the right maturity in design, technology,
                and analytic capabilities to take our platform to the next
                level.
              </h3>
              <p>Brian Smith</p>
              <p class="slick">Executive, Malaysia Airlines</p>
            </div>
          </div>
          <div class="row descriptions" v-if="activeTabs === '3'">
            <div class="col-md-1">
              <span>“</span>
            </div>
            <div class="col-md-11">
              <h3 class="mb-5">
                GrowthOps is one of AIA's service provider who delivered a lot
                of projects across APAC. They have broad business and technical
                knowledge and a trustworthy partner that I would recommend to
                any company.
              </h3>
              <p>Lillian Garcia</p>
              <p class="slick">
                Associate Director, American International Assurance (AIA)
              </p>
            </div>
          </div>
          <div class="row descriptions" v-if="activeTabs === '4'">
            <div class="col-md-1">
              <span>“</span>
            </div>
            <div class="col-md-11">
              <h3 class="mb-5">
                GrowthOps have helped us profitably acquire customers while
                providing deep technical solutions to our analytics challenges.
                GrowthOps is a true partner when it comes to digital marketing
                and analytics, and they have truly impacted our business in a
                positive way.
              </h3>
              <p>Christina Markle</p>
              <p class="slick">VP of SME Banking, Business and Innovation</p>
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
  data() {
    return {
      activeTabs: "1",
    };
  },
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

.container {
  padding: 0 20px;
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

.nav .nav-item {
  border-radius: 30px;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
}

.nav .nav-item.active {
  background: #07ddda;
  color: #010101;
  font-weight: 700;
}

.testimonial .descriptions {
  animation: fades 1s;
}

@keyframes fades {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
  .fixed-box {
    padding: 50px 0;
  }
  .wrapper h2 {
    font-size: 35px;
    font-weight: 800;
    line-height: 40px;
  }

  .bg {
    display: none;
  }

  .nav .nav-item {
    font-size: 12px;
  }
}
</style>
