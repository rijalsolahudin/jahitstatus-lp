import { hydrate, render } from 'preact';
import { App } from './App';
import './style.css';
import './assets/css/tracking-modern.css';
import './assets/css/chat-bubble.css';

const appElement = document.getElementById('app');
if (appElement) {
  // Di produksi #app sudah berisi markup prerender → hydrate.
  // Di dev kosong → render fresh (hydrate pada container kosong memicu hydration mismatch).
  if (appElement.hasChildNodes()) {
    hydrate(<App />, appElement);
  } else {
    render(<App />, appElement);
  }
}
