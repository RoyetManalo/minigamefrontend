<template>
  <div class="login">
    <div class="error" v-show="showError">Error: {{ error }}</div>
    <div class="heading">
      <router-link to="/">
        <i class="fa-regular fa-circle-left"></i>
      </router-link>
      <h1 class="title">Register</h1>
      <div></div>
    </div>
    <form @submit.prevent="login">
      <input type="email" placeholder="email" required v-model="email" />
      <input
        type="password"
        placeholder="password"
        required
        v-model="password"
      />
      <input type="submit" title="Submit" class="submit" />
    </form>
  </div>
</template>

<script>
import userService from "../services/userService";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      showError: false,
    };
  },
  methods: {
    async login() {
      const credentials = {
        email: this.email,
        password: this.password,
      };

      const res = await userService.userLogin(credentials);

      const isError = Object.keys(res).includes("error");

      if (isError) {
        this.error = res.error;
        this.showError = true;
        this.removeError();
      } else {
        localStorage.setItem("user", JSON.stringify(res));
        this.$router.push("/dashboard");
      }
    },

    removeError() {
      setTimeout(() => {
        this.showError = false;
        this.error = "";
      }, 3000);
    },
  },

  created() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      this.$router.push("/dashboard");
    }
  },
};
</script>

<style scoped>
.login {
  width: 85%;
  margin: auto;
  margin-top: 8rem;
}
.heading {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.heading h1,
i {
  flex: 1;
}

i {
  font-size: 3rem;
  color: rgb(37, 141, 74);
}
.error {
  background: red;
  color: #fff;
  padding: 1rem;
  width: 300px;
  margin: auto;
  border-radius: 10px;
}

.title {
  color: rgb(37, 141, 74);
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
}

input {
  padding: 1rem;
  margin-bottom: 1.2rem;
  border: 1px solid rgb(37, 141, 74);
  width: 100%;
  border-radius: 10px;
}

.submit {
  padding: 1rem;
  width: 100%;
  border: 1px solid rgb(37, 141, 74);
  border-radius: 10px;
  color: #fff;
  background: rgb(37, 141, 74);
}

/* For Iphone SE */
@media (max-height: 667px) {
  .login {
    margin-top: 6rem;
  }
}

@media (min-width: 480px) {
  .title {
    font-size: 3rem;
  }
  input {
    font-size: 1.5rem;
  }
}

@media (min-width: 768px) {
  .login {
    width: 80%;
  }
  .title {
    font-size: 3rem;
  }

  input {
    font-size: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .login {
    width: 60%;
  }
  .title {
    font-size: 3rem;
  }
  form {
    width: 100%;
  }
  input {
    font-size: 1.5rem;
  }
}

@media (min-width: 1200px) {
  .login {
    width: 40%;
  }
  .title {
    font-size: 3rem;
  }
  form {
    width: 100%;
  }
  input {
    font-size: 1.5rem;
  }
}
</style>
