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
  <div class="home-view-wrapper">
    <div class="hero-bg-full">
      <div class="floating-icon icon-1">❤️</div>
      <div class="floating-icon icon-2">⚡</div>
      <div class="floating-icon icon-3">🔥</div>
      <div class="floating-icon icon-4">👍</div>
      <div class="floating-icon icon-5">📱</div>
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
    </div>

    <div class="container home-view">
      <div class="hero">
        <div class="hero-content">
          <h1>Transforma tus ideas en guiones <span class="highlight">virales</span></h1>
          <p class="subtitle">La herramienta definitiva para creadores de contenido.</p>
        </div>
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
  </div>
</template>

<style scoped>
.home-view-wrapper {
  position: relative;
  width: 100%;
}

.hero {
  text-align: center;
  margin-bottom: 60px;
  padding: 100px 0 60px;
  position: relative;
  z-index: 1;
}

.hero-bg-full {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 800px;
  max-height: 800px;
  overflow: hidden;
  z-index: -1;
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  animation: floatOrb 15s infinite ease-in-out;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: var(--primary-color);
  top: -200px;
  left: -150px;
  animation-delay: 0s;
  opacity: 0.6;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: #c084fc;
  top: -250px;
  right: -250px;
  animation-delay: -5s;
  opacity: 0.6;
}


.floating-icon {
  position: absolute;
  font-size: 2rem;
  opacity: 0.2;
  animation: floatIcon 8s infinite linear;
  filter: blur(1px);
}

.icon-1 { top: 20%; left: 10%; animation-duration: 12s; font-size: 3rem; }
.icon-2 { top: 60%; left: 15%; animation-duration: 9s; animation-delay: -2s; }
.icon-3 { top: 30%; right: 15%; animation-duration: 14s; font-size: 2.5rem; }
.icon-4 { top: 70%; right: 10%; animation-duration: 11s; animation-delay: -5s; }
.icon-5 { top: 15%; right: 30%; animation-duration: 13s; animation-delay: -1s; }

@media (max-width: 768px) {
  .hero-bg-full {
    display: none;
  }
}

@keyframes floatOrb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, 50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

@keyframes floatIcon {
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  20% { opacity: 0.3; }
  80% { opacity: 0.3; }
  100% { transform: translateY(-100px) rotate(20deg); opacity: 0; }
}

.hero::after {
  display: none; /* Remove old radial gradient */
}

h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.highlight {
  color: var(--primary-color);
  background: linear-gradient(135deg, #7c3aed 0%, #c084fc 50%, #f472b6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
}

.feature-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 32px;
  background: rgba(22, 22, 26, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: rgba(124, 58, 237, 0.5);
  box-shadow: 0 20px 40px -15px rgba(124, 58, 237, 0.2);
}

.feature-card:hover::before {
  opacity: 1;
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 24px;
  background: rgba(124, 58, 237, 0.1);
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  transition: transform 0.4s ease;
}

.feature-card:hover .icon {
  transform: scale(1.1) rotate(5deg);
  background: rgba(124, 58, 237, 0.2);
}

h3 {
  margin: 0 0 12px;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

p {
  color: var(--text-muted);
  margin: 0;
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
    padding: 0 10px;
  }
  
  .hero {
    margin-bottom: 30px;
    padding: 20px 10px;
  }
  
  .subtitle {
    font-size: 1rem;
    padding: 0 10px;
  }
  
  .icon {
    font-size: 2.5rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .feature-card {
    padding: 20px;
  }
}
</style>
