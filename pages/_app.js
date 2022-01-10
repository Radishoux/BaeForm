import Navbar from '../components/navbar'
import '../styles/globals.css'
import '../styles/c.css'
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
