<template>
  <div>
    <Header />
    <div class="leaderboardsContainer">
      <h1 class="title">Leaderboards</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody ref="tbody">
          <tr v-for="user in leaderBoards" :key="user._id">
            <td>{{ user.username }}</td>
            <td>{{ user.points }}</td>
          </tr>
        </tbody>
      </table>

      <router-link to="/dashboard">
        <button class="back">Back</button></router-link
      >
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import userService from "../services/userService";
export default {
  name: "Leaderboards",
  components: {
    Header,
  },
  data() {
    return {
      leaderBoards: [],
    };
  },

  async created() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      this.$router.push("/");
    }

    if (user) {
      const leaderboards = await userService.getLeaderboards();

      this.leaderBoards = leaderboards;
    }
  },
};
</script>

<style scoped>
.leaderboardsContainer {
  padding: 1rem;
  padding-top: 0;
}

.title {
  color: #000;
}
table {
  border-collapse: collapse;
  margin: 25px auto;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

table thead tr {
  background-color: rgb(37, 141, 74);
  color: #ffffff;
  text-align: left;
}

table tbody tr {
  text-align: left;
}

table th,
table td {
  padding: 12px 15px;
}

table tbody tr {
  border-bottom: 1px solid rgb(37, 141, 74);
}

table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

table tbody tr:last-of-type {
  border-bottom: 2px solid rgb(37, 141, 74);
}

button {
  background: rgb(37, 141, 74);
  color: #fff;
  width: 100px;
  border-radius: 10px;
  padding: 0.5rem 1rem;
}

@media (min-width: 480px) and (max-width: 768px) {
  .title {
    font-size: 3rem;
  }
  table {
    width: 90%;
    font-size: 1.2rem;
  }
  button {
    width: 120px;
    font-size: 1.2rem;
    padding: 1rem;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .title {
    font-size: 3rem;
  }
  table {
    width: 80%;
    font-size: 1.2rem;
  }
  button {
    width: 120px;
    font-size: 1.2rem;
    padding: 1rem;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .title {
    font-size: 3rem;
  }
  table {
    width: 70%;
    font-size: 1.2rem;
  }
  button {
    width: 120px;
    font-size: 1.2rem;
    padding: 1rem;
  }
}
@media (min-width: 1201px) {
  .title {
    font-size: 3rem;
  }
  table {
    width: 50%;
    font-size: 1.2rem;
  }
  button {
    width: 120px;
    font-size: 1.2rem;
    padding: 1rem;
  }
}
</style>
