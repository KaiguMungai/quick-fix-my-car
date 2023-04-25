import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title ? title + ' - Quick Fix My Car' : 'Quick Fix My Car'}
        </title>
        <meta name="description" content="A driver's Quick Car Repair App." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-40 items-center px-5 shadow-md justify-between">
            <Link href="/" legacyBehavior>
              <a className="text-3xl font-bold"> Quick Fix My Car</a>
            </Link>
            <div>
              <Link href="/login" legacyBehavior>
                <a className="px-5 text-lg">Log In</a>
              </Link>
              <Link href="/signin" legacyBehavior>
                <a className="px-5 text-lg">Sign In</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-5 px-4">{children}</main>
        <footer className="flex items-center h-40 justify-center shadow-inner">
          <div>
            <h1 className="font-bold text-lg">Contact Info</h1>
            <div className="h-4"></div>
            <p>
              <strong>Email: </strong>kaigumungai@gmail.com
            </p>
            <p>
              <strong>Tel: </strong>+254780275703/+254798992416
            </p>
            <div className="h-4"></div>
            <div className="font-bold text-small">
              <p>Copyright © QuickFixMyCarApp.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
