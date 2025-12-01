<script setup>
import { ref } from 'vue';
import { ScriptService } from '../../application/script/ScriptService';

const input = ref('');
const output = ref('');
const service = new ScriptService();

const process = () => {
  service.setScript(input.value);
  output.value = service.cleanScript();
};

const copy = () => {
  navigator.clipboard.writeText(output.value);
  alert('Copiado al portapapeles');
};
</script>

<template>
  <div class="container view-container">
    <div class="header-section">
      <h2>Limpieza Automática</h2>
      <p>Elimina muletillas, repeticiones y formatea tu texto.</p>
    </div>

    <div class="editor-grid">
      <div class="input-area">
        <label>Texto Original</label>
        <textarea v-model="input" placeholder="Pega tu borrador aquí..."></textarea>
      </div>

      <div class="actions">
        <button class="btn" @click="process">Limpiar Texto ✨</button>
      </div>

      <div class="output-area">
        <label>Resultado</label>
        <textarea v-model="output" readonly placeholder="El resultado aparecerá aquí..."></textarea>
        <button v-if="output" class="btn secondary" @click="copy">Copiar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view-container {
  max-width: 1000px;
}

.header-section {
  text-align: center;
  margin-bottom: 40px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  color: var(--text-muted);
}

.editor-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-area, .output-area {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: 600;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.actions {
  display: flex;
  justify-content: center;
}

.secondary {
  background-color: transparent;
  border: 1px solid var(--border-color);
  margin-top: 10px;
  align-self: flex-end;
}

.secondary:hover {
  border-color: var(--primary-color);
  background-color: rgba(124, 58, 237, 0.1);
}
</style>
