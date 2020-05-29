
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <header>
        <h1>sznm.dev</h1>
      </header>

      <main>
        <h2>Hello</h2>
        <img className='octocat' src='/octocat_sznm.png' alt='' />
        <p>This page is still in development.</p>
        <p>Please be kind with it.</p>
      </main>
    </Layout>
  );
}
