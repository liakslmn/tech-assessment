<template>
  <div class="wrapper">
    <h1>Contact Us</h1>
    <div class="subs">
      <h3>Let's create something awesome together</h3>
    </div>
    <div class="forms">
      <form @submit.prevent="onSubmit">
        <div class="form-data name">
          <label for="name">* Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            v-model="form.name"
            required
          />
        </div>
        <div class="form-data phone-and-email">
          <div class="phone">
            <p>* Phone Number</p>
            <input
              type="tel"
              name="phone"
              id="phone"
              v-model="form.phone"
              required
            />
          </div>
          <div class="email">
            <p>* Work Email</p>
            <input
              type="email"
              name="email"
              id="email"
              v-model="form.email"
              required
            />
          </div>
        </div>
        <div class="form-data">
          <p>* I want to</p>
          <div class="radio-button-wrapper">
            <div class="radio-button">
              <label for="client">
                <input
                  type="radio"
                  id="client"
                  name="wantTo"
                  value="client"
                  v-model="form.wantTo"
                  required
                />Become a client
              </label>
            </div>
            <div class="radio-button">
              <label for="team">
                <input
                  type="radio"
                  id="team"
                  name="wantTo"
                  value="team"
                  v-model="form.wantTo"
                />Join the team</label
              >
            </div>
            <div class="radio-button">
              <label for="team">
                <input
                  type="radio"
                  id="investor"
                  name="wantTo"
                  value="investor"
                  v-model="form.wantTo"
                />Investor inquiry</label
              >
            </div>
            <div class="radio-button">
              <label for="team">
                <input
                  type="radio"
                  id="other"
                  name="wantTo"
                  value="other"
                  v-model="form.wantTo"
                />Others</label
              >
            </div>
          </div>
        </div>
        <div class="form-data">
          <p>Tell us more</p>
          <textarea
            id="review"
            name="review"
            rows="4"
            cols="50"
            placeholder="Briefly describe your message here"
          ></textarea>
        </div>
        <div class="form-data">
          <div class="checkbox-data">
            <input type="checkbox" name="sub" id="sub" /><label for="sub"
              >I want to subscribe to the occasional insightful materials from
              GrowthOps. (optional)</label
            >
          </div>
          <div class="checkbox-data">
            <input
              type="checkbox"
              name="pnc"
              id="pnc"
              v-model="form.pnc"
              required
            /><label for="pnc"
              >* I have read and agree to the website's privacy policy.</label
            >
          </div>
        </div>
        <div class="reminder">
          <p>(* is a required field)</p>
        </div>
        <div
          v-if="msg"
          class="alert alert-success alert-dismissible fade show my-4"
          role="alert"
        >
          {{ msg }}
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="form-data">
          <div>
            <button class="submit">
              <span v-if="!isLoading">Submit</span>
              <span v-else>Loading...</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="bg-vector">
    <img src="../assets/images/contact-vector1.svg" alt="bg1" />
  </div>
  <div class="bg-vector2">
    <img src="../assets/images/contact-vector2.svg" alt="bg1" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Form",
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        wantTo: "client",
        review: "",
        sub: false,
        pnc: false,
      },
      msg: "",
      isLoading: false,
    };
  },
  methods: {
    onSubmit: function (event) {
      this.isLoading = true;
      axios
        .post(
          "https://run.mocky.io/v3/59a75f97-b9da-4ba8-8e3e-22f4b343e95f",
          this.form
        )
        .then((res) => {
          this.msg = res.data.message;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 50px 0;
}

.bg-vector {
  position: absolute;
  left: 0;
  bottom: -100px;
  z-index: 98;
}

.bg-vector2 {
  position: absolute;
  right: 0;
  top: -100px;
  z-index: 98;
}
.wrapper h1 {
  font-size: 96px;
  font-weight: 800;
  line-height: 88px;
  letter-spacing: -0.02em;
  text-align: left;
  text-transform: uppercase;
}

.wrapper .subs {
  width: 580px;
  margin-top: 30px;
}

.wrapper .subs h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: -0.01em;
  text-align: left;
  margin: 0;
}

.forms {
  margin: 80px 0;
  width: 70%;
  z-index: 99;
  position: relative;
}

.forms p {
  margin-bottom: 10px;
}

.forms .form-data {
  margin-bottom: 30px;
}

.forms .name {
  width: 50%;
  padding-right: 30px;
}

.forms .name input {
  width: 100%;
}
.forms .phone-and-email {
  display: flex;
  width: 100%;
}

.forms .phone-and-email .phone {
  padding-right: 30px;
}

.forms .phone-and-email .phone,
.forms .phone-and-email .email {
  width: 100%;
}

.forms .radio-button-wrapper,
.forms .checkbox-data {
  display: flex;
  align-items: flex-start;
}

.forms .radio-button-wrapper .radio-button {
  margin-right: 40px;
  display: flex;
}

.forms .radio-button-wrapper .radio-button label {
  white-space: nowrap;
  margin: 0 20px 0 0;
}

.forms .checkbox-data input[type="checkbox"] {
  margin-top: 5px;
}

.forms input {
  width: 100%;
  height: 52px;
  border-radius: 12px;
  border: 1px solid #f5f5f53d;
  background: linear-gradient(0deg, #0e1015, #0e1015),
    linear-gradient(0deg, rgba(245, 245, 245, 0.24), rgba(245, 245, 245, 0.24));
  padding: 10px 20px;
}

.forms textarea {
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #f5f5f53d;
  background: linear-gradient(0deg, #0e1015, #0e1015),
    linear-gradient(0deg, rgba(245, 245, 245, 0.24), rgba(245, 245, 245, 0.24));
}

.forms input[type="radio"],
.forms input[type="checkbox"] {
  width: auto;
  height: auto;
  margin-right: 10px;
}

.forms .alert-success {
  background-color: #07ddda;
  font-weight: 600;
}

.forms .submit {
  width: fit-content;
  padding: 16px 40px;
  border-radius: 48px;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 0px 16px 0px #ff336680;
  background: #33ff85;
  font-size: 18px;
  font-weight: 800;
  line-height: 22px;
}

.reminder p {
  font-style: italic;
  margin-bottom: 20px;
  font-size: 12px;
}

@media (max-width: 769px) {
  .wrapper h1 {
    font-size: 48px;
    font-weight: 800;
    line-height: 48px;
  }
  .wrapper .subs {
    width: 100%;
  }

  .bg-vector,
  .bg-vector2 {
    display: none;
  }

  .wrapper .subs h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }
  .forms {
    width: 100%;
    margin: 30px 0;
  }
  .forms .name {
    width: 100%;
    padding: 0;
  }
  .forms .phone-and-email {
    flex-wrap: wrap;
  }
  .forms .phone-and-email .phone {
    margin-bottom: 30px;
    padding: 0;
  }

  .forms .radio-button-wrapper {
    flex-direction: column;
  }

  .forms .radio-button-wrapper .radio-button {
    width: 100%;
  }

  .forms .checkbox-data {
    display: flex;
    align-items: flex-start;
  }

  .forms .submit {
    display: flex;
    justify-content: center;
  }
}
</style>
