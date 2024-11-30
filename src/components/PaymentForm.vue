<template>
  <div class="payment-form-container">
    <div class="payment-form">
      <!-- Logo -->
      <img src="@/assets/logo.png" alt="Logo" class="form-logo" />

      <h1>Formulaire de Paiement</h1>
      <form @submit.prevent="handlePayment">
        <!-- Montant -->
        <div class="form-group">
          <label for="amount">Montant</label>
          <input
            type="number"
            id="amount"
            v-model="form.amount"
            @input="validateField('amount')"
            placeholder="Entrez le montant"
            class="input-field"
          />
          <p v-if="errors.amount" class="error">{{ errors.amount }}</p>
        </div>

        <!-- Méthode de Paiement -->
        <div class="form-group">
          <label for="paymentMethod">Méthode de Paiement</label>
          <select
            id="paymentMethod"
            v-model="form.paymentMethod"
            class="input-field"
            @change="validateField('paymentMethod')"
          >
            <option value="">Sélectionnez une méthode</option>
            <option value="mobile_money">Mobile Money</option>
            <option value="card">Carte Bancaire</option>
          </select>
          <p v-if="errors.paymentMethod" class="error">{{ errors.paymentMethod }}</p>
        </div>

        <!-- Nom -->
        <div class="form-group">
          <label for="name">Nom</label>
          <input
            type="text"
            id="name"
            v-model="form.customer.name"
            @input="validateField('name')"
            placeholder="Entrez votre nom"
            class="input-field"
          />
          <p v-if="errors.name" class="error">{{ errors.name }}</p>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.customer.email"
            @input="validateField('email')"
            placeholder="Entrez votre email"
            class="input-field"
          />
          <p v-if="errors.email" class="error">{{ errors.email }}</p>
        </div>

        <!-- Téléphone -->
        <div class="form-group">
          <label for="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            v-model="form.customer.phone"
            @input="validateField('phone')"
            placeholder="Entrez votre numéro de téléphone"
            class="input-field"
          />
          <p v-if="errors.phone" class="error">{{ errors.phone }}</p>
        </div>

        <!-- Bouton de soumission -->
        <button type="submit" :disabled="!isFormValid" class="btn">
          Payer
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { processPayment } from "../api/paymentApi";
import { validateField } from "../utils/validators";

export default {
  name: "PaymentForm",
  data() {
    return {
      form: {
        amount: "",
        paymentMethod: "",
        customer: {
          name: "",
          email: "",
          phone: "",
        },
      },
      errors: {
        amount: null,
        paymentMethod: null,
        name: null,
        email: null,
        phone: null,
      },
    };
  },
  computed: {
    isFormValid() {
      return (
        !Object.values(this.errors).some((error) => error !== null) &&
        this.form.amount &&
        this.form.paymentMethod &&
        this.form.customer.name &&
        this.form.customer.email &&
        this.form.customer.phone
      );
    },
  },
  methods: {
    validateField(field) {
      this.errors[field] = validateField(field, this.form);
    },
    async handlePayment() {
      try {
        const response = await processPayment(this.form);
        // Redirection vers la page de confirmation
        this.$router.push(`/confirmation/${response.transactionId}`);
      } catch (error) {
        alert("Échec du paiement. Veuillez réessayer.");
      }
    },
  },
};
</script>

<style scoped>
/* Conteneur principal */
.payment-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4f8, #e4ebf5);
  padding: 20px;
}

/* Formulaire */
.payment-form {
  max-width: 450px;
  width: 100%;
  padding: 30px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Logo */
.form-logo {
  max-width: 450px;
  margin: 0 auto 20px;
  display: block;
}

/* Titre */
h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333;
}

/* Groupes de champs */
.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px;
  text-align: left;
}

/* Champs d'entrée */
.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-field:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
  outline: none;
}

/* Bouton */
.btn {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  background: #218366;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.btn:hover:not(:disabled) {
  background: #1A654E;
  transform: translateY(-2px);
}

/* Messages d'erreur */
.error {
  color: red;
  font-size: 0.85rem;
  margin-top: 5px;
}
</style>
