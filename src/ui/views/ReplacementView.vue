<script setup>
import { ref } from 'vue';
import { ScriptService } from '../../application/script/ScriptService';

const input = ref('');
const output = ref('');
const replacements = ref([
  { from: 'yo te enseño', to: 'te voy a enseñar' },
  { from: 'producto', to: 'solución' }
]); // Default examples
const service = new ScriptService();

const addReplacement = () => {
  replacements.value.push({ from: '', to: '' });
};

const process = () => {
  let text = input.value;
  replacements.value.forEach(rep => {
    if (rep.from) {
      const regex = new RegExp(rep.from, 'gi');
      text = text.replace(regex, rep.to);
    }
  });
  output.value = text;
};
</script>

<template>
  <div class="container view-container">
    <div class="header-section">
      <h2>Reemplazo Inteligente</h2>
      <p>Adapta tu guion cambiando palabras clave automáticamente.</p>
    </div>

    <div class="editor-grid">
      <div class="input-area">
        <label>Texto Original</label>
        <textarea v-model="input" placeholder="Pega tu texto aquí..."></textarea>
      </div>

      <div class="replacements-area">
        <label>Reglas de Reemplazo</label>
        <div v-for="(rep, index) in replacements" :key="index" class="replacement-row">
          <input v-model="rep.from" placeholder="Buscar..." />
          <span>→</span>
          <input v-model="rep.to" placeholder="Reemplazar con..." />
        </div>
        <button class="btn secondary small" @click="addReplacement">+ Añadir Regla</button>
      </div>

      <div class="actions">
        <button class="btn" @click="process">Aplicar Cambios 🔄</button>
      </div>

      <div class="output-area">
        <label>Resultado</label>
        <textarea v-model="output" readonly></textarea>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view-container { max-width: 1000px; }
.header-section { text-align: center; margin-bottom: 40px; }
h2 { font-size: 2rem; margin-bottom: 10px; }
p { color: var(--text-muted); }
.editor-grid { display: flex; flex-direction: column; gap: 20px; }
.input-area, .output-area { display: flex; flex-direction: column; gap: 10px; }
label { font-weight: 600; color: var(--text-muted); font-size: 0.9rem; }
.actions { display: flex; justify-content: center; }

.replacements-area {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--surface-color);
  padding: 15px;
  border-radius: 8px;
}

.replacement-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

input {
  flex: 1;
  padding: 8px;
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  border-radius: 4px;
}

.secondary {
  background-color: transparent;
  border: 1px solid var(--border-color);
  align-self: flex-start;
}
.small { padding: 5px 10px; font-size: 0.8rem; }
</style>
