<template>
  <div>
    <h2>Usuarios desde mockapi.io</h2>
    <table class="table table-bordered" v-if="usuarios.length">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.numeroDeTelefono }}</td> </tr>
      </tbody>
    </table>

    <div v-else class="alert alert-info">Cargando usuarios...</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsuariosView', 
  data() {
    return {
      usuarios: [],
      mockApiUrl: 'https://68472f987dbda7ee7ab1bd19.mockapi.io/api/v1/usuarios' 
    }
  },
  async created() {
    try {
      const response = await axios.get(this.mockApiUrl)
      this.usuarios = response.data
    } catch (error) {
      console.error('Error al obtener usuarios:', error)
    
    }
  }
}
</script>
