<template style="background-color: black">
  <div class="main-menu" :class="{ shown: toggler }">
    <div class="container">
      <div class="menu-wrapper">
        <div class="logo">
          <a href="/">
            <img src="../assets/images/logo.svg" alt="GrowthOps logo" />
          </a>
        </div>
        <div
          class="button-wrapper-closed"
          :class="{ shown: toggler }"
          @click="
            {
              toggler = !toggler;
            }
          "
        >
          <a href="#">
            <p>CLOSE</p>
            <img src="../assets/images/close.svg" alt="Close" />
          </a>
        </div>
      </div>
      <ul>
        <li><a href="#">Services</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Insights</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="container">
    <div class="wrapper">
      <div class="logo">
        <a href="/">
          <img src="../assets/images/logo.svg" alt="GrowthOps logo" />
        </a>
      </div>
      <div class="hamburger-menu">
        <div
          class="button-wrapper-menu"
          @click="
            {
              toggler = !toggler;
            }
          "
          :class="{ hidden: toggler }"
        >
          <a href="#">
            <p>MENU</p>
            <img src="../assets/images/bars.svg" alt="Hamburger" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      toggler: false,
    };
  },
};
</script>

<style scoped>
.container {
  padding: 0;
  z-index: 99;
  position: relative;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #f5f5f514;
  border-radius: 50px;
  padding: 10px 20px;
  color: white;
  background: #000;
}

.wrapper .hamburger-menu a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.wrapper .hamburger-menu p {
  margin: 0 10px 0 0;
  text-decoration: none;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.main-menu .button-wrapper-closed {
  display: none;
}

.main-menu .button-wrapper-closed a {
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  text-decoration: none;
}

.main-menu .button-wrapper-closed p {
  margin: 0 10px 0 0;
  font-weight: bold;
}

.main-menu {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.8);
  padding: 20px 30px 0;
  transition: 0.5s;
  z-index: 100;
  top: 0;
}

.main-menu .menu-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px 20px;
}

.main-menu ul {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
}

.main-menu ul li {
  margin: 10px 0 0;
}

.main-menu ul li a {
  color: #fff;
  text-align: right;
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 0.64px;
  text-transform: uppercase;
  text-decoration: none;
}

@media (max-width: 769px) {
  .main-menu ul li a {
    font-size: 35px;
  }
}
</style>
