<template>
  <div>
    <h2>Formulario</h2>
    <form @submit.prevent="onSubmit" novalidate>
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input
          type="text"
          id="nombre"
          class="form-control"
          v-model="form.nombre"
          @input="validateNombre"
        />
        <div v-if="errors.nombre" class="text-danger">{{ errors.nombre }}</div>
      </div>

      <div class="mb-3">
        <label for="edad" class="form-label">Edad</label>
        <input
          type="number"
          id="edad"
          class="form-control"
          v-model.number="form.edad"
          @input="validateEdad"
        />
        <div v-if="errors.edad" class="text-danger">{{ errors.edad }}</div>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          v-model="form.email"
          @input="validateEmail"
        />
        <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
      </div>

      <button type="submit" class="btn btn-primary" :disabled="!isFormValid">
        Agregar
      </button>
    </form>

    <hr />

    <h3>Datos ingresados</h3>
    <table class="table table-striped" v-if="usuarios.length">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(usuario, index) in usuarios" :key="index">
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.edad }}</td>
          <td>{{ usuario.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nombre: '',
        edad: null,
        email: ''
      },
      errors: {},
      usuarios: []
    }
  },
  computed: {
    isFormValid() {
      return (
        !this.errors.nombre &&
        !this.errors.edad &&
        !this.errors.email &&
        this.form.nombre &&
        this.form.edad !== null &&
        this.form.email
      )
    }
  },
  methods: {
    validateNombre() {
      const nombre = this.form.nombre.trim()
      if (!nombre) {
        this.errors.nombre = 'El nombre es requerido.'
      } else if (nombre.length < 5 || nombre.length > 15) {
        this.errors.nombre = 'El nombre debe tener entre 5 y 15 caracteres.'
      } else {
        this.errors.nombre = null
      }
    },
    validateEdad() {
      const edad = this.form.edad
      if (edad === null || edad === '') {
        this.errors.edad = 'La edad es requerida.'
      } else if (edad < 18 || edad > 120) {
        this.errors.edad = 'La edad debe estar entre 18 y 120 años.'
      } else {
        this.errors.edad = null
      }
    },
    validateEmail() {
      const email = this.form.email.trim()
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!email) {
        this.errors.email = 'El email es requerido.'
      } else if (!emailRegex.test(email)) {
        this.errors.email = 'El email no es válido.'
      } else {
        this.errors.email = null
      }
    },
    onSubmit() {
      this.validateNombre()
      this.validateEdad()
      this.validateEmail()

      if (this.isFormValid) {
        this.usuarios.push({ ...this.form })
       
        this.form.nombre = ''
        this.form.edad = null
        this.form.email = ''
      }
    }
  }
}
</script>
