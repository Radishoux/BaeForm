import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.main}>
          Welcome to BaeForm !
        </h1>

        <div className={styles.grid}>
          <Link href="/pages/q?v=1">
            <a className={styles.card}>
              <h2>Question &rarr;</h2>
              <p>How are you?</p>
            </a>
          </Link>

          <Link href="/pages/u?v=1">
            <a className={styles.card}>
              <h2>User &rarr;</h2>
              <p>Rudy Quinternet</p>
            </a>
          </Link>

          <Link href="/pages/c?v=1">
            <a className={styles.card}>
              <h2>Chat &rarr;</h2>
              <p>Rudy + Marianne</p>
            </a>
          </Link>

        </div>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
