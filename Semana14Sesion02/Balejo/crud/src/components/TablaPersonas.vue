<template>
    <div id="tabla-personas">
        <div v-if="!personas.length" class="alert alert-info" role="alert">
            No se han agregado personas
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Sexo</th>
                    <th>Celular</th>

                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="persona in personas" :key="persona.id">
                    <td v-if="editando === persona.id">
                        <input type="text" class="form-control" v-model="persona.codigo" />
                    </td>
                    <td v-else>
                        {{ persona.codigo }}
                    </td>
                    <td v-if="editando === persona.id">
                        <input type="text" class="form-control" v-model="persona.nombre" />
                    </td>
                    <td v-else>
                        {{ persona.nombre }}
                    </td>
                    <td v-if="editando === persona.id">
                        <input type="text" class="form-control" v-model="persona.apellidoP" />
                    </td>

                    <td v-else>
                        {{ persona.apellidoP }}
                    </td>
                    <td v-if="editando === persona.id">
                        <input type="text" class="form-control" v-model="persona.apellidoM" />
                    </td>
                    <td v-else>
                        {{ persona.apellidoM }}
                    </td>
                    <td v-if="editando === persona.id">
                        <input type="text" class="form-control" v-model="persona.sexo" />
                    </td>
                    <td v-else>
                        {{ persona.sexo }}
                    </td>
                    <td v-if="editando === persona.id">
                        <input type="text" class="form-control" v-model="persona.cel" />
                    </td>
                    <td v-else>
                        {{ persona.cel }}
                    </td>
                    <td v-if="editando === persona.id">
                        <button class="btn btn-success" @click="guardarPersona(persona)">💾 Guardar</button>
                        <button class="btn btn-secondary ml-2" @click="cancelarEdicion(persona)">❌ Cancelar</button>
                    </td>
                    <td v-else>
                        <button class="btn btn-info" @click="editarPersona(persona)">✏️ Editar</button>
                        <button class="btn btn-danger ml-2" @click="$emit('delete-persona', persona.id)">🗑️
                            Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
    
<script>
export default {
    name: 'tabla-personas',
    props: {
        personas: Array,
    },
    data() {
        return {
            editando: null,
        }
    },
    methods: {
        editarPersona(persona) {
            this.personaEditada = Object.assign({}, persona);
            this.editando = persona.id;
        },
        guardarPersona(persona) {
            if (!persona.codigo.length || !persona.nombre.length || !persona.apellidoP.length || !persona.apellidoM.length || !persona.sexo.length || !persona.cel.length) {
                return;
            }
            this.$emit('actualizar-persona', persona.id, persona);
            this.editando = null;
        },
        cancelarEdicion(persona) {
            Object.assign(persona, this.personaEditada);
            this.editando = null;
        }
    }
}
</script>
    
<style scoped></style>