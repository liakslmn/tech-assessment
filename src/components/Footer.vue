<template>
  <div class="wrapper">
    <div class="stripes">
      <img src="../assets/images/footer-stripes.svg" alt="Footer Stripes" />
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
          <p class="copy-text">
            &copy; Copyright GrowthOps. All Right Reserved
          </p>
          <div class="right">
            <p>
              <fa class="mr-1" :icon="['fas', 'arrow-up-right-from-square']" />
              Go to global GrowthOps website
            </p>
            <a class="policy-link" href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.stripes img {
  width: 100%;
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
  padding: 80px 0;
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

@media (max-width: 768px) {
  .links {
    width: 70%;
  }
  .copyright-sections .wrapper {
    justify-content: center;
  }
  .copyright-sections .wrapper .copy-text {
    display: none;
  }
}

@media (max-width: 426px) {
  .links {
    width: 55%;
  }
  .social-icons {
    width: 75%;
  }
  .links ul {
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .links ul li {
    margin: 10px 5px;
    font-size: 14px;
  }
}
</style>
