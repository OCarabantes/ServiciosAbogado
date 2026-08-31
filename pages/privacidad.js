import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { contact, practice } from '../site.config'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>{`Política de Privacidad | ${practice.name}`}</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Header />

      <main style={{ padding: '80px 0', minHeight: '60vh', background: 'var(--paper-soft)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="eyebrow">Información Legal y Reserva Profesional</span>
          <h1 style={{ marginBottom: '24px', fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Política de Privacidad y Confidencialidad
          </h1>

          <p style={{ fontSize: '17px', color: 'var(--ink-secondary)', marginBottom: '32px', lineHeight: 1.7 }}>
            En el ejercicio del derecho y la mediación familiar, la privacidad y el secreto profesional son principios fundamentales. Esta política detalla el tratamiento de la información proporcionada a través de este portal web.
          </p>

          <div style={{ background: '#ffffff', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--green-deep)', marginBottom: '12px' }}>1. Datos Recopilados</h3>
            <p style={{ color: 'var(--ink-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
              A través de nuestro formulario de agendamiento y canales de contacto directo, recopilamos únicamente los datos básicos necesarios para evaluar y coordinar una consulta: nombre, teléfono, correo electrónico, materia jurídica general y disponibilidad horaria.
            </p>

            <h3 style={{ fontSize: '20px', color: 'var(--green-deep)', marginBottom: '12px' }}>2. Finalidad del Tratamiento</h3>
            <p style={{ color: 'var(--ink-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
              La información suministrada se utiliza exclusivamente para responder solicitudes de orientación, evaluar la factibilidad de mediación o patrocinio, y agendar sesiones. En ningún caso se comercializan ni ceden datos a terceros.
            </p>

            <h3 style={{ fontSize: '20px', color: 'var(--green-deep)', marginBottom: '12px' }}>3. Secreto Profesional y Confidencialidad de la Mediación</h3>
            <p style={{ color: 'var(--ink-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
              De acuerdo con la <strong>Ley 19.968</strong> y el Código de Ética Profesional del Colegio de Abogados de Chile, todas las sesiones de mediación y consultas jurídicas están amparadas bajo estricta confidencialidad y secreto profesional.
            </p>

            <h3 style={{ fontSize: '20px', color: 'var(--green-deep)', marginBottom: '12px' }}>4. Ejercicio de Derechos y Contacto</h3>
            <p style={{ color: 'var(--ink-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
              En cualquier momento puedes solicitar la actualización o eliminación de tus datos de contacto escribiendo a{' '}
              <a href={`mailto:${contact.email}`} style={{ color: 'var(--green-primary)', fontWeight: 600, textDecoration: 'underline' }}>
                {contact.email}
              </a>.
            </p>

            <div style={{ borderTop: '1px solid var(--line-soft)', paddingTop: '20px', marginTop: '20px' }}>
              <Link href="/" className="button button-gold">
                ← Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
