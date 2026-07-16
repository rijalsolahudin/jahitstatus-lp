import { render } from 'preact';
import { App } from './App';
import './style.css';
import './assets/css/tracking-modern.css';
import './assets/css/chat-bubble.css';

const appElement = document.getElementById('app');
if (appElement) {
  render(<App />, appElement);
}
