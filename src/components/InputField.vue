<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      class="input-field"
      @input="onInput"
    />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    label: String,
    type: {
      type: String,
      default: "text",
    },
    id: String,
    placeholder: String,
    modelValue: [String, Number],
    error: String,
  },
  emits: ["update:modelValue"],
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped>
/* Conteneur des champs */
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 5px;
}

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

/* Message d'erreur */
.error {
  color: red;
  font-size: 0.85rem;
  margin-top: 5px;
}
</style>
