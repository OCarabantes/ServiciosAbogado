import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { practice } from '../site.config'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>{`Página no encontrada | ${practice.name}`}</title>
      </Head>
      <Header />
      <main style={{ minHeight: '65vh', display: 'grid', placeItems: 'center', padding: '80px 0', background: 'var(--paper-soft)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <span className="eyebrow center">Error 404</span>
          <h1 style={{ fontSize: 'clamp(50px, 8vw, 90px)', color: 'var(--gold-dark)', margin: '10px 0 20px' }}>404</h1>
          <h2>Página no encontrada</h2>
          <p style={{ color: 'var(--ink-muted)', margin: '16px 0 32px' }}>
            La dirección a la que intentas acceder no existe o ha sido reubicada.
          </p>
          <Link className="button button-gold" href="/">
            Volver a la Página Principal <span>→</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
