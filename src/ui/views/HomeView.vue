<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const features = [
  { title: 'Limpieza Automática', desc: 'Elimina muletillas y repeticiones.', route: '/cleaner', icon: '🧹' },
  { title: 'Estilo TikTok', desc: 'Frases cortas y directas.', route: '/rewriter', icon: '⚡' },
  { title: 'Subtítulos', desc: 'Segmentación por tiempos.', route: '/subtitles', icon: '📝' },
  { title: 'Generador de Hooks', desc: 'Crea ganchos virales.', route: '/hooks', icon: '🎣' },
  { title: 'Resumen Breve', desc: 'Para Shorts de 15-30s.', route: '/summary', icon: '⏱️' },
  { title: 'Versión Extendida', desc: 'Para YouTube 1-3 min.', route: '/extended', icon: '📹' },
  { title: 'Reemplazo Inteligente', desc: 'Cambia palabras clave.', route: '/replacement', icon: '🔄' },
  { title: 'Estructura Narrativa', desc: 'Storytelling automático.', route: '/structure', icon: '📖' },
  { title: 'Teleprompter', desc: 'Modo lectura en pantalla.', route: '/teleprompter', icon: '📺' },
  { title: 'Exportar', desc: 'PDF, SRT, Texto plano.', route: '/export', icon: '💾' },
];
</script>

<template>
  <div class="container home-view">
    <div class="hero">
      <h1>Transforma tus ideas en guiones <span class="highlight">virales</span></h1>
      <p class="subtitle">La herramienta definitiva para creadores de contenido.</p>
    </div>

    <div class="features-grid">
      <div 
        v-for="feature in features" 
        :key="feature.route" 
        class="card feature-card"
        @click="router.push(feature.route)"
      >
        <div class="icon">{{ feature.icon }}</div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 0;
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.1;
}

.highlight {
  color: var(--primary-color);
  background: -webkit-linear-gradient(45deg, #7c3aed, #c084fc);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.feature-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px;
  transition: transform 0.2s, border-color 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-color);
}

.icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

p {
  color: var(--text-muted);
  margin: 0;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  
  .hero {
    margin-bottom: 30px;
    padding: 20px 0;
  }
  
  .icon {
    font-size: 2.5rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  
  .hero {
    margin-bottom: 40px;
    padding: 20px 0;
  }
  
  .icon {
    font-size: 2.5rem;
  }
}
</style>
