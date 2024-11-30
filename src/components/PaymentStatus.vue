<template>
  <div v-if="status" class="payment-status">
    <p :class="status.status">{{ status.message }}</p>
  </div>
</template>

<script>
export default {
  name: "PaymentStatus",
  props: {
    status: Object,
  },
};
</script>

<style scoped>
.payment-status {
  margin-top: 20px;
  text-align: center;
}

.payment-status .success {
  color: green;
}

.payment-status .error {
  color: red;
}
</style>
