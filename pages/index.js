import Head from 'next/head'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { contact, practice } from '../site.config'

const services = [
  ['Mediación familiar', 'Construcción de acuerdos voluntarios, equilibrados y sostenibles para la familia.', '/servicio-mediacion.png', 'Personas revisando un acuerdo durante una mediación', <>
    <p>En Chile (Ley 19.968), la mediación familiar es un <strong>trámite obligatorio y previo</strong> antes de poder demandar en tribunales por materias como:</p>
    <ul style={{ color: 'var(--muted)', marginBottom: '16px' }}><li>Pensión de alimentos</li><li>Cuidado personal (tuición)</li><li>Relación directa y regular (visitas)</li></ul>
    <p>El objetivo es construir un acuerdo voluntario con la misma validez que una sentencia judicial, evitando el desgaste emocional y económico de un juicio largo.</p>
  </>],
  ['Pensión de alimentos', 'Orientación para acordar montos, forma de pago y actualización de obligaciones.', '/servicio-alimentos.png', 'Organización del presupuesto familiar para acordar una pensión de alimentos', <>
    <p>La pensión de alimentos busca garantizar el sustento integral de los hijos. En Chile, según la Ley 21.389, los alimentos deben cubrir no solo la comida, sino vivienda, educación, salud y recreación.</p>
    <p>En caso de incumplimiento reiterado, existen apremios severos y la inscripción automática en el <strong>Registro Nacional de Deudores de Pensiones de Alimentos</strong>, limitando el acceso a créditos, retención de impuestos y renovación de licencias.</p>
  </>],
  ['Cuidado personal', 'Acuerdos centrados en el bienestar de niños, niñas y adolescentes.', '/servicio-infancia.png', 'Casas de madera y dibujo infantil que representan el cuidado familiar', <>
    <p>Conocido tradicionalmente como "tuición", la Ley 20.680 en Chile fomenta el <strong>Principio de Corresponsabilidad</strong>. Ambos padres, vivan juntos o separados, deben participar activa y equitativamente en la crianza y educación.</p>
    <p>En caso de separación, el cuidado personal puede ser ejercido por uno de los padres o de manera compartida, primando siempre el interés superior del niño.</p>
  </>],
  ['Relación directa y regular', 'Organización clara de tiempos, visitas, vacaciones y responsabilidades.', '/servicio-relacion-regular.png', 'Planificación de tiempos y visitas entre dos hogares', <>
    <p>El régimen de visitas es el derecho y deber del padre o madre que no vive con sus hijos a mantener un contacto directo y frecuente con ellos. La ley chilena protege este vínculo como fundamental para el desarrollo sano de los menores.</p>
    <p>Es clave establecer un régimen claro y estructurado (fines de semana, vacaciones, cumpleaños) para evitar conflictos constantes y dar estabilidad a los niños.</p>
  </>],
  ['Divorcio y separación', 'Asesoría en acuerdos completos y preparación de antecedentes legales.', '/servicio-asesoria.png', 'Documentos organizados en una oficina jurídica de Santiago', <>
    <p>En Chile, para solicitar el divorcio debes cumplir con el <strong>cese de convivencia</strong> (separación de hecho comprobable). Los plazos son:</p>
    <ul style={{ color: 'var(--muted)', marginBottom: '16px' }}><li><strong>1 año</strong>: Para Divorcio de Mutuo Acuerdo (ambos cónyuges solicitan).</li><li><strong>3 años</strong>: Para Divorcio Unilateral (solo uno solicita).</li></ul>
    <p>Durante este proceso, se discuten materias accesorias como alimentos, cuidado personal, bienes y la posible compensación económica para el cónyuge que no pudo trabajar por dedicarse al hogar.</p>
  </>],
  ['Asesoría en derecho de familia', 'Evaluación jurídica confidencial para comprender opciones y próximos pasos.', '/servicio-derecho-familia.png', 'Abogada consultando un libro jurídico en su estudio', <>
    <p>Antes de tomar cualquier decisión, ya sea iniciar una mediación o una demanda en los Tribunales de Familia, es crucial una evaluación jurídica profunda.</p>
    <p>Te orientamos sobre las pruebas necesarias, las etapas del proceso, tus posibilidades reales según la jurisprudencia actual chilena y elaboramos una estrategia legal pensada a largo plazo para protegerte a ti y a tu patrimonio.</p>
  </>],
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
  if (name === 'chat') return <svg viewBox="0 0 48 48" aria-hidden="true" {...common}><path d="M9 11.5h30v21H21l-8.5 6v-6H9z" /><path d="M16 20h16M16 25h10" /></svg>
  if (name === 'search') return <svg viewBox="0 0 48 48" aria-hidden="true" {...common}><circle cx="21" cy="21" r="11" /><path d="m29 29 10 10M17 21l3 3 6-7" /></svg>
  return <svg viewBox="0 0 48 48" aria-hidden="true" {...common}><path d="M8 36c8-1 8-12 16-12s8-11 16-12" /><path d="m34 9 6 3-3 6" /><circle cx="9" cy="36" r="2.5" /><circle cx="24" cy="24" r="2.5" /></svg>
}

function WhatsAppIcon() {
  return <img src="/wspLogo.png" alt="WhatsApp" className="whatsapp-icon" style={{ objectFit: 'contain' }} />
}

export default function Home() {
  const [form, setForm] = useState({ name: '', phone: '', matter: 'Mediación familiar', mode: 'Videollamada (Meet / Teams)', date: '', message: '', consent: false, contactMethod: 'whatsapp' })
  const [activeModal, setActiveModal] = useState(null)
  const carouselRef = useRef(null)

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    
    let interval
    const startScroll = () => {
      interval = setInterval(() => {
        const cardWidth = el.querySelector('.service-card')?.offsetWidth + 20 || 350
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          el.scrollBy({ left: cardWidth, behavior: 'smooth' })
        }
      }, 4000)
    }

    startScroll()
    
    const pause = () => clearInterval(interval)
    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', startScroll)
    el.addEventListener('touchstart', pause, { passive: true })
    el.addEventListener('touchend', startScroll, { passive: true })
    
    return () => {
      clearInterval(interval)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', startScroll)
      el.removeEventListener('touchstart', pause)
      el.removeEventListener('touchend', startScroll)
    }
  }, [])

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

    if (form.contactMethod === 'correo') {
      const subject = encodeURIComponent(`Solicitud de consulta: ${form.name}`)
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(text)}`
    } else {
      window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      <Head>
        <title>{`${practice.name} | Mediación y Derecho de Familia`}</title>
        <meta name="description" content="Asesoría legal y mediación familiar en Chile. Atención profesional, cercana y confidencial en alimentos, cuidado personal, visitas y divorcio." />
        <meta property="og:title" content={`${practice.name} | Derecho de Familia`} />
        <meta property="og:description" content="Soluciones claras y humanas para asuntos de familia." />
        <meta property="og:image" content="/abogada-mediacion-familiar-v2.png" />
        <meta name="theme-color" content="#173f3a" />
      </Head>
      <Header />

      <main>
        <section className="hero" id="inicio">
          <Image className="hero-image" src="/abogada-mediacion-familiar-v2.png" alt="Abogada revisando antecedentes en una oficina profesional" fill priority sizes="100vw" />
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
            <div className="services-grid" ref={carouselRef}>
              {services.map(([title, copy, image, alt, legalDetails], index) => (
                <article className="service-card" key={title} onClick={() => setActiveModal({ title, legalDetails })}>
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
              <p>Completa tus datos y se preparará tu solicitud para ser enviada por tu medio preferido. La hora queda sujeta a confirmación.</p>
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
                <label>Modalidad<select name="mode" value={form.mode} onChange={update}><option>Videollamada (Meet / Teams)</option><option>Consulta por WhatsApp</option><option>Presencial</option><option>Por definir</option></select></label>
                <label>Fecha preferida<input name="date" value={form.date} onChange={update} type="date" /></label>
              </div>
              <label>Comentario breve <span className="optional">Opcional</span><textarea name="message" value={form.message} onChange={update} rows="3" /></label>
              <label>Enviar solicitud por:<select name="contactMethod" value={form.contactMethod} onChange={update}><option value="whatsapp">WhatsApp</option><option value="correo">Correo Electrónico</option></select></label>
              <label className="check"><input name="consent" checked={form.consent} onChange={update} type="checkbox" required /><span>Acepto el tratamiento de estos datos para responder mi solicitud, según la <a href="/privacidad">política de privacidad</a>.</span></label>
              <button className="button button-dark" type="submit">Continuar por {form.contactMethod === 'correo' ? 'Correo' : 'WhatsApp'} <span>→</span></button>
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

      {activeModal && (
        <div className="modal-overlay active" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModal(null)} aria-label="Cerrar">×</button>
            <h3>{activeModal.title}</h3>
            {activeModal.legalDetails}
            <div style={{ marginTop: '30px' }}>
              <a className="button button-gold" href="#agendar" onClick={() => { setActiveModal(null); setForm(f => ({ ...f, matter: activeModal.title })) }}>Consultar sobre esto <span>→</span></a>
            </div>
          </div>
        </div>
      )}

      <a className="whatsapp-float" href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hola, quisiera solicitar una consulta de derecho de familia.')}`} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><WhatsAppIcon /></a>
    </>
  )
}
