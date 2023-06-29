<template>
  <div class="wrapper">
    <div class="stripes">
      <img src="../assets/images/vector2.svg" alt="Footer Stripes" />
    </div>
    <div class="links">
      <ul>
        <li><a href="#">Services</a></li>
        <li><a href="#">Works</a></li>
        <li><a href="#">Insights</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div class="branches">
      <div class="container">
        <div class="headers">
          <h1>
            Keep<br />
            in touch
          </h1>
        </div>
        <div class="branches-wrapper">
          <p>Asia</p>
          <ul>
            <li><a href="#">Hong Kong</a></li>
            <li><a href="#">Kuala Lumpur</a></li>
            <li><a href="#">Manila</a></li>
            <li><a href="#">Singapore</a></li>
          </ul>
        </div>
        <div class="branches-wrapper">
          <p>Australia & New Zealand</p>
          <ul>
            <li><a href="#">Brisbane</a></li>
            <li><a href="#">Canberra</a></li>
            <li><a href="#">Melbourne</a></li>
            <li><a href="#">Sydney</a></li>
          </ul>
        </div>
        <div class="branches-wrapper">
          <p>Middle East</p>
          <ul>
            <li><a href="#">United Arab Emirates</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="social-icons">
      <ul>
        <li>
          <a href="#"><fa :icon="['fab', 'linkedin-in']" /></a>
        </li>
        <li>
          <a href="#"><fa :icon="['fab', 'facebook-f']" /></a>
        </li>
        <li>
          <a href="#"><fa :icon="['fab', 'instagram']" /></a>
        </li>
        <li>
          <a href="#"><fa :icon="['fab', 'youtube']" /></a>
        </li>
      </ul>
    </div>
    <div class="copyright-sections">
      <div class="container">
        <div class="wrapper">
          <div class="right">
            <p>
              <fa class="mr-1" :icon="['fas', 'arrow-up-right-from-square']" />
              Go to global GrowthOps website
            </p>
            <a class="policy-link" href="#">Privacy Policy</a>
          </div>
          <p class="copy-text">
            &copy; Copyright GrowthOps. All right reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactFooter",
};
</script>

<style scoped>
.stripes img {
  width: 100%;
}

.branches {
  display: none;
  padding: 50px 20px 0;
}

.branches ul {
  list-style: none;
  padding: 0;
}

.branches .headers {
  margin-bottom: 30px;
}

.branches .headers h1 {
  font-size: 35px;
  font-weight: 800;
  line-height: 40px;
  text-align: left;
  text-transform: uppercase;
}

.branches ul li a {
  text-decoration: none;
  color: #f5f5f5;
}

.branches p {
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  text-transform: uppercase;
  color: #666666;
}

.branches-wrapper {
  margin-bottom: 50px;
}
.links {
  width: 50%;
  margin: 0 auto;
}

.social-icons {
  width: 300px;
  margin: 80px auto 0;
}

.links ul,
.social-icons ul {
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  padding: 0;
  flex-wrap: wrap;
}

.links ul li,
.social-icons ul li {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}

.links ul li a,
.social-icons ul li a {
  text-decoration: none;
  color: white;
}

.copyright-sections {
  padding: 30px 0;
}

.copyright-sections .wrapper {
  display: flex;
  justify-content: space-between;
}

.copyright-sections .wrapper .copy-text {
  text-transform: uppercase;
  color: #6f7176;
  font-size: 12px;
  font-weight: bold;
}

.copyright-sections .wrapper .right {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.copyright-sections .wrapper .right .policy-link {
  margin-left: 40px;
  text-decoration: none;
  color: white;
}

@media (max-width: 769px) {
  .links {
    width: 70%;
  }
  .copyright-sections .wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .copyright-sections .wrapper .copy-text {
    text-transform: none;
    font-weight: 400;
    font-size: 14px;
  }
}

@media (max-width: 426px) {
  .links {
    display: none;
  }

  .branches {
    display: block;
  }
  .social-icons {
    width: 75%;
  }

  .copyright-sections .wrapper .right p {
    display: none;
  }

  .copyright-sections .wrapper .right .policy-link {
    margin: 0 0 20px;
  }
}
</style>
