import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import '../node_modules/carbon-addons-iot-react/css/carbon-addons-iot-react.css'
import 'carbon-components/css/carbon-components.min.css'
import { Button } from 'carbon-components-react'
import { ValueCard } from 'carbon-addons-iot-react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
            
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>


      <div  style={{
          margin: '1rem4',
          width: '252px'
        }}>
      <ValueCard
        breakpoint="lg"
        cardVariables={null}
        content={{
          attributes: [
            {
              dataSourceId: 'occupancy',
              unit: '%'
            }
          ]
        }}
        customFormatter={null}
        dataState={null}
        fontSize={42}
        id="facilitycard"
        isNumberValueCompact={false}
        locale="en"
        size="SMALL"
        title="Occupancy"
        values={{
          occupancy: 88
        }}
      />
</div>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
