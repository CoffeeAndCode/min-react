import html from './lib/html.js';

export default function Home({ name }) {
  return html`
    <div>
      <h1>Grettings ${name}!</h1>
      <p>okay!</p>
    </div>
  `;
}
