<template>
  <div class="home">
    <div class="title">
      Monster <br />
      Attack
    </div>
    <div class="buttonDiv">
      <router-link to="/register"> <button>Register</button></router-link>

      <router-link to="/login"> <button>Login</button> </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    register() {},
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
.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10rem;
  height: 100%;
  padding: 1rem;
}
.title {
  font-size: 4.5rem;
  text-align: center;
  font-family: Monster;
  color: rgb(37, 141, 74);
}
.buttonDiv {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5rem;
}

button {
  padding: 1rem 1.5rem;
  width: 150px;
  font-size: 1.2rem;
  background: rgb(37, 141, 74);
  color: #fff;
  border-radius: 10px;
}
/* For Iphone SE */
@media (max-height: 667px) {
  .home {
    margin-top: 6rem;
  }
}

/* for nest hub */
@media (max-height: 600px) {
  .home {
    margin-top: 2rem;
  }
  .title {
    font-size: 5rem;
  }
}

@media (min-width: 480px) {
  .title {
    font-size: 6rem;
  }

  /* button {
    width: 0px;
    padding: 1.5rem;
    font-size: 1.5rem;
  } */
}

/* Table and bigger device */
@media (min-width: 768px) {
  .title {
    font-size: 8rem;
  }

  button {
    width: 200px;
    padding: 1.5rem;
    font-size: 1.5rem;
  }
}
</style>
