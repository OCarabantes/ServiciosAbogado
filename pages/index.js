import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { contact, practice } from '../site.config'

const services = [
  ['Mediación familiar', 'Construcción de acuerdos voluntarios, equilibrados y sostenibles para la familia.', '/servicio-mediacion.png', 'Personas revisando un acuerdo durante una mediación'],
  ['Pensión de alimentos', 'Orientación para acordar montos, forma de pago y actualización de obligaciones.', '/servicio-alimentos.png', 'Organización del presupuesto familiar para acordar una pensión de alimentos'],
  ['Cuidado personal', 'Acuerdos centrados en el bienestar de niños, niñas y adolescentes.', '/servicio-infancia.png', 'Casas de madera y dibujo infantil que representan el cuidado familiar'],
  ['Relación directa y regular', 'Organización clara de tiempos, visitas, vacaciones y responsabilidades.', '/servicio-relacion-regular.png', 'Planificación de tiempos y visitas entre dos hogares'],
  ['Divorcio y separación', 'Asesoría en acuerdos completos y preparación de antecedentes legales.', '/servicio-asesoria.png', 'Documentos organizados en una oficina jurídica de Santiago'],
  ['Asesoría en derecho de familia', 'Evaluación jurídica confidencial para comprender opciones y próximos pasos.', '/servicio-derecho-familia.png', 'Abogada consultando un libro jurídico en su estudio'],
]

const steps = [
  ['01', 'chat', 'Conversemos', 'Cuéntame brevemente tu situación y el canal por el que prefieres ser contactada/o.'],
  ['02', 'search', 'Evaluemos', 'Revisamos si la mediación es adecuada y qué antecedentes serán necesarios.'],
  ['03', 'path', 'Avancemos', 'Definimos una estrategia clara, con información comprensible y trato confidencial.'],
]

const faqs = [
  ['¿Qué asuntos se pueden tratar en mediación familiar?', 'Entre otros, pensión de alimentos, cuidado personal y relación directa y regular. Cada situación debe evaluarse de forma particular.'],
  ['¿La mediación reemplaza siempre un juicio?', 'No. La mediación busca acuerdos voluntarios, pero hay casos que requieren asesoría y actuación judicial. En la consulta inicial revisaremos qué vía corresponde.'],
  ['¿La atención puede ser online?', `Sí. ${practice.serviceMode}. La modalidad se coordina al solicitar la hora.`],
  ['¿Qué debo preparar para la primera consulta?', 'Una síntesis de la situación, las dudas principales y los documentos relevantes que tengas. No envíes información sensible por canales abiertos antes de recibir indicaciones.'],
]

function Icon({ children }) {
  return <span className="icon" aria-hidden="true">{children}</span>
}

function ProcessIcon({ name }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (name === 'chat') return <svg viewBox="0 0 48 48" aria-hidden="true" {...common}><path d="M9 11.5h30v21H21l-8.5 6v-6H9z"/><path d="M16 20h16M16 25h10"/></svg>
  if (name === 'search') return <svg viewBox="0 0 48 48" aria-hidden="true" {...common}><circle cx="21" cy="21" r="11"/><path d="m29 29 10 10M17 21l3 3 6-7"/></svg>
  return <svg viewBox="0 0 48 48" aria-hidden="true" {...common}><path d="M8 36c8-1 8-12 16-12s8-11 16-12"/><path d="m34 9 6 3-3 6"/><circle cx="9" cy="36" r="2.5"/><circle cx="24" cy="24" r="2.5"/></svg>
}

function WhatsAppIcon() {
  return <svg className="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.05 3A12.76 12.76 0 0 0 5.14 22.36L3.32 29l6.79-1.78A12.75 12.75 0 1 0 16.05 3Zm0 2.15a10.6 10.6 0 1 1-5.4 19.72l-.38-.23-4.03 1.06 1.08-3.93-.25-.4a10.61 10.61 0 0 1 8.98-16.22Zm-4.72 5.31c-.24 0-.63.09-.96.46-.33.36-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.53 3.87 6.14 5.43.86.37 1.53.59 2.05.75.86.27 1.64.23 2.26.14.69-.1 2.12-.87 2.42-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42-.36-.18-2.12-1.05-2.45-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.89-1.78a10.85 10.85 0 0 1-2-2.49c-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61h-.69Z"/></svg>
}

export default function Home() {
  const [form, setForm] = useState({ name: '', phone: '', matter: 'Mediación familiar', mode: 'Videollamada', date: '', message: '', consent: false })

  function update(e) {
    const { name, value, checked, type } = e.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  function requestAppointment(e) {
    e.preventDefault()
    const text = [
      `Hola, soy ${form.name}. Quisiera solicitar una consulta.`,
      `Materia: ${form.matter}.`,
      `Modalidad: ${form.mode}.`,
      form.date && `Fecha preferida: ${form.date}.`,
      `Teléfono: ${form.phone}.`,
      form.message && `Comentario: ${form.message}`,
    ].filter(Boolean).join('\n')
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Head>
        <title>{practice.name} | Mediación y Derecho de Familia</title>
        <meta name="description" content="Asesoría legal y mediación familiar en Chile. Atención profesional, cercana y confidencial en alimentos, cuidado personal, visitas y divorcio." />
        <meta property="og:title" content={`${practice.name} | Derecho de Familia`} />
        <meta property="og:description" content="Soluciones claras y humanas para asuntos de familia." />
        <meta property="og:image" content="/abogada-mediacion-familiar.png" />
        <meta name="theme-color" content="#173f3a" />
      </Head>
      <Header />

      <main>
        <section className="hero" id="inicio">
          <Image className="hero-image" src="/abogada-mediacion-familiar.png" alt="Abogada revisando antecedentes en una oficina profesional" fill priority sizes="100vw" />
          <div className="hero-shade" />
          <div className="container hero-content">
            <p className="eyebrow light">Mediación · Derecho de familia · Chile</p>
            <h1>Acuerdos que protegen<br />lo que más importa.</h1>
            <p className="hero-copy">Asesoría jurídica cercana, estratégica y confidencial para ayudarte a avanzar con claridad en momentos familiares complejos.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#agendar">Solicitar una consulta <span>→</span></a>
              <a className="button button-whatsapp" href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hola, quisiera solicitar una consulta de derecho de familia.')}`} target="_blank" rel="noreferrer"><WhatsAppIcon /> Hablar por WhatsApp <span>↗</span></a>
              <a className="text-link light-link" href="#servicios">Conocer servicios <span>↓</span></a>
            </div>
          </div>
        </section>

        <section className="trust-bar" aria-label="Características de atención">
          <div className="container trust-grid">
            <div><Icon>◇</Icon><span><strong>Atención confidencial</strong><small>Tu situación se trata con discreción</small></span></div>
            <div><Icon>○</Icon><span><strong>Orientación clara</strong><small>Información comprensible y directa</small></span></div>
            <div><Icon>⌁</Icon><span><strong>Enfoque colaborativo</strong><small>Soluciones pensadas para perdurar</small></span></div>
          </div>
        </section>

        <section className="section intro" id="nosotras">
          <div className="container intro-grid">
            <div>
              <p className="eyebrow">Una mirada jurídica y humana</p>
              <h2>Resolver con firmeza.<br /><em>Acompañar con empatía.</em></h2>
            </div>
            <div className="intro-copy">
              <p>Los conflictos familiares necesitan más que una respuesta legal: requieren escucha, criterio y una estrategia que considere a cada persona involucrada.</p>
              <p>En {practice.name} entregamos orientación personalizada para tomar decisiones informadas, reducir la incertidumbre y buscar acuerdos que cuiden los vínculos y el futuro.</p>
              <a className="text-link" href="#proceso">Cómo trabajamos <span>→</span></a>
            </div>
          </div>
        </section>

        <section className="section services-section" id="servicios">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">Áreas de práctica</p><h2>Asesoría para cada etapa</h2></div>
              <p>Evaluamos cada caso de manera responsable para encontrar la vía más adecuada, dentro o fuera de tribunales.</p>
            </div>
            <div className="services-grid">
              {services.map(([title, copy, image, alt], index) => (
                <article className="service-card" key={title}>
                  <div className="service-image"><Image src={image} alt={alt} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" /></div>
                  <div className="service-body"><span className="service-number">0{index + 1}</span><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="proceso">
          <div className="container process-grid">
            <div className="process-title"><p className="eyebrow light">Proceso de atención</p><h2>Un camino claro<br />desde el primer contacto</h2><p>No necesitas tener todas las respuestas. El primer paso es comprender tu situación y tus alternativas.</p><a className="button button-gold process-cta" href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hola, quisiera comenzar una consulta de derecho de familia.')}`} target="_blank" rel="noreferrer">Comenzar por WhatsApp <span>↗</span></a></div>
            <div className="steps">
              {steps.map(([number, icon, title, copy], index) => <div className="step" key={number}>
                <div className="step-icon"><ProcessIcon name={icon} /></div>
                <div className="step-content"><span className="step-number">Paso {number}</span><h3>{title}</h3><p>{copy}</p></div>
                {index < steps.length - 1 && <span className="step-connector" aria-hidden="true">↓</span>}
              </div>)}
            </div>
          </div>
        </section>

        <section className="section appointment" id="agendar">
          <div className="container appointment-grid">
            <div className="appointment-copy">
              <p className="eyebrow">Agenda tu consulta</p>
              <h2>Conversemos sobre<br /><em>tu situación.</em></h2>
              <p>Completa tus datos y se abrirá WhatsApp con la solicitud preparada. La hora queda sujeta a confirmación.</p>
              <div className="contact-list">
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{contact.phoneDisplay}</strong></a>
                <a href={`mailto:${contact.email}`}><span>Correo</span><strong>{contact.email}</strong></a>
                <a href={`tel:${contact.phone}`}><span>Teléfono</span><strong>{contact.phoneDisplay}</strong></a>
                <a href={contact.instagram} target="_blank" rel="noreferrer"><span>Instagram</span><strong>{contact.instagramDisplay}</strong></a>
              </div>
              <small>{practice.hours}<br />{practice.serviceMode}</small>
            </div>
            <form className="appointment-form" onSubmit={requestAppointment}>
              <div className="field-row">
                <label>Nombre y apellido<input name="name" value={form.name} onChange={update} autoComplete="name" required /></label>
                <label>Teléfono<input name="phone" value={form.phone} onChange={update} type="tel" autoComplete="tel" required /></label>
              </div>
              <label>¿En qué necesitas orientación?<select name="matter" value={form.matter} onChange={update}>{services.map(([title]) => <option key={title}>{title}</option>)}</select></label>
              <div className="field-row">
                <label>Modalidad<select name="mode" value={form.mode} onChange={update}><option>Videollamada</option><option>Presencial</option><option>Por definir</option></select></label>
                <label>Fecha preferida<input name="date" value={form.date} onChange={update} type="date" /></label>
              </div>
              <label>Comentario breve <span className="optional">Opcional</span><textarea name="message" value={form.message} onChange={update} rows="3" /></label>
              <label className="check"><input name="consent" checked={form.consent} onChange={update} type="checkbox" required /><span>Acepto el tratamiento de estos datos para responder mi solicitud, según la <a href="/privacidad">política de privacidad</a>.</span></label>
              <button className="button button-dark" type="submit">Continuar por WhatsApp <span>→</span></button>
              <p className="form-note">Este formulario no crea una relación abogada-cliente ni confirma automáticamente una cita.</p>
            </form>
          </div>
        </section>

        <section className="section faq" id="preguntas">
          <div className="container faq-grid"><div><p className="eyebrow">Preguntas frecuentes</p><h2>Antes de comenzar</h2></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div>
        </section>

        <section className="final-cta"><div className="container"><p className="eyebrow light">Da el primer paso</p><h2>Una conversación puede<br />abrir nuevas posibilidades.</h2><a className="button button-gold" href="#agendar">Solicitar consulta <span>→</span></a></div></section>
      </main>
      <Footer />
      <a className="whatsapp-float" href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hola, quisiera solicitar una consulta de derecho de familia.')}`} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><WhatsAppIcon /></a>
    </>
  )
}
