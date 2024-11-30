import { createRouter, createWebHistory } from "vue-router";
import PaymentForm from "../components/PaymentForm.vue";
import PaymentConfirmation from "../components/PaymentConfirmation.vue";

const routes = [
  {
    path: "/",
    name: "PaymentForm",
    component: PaymentForm,
  },
  {
    path: "/confirmation/:transactionId",
    name: "PaymentConfirmation",
    component: PaymentConfirmation,
    props: true, // Permet de passer l'ID comme prop
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
