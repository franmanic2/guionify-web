<script setup>
import { ref, computed, nextTick } from 'vue';

const input = ref('');
const isModeActive = ref(false);
const isScrolling = ref(false);
const speed = ref(2);
const fontSize = ref(40);
const scrollContainer = ref(null);
let animationFrame;

const start = async () => {
  isModeActive.value = true;
  isScrolling.value = true;
  await nextTick();
  animate();
};

const exit = () => {
  isModeActive.value = false;
  isScrolling.value = false;
  cancelAnimationFrame(animationFrame);
};

const animate = () => {
  if (!isModeActive.value || !scrollContainer.value) return;
  
  if (isScrolling.value) {
    scrollContainer.value.scrollTop += speed.value * 0.5;
    animationFrame = requestAnimationFrame(animate);
  }
};

const toggle = () => {
  isScrolling.value = !isScrolling.value;
  if (isScrolling.value) animate();
  else cancelAnimationFrame(animationFrame);
};
</script>

<template>
  <div class="container view-container">
    <div class="header-section" v-if="!isModeActive">
      <h2>Teleprompter</h2>
      <p>Lee tu guion en pantalla mientras grabas.</p>
    </div>

    <div class="editor-grid" v-if="!isModeActive">
      <div class="input-area">
        <label>Guion Final</label>
        <textarea v-model="input" placeholder="Pega tu guion listo para leer..."></textarea>
      </div>

      <div class="controls">
        <label>Velocidad: <input type="range" v-model="speed" min="1" max="10"></label>
        <label>Tamaño: <input type="range" v-model="fontSize" min="20" max="100"></label>
      </div>

      <div class="actions">
        <button class="btn" @click="start">Iniciar Teleprompter ▶️</button>
      </div>
    </div>

    <div v-else class="teleprompter-overlay">
      <div class="teleprompter-content" ref="scrollContainer" :style="{ fontSize: fontSize + 'px' }">
        <div class="padding-top"></div>
        <p>{{ input }}</p>
        <div class="padding-bottom"></div>
      </div>
      <div class="teleprompter-controls">
        <button class="btn" @click="exit">Salir</button>
        <button class="btn" @click="toggle">{{ isScrolling ? 'Pausa' : 'Continuar' }}</button>
      </div>
      <div class="marker"></div>
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
.controls { display: flex; gap: 20px; justify-content: center; }

.teleprompter-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 1000;
  color: white;
  display: flex;
  flex-direction: column;
}

.teleprompter-content {
  flex: 1;
  overflow-y: scroll;
  padding: 0 20px;
  text-align: center;
  line-height: 1.5;
  scrollbar-width: none; /* Firefox */
}
.teleprompter-content::-webkit-scrollbar { display: none; }

.padding-top, .padding-bottom { height: 50vh; }

.teleprompter-controls {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  opacity: 0.5;
  transition: opacity 0.3s;
}
.teleprompter-controls:hover { opacity: 1; }

.marker {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: red;
  opacity: 0.3;
  pointer-events: none;
}
</style>
