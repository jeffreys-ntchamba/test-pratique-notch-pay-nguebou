<template>
  <div class="payment-page">
    <PaymentForm />
    <PaymentStatus v-if="statusMessage" :message="statusMessage" :isSuccess="isSuccess" />
  </div>
</template>

<script>
import { ref } from 'vue';
import PaymentForm from '../components/PaymentForm.vue';
import PaymentStatus from '../components/PaymentStatus.vue';

export default {
  components: {
    PaymentForm,
    PaymentStatus,
  },
  setup() {
    const statusMessage = ref('');
    const isSuccess = ref(false);

    const updateStatus = (message, success) => {
      statusMessage.value = message;
      isSuccess.value = success;
    };

    return {
      statusMessage,
      isSuccess,
      updateStatus,
    };
  },
};
</script>
