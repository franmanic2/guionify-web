<script setup>
import { ref } from 'vue';
import { ScriptService } from '../../application/script/ScriptService';

const input = ref('');
const service = new ScriptService();

const downloadTxt = () => {
  service.setScript(input.value);
  const url = service.exportTxt();
  download(url, 'guion.txt');
};

const downloadSrt = () => {
  service.setScript(input.value);
  const url = service.exportSrt();
  download(url, 'subtitulos.srt');
};

const download = (url, filename) => {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};
</script>

<template>
  <div class="container view-container">
    <div class="header-section">
      <h2>Exportar Guion</h2>
      <p>Descarga tu trabajo en el formato que necesites.</p>
    </div>

    <div class="editor-grid">
      <div class="input-area">
        <label>Guion Final</label>
        <textarea v-model="input" placeholder="Pega tu guion final aquí..."></textarea>
      </div>

      <div class="export-options">
        <div class="card option-card" @click="downloadTxt">
          <div class="icon">📄</div>
          <h3>Texto Plano (.txt)</h3>
          <p>Para guardar o compartir simple.</p>
        </div>

        <div class="card option-card" @click="downloadSrt">
          <div class="icon">🎬</div>
          <h3>Subtítulos (.srt)</h3>
          <p>Listo para YouTube o Premiere.</p>
        </div>

        <!-- More options could be added here -->
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

.export-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.option-card {
  cursor: pointer;
  text-align: center;
  padding: 20px;
  transition: transform 0.2s, border-color 0.2s;
}

.option-card:hover {
  transform: translateY(-3px);
  border-color: var(--primary-color);
}

.icon { font-size: 2rem; margin-bottom: 10px; }
h3 { margin: 0 0 5px; font-size: 1.1rem; }
p { font-size: 0.9rem; color: var(--text-muted); margin: 0; }
</style>
