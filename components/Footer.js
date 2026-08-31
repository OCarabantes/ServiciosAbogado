import Link from 'next/link'
import Image from 'next/image'
import { contact, practice } from '../site.config'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top-grid">
        <div className="footer-brand">
          <Link className="logo-brand" href="/" aria-label={`${practice.name}, inicio`}>
            <div className="brand-header-wrap footer-brand-wrap">
              <Image
                className="brand-monogram-img footer-monogram"
                src="/logo-monogram.png"
                alt="IJW Monograma"
                width={140}
                height={85}
                unoptimized
              />
              <div className="brand-text-block footer-brand-text">
                <span className="brand-name footer-brand-name">ISIDORA JARA WEISSER</span>
                <span className="brand-title footer-brand-title">ABOGADA · MEDIADORA FAMILIAR</span>
              </div>
            </div>
          </Link>

          <p>
            Orientación y mediación legal enfocada en acuerdos duraderos, protección integral de niños, niñas y adolescentes, y soluciones humanas ante conflictos familiares en Chile.
          </p>

          <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span className="badge-pill light">Atención Online Todo Chile</span>
            <span className="badge-pill light">Vía Google Meet & Teams</span>
          </div>
        </div>

        <div>
          <h4 className="footer-col-title">Navegación</h4>
          <ul className="footer-links">
            <li><Link href="/#sobre-mi">Sobre la Abogada</Link></li>
            <li><Link href="/#orientador">Orientador de Trámites</Link></li>
            <li><Link href="/#servicios">Áreas de Práctica</Link></li>
            <li><Link href="/#comparativa">Mediación vs Juicio</Link></li>
            <li><Link href="/#proceso">Cómo Trabajamos</Link></li>
            <li><Link href="/#preguntas">Preguntas Frecuentes</Link></li>
            <li><Link href="/#agendar">Agendar Consulta</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">Contacto Directo</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <span style={{ color: 'var(--gold-light)' }}>📍</span>
              <div>
                <strong>Ubicación:</strong>
                <div>{practice.location} · Modalidad online a todo el país.</div>
              </div>
            </div>
            <div className="footer-contact-item">
              <span style={{ color: 'var(--gold-light)' }}>🕒</span>
              <div>
                <strong>Horario de atención:</strong>
                <div>{practice.hours}</div>
              </div>
            </div>
            <div className="footer-contact-item">
              <span style={{ color: 'var(--gold-light)' }}>💬</span>
              <div>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" style={{ color: '#25d366', fontWeight: 600 }}>
                  WhatsApp: {contact.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span style={{ color: 'var(--gold-light)' }}>✉️</span>
              <div>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span style={{ color: 'var(--gold-light)' }}>📷</span>
              <div>
                <a href={contact.instagram} target="_blank" rel="noreferrer">
                  {contact.instagramDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom-bar">
        <span>© {new Date().getFullYear()} {practice.name}. Todos los derechos reservados.</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/privacidad" style={{ color: 'rgba(255,255,255,0.6)' }}>Política de Privacidad</Link>
          <span>Registro de Mediadores Familiares de Chile</span>
        </div>
        <span>La información expuesta es de carácter orientador y no sustituye el patrocinio judicial formal.</span>
      </div>
    </footer>
  )
}
