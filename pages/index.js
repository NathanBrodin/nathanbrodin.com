import Head from 'next/head'
import Layout from '../components/Layout'
import Home from '../components/Home'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>Portfolio | Nathan Brodin</title>
        <meta name="description" content="Nathan Brodin personal portfolio" />
        <meta name="keywords" content="Nathan Brodin" />
        <meta name="author" content="Nathan Brodin" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </Head>

      <Layout>
        <Home />
        <Projects />
        <About />
        <Contact />
      </Layout>
    </div>
  )
}
