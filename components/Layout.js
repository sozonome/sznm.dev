import Head from 'next/head';
import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <div class="container">
        <Head>
          <title>
            {this.props.title ? this.props.title : 'Hello'} | sznm.dev
          </title>
          <link rel='icon' href='/favicon.ico' />
          <link
            rel='stylesheet'
            href='https://fonts.xz.style/serve/inter.css'
          />
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css'
          />
        </Head>
        {this.props.children}
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
}
