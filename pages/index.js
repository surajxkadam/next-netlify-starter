import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Takeover by Anil !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Takeover by Anil !" />
        <p className="description">
       
        </p>
        <p className="description">
        
        </p>
      </main>

      <Footer />
    </div>
  )
}
