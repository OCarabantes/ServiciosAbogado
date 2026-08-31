import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { contact, practice } from '../site.config'

const servicesData = [
  {
    id: 'mediacion',
    title: 'Mediación Familiar Previa',
    subtitle: 'El paso obligatorio y pacífico antes de tribunales en Chile.',
    tag: 'Trámite Obligatorio (Ley 19.968)',
    image: '/servicio-mediacion.png',
    alt: 'Personas revisando un acuerdo en mediación familiar',
    shortDesc: 'Construcción de acuerdos voluntarios, equilibrados y con la misma validez legal que una sentencia judicial ejecutoriada.',
    details: (
      <>
        <p>En Chile, de acuerdo a la <strong>Ley 19.968</strong>, la mediación familiar es un <strong>trámite previo y obligatorio</strong> por ley antes de poder presentar una demanda contenciosa en los Tribunales de Familia para:</p>
        <ul>
          <li><strong>Pensión de Alimentos:</strong> Fijación, aumento, rebaja o cese.</li>
          <li><strong>Cuidado Personal:</strong> Tuición de los hijos (exclusiva o compartida).</li>
          <li><strong>Relación Directa y Regular:</strong> Régimen de visitas, vacaciones y festividades.</li>
        </ul>
        <p><strong>¿Qué ocurre si hay acuerdo?</strong> El acta suscrita se remite al Tribunal de Familia para su aprobación u homologación, adquiriendo <strong>fuerza de sentencia judicial firme</strong>.</p>
        <p><strong>¿Qué ocurre si no hay acuerdo?</strong> Se emite el <em>Certificado de Mediación Frustrada</em>, documento indispensable con el cual tu abogado podrá patrocinar la demanda ante el tribunal correspondiente.</p>
      </>
    )
  },
  {
    id: 'alimentos',
    title: 'Pensión de Alimentos',
    subtitle: 'Fijación justa, reajustabilidad UTM y cumplimiento Ley 21.389.',
    tag: 'Ley 21.389 Deudores',
    image: '/servicio-alimentos.png',
    alt: 'Cálculo de pensión alimenticia y presupuesto familiar',
    shortDesc: 'Orientación integral para fijar, modificar o exigir pensiones de alimentos protegiendo los derechos y necesidades de los hijos.',
    details: (
      <>
        <p>La pensión de alimentos comprende todo lo necesario para el sustento, habitación, vestimenta, salud, movilización, enseñanza básica y media, y aprendizaje de una profesión u oficio de los hijos hasta los 21 años (o 28 si están estudiando con rendimiento regular).</p>
        <p>Bajo la <strong>Ley 21.389</strong> y la nueva legislación chilena:</p>
        <ul>
          <li>Las pensiones se fijan automáticamente en <strong>Unidades Tributarias Mensuales (UTM)</strong> para asegurar su reajuste frente a la inflación.</li>
          <li>Existe el <strong>Registro Nacional de Deudores de Pensiones de Alimentos</strong>, el cual aplica medidas severas como retención de devolución de impuestos, imposibilidad de renovar pasaporte o licencia de conducir, retención de créditos bancarios y fondos previsionales AFP.</li>
        </ul>
      </>
    )
  },
  {
    id: 'cuidado',
    title: 'Cuidado Personal (Tuición)',
    subtitle: 'Corresponsabilidad y bienestar de niños, niñas y adolescentes.',
    tag: 'Ley 20.680 Corresponsabilidad',
    image: '/servicio-infancia.png',
    alt: 'Cuidado personal y protección de los hijos',
    shortDesc: 'Acuerdos orientados a garantizar un entorno afectivo, seguro y estable, priorizando el principio de corresponsabilidad parental.',
    details: (
      <>
        <p>La <strong>Ley 20.680</strong> (conocida como Ley de Tuición Compartida o Amor de Papá) consagró el principio fundamental de <strong>Corresponsabilidad Parental</strong>: ambos progenitores, vivan juntos o separados, deben participar en forma activa, equitativa y permanente en la crianza y educación de sus hijos.</p>
        <p>En el proceso de mediación podemos acordar:</p>
        <ul>
          <li><strong>Cuidado Personal Exclusivo:</strong> Residencia principal con uno de los padres y distribución de responsabilidades.</li>
          <li><strong>Cuidado Personal Compartido:</strong> Modalidad de alternancia justa que preserve la estabilidad emocional y escolar del menor.</li>
        </ul>
      </>
    )
  },
  {
    id: 'visitas',
    title: 'Relación Directa y Regular',
    subtitle: 'Régimen de visitas claro, predecible y enriquecedor.',
    tag: 'Vínculo Afectivo',
    image: '/servicio-relacion-regular.png',
    alt: 'Planificación de tiempos familiares y régimen de visitas',
    shortDesc: 'Establecimiento de calendarios claros de fines de semana, vacaciones, feriados y cumpleaños para evitar fricciones constantes.',
    details: (
      <>
        <p>La Relación Directa y Regular es tanto un derecho como un deber del progenitor que no ejerce el cuidado personal de los hijos, y principalmente es un <strong>derecho inalienable del niño, niña o adolescente</strong> a mantener contacto estrecho y afectivo con ambos padres y sus familias extendidas.</p>
        <p>Un régimen bien diseñado previene conflictos y contempla:</p>
        <ul>
          <li>Fines de semana alternados y días de semana con retiro del colegio.</li>
          <li>Distribución equitativa de vacaciones de invierno, fiestas patrias, navidad, año nuevo y vacaciones de verano.</li>
          <li>Canales de comunicación diaria y emergencias médicas o escolares.</li>
        </ul>
      </>
    )
  },
  {
    id: 'divorcio',
    title: 'Divorcio y Cese de Convivencia',
    subtitle: 'Mutuo acuerdo, plazos legales y compensación económica.',
    tag: 'Ley de Matrimonio Civil',
    image: '/servicio-asesoria.png',
    alt: 'Asesoría en divorcio y separación en Chile',
    shortDesc: 'Acompañamiento en la tramitación del cese de convivencia, redacción de Acuerdo Completo y Suficiente, y liquidación de bienes.',
    details: (
      <>
        <p>En Chile (Ley 19.947 de Matrimonio Civil), existen dos vías principales para solicitar judicialmente el divorcio:</p>
        <ul>
          <li><strong>Divorcio de Mutuo Acuerdo:</strong> Requiere al menos <strong>1 año</strong> de cese de convivencia comprobable y la presentación de un <em>Acuerdo Completo y Suficiente</em> que regule alimentos, cuidado, visitas y compensación económica.</li>
          <li><strong>Divorcio Unilateral:</strong> Requiere al menos <strong>3 años</strong> de cese de convivencia efectiva y acreditada fehacientemente (acta de cese ante Registro Civil o notificación judicial).</li>
        </ul>
        <p>Evaluamos además la procedencia de la <strong>Compensación Económica</strong> en favor del cónyuge que se dedicó al cuidado del hogar y los hijos.</p>
      </>
    )
  },
  {
    id: 'asesoria',
    title: 'Asesoría Familiar Integral',
    subtitle: 'Estrategia legal personalizada y confidencialidad absoluta.',
    tag: 'Estrategia Jurídica',
    image: '/servicio-derecho-familia.png',
    alt: 'Asesoría personalizada en derecho de familia',
    shortDesc: 'Diagnóstico legal exhaustivo de tu situación antes de dar cualquier paso judicial o extrajudicial, protegiendo tus derechos.',
    details: (
      <>
        <p>Tomar decisiones en materias de familia requiere tener total claridad sobre el escenario legal real en los Tribunales de Familia chilenos.</p>
        <p>En nuestra consulta diagnóstica confidencial:</p>
        <ul>
          <li>Analizamos los antecedentes, pruebas documentales y certificados disponibles.</li>
          <li>Calculamos escenarios realistas de pensión según la capacidad económica de las partes.</li>
          <li>Trazamos una ruta estratégica con plazos, costos y alternativas para resolver de la manera más rápida y menos traumática posible.</li>
        </ul>
      </>
    )
  }
]

const orientatorOptions = [
  {
    id: 'alimentos',
    title: 'Pensión de Alimentos',
    icon: '⚖️',
    badge: 'Ley 21.389',
    summary: '¿Necesitas fijar por primera vez, aumentar, rebajar o cobrar deudas de pensión alimenticia?',
    explanation: 'En Chile, la pensión de alimentos debe cubrir todas las necesidades del menor en UTM. Para fijarla formalmente, la mediación es el primer paso legal obligatorio antes de recurrir al Tribunal de Familia.',
    requirements: [
      'Certificados de nacimiento de los hijos.',
      'Detalle estimado de gastos mensuales (colegio, salud, alimentación, arriendo/vivienda).',
      'Información sobre ingresos y empleo del alimentante y demandante.'
    ],
    ctaTopic: 'Pensión de Alimentos y Registro de Deudores'
  },
  {
    id: 'visitas',
    title: 'Cuidado y Régimen de Visitas',
    icon: '🏡',
    badge: 'Corresponsabilidad',
    summary: '¿Quieres regular con quién vivirán tus hijos y cómo serán los tiempos de visitas y vacaciones?',
    explanation: 'La Ley 20.680 promueve la participación activa de ambos padres. Mediante un acuerdo estructurado se evitan discusiones de fin de semana a fin de semana y se da estabilidad emocional a los niños.',
    requirements: [
      'Definir propuesta de calendario escolar y vacaciones.',
      'Horarios de retiro y entrega acordados.',
      'Vías de comunicación para decisiones de salud o educación.'
    ],
    ctaTopic: 'Cuidado Personal y Relación Directa y Regular'
  },
  {
    id: 'divorcio',
    title: 'Divorcio o Separación',
    icon: '📋',
    badge: 'Mutuo Acuerdo / Unilateral',
    summary: '¿Deseas formalizar el término de tu matrimonio y regular materias accesorias?',
    explanation: 'Si cuentan con 1 año de cese de convivencia, el divorcio de mutuo acuerdo con Acuerdo Completo y Suficiente es la vía más rápida y económica. Si solo una parte desea divorciarse, se requieren 3 años de cese.',
    requirements: [
      'Certificado de matrimonio.',
      'Acta o constancia de cese de convivencia (si ya existe).',
      'Acuerdo sobre compensación económica y bienes comunes.'
    ],
    ctaTopic: 'Divorcio de Mutuo Acuerdo y Liquidación'
  },
  {
    id: 'mediacion',
    title: 'Mediación Obligatoria',
    icon: '🤝',
    badge: 'Trámite Previo',
    summary: '¿Fuiste citado a mediación o necesitas un Certificado de Mediación Frustrada?',
    explanation: 'La mediación es la instancia legal donde las partes intentan resolver sin juicio. Si se logra acuerdo, tiene valor de sentencia; si no, se otorga el certificado que habilita demandar con abogado.',
    requirements: [
      'RUT y datos de contacto de ambas partes.',
      'Domicilio conocido de la otra parte.',
      'Disposición a dialogar de manera guiada o evaluar acta frustrada.'
    ],
    ctaTopic: 'Proceso de Mediación Familiar Privada'
  }
]

const stepsData = [
  {
    num: '01',
    title: 'Primer Contacto Confidencial',
    desc: 'Nos escribes por WhatsApp o completas el formulario. Cuéntanos brevemente tu situación y coordinamos la sesión en el horario que más te acomode.'
  },
  {
    num: '02',
    title: 'Diagnóstico y Preparación',
    desc: 'Revisamos los antecedentes legales de la familia y definimos si corresponde mediación directa, acuerdo extrajudicial o preparación contenciosa.'
  },
  {
    num: '03',
    title: 'Acuerdo con Fuerza Legal',
    desc: 'Construimos acuerdos sostenibles y los remitimos al Tribunal de Familia para su aprobación judicial, dándote respaldo, certeza y total tranquilidad.'
  }
]

const faqList = [
  {
    q: '¿La mediación familiar es obligatoria en Chile antes de demandar?',
    a: 'Sí. De acuerdo con la Ley 19.968, en materias como Pensión de Alimentos, Cuidado Personal (tuición) y Relación Directa y Regular (visitas), la mediación familiar es un trámite previo y obligatorio por ley. No se puede ingresar una demanda a tribunales sin haber pasado antes por mediación o contar con el Certificado de Mediación Frustrada.'
  },
  {
    q: '¿Qué valor legal tiene un acuerdo logrado en mediación?',
    a: 'El Acta de Mediación aprobada por el juez del Tribunal de Familia tiene exactamente la misma fuerza ejecutiva y validez jurídica que una sentencia judicial definitiva. En caso de incumplimiento, se pueden solicitar de inmediato los apremios legales y liquidaciones pertinentes.'
  },
  {
    q: '¿La atención puede realizarse 100% de manera online?',
    a: 'Absolutamente. Atendemos a personas y familias en todo Chile a través de videollamadas seguras (Google Meet o Microsoft Teams), coordinando firma electrónica y tramitación digital expedita sin necesidad de traslados.'
  },
  {
    q: '¿Qué ocurre si la otra parte no asiste o no quiere llegar a acuerdo?',
    a: 'Si la otra parte no se presenta o no hay voluntad de acuerdo, el mediador emite el "Certificado de Mediación Frustrada". Con este documento oficial quedas 100% habilitada/o para interponer la demanda judicial correspondiente con patrocinio de abogado ante el Tribunal de Familia.'
  },
  {
    q: '¿Qué documentos debo tener a mano para la primera consulta?',
    a: 'Es recomendable contar con los certificados de nacimiento de los hijos (gratuitos en la web del Registro Civil), certificado de matrimonio si aplica, y una estimación de los gastos mensuales o antecedentes de la situación. Si aún no los tienes, en la primera sesión te orientaremos paso a paso.'
  },
  {
    q: '¿Cuánto tiempo demora un proceso de mediación familiar?',
    a: 'A diferencia de un juicio ordinario que puede extenderse entre 6 y 18 meses, un proceso de mediación privada suele resolverse en tan solo 1 a 3 sesiones (generalmente entre 1 y 3 semanas), ahorrando un enorme desgaste emocional y económico para la familia.'
  }
]

export default function Home() {
  const [activeOrientator, setActiveOrientator] = useState(orientatorOptions[0])
  const [activeModal, setActiveModal] = useState(null)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    matter: 'Mediación familiar obligatoria',
    mode: 'Videollamada Online (Meet / Teams)',
    date: '',
    message: '',
    consent: false,
    contactMethod: 'whatsapp'
  })

  function handleFormChange(e) {
    const { name, value, checked, type } = e.target
    setForm((curr) => ({ ...curr, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleAppointmentSubmit(e) {
    e.preventDefault()

    const textLines = [
      `*SOLICITUD DE CONSULTA LEGAL - FAMILIA*`,
      `👤 *Nombre:* ${form.name}`,
      `📞 *Teléfono:* ${form.phone}`,
      form.email ? `✉️ *Correo:* ${form.email}` : null,
      `📌 *Materia:* ${form.matter}`,
      `💻 *Modalidad:* ${form.mode}`,
      form.date ? `📅 *Fecha preferida:* ${form.date}` : null,
      form.message ? `💬 *Detalle breve:* ${form.message}` : null,
      `---------------------------------`,
      `Enviado desde el portal web isidorajara.cl`
    ].filter(Boolean).join('\n')

    if (form.contactMethod === 'correo') {
      const subject = encodeURIComponent(`Solicitud de consulta jurídica: ${form.name} - ${form.matter}`)
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(textLines)}`
    } else {
      const waUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(textLines)}`
      window.open(waUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      <Head>
        <title>{`${practice.name} | Abogada & Mediadora Familiar en Chile`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta
          name="description"
          content="Asesoría legal especializada en mediación familiar, pensión de alimentos (Ley 21.389), cuidado personal, visitas y divorcio en Chile. Atención 100% online en todo el país vía Google Meet y Microsoft Teams."
        />
        <meta property="og:title" content={`${practice.name} | Mediación y Derecho de Familia`} />
        <meta
          property="og:description"
          content="Construcción de acuerdos sostenibles con fuerza legal. Trato humano, empático y confidencial."
        />
        <meta property="og:image" content="/abogada-mediacion-familiar-v2.png" />
        <meta name="theme-color" content="#0b2622" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* ================================================================
            HERO SECTION
            ================================================================ */}
        <section className="hero-wrapper" id="inicio">
          <div className="container hero-grid-layout">
            <div className="hero-content">
              <div className="hero-badges-row">
                <span className="badge-pill light">Abogada · Mediadora Familiar</span>
                <span className="badge-pill light">Atención 100% Online en Todo Chile (Meet / Teams)</span>
              </div>

              <h1>
                <span className="hero-title-bone" style={{ color: '#F7F4EE' }}>Acuerdos que protegen</span><br />
                <em>lo que más importa.</em>
              </h1>

              <p className="hero-subtitle">
                Orientación jurídica cercana, estratégica y humana. Te acompaño a resolver conflictos de pensión, tuición, visitas y divorcio de forma expedita, evitando el desgaste de un juicio contencioso.
              </p>

              <div className="hero-actions">
                <a className="button button-gold" href="#agendar">
                  Solicitar una Consulta <span>→</span>
                </a>
                <a
                  className="button button-whatsapp"
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hola Isidora, quisiera coordinar una consulta de derecho de familia.')}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>💬</span> Hablar por WhatsApp
                </a>
                <a className="button button-outline-light" href="#orientador">
                  Orientador Legal <span>↓</span>
                </a>
              </div>

              <div className="hero-proof-chips">
                <div className="proof-item">
                  <span className="proof-item-icon">✓</span>
                  <span>Acuerdos con plena validez judicial</span>
                </div>
                <div className="proof-item">
                  <span className="proof-item-icon">✓</span>
                  <span>Protección prioritaria de los hijos</span>
                </div>
                <div className="proof-item">
                  <span className="proof-item-icon">✓</span>
                  <span>Confidencialidad y trato empático</span>
                </div>
              </div>
            </div>

            {/* Hero Visual - Foto de lado acompañando limpiamente */}
            <div className="hero-visual-side">
              <div className="hero-photo-frame">
                <Image
                  src="/abogada-mediacion-familiar-v2.png"
                  alt="Isidora Jara Weisser - Abogada y Mediadora Familiar"
                  fill
                  priority
                  unoptimized
                  style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            TRUST METRICS STRIP
            ================================================================ */}
        <section className="trust-strip" aria-label="Garantías de servicio">
          <div className="container trust-grid">
            <div className="trust-card">
              <div className="trust-icon-box">🏛️</div>
              <div className="trust-info">
                <strong>Mediación Acreditada</strong>
                <small>Validez legal ante Tribunales de Familia</small>
              </div>
            </div>

            <div className="trust-card">
              <div className="trust-icon-box">🔒</div>
              <div className="trust-info">
                <strong>100% Confidencial</strong>
                <small>Espacio seguro y protegido para tu familia</small>
              </div>
            </div>

            <div className="trust-card">
              <div className="trust-icon-box">⏱️</div>
              <div className="trust-info">
                <strong>Resolución Ágil</strong>
                <small>Acuerdos en semanas, no en años de juicio</small>
              </div>
            </div>

            <div className="trust-card">
              <div className="trust-icon-box">🇨🇱</div>
              <div className="trust-info">
                <strong>Cobertura Nacional</strong>
                <small>100% Online vía Meet y Teams a todo Chile</small>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            ABOUT ISIDORA SECTION (CRISP 16:9 ORIGINAL PROPORTIONS)
            ================================================================ */}
        <section className="section about-section" id="sobre-mi">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-photo-frame">
                <Image
                  src="/Abogada mirando al camara feliz.png"
                  alt="Isidora Jara Weisser, Abogada y Mediadora Familiar"
                  fill
                  priority
                  unoptimized
                  style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                />
              </div>

              <div className="about-badge-floating">
                <strong>{practice.lawyer}</strong>
                <span>Abogada · Mediadora Familiar</span>
              </div>
            </div>

            <div className="about-content">
              <span className="eyebrow">Sobre la Profesional</span>
              <h2>
                Firmeza jurídica,<br />
                <em>cercanía humana.</em>
              </h2>

              <blockquote className="about-quote">
                &ldquo;El derecho de familia no se trata simplemente de aplicar normas frías, sino de comprender historias reales, cuidar los vínculos y proteger el bienestar presente y futuro de los niños.&rdquo;
              </blockquote>

              <p className="about-p">
                Como abogada especializada en mediación y derecho familiar en Chile, mi compromiso es brindarte un acompañamiento riguroso y libre de confrontaciones innecesarias. Sé lo desgastante que puede resultar una crisis familiar; por eso, busco siempre alternativas claras, directas y eficaces.
              </p>

              <p className="about-p">
                Ya sea que necesites fijar una pensión de alimentos justa bajo la <strong>Ley 21.389</strong>, regular el régimen de cuidado de tus hijos o formalizar un divorcio de mutuo acuerdo, trabajaremos juntos para que tomes decisiones con plena certeza legal.
              </p>

              <div className="about-highlights-grid">
                <div className="about-highlight-box">
                  <strong>Enfoque en NNA</strong>
                  <p>Prioridad absoluta al interés superior de niños, niñas y adolescentes.</p>
                </div>
                <div className="about-highlight-box">
                  <strong>Estrategia Transparente</strong>
                  <p>Claridad de costos, plazos y escenarios legales desde la primera reunión.</p>
                </div>
                <div className="about-highlight-box">
                  <strong>Mediación Privada</strong>
                  <p>Sesiones guiadas con respeto mutuo para lograr acuerdos duraderos.</p>
                </div>
                <div className="about-highlight-box">
                  <strong>Respaldo Judicial</strong>
                  <p>Homologación de acuerdos para que adquieran fuerza de sentencia.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                <a className="button button-dark" href="#agendar">
                  Agendar Consulta con Isidora <span>→</span>
                </a>
                <a className="text-link" href="#servicios">
                  Explorar materias legales <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            INTERACTIVE CASE ORIENTATOR
            ================================================================ */}
        <section className="section orientator-section" id="orientador">
          <div className="container orientator-container">
            <div className="section-intro-center">
              <span className="eyebrow center">Orientador Rápido de Trámites</span>
              <h2>¿Qué situación necesitas resolver?</h2>
              <p className="text-muted">
                Selecciona tu materia para conocer cómo opera la ley en Chile, qué antecedentes se requieren y cómo podemos ayudarte hoy mismo.
              </p>
            </div>

            <div className="orientator-options-grid">
              {orientatorOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`orientator-tab-btn ${activeOrientator.id === opt.id ? 'active' : ''}`}
                  onClick={() => setActiveOrientator(opt)}
                >
                  <span className="tab-icon">{opt.icon}</span>
                  <strong>{opt.title}</strong>
                </button>
              ))}
            </div>

            <div className="orientator-result-card">
              <div className="orientator-result-header">
                <div>
                  <span className="badge-pill green" style={{ marginBottom: '8px' }}>
                    {activeOrientator.badge}
                  </span>
                  <h3>{activeOrientator.title}</h3>
                  <p className="text-muted" style={{ fontSize: '14.5px', margin: 0 }}>
                    {activeOrientator.summary}
                  </p>
                </div>
              </div>

              <div className="orientator-result-body">
                <p>{activeOrientator.explanation}</p>

                <div className="orientator-steps-list">
                  <h4>Antecedentes clave recomendados:</h4>
                  <ul>
                    {activeOrientator.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="orientator-cta-bar">
                  <div>
                    <strong style={{ color: 'var(--green-deep)', display: 'block', fontSize: '15px' }}>
                      ¿Tienes dudas específicas sobre este trámite?
                    </strong>
                    <span style={{ fontSize: '13px', color: 'var(--ink-muted)' }}>
                      Revisamos tu caso en forma personalizada y confidencial.
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a
                      className="button button-whatsapp"
                      href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hola Isidora, quisiera consultar sobre ${activeOrientator.ctaTopic}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Consultar por WhatsApp <span>↗</span>
                    </a>
                    <a
                      className="button button-gold"
                      href="#agendar"
                      onClick={() => setForm((f) => ({ ...f, matter: activeOrientator.ctaTopic }))}
                    >
                      Agendar Hora <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            PRACTICE AREAS / SERVICES WITH MODALS
            ================================================================ */}
        <section className="section services-section" id="servicios">
          <div className="container">
            <div className="section-header-flex">
              <div>
                <span className="eyebrow">Áreas de Práctica Especializada</span>
                <h2>Servicios Legales y Mediación</h2>
              </div>
              <p className="text-muted" style={{ maxWidth: '420px', fontSize: '15px' }}>
                Haz clic en cualquiera de las materias para revisar los detalles jurídicos, leyes aplicables y la forma en que abordamos cada proceso.
              </p>
            </div>

            <div className="services-grid-modern">
              {servicesData.map((svc) => (
                <article
                  key={svc.id}
                  className="service-card-modern"
                  onClick={() => setActiveModal(svc)}
                >
                  <div className="service-card-image-wrap">
                    <Image
                      src={svc.image}
                      alt={svc.alt}
                      fill
                      unoptimized
                      style={{ objectFit: 'cover' }}
                    />
                    <span className="service-tag-badge">{svc.tag}</span>
                  </div>

                  <div className="service-card-body">
                    <h3>{svc.title}</h3>
                    <p>{svc.shortDesc}</p>
                    <div className="service-card-footer">
                      <span>Ver marco legal y detalles</span>
                      <span>+</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            COMPARISON: MEDIATION VS COURT LITIGATION
            ================================================================ */}
        <section className="section comparison-section" id="comparativa">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
              <span className="eyebrow light center">¿Por qué preferir la Mediación?</span>
              <h2>Mediación Familiar vs. Juicio Contencioso</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '16px' }}>
                Antes de iniciar un juicio desgastante, conoce las diferencias clave entre un proceso mediado y un litigio judicial en Tribunales de Familia.
              </p>
            </div>

            <div className="comparison-grid">
              {/* Box 1: Mediación con Isidora Jara */}
              <div className="comparison-box mediation">
                <div className="comparison-header">
                  <div>
                    <span className="badge-pill light" style={{ marginBottom: '6px' }}>
                      Vía Recomendada
                    </span>
                    <h3>Mediación Familiar</h3>
                  </div>
                  <span style={{ fontSize: '28px' }}>✨</span>
                </div>

                <ul className="comparison-list">
                  <li>
                    <span className="comp-icon good">✓</span>
                    <div>
                      <strong>Decisión en manos de la familia:</strong> Ambas partes construyen los acuerdos en conjunto con la guía de la mediadora.
                    </div>
                  </li>
                  <li>
                    <span className="comp-icon good">✓</span>
                    <div>
                      <strong>Rapidez y agilidad:</strong> Se resuelve en 1 a 3 sesiones (semanas), sin esperas de agenda judicial de meses.
                    </div>
                  </li>
                  <li>
                    <span className="comp-icon good">✓</span>
                    <div>
                      <strong>Mismo valor que una sentencia:</strong> El acta aprobada por el juez tiene plena fuerza de ley y mérito ejecutivo.
                    </div>
                  </li>
                  <li>
                    <span className="comp-icon good">✓</span>
                    <div>
                      <strong>Menor costo económico y emocional:</strong> Ahorro sustancial frente a honorarios de litigio prolongado y peritajes.
                    </div>
                  </li>
                  <li>
                    <span className="comp-icon good">✓</span>
                    <div>
                      <strong>Protección del vínculo con los hijos:</strong> Evita la hostilidad y preserva la relación parental a futuro.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Box 2: Juicio en Tribunales */}
              <div className="comparison-box court">
                <div className="comparison-header">
                  <div>
                    <span className="badge-pill light" style={{ opacity: 0.7, marginBottom: '6px' }}>
                      Litigio Tradicional
                    </span>
                    <h3>Juicio en Tribunales</h3>
                  </div>
                  <span style={{ fontSize: '28px' }}>⚖️</span>
                </div>

                <ul className="comparison-list">
                  <li>
                    <span className="comp-icon bad">✕</span>
                    <div>
                      <strong>Un tercero decide por ti:</strong> Un juez dicta una sentencia que puede no adaptarse a la realidad cotidiana familiar.
                    </div>
                  </li>
                  <li>
                    <span className="comp-icon bad">✕</span>
                    <div>
                      <strong>Plazos prolongados:</strong> Audiencias preparatorias y de juicio que pueden tardar entre 6 y 18 meses.
                    </div>
                  </li>
                  <li>
                    <span className="comp-icon bad">✕</span>
                    <div>
                      <strong>Alto desgaste emocional:</strong> Confrontación adversarial constante entre las partes y sus abogados.
                    </div>
                  </li>
                  <li>
                    <span className="comp-icon bad">✕</span>
                    <div>
                      <strong>Costos elevados:</strong> Gastos continuos en patrocinio legal, peritos externos y trámites de notificación.
                    </div>
                  </li>
                  <li>
                    <span className="comp-icon bad">✕</span>
                    <div>
                      <strong>Impacto en los menores:</strong> Exposición de los hijos a evaluaciones periciales psicológicas y tensión familiar.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '42px' }}>
              <a className="button button-gold" href="#agendar">
                Iniciar Mediación con Isidora <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================================================================
            PROCESS SECTION (3 STEPS)
            ================================================================ */}
        <section className="section process-section" id="proceso">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto' }}>
              <span className="eyebrow center">Paso a Paso</span>
              <h2>¿Cómo trabajamos juntos?</h2>
              <p className="text-muted">
                Un camino estructurado, transparente y confidencial para que sepas exactamente qué esperar en cada fase.
              </p>
            </div>

            <div className="process-grid-cards">
              {stepsData.map((step) => (
                <div key={step.num} className="process-card-step">
                  <span className="step-num-badge">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            EDITORIAL PHOTO BREAK & STATEMENT (CRISP 16:9)
            ================================================================ */}
        <section style={{ position: 'relative', minHeight: '380px', overflow: 'hidden' }}>
          <Image
            src="/fotografia personal formato 16-9.jpg"
            alt="Isidora Jara en su oficina jurídica"
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(11,38,34,0.68) 0%, rgba(11,38,34,0.88) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '30px 20px'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '780px', color: '#ffffff' }}>
              <span className="badge-pill light" style={{ marginBottom: '16px' }}>
                Atención Personalizada
              </span>
              <h3 style={{ color: '#ffffff', fontSize: 'clamp(24px, 3.2vw, 36px)', marginBottom: '14px' }}>
                Tu tranquilidad y la de tus hijos merecen una conducción profesional experta.
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '16.5px' }}>
                Sesiones privadas, sin intermediarios, atendidas directamente por la abogada.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================
            APPOINTMENT BOOKING & CONTACT FORM
            ================================================================ */}
        <section className="section appointment-section" id="agendar">
          <div className="container appointment-wrapper">
            {/* Info Card */}
            <div className="appointment-info-card">
              <span className="eyebrow">Contacto Directo</span>
              <h2>Conversemos sobre tu caso</h2>
              <p className="text-muted" style={{ fontSize: '15.5px' }}>
                Completa el formulario y se generará tu solicitud para ser coordinada de inmediato por WhatsApp o correo. La atención queda sujeta a confirmación de disponibilidad.
              </p>

              <div className="contact-channels-box">
                <a
                  className="channel-row"
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <strong>WhatsApp Directo</strong>
                    <div style={{ fontSize: '12.5px', color: 'var(--ink-muted)' }}>Respuesta rápida y coordinación de horas</div>
                  </div>
                  <span style={{ color: '#25d366', fontWeight: 700 }}>{contact.phoneDisplay}</span>
                </a>

                <a className="channel-row" href={`mailto:${contact.email}`}>
                  <div>
                    <strong>Correo Electrónico</strong>
                    <div style={{ fontSize: '12.5px', color: 'var(--ink-muted)' }}>Para envío de antecedentes o consultas formales</div>
                  </div>
                  <span style={{ color: 'var(--green-primary)', fontWeight: 600 }}>{contact.email}</span>
                </a>

                <a className="channel-row" href={`tel:${contact.phone}`}>
                  <div>
                    <strong>Llamada Telefónica</strong>
                    <div style={{ fontSize: '12.5px', color: 'var(--ink-muted)' }}>Horario de oficina</div>
                  </div>
                  <span>{contact.phoneDisplay}</span>
                </a>

                <a
                  className="channel-row"
                  href={contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <strong>Instagram Jurídico</strong>
                    <div style={{ fontSize: '12.5px', color: 'var(--ink-muted)' }}>Contenido informativo y novedades legales</div>
                  </div>
                  <span style={{ color: 'var(--gold-dark)', fontWeight: 600 }}>{contact.instagramDisplay}</span>
                </a>
              </div>

              <div style={{ borderTop: '1px solid var(--line-soft)', paddingTop: '18px', fontSize: '13px', color: 'var(--ink-muted)' }}>
                <strong>Horario de atención:</strong> {practice.hours}<br />
                <strong>Modalidad:</strong> {practice.serviceMode}
              </div>
            </div>

            {/* Smart Form */}
            <div className="appointment-form-card">
              <h3 style={{ marginBottom: '8px' }}>Solicitud de Consulta</h3>
              <p className="text-muted" style={{ fontSize: '14.5px', marginBottom: '24px' }}>
                Ingresa tus datos y selecciona la materia para una evaluación preliminar.
              </p>

              <form onSubmit={handleAppointmentSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Nombre y Apellido *</label>
                    <input
                      id="name"
                      className="form-input"
                      name="name"
                      value={form.name}
                      onChange={handleFormChange}
                      placeholder="Ej. María Paz González"
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Teléfono / WhatsApp *</label>
                    <input
                      id="phone"
                      className="form-input"
                      name="phone"
                      value={form.phone}
                      onChange={handleFormChange}
                      placeholder="+56 9 1234 5678"
                      type="tel"
                      required
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Correo Electrónico (Opcional)</label>
                  <input
                    id="email"
                    className="form-input"
                    name="email"
                    value={form.email}
                    onChange={handleFormChange}
                    placeholder="tunombre@correo.cl"
                    type="email"
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="matter">Materia Principal a Consultar *</label>
                  <select
                    id="matter"
                    className="form-select"
                    name="matter"
                    value={form.matter}
                    onChange={handleFormChange}
                  >
                    <option value="Mediación familiar obligatoria">Mediación Familiar Previa Obligatoria</option>
                    <option value="Pensión de alimentos (fijación, aumento o cobro)">Pensión de Alimentos (Fijación, aumento, rebaja o cobro)</option>
                    <option value="Cuidado personal y tuición">Cuidado Personal (Tuición unilateral o compartida)</option>
                    <option value="Relación directa y regular (visitas)">Relación Directa y Regular (Régimen de visitas y vacaciones)</option>
                    <option value="Divorcio de mutuo acuerdo o unilateral">Divorcio y Cese de Convivencia</option>
                    <option value="Asesoría integral en derecho de familia">Asesoría Integral en Derecho de Familia</option>
                    <option value="Otro trámite legal de familia">Otro trámite de familia</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="mode">Modalidad Preferida</label>
                    <select
                      id="mode"
                      className="form-select"
                      name="mode"
                      value={form.mode}
                      onChange={handleFormChange}
                    >
                      <option value="Videollamada Google Meet">Videollamada Google Meet</option>
                      <option value="Videollamada Microsoft Teams">Videollamada Microsoft Teams</option>
                      <option value="Consulta por WhatsApp">Consulta por WhatsApp</option>
                      <option value="Por definir">Por definir</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="date">Fecha Estimada Deseada</label>
                    <input
                      id="date"
                      className="form-input"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Breve descripción de la situación <span style={{ fontWeight: 400, color: 'var(--ink-muted)' }}>(Opcional)</span>
                  </label>
                  <textarea
                    id="message"
                    className="form-textarea"
                    name="message"
                    rows="3"
                    value={form.message}
                    onChange={handleFormChange}
                    placeholder="Cuéntame brevemente las partes involucradas y tu objetivo principal..."
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contactMethod">Canal de Envío Preferido</label>
                  <select
                    id="contactMethod"
                    className="form-select"
                    name="contactMethod"
                    value={form.contactMethod}
                    onChange={handleFormChange}
                  >
                    <option value="whatsapp">Enviar por WhatsApp (Más Rápido)</option>
                    <option value="correo">Enviar por Correo Electrónico</option>
                  </select>
                </div>

                <div className="form-checkbox-row">
                  <input
                    id="consent"
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleFormChange}
                    required
                  />
                  <label htmlFor="consent">
                    Acepto el tratamiento confidencial de estos datos para coordinar mi atención, de acuerdo con la <a href="/privacidad" style={{ textDecoration: 'underline', color: 'var(--green-primary)' }}>política de privacidad</a>.
                  </label>
                </div>

                <button
                  type="submit"
                  className={form.contactMethod === 'whatsapp' ? 'button button-whatsapp' : 'button button-dark'}
                  style={{ width: '100%' }}
                >
                  {form.contactMethod === 'whatsapp' ? '💬 Enviar Solicitud a WhatsApp' : '✉️ Enviar Solicitud por Correo'} <span>→</span>
                </button>

                <p className="form-disclaimer">
                  🔒 Tus antecedentes se tratan bajo estricta reserva profesional. El envío del formulario no constituye patrocinio judicial automático.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ================================================================
            FAQ SECTION
            ================================================================ */}
        <section className="section faq-section" id="preguntas">
          <div className="container faq-wrapper">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="eyebrow center">Resolución de Dudas</span>
              <h2>Preguntas Frecuentes</h2>
              <p className="text-muted">
                Respuestas claras a las principales interrogantes sobre mediación y derecho de familia en Chile.
              </p>
            </div>

            <div>
              {faqList.map((faq, index) => (
                <div key={index} className="faq-item">
                  <details>
                    <summary>
                      <span>{faq.q}</span>
                      <span className="faq-icon-toggle">+</span>
                    </summary>
                    <div className="faq-content-inner">
                      <p>{faq.a}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            FINAL CTA BANNER
            ================================================================ */}
        <section className="final-cta-section">
          <div className="container">
            <span className="badge-pill light" style={{ marginBottom: '18px' }}>
              Da el primer paso hacia una solución
            </span>
            <h2>Una conversación a tiempo puede evitar años de conflicto.</h2>
            <p>
              Hablemos hoy sobre tu caso. Recibirás orientación clara, transparente y humana para proteger a tu familia.
            </p>
            <div className="final-cta-buttons">
              <a className="button button-gold" href="#agendar">
                Agendar Consulta Ahora <span>→</span>
              </a>
              <a
                className="button button-whatsapp"
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hola Isidora, quisiera agendar una consulta sobre materias de familia.')}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>💬</span> WhatsApp Directo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ================================================================
          SERVICE DETAIL MODAL
          ================================================================ */}
      {activeModal && (
        <div
          className="modal-overlay active"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setActiveModal(null)}
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            <span className="badge-pill green" style={{ marginBottom: '12px' }}>
              {activeModal.tag}
            </span>
            <h3>{activeModal.title}</h3>

            <div style={{ margin: '20px 0' }}>
              {activeModal.details}
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '30px', flexWrap: 'wrap' }}>
              <a
                className="button button-gold"
                href="#agendar"
                onClick={() => {
                  setActiveModal(null)
                  setForm((f) => ({ ...f, matter: activeModal.title }))
                }}
              >
                Consultar sobre este servicio <span>→</span>
              </a>
              <a
                className="button button-whatsapp"
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hola Isidora, quisiera consultar sobre el servicio de ${activeModal.title}.`)}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>💬</span> WhatsApp Directo
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================
          FLOATING WHATSAPP BUTTON WITH WELCOME SPEECH BUBBLE
          ================================================================ */}
      <div className="whatsapp-floating-wrap">
        <div className="whatsapp-bubble-hint">
          <span>👋</span> ¿Dudas con tu caso? Escríbeme
        </div>
        <a
          className="whatsapp-btn-round"
          href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hola Isidora, quisiera consultar por asesoría o mediación familiar.')}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Contactar a Isidora Jara por WhatsApp"
        >
          <span className="whatsapp-ping" />
          <img src="/wspLogo.png" alt="WhatsApp" />
        </a>
      </div>
    </>
  )
}
