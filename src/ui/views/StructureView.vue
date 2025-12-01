<script setup>
import { ref } from 'vue';
import { ScriptService } from '../../application/script/ScriptService';

const input = ref('');
const structure = ref(null);
const service = new ScriptService();

const process = () => {
  service.setScript(input.value);
  structure.value = service.generateStructure();
};
</script>

<template>
  <div class="container view-container">
    <div class="header-section">
      <h2>Estructura Narrativa</h2>
      <p>Organiza tus ideas en una historia coherente.</p>
    </div>

    <div class="editor-grid">
      <div class="input-area">
        <label>Ideas Sueltas</label>
        <textarea v-model="input" placeholder="Escribe todo lo que se te ocurra..."></textarea>
      </div>

      <div class="actions">
        <button class="btn" @click="process">Estructurar 📖</button>
      </div>

      <div class="output-area" v-if="structure">
        <div class="structure-block">
          <h3>Hook</h3>
          <p>{{ structure.hook }}</p>
        </div>
        <div class="structure-block">
          <h3>Contexto</h3>
          <p>{{ structure.context }}</p>
        </div>
        <div class="structure-block">
          <h3>Valor Principal</h3>
          <p>{{ structure.value }}</p>
        </div>
        <div class="structure-block">
          <h3>Cierre / CTA</h3>
          <p>{{ structure.cta }}</p>
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

.structure-block {
  background-color: var(--surface-color);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  border-left: 4px solid var(--primary-color);
}

.structure-block h3 {
  margin: 0 0 10px;
  color: var(--primary-color);
  font-size: 1.1rem;
}

.structure-block p {
  margin: 0;
  color: var(--text-color);
}
</style>
