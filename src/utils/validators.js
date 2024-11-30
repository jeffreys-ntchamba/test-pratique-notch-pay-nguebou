export function validateField(field, form) {
    if (field === "amount" && (!form.amount || form.amount <= 0)) {
      return "Le montant doit être supérieur à 0.";
    }
    if (field === "paymentMethod" && !form.paymentMethod) {
      return "Veuillez sélectionner une méthode de paiement.";
    }
    if (field === "name" && !form.customer.name) {
      return "Le nom est requis.";
    }
    if (
      field === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.customer.email)
    ) {
      return "Adresse email invalide.";
    }
    if (field === "phone" && !form.customer.phone) {
      return "Le numéro de téléphone est requis.";
    }
    return null;
  }
  