<template>
  <div class="confirmation-page-container">
    <div class="confirmation-page">
      <!-- Logo -->
      <img src="@/assets/logo.png" alt="Logo" class="confirmation-logo" />

      <!-- Contenu -->
      <h1>Confirmation de Paiement</h1>
      <p>Votre paiement a été effectué avec succès.</p>
      <p v-if="transactionId" class="transaction-id">
        ID de transaction : <strong>{{ transactionId }}</strong>
      </p>
      <router-link to="/" class="btn">Retour à l'accueil</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentConfirmation",
  props: ["transactionId"],
};
</script>

<style scoped>
/* Conteneur principal */
.confirmation-page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4f8, #e4ebf5);
  padding: 20px;
}

/* Carte de confirmation */
.confirmation-page {
  max-width: 450px;
  width: 100%;
  padding: 30px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Logo */
.confirmation-logo {
  max-width: 450px;
  margin: 0 auto 20px;
  display: block;
}

/* Titre */
h1 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #218366;
}

/* Texte */
p {
  font-size: 1rem;
  margin-bottom: 15px;
  color: #555;
}

/* ID de transaction */
.transaction-id {
  margin-top: 10px;
  font-size: 1.1rem;
  color: #333;
}

/* Bouton */
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #218366;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn:hover {
  background: #1A654E;
  transform: translateY(-2px);
}
</style>
