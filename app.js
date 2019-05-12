import html from './lib/html.js';

const Dashboard = React.lazy(() => import('./Dashboard.js'));
const Home = React.lazy(() => import('./Home.js'));

function Loading() {
  return html`<div>Loading...</div>`;
}

export default function({ name }) {
  return html`
    <div>
      <nav>
        <${ReachRouter.Link} to="/">Home<//>
        <${ReachRouter.Link} to="dashboard">Dashboard<//>
      </nav>

      <${React.Suspense} fallback=${Loading()}>
        <${ReachRouter.Router}>
          <${Home} path="/" name=${name} />
          <${Dashboard} path="dashboard" />
        <//>
      <//>
    </div>
  `;
}
