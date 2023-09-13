<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Personas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <formulario-persona @add-persona="agregarPersona" />
        <tabla-personas :personas="personas" @delete-persona="eliminarPersona" @actualizar-persona="actualizarPersona" />
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TablaPersonas from '@/components/TablaPersonas.vue'
import FormularioPersona from '@/components/FormularioPersona.vue'

export default {
  name: 'App',
  components: {
    TablaPersonas,
    FormularioPersona
  },
  data() {
    return {
      personas: [
        {
          
          id: 1,
          codigo: '17200234',
          nombre: 'Jon',
          apellidoP: 'Nieve',
          apellidoM:'Casas',
          sexo: 'Masculino',
          cel: '999135915',
        },
        {
          id: 2,
          codigo: '17200232',
          nombre: 'Tyrion',
          apellidoP: 'Lannister',
          apellidoM:'Torres',  
          sexo: 'Masculino',
          cel: '999135915',
        },
        {
          id: 3,
          codigo: '17200264',
          nombre: 'Daenerys',
          apellidoP: 'Targaryen',
          apellidoM:'Suarez',
          sexo: 'Masculino',
          cel: '999135915'

        }
        
      ],
    }
  },
  methods: {
    agregarPersona(persona) {
      let id = 0;
      if (this.personas.length > 0) {
        id = this.personas[this.personas.length - 1].id + 1;
      }
      this.personas = [...this.personas, { ...persona, id }];
    },
    eliminarPersona(id) {
      this.personas = this.personas.filter(
        persona => persona.id !== id
      );
    },
    actualizarPersona(id, personaActualizada) {
      this.personas = this.personas.map(persona =>
        persona.id === id ? personaActualizada : persona
      )
    }
  },
}
</script>

<style>
button {
  background: #009435;
  border: 1px solid #009435;
}
</style>
