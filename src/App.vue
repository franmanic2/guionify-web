<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="app-layout">
    <header class="header">
      <div class="container header-content">
        <div class="logo-area">
          <RouterLink to="/" class="logo">Guionify</RouterLink>
          <span class="version">v1.0</span>
        </div>
        <nav class="nav">
          <RouterLink to="/cleaner">Limpieza</RouterLink>
          <RouterLink to="/rewriter">TikTok</RouterLink>
          <RouterLink to="/subtitles">Subtítulos</RouterLink>
          <RouterLink to="/hooks">Hooks</RouterLink>
          <RouterLink to="/summary">Resumen</RouterLink>
          <RouterLink to="/extended">Extendido</RouterLink>
          <RouterLink to="/replacement">Reemplazo</RouterLink>
          <RouterLink to="/structure">Estructura</RouterLink>
          <RouterLink to="/teleprompter">Teleprompter</RouterLink>
          <RouterLink to="/export">Exportar</RouterLink>
        </nav>
      </div>
    </header>

    <main class="main-content-wrapper">
      <div class="content-area">
        <RouterView />
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-main">
          <div class="footer-left">
            <h3>Developed by Francisco Hurtado</h3>
            <p>Frontend Developer & Software Engineer</p>
            <a href="https://github.com/franmanic2" target="_blank" class="handle">@franmanic</a>
          </div>
          <div class="footer-right">
            <h4>SÍGUEME</h4>
            <div class="social-icons">
              <a href="https://www.linkedin.com/in/francisco-hurtado-p-0b9602301/" target="_blank" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://instagram.com/franmanic" target="_blank" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://github.com/franmanic2" target="_blank" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>© 2025 Francisco Hurtado. Todos los derechos reservados.</p>
          <p>Hecho con <span class="heart">❤️</span> usando Vue.js</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: rgba(10, 10, 12, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-area {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.version {
  font-size: 0.8rem;
  color: var(--primary-color);
  font-weight: 600;
  background: rgba(124, 58, 237, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
}

.nav a:hover, .nav a.router-link-active {
  color: white;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 15px;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
}

.main-content-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 20px;
}

.content-area {
  width: 100%;
  max-width: 1200px;
}

.footer {
  background-color: var(--surface-color);
  padding: 60px 0 20px;
  margin-top: auto;
  border-top: 1px solid var(--border-color);
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-left h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  margin: 0 0 5px 0;
}

.footer-left p {
  color: var(--text-muted);
  margin: 0 0 5px 0;
  font-size: 0.95rem;
}

.handle {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.95rem;
}

.footer-right {
  text-align: right;
}

.footer-right h4 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
  margin: 0 0 15px 0;
  font-weight: 700;
}

.social-icons {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  transition: all 0.2s;
}

.social-icons a:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  background-color: rgba(124, 58, 237, 0.1);
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.footer-bottom p {
  margin: 0;
}

.heart {
  color: #ef4444;
}

@media (max-width: 600px) {
  .footer-main {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  
  .footer-right {
    text-align: center;
  }
  
  .social-icons {
    justify-content: center;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
