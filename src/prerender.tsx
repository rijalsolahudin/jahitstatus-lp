import { render } from 'preact-render-to-string';
import { App } from './App';

// Build-time SSG entry: renders <App /> to static HTML that gets injected
// into #app of index.html. No browser/puppeteer required.
export async function prerender() {
  const html = render(<App />);
  return { html };
}
