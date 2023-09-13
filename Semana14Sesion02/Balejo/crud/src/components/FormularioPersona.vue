<template>
  <div id="formulario-persona">
    <form @submit.prevent="enviarFormulario">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>Codigo</label>
              <input
                v-model="persona.codigo"
                type="text"
                class="form-control"
                maxlength="8"
                :class="{ 'is-invalid': procesando && codigoInvalido }"
                @focus="resetEstado"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Nombre</label>
              <input
                ref="nombre"
                v-model="persona.nombre"
                type="text"
                class="form-control"
                pattern="^[A-Za-z\s'-]+$"
                :class="{ 'is-invalid': procesando && nombreInvalido }"
                @focus="resetEstado"
                @keypress="resetEstado"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Apellido Paterno</label>
              <input
                v-model="persona.apellidoP"
                type="text"
                class="form-control"
                pattern="^[A-Za-z\s'-]+$"
                :class="{ 'is-invalid': procesando && apellidoPInvalido }"
                @focus="resetEstado"
              />
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-group">
              <label>Apellido Materno</label>
              <input
                v-model="persona.apellidoM"
                type="text"
                class="form-control"
                pattern="^[A-Za-z\s'-]+$"
                :class="{ 'is-invalid': procesando && apellidoMInvalido }"
                @focus="resetEstado"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Sexo</label>
              <input
                v-model="persona.sexo"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': procesando && sexoInvalido }"
                @focus="resetEstado"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Celular</label>
              <input
                v-model="persona.cel"
                type="text"
                class="form-control"
                maxlength="9"
                pattern="^9[1-9]\d{7}$"
                :class="{ 'is-invalid': procesando && celInvalido }"
                @focus="resetEstado"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <button class="btn btn-primary">Añadir persona</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div
              v-if="error && procesando"
              class="alert alert-danger"
              role="alert"
            >
              Debes rellenar todos los campos!
            </div>
            <div v-if="correcto" class="alert alert-success" role="alert">
              La persona ha sido agregada correctamente!
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "formulario-persona",
  data() {
    return {
      procesando: false,
      correcto: false,
      error: false,
      persona: {
        codigo: "",
        nombre: "",
        apellidoP: "",
        apellidoM: "",
        sexo: "",
        cel: "",
      },
    };
  },
  methods: {
    enviarFormulario() {
      this.procesando = true;
      this.resetEstado();

      // Comprobamos la presencia de errores
      if (
        this.codigoInvalido ||
        this.nombreInvalido ||
        this.apellidoPInvalido ||
        this.apellidoMInvalido ||
        this.sexoInvalido ||
        this.celInvalido
      ) {
        this.error = true;
        return;
      }

      this.$emit("add-persona", this.persona);

      this.error = false;
      this.correcto = true;
      this.procesando = false;

      // Restablecemos el valor de la variables
      this.persona = {
        codigo: "",
        nombre: "",
        apellidoP: "",
        apellidoM: "",
        sexo: "",
        cel: "",
      };
    },
    resetEstado() {
      this.correcto = false;
      this.error = false;
    },
  },

  computed: {
    codigoInvalido() {
      return this.persona.codigo.length < 1;
    },
    nombreInvalido() {
      return this.persona.nombre.length < 1;
    },
    apellidoPInvalido() {
      return this.persona.apellidoP.length < 1;
    },
    apellidoMInvalido() {
      return this.persona.apellidoM.length < 1;
    },
    sexoInvalido() {
      return this.persona.sexo.length < 1;
    },
    celInvalido() {
      return this.persona.cel.length < 1;
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>
