import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

var ConnectedUser = {
  id: 1
}

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
      </Head>
      <Link  href="/c"><div className={styles.navButton}><i style={{"width":"fit-content", "display":"block", "margin":"auto", "font-size": "70px", "color": "lightcoral"}} className="bi bi-chat-dots"></i></div></Link>
      <Link  href="/q"><div className={styles.navButton}><i style={{"width":"fit-content", "display":"block", "margin":"auto", "font-size": "70px", "color": "lightcoral"}} className="bi bi-patch-question-fill"></i></div></Link>
      <Link  href="/m"><div className={styles.navButton}><i style={{"width":"fit-content", "display":"block", "margin":"auto", "font-size": "70px", "color": "lightcoral"}} className="bi bi-heart-half"></i></div></Link>
      <Link  href="/s"><div className={styles.navButton}><i style={{"width":"fit-content", "display":"block", "margin":"auto", "font-size": "70px", "color": "lightcoral"}} className="bi bi-search"></i></div></Link>
      <Link  href={"/u?v="+ConnectedUser.id}><div className={styles.navButton}><i style={{"width":"fit-content", "display":"block", "margin":"auto", "font-size": "70px", "color": "lightcoral"}} className="bi bi-person-circle"></i></div></Link>
    </div>
  )
}

