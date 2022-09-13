<template>
  <div class="register">
    <div class="error" v-show="showError">Error: {{ error }}</div>
    <div class="heading">
      <router-link to="/">
        <i class="fa-regular fa-circle-left"></i>
      </router-link>
      <h1 class="title">Register</h1>
      <div></div>
    </div>
    <form @submit.prevent="register">
      <input type="email" placeholder="Email" required v-model="email" />
      <input type="text" placeholder="Username" required v-model="username" />
      <input
        type="password"
        placeholder="Password"
        required
        v-model="password"
      />
      <input
        type="password"
        placeholder="Re-enter password"
        required
        v-model="password2"
      />
      <input type="submit" title="Submit" class="submit" />
    </form>
  </div>
</template>

<script>
import userService from "../services/userService";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      password2: "",
      error: "",
      showError: false,
    };
  },
  methods: {
    async register() {
      if (this.password === this.password2) {
        const user = {
          email: this.email,
          username: this.username,
          password: this.password,
        };
        const newUser = await userService.register(user);
        console.log(newUser);
        this.$router.push("/dashboard");
      } else {
        this.showError = true;
        this.error = "Password does not match";
        this.removeError();
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
    const user = localStorage.getItem("user");
    if (user) {
      this.$router.push("/dashboard");
    }
  },
};
</script>

<style scoped>
.register {
  /* background: #000; */
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
  border-radius: 10px;
  border: 1px solid rgb(37, 141, 74);
  width: 100%;
}

.submit {
  width: 100%;
  color: #fff;
  background: rgb(37, 141, 74);
}

/* For Iphone SE */
@media (max-height: 667px) {
  .register {
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
  .register {
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
  .register {
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
  .register {
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
