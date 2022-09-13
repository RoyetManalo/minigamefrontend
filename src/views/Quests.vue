<template>
  <div>
    <Header :result="result" />
    <h1 class="title">Quests</h1>
    <i class="fas fa-sword"></i>
    <div class="questsDiv">
      <div
        class="quest"
        v-for="(quest, index) in quests"
        :key="quest._id"
        :id="quest._id"
      >
        <h2 class="attackName">
          {{ quest.action }}
        </h2>
        <button
          @click="attack(index)"
          :class="quest.isDisabled ? 'disabled' : 'active'"
          :disabled="quest.isDisabled"
        >
          <i class="fa-solid fa-khanda"></i>
          Attack
          <span
            :class="quest.isDisabled ? 'cdDisabled' : 'cdActive'"
            v-show="quest.isDisabled"
            >{{ quest.cd }}</span
          >
        </button>
      </div>
    </div>
    <router-link to="/dashboard">
      <button class="back">Back</button></router-link
    >
  </div>

  <CalculateModal v-show="showCalculate" />
  <ResultModal
    v-show="showResult"
    @close-result-modal="closeResultModal"
    :result="result"
  />
</template>

<script>
import Header from "../components/Header.vue";
import questService from "../services/questsService";
import CalculateModal from "../components/CalculateModal.vue";
import ResultModal from "../components/ResultModal.vue";

export default {
  name: "Quests",
  components: {
    Header,
    CalculateModal,
    ResultModal,
  },
  data() {
    return {
      quests: [],
      showCalculate: false,
      showResult: false,
      result: {},
      interval: null,
    };
  },

  methods: {
    closeResultModal() {
      this.showResult = false;
    },

    async attack(index) {
      this.showCalculate = true;
      const user = JSON.parse(localStorage.getItem("user"));
      const monster = this.quests[index];

      const { _id } = user;
      const monsterID = monster._id;
      const attackDetails = {
        userID: _id,
        monsterID,
      };

      const res = await questService.attackMonster(attackDetails);
      this.result = res;

      // too fast
      // if (res) {
      //   this.showCalculate = false;
      //   this.showResult = true;
      // }

      // Wait for 2 secs for calculate to disappear cos server response is too quick
      setTimeout(() => {
        this.showCalculate = false;
        this.showResult = true;
      }, 2000);

      monster.isDisabled = true;

      const cooldown = monster.cd;

      runCooldown(cooldown);

      function runCooldown(cd) {
        let interval = setInterval(() => {
          cd--;
          monster.cd = cd;
          // console.log(cd);

          if (cd <= 0) {
            clearInterval(interval);
            // console.log("zero");
            monster.isDisabled = false;
            monster.cd = 30;
          }
        }, 1000);
      }
    },
  },

  async created() {
    const quests = await questService.getAllQuests();

    this.quests = quests;

    // add 2 properties to every attack object
    this.quests = quests.map((quest) => {
      return { ...quest, isDisabled: false, cd: 30 };
    });
  },
};
</script>

<style scoped>
.container {
  padding: 1rem;
}

button {
  background: rgb(220, 54, 54);
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
}

.quest {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.cooldown {
  color: #fff;
}

.cdDisabled {
  color: rgb(220, 54, 54);
}

.cdActive {
  color: #fff;
}

.disabled {
  background: #f4f4f4;
  border: 1px solid rgb(220, 54, 54);
  color: rgb(220, 54, 54);
}

.active {
  background: rgb(220, 54, 54);
  border: none;
  color: #fff;
}

.back {
  margin-top: 1rem;
  background: rgb(37, 141, 74);
  color: #fff;
  border: none;
  border-radius: 10px;
  width: 100px;
}

i {
  pointer-events: none;
}

@media (min-width: 480px) and (max-width: 768px) {
  .modal-content {
    width: 80%;
    font-size: 1.5rem;
    margin: 15% auto;
  }

  button {
    width: 200px;
    padding: 1rem;
    font-size: 1.2rem;
  }

  .quest h2 {
    font-size: 1.6rem;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .title {
    font-size: 2.5rem;
  }
  .modal-content {
    width: 70%;
    font-size: 1.5rem;
    margin: 10% auto;
  }

  button {
    width: 200px;
    padding: 1rem;
    font-size: 1.2rem;
  }
  .quest h2 {
    font-size: 1.6rem;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .title {
    font-size: 2.5rem;
  }
  .questsDiv {
    width: 80%;
    margin: auto;
  }
  button {
    width: 200px;
    padding: 1rem;
    font-size: 1.2rem;
  }
  .quest h2 {
    font-size: 1.6rem;
  }
}
@media (min-width: 1201px) {
  .title {
    font-size: 3rem;
  }
  .questsDiv {
    width: 60%;
    margin: auto;
  }

  button {
    width: 200px;
    padding: 1rem;
    font-size: 1.2rem;
  }
  .quest h2 {
    font-size: 2rem;
  }
}
</style>
