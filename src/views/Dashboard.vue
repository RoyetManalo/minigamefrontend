<template>
  <div>
    <Header />
    <div class="dashboardContainer">
      <h1 class="title">Dashboard</h1>
      <div class="buttonDiv">
        <router-link to="/quests"><button>Quests</button></router-link>
        <router-link to="/leaderboards"
          ><button>Leaderboards</button></router-link
        >
        <button @click="logout" class="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "Dashboard",
  components: {
    Header,
  },
  data() {
    return {
      username: "",
      points: 0,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$router.push("/");
    },
  },

  created() {
    const user = localStorage.getItem("user");
    if (!user) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.dashboardContainer {
  padding: 1rem;
}

.title {
  color: #000;
  font-size: 2.5rem;
}

.buttonDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
}

button {
  padding: 1rem 2rem;
  width: 200px;
  font-size: 1.5rem;
  border: 1px solid rgb(37, 141, 74);
  color: #fff;
  background: rgb(37, 141, 74);
  border-radius: 10px;
}

.logout {
  align-self: flex-end;
  padding: 0.5rem 1rem;
  width: 120px;
}

@media (min-width: 480px) and (max-width: 768px) {
  .title {
    font-size: 4rem;
  }
  button {
    min-width: 250px;
    padding: 1.5rem;
    font-size: 1.5rem;
  }
  .logout {
    align-self: center;
    margin-left: 10rem;
    margin-top: 2rem;
    padding: 1rem 1.5rem;
    width: 120px;
    font-size: 1.6rem;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .title {
    font-size: 4rem;
  }
  button {
    min-width: 250px;
    padding: 1.5rem;
    font-size: 1.5rem;
  }
  .logout {
    align-self: center;
    margin-left: 25rem;
    margin-top: 2rem;
    padding: 1rem 1.5rem;
    width: 120px;
    font-size: 1.6rem;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .title {
    font-size: 4rem;
  }
  button {
    min-width: 250px;
    padding: 1.5rem;
    font-size: 1.5rem;
  }
  .logout {
    align-self: center;
    margin-left: 25rem;
    margin-top: 2rem;
    padding: 1rem 1.5rem;
    width: 120px;
    font-size: 1.6rem;
  }
}
@media (min-width: 1201px) {
  .title {
    font-size: 4rem;
  }
  button {
    min-width: 250px;
    padding: 1.5rem;
    font-size: 1.5rem;
  }
  .logout {
    align-self: center;
    margin-left: 25rem;
    margin-top: 2rem;
    padding: 1rem 1.5rem;
    width: 120px;
    font-size: 1.6rem;
  }
}
</style>
