<script setup>
import { ref } from 'vue';
import { ScriptService } from '../../application/script/ScriptService';

const input = ref('');
const hooks = ref([]);
const tone = ref('dramatic');
const service = new ScriptService();

const process = () => {
  service.setScript(input.value);
  hooks.value = service.generateHooks(tone.value);
};
</script>

<template>
  <div class="container view-container">
    <div class="header-section">
      <h2>Generador de Hooks</h2>
      <p>Crea ganchos virales para captar la atención en los primeros segundos.</p>
    </div>

    <div class="editor-grid">
      <div class="input-area">
        <label>Tema o Texto Base</label>
        <textarea v-model="input" placeholder="¿De qué trata tu video?"></textarea>
      </div>

      <div class="controls">
        <label>Tono:</label>
        <select v-model="tone">
          <option value="dramatic">Dramático</option>
          <option value="humor">Humor</option>
          <option value="authority">Autoridad</option>
          <option value="mystery">Misterio</option>
        </select>
      </div>

      <div class="actions">
        <button class="btn" @click="process">Generar Hooks 🎣</button>
      </div>

      <div class="output-area" v-if="hooks.length">
        <label>Opciones Generadas</label>
        <div class="hooks-list">
          <div v-for="(hook, index) in hooks" :key="index" class="hook-item">
            {{ hook }}
          </div>
        </div>
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
.input-area { display: flex; flex-direction: column; gap: 10px; }
label { font-weight: 600; color: var(--text-muted); font-size: 0.9rem; }
.actions { display: flex; justify-content: center; }

.controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

select {
  background-color: var(--surface-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 8px;
  border-radius: 6px;
}

.hooks-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hook-item {
  background-color: var(--surface-color);
  padding: 15px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}
</style>
