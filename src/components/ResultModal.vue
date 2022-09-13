<template>
  <div class="resultModal">
    <div class="modal-content" v-if="result.result === 'Victory'">
      <h2 class="victory">Victory <i class="fa-regular fa-face-smile"></i></h2>
      <p class="text">
        You have defeated Monster{{ result.monster }} You have earned
        {{ result.reward }} points.
      </p>
      <button @click="closeResultModal">Return</button>
    </div>
    <div class="modal-content" v-else-if="result.result === 'Draw'">
      <h2 class="draw">Draw <i class="fa-regular fa-face-surprise"></i></h2>
      <p class="text">
        Your battle against Monster{{ result.monster }} is draw. You didn't
        earned any points
      </p>
      <button @click="closeResultModal">Return</button>
    </div>
    <div class="modal-content" v-else>
      <h2 class="defeat">Defeat <i class="fa-regular fa-face-frown"></i></h2>
      <p class="text">
        Your troops failed to defeat Monster{{ result.monster }}
      </p>
      <button @click="closeResultModal">Return</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultModal",
  props: {
    result: Object,
  },

  methods: {
    closeResultModal() {
      this.$emit("close-result-modal");
    },
  },

  emits: ["close-result-modal"],
};
</script>

<style scoped>
.resultModal {
  display: block;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  width: 80%;
  margin: 20% auto;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
}

.victory {
  color: rgb(37, 141, 74);
}

.defeat {
  color: rgb(220, 54, 54);
}

button {
  padding: 0.8rem 1rem;
  margin-top: 1rem;
  background: rgb(37, 141, 74);
  color: #fff;
  border-radius: 10px;
  width: 100px;
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
}
@media (min-width: 769px) and (max-width: 1024px) {
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
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .modal-content {
    width: 60%;
    font-size: 1.5rem;
    margin: 10% auto;
  }

  button {
    width: 200px;
    padding: 1rem;
    font-size: 1.2rem;
  }
}
@media (min-width: 1201px) {
  .modal-content {
    width: 40%;
    font-size: 2rem;
    margin: 10% auto;
  }

  button {
    width: 200px;
    padding: 1rem;
    font-size: 1.2rem;
  }
}
</style>
