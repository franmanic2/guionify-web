<script setup>
import { ref } from 'vue';
import { ScriptService } from '../../application/script/ScriptService';

const input = ref('');
const segments = ref([]);
const service = new ScriptService();

const process = () => {
  service.setScript(input.value);
  segments.value = service.generateSubtitles();
};

const formatTime = (seconds) => {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}:${sec.toString().padStart(2, '0')}`;
};
</script>

<template>
  <div class="container view-container">
    <div class="header-section">
      <h2>Generador de Subtítulos</h2>
      <p>Segmenta tu texto en bloques cronometrados.</p>
    </div>

    <div class="editor-grid">
      <div class="input-area">
        <label>Texto del Guion</label>
        <textarea v-model="input" placeholder="Pega tu guion aquí..."></textarea>
      </div>

      <div class="actions">
        <button class="btn" @click="process">Generar Segmentos 📝</button>
      </div>

      <div class="output-area" v-if="segments.length">
        <label>Segmentos</label>
        <div class="segments-list">
          <div v-for="(seg, index) in segments" :key="index" class="segment-item">
            <span class="time">[{{ formatTime(seg.start) }} - {{ formatTime(seg.end) }}]</span>
            <span class="text">{{ seg.text }}</span>
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

.segments-list {
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 15px;
  max-height: 400px;
  overflow-y: auto;
}

.segment-item {
  display: flex;
  gap: 15px;
  padding: 10px;
  border-bottom: 1px solid var(--border-color);
}

.segment-item:last-child { border-bottom: none; }

.time {
  color: var(--primary-color);
  font-family: monospace;
  font-weight: 600;
  white-space: nowrap;
}
</style>
