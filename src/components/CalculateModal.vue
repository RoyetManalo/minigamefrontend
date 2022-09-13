<template>
  <div class="calculateModal">
    <div class="modal-content"><h2>Calculating....</h2></div>
  </div>
</template>

<script>
export default {
  name: "CalculateModal",
};
</script>

<style scoped>
.calculateModal {
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

@media (min-width: 480px) and (max-width: 768px) {
  .modal-content {
    width: 80%;
    font-size: 1.5rem;
    margin: 15% auto;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .modal-content {
    width: 70%;
    font-size: 1.5rem;
    margin: 10% auto;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .modal-content {
    width: 60%;
    font-size: 1.5rem;
    margin: 10% auto;
  }
}
@media (min-width: 1201px) {
  .modal-content {
    width: 40%;
    font-size: 2rem;
    margin: 10% auto;
  }
}
</style>
