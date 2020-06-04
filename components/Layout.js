import Head from 'next/head';
import React, { Component } from 'react';
import Link from 'next/link';

export default class Layout extends Component {
  render() {
    return (
      <div className="bg-gray-700 text-white flex flex-wrap">
        <Head>
          <title>
            {this.props.title ? this.props.title : 'Hello'} | sznm.dev
          </title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <header class="w-full text-center sm:text-justify bg-black text-white h-24 sticky top-0 py-2">
          <div className="headerContent self-center h-24">
            <Link href={'/'} >
              <h1 className="text-3xl font-medium">Hello</h1>
            </Link>
            <p className="font-hairline">projects by sznm</p>
          </div>
        </header>
        {this.props.children}
        <footer className="text-center sm:text-justify w-full sticky bottom-0 bg-black py-4">
          <div className="footerContent">
            2020 -{' '}
            <a
              className="underline hover:text-teal-400"
              href='https://agustinusnathaniel.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              AgustinusNathaniel
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
