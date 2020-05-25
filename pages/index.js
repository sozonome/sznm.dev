import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Hello | sznm.dev</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://fonts.xz.style/serve/inter.css' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css'
        />
      </Head>

      <header>
        <h1>sznm.dev</h1>
      </header>

      <main>
        <h2>Hello</h2>
        <img className="octocat" src="/octocat_sznm.png" alt=""/>
        <p>This page is still in development.</p>
        <p>Please be kind with it.</p>
     
      </main>

      <footer>
        2020 -{' '}
        <a
          href='https://agustinusnathaniel.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          AgustinusNathaniel
        </a>
      </footer>
    </div>
  );
}
