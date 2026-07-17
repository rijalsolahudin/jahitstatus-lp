import { hydrate } from 'preact';
import { App } from './App';
import './style.css';
import './assets/css/tracking-modern.css';
import './assets/css/chat-bubble.css';

const appElement = document.getElementById('app');
if (appElement) {
  // Prerendered markup exists in production → hydrate; in dev it renders fresh.
  hydrate(<App />, appElement);
}
