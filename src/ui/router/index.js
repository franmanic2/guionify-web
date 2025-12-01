import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/cleaner', name: 'Cleaner', component: () => import('../views/CleanerView.vue') },
  { path: '/rewriter', name: 'Rewriter', component: () => import('../views/RewriterView.vue') },
  { path: '/subtitles', name: 'Subtitles', component: () => import('../views/SubtitlesView.vue') },
  { path: '/hooks', name: 'Hooks', component: () => import('../views/HooksView.vue') },
  { path: '/summary', name: 'Summary', component: () => import('../views/SummaryView.vue') },
  { path: '/extended', name: 'Extended', component: () => import('../views/ExtendedView.vue') },
  { path: '/replacement', name: 'Replacement', component: () => import('../views/ReplacementView.vue') },
  { path: '/structure', name: 'Structure', component: () => import('../views/StructureView.vue') },
  { path: '/teleprompter', name: 'Teleprompter', component: () => import('../views/TeleprompterView.vue') },
  { path: '/export', name: 'Export', component: () => import('../views/ExportView.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
