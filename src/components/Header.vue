<template>
  <header>{{ username }}, {{ points }} points</header>
</template>

<script>
import userService from "../services/userService";
export default {
  name: "Header",
  props: {
    result: Object,
  },
  data() {
    return {
      username: "",
      points: "",
    };
  },
  watch: {
    result() {
      // wait for 2 secs to refetch
      setTimeout(async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const userDetail = await userService.getUserDetails(user.email);
        this.username = userDetail.username;
        this.points = userDetail.points;
        // console.log(this.result);
      }, 2000);
    },
  },
  async created() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const userDetail = await userService.getUserDetails(user.email);
      this.username = userDetail.username;
      this.points = userDetail.points;
    }
  },
};
</script>

<style scoped>
header {
  padding: 1rem;
  text-align: center;
  background: rgb(37, 141, 74);
  color: #fff;
  font-size: 1.5rem;
}

@media (min-width: 480px) {
  header {
    font-size: 2rem;
  }
}
</style>
