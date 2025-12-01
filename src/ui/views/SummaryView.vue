<script setup>
import { ref } from 'vue';
import { ScriptService } from '../../application/script/ScriptService';

const input = ref('');
const output = ref('');
const service = new ScriptService();

const process = () => {
  service.setScript(input.value);
  output.value = service.generateSummary();
};
</script>

<template>
  <div class="container view-container">
    <div class="header-section">
      <h2>Resumen Ultrabreve</h2>
      <p>Condensa tu guion en 15-30 segundos.</p>
    </div>

    <div class="editor-grid">
      <div class="input-area">
        <label>Texto Largo</label>
        <textarea v-model="input" placeholder="Pega el texto completo..."></textarea>
      </div>

      <div class="actions">
        <button class="btn" @click="process">Resumir ⏱️</button>
      </div>

      <div class="output-area">
        <label>Resumen</label>
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
</style>
