import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import '../node_modules/carbon-addons-iot-react/css/carbon-addons-iot-react.css'
import 'carbon-components/css/carbon-components.min.css'
import { Button } from 'carbon-components-react'
import { ValueCard, ColorDropdown } from 'carbon-addons-iot-react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="application-name" content="Acropolis">
        <meta name="apple-mobile-web-app-title" content="Acropolis">
        <meta name="theme-color" content="#333333">
        <meta name="msapplication-navbutton-color" content="#333333">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="msapplication-starturl" content="/">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      </Head>

      <main className={styles.main}>
            
      <Button>Botón 01</Button>
      <Button>Botón 02</Button>


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

<div
  style={{
    width: '200px'
  }}
>
  <ColorDropdown
    colors={[
      {
        carbonColor: '#6929c4',
        name: 'purple70'
      },
      {
        carbonColor: '#1192e8',
        name: 'cyan50'
      },
      {
        carbonColor: '#005d5d',
        name: 'teal70'
      },
      {
        carbonColor: '#9f1853',
        name: 'magenta70'
      },
      {
        carbonColor: '#fa4d56',
        name: 'red50'
      },
      {
        carbonColor: '#520408',
        name: 'red90'
      },
      {
        carbonColor: '#198038',
        name: 'green60'
      },
      {
        carbonColor: '#002d9c',
        name: 'blue80'
      },
      {
        carbonColor: '#ee5396',
        name: 'magenta50'
      },
      {
        carbonColor: '#a56eff',
        name: 'purple50'
      },
      {
        carbonColor: '#009d9a',
        name: 'teal50'
      },
      {
        carbonColor: '#012749',
        name: 'cyan90'
      }
    ]}
    hideLabels={false}
    id="myColorDropdown"
    label="Select a color"
    light={false}
    onChange={function E(){}}
    selectedColor={undefined}
    testID={undefined}
    titleText="Color"
    translateWithId={undefined}
  />
</div>
      
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
