import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import '../node_modules/carbon-addons-iot-react/css/carbon-addons-iot-react.css'
import 'carbon-components/css/carbon-components.min.css'
import MetaTags from 'react-meta-tags'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
            
        <h1 className={styles.title}>
          Bienvenido a <a href="https://registro.acropolis.digital/">Acrópolis Digital</a>
        </h1>
        
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
