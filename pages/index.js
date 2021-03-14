import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import '../node_modules/carbon-addons-iot-react/css/carbon-addons-iot-react.css'
import 'carbon-components/css/carbon-components.min.css'
import '../public/manifest.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>

      <title>Acrópolis Digital</title>
      <meta charSet="utf-8" />

      <link rel="manifest" href="manifest.json"/>

      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="application-name" content="Acrópolis"/>
      <meta name="apple-mobile-web-app-title" content="Acrópolis"/>
      <meta name="theme-color" content="#333333"/>
      <meta name="msapplication-navbutton-color" content="#333333"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
      <meta name="msapplication-starturl" content="/"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
 
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
      <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="180x180" href="/apple-icon.png"/>
      <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/apple-icon.png"/>
      <link rel="icon" type="image/png" sizes="144x144" href="/ms-icon-144x144.png"/>
      <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="/ms-icon-144x144.png"/>

      </Head>
      
      <main className={styles.main}>
            
        <h1 className={styles.title}>
          We'll be right back... soon.
        </h1>
        
      </main>

      <footer className={styles.footer}>
        Todos los derechos reservados. © Acrópolis Digital 2021.
      </footer>
    </div>
  )
}
