import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { contact, practice } from '../site.config'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Logo Oficial de Alta Definición (Emblema Monograma IJW + Tipografía Vectorial Nítida) */}
        <Link className="logo-brand" href="/" onClick={close} aria-label={`${practice.name}, inicio`}>
          <div className="brand-header-wrap">
            <Image
              className="brand-monogram-img"
              src="/logo-monogram.png"
              alt="IJW Monograma - Isidora Jara Weisser"
              width={160}
              height={98}
              priority
              unoptimized
            />
            <div className="brand-text-block">
              <span className="brand-name">ISIDORA JARA WEISSER</span>
              <span className="brand-title">ABOGADA · MEDIADORA FAMILIAR</span>
            </div>
          </div>
        </Link>

        {/* Navegación Central Ordenada */}
        <nav className={`nav-menu ${open ? 'open' : ''}`} aria-label="Navegación principal">
          <Link className="nav-link" href="/#sobre-mi" onClick={close}>
            Sobre Isidora
          </Link>
          <Link className="nav-link" href="/#orientador" onClick={close}>
            Orientador Legal
          </Link>
          <Link className="nav-link" href="/#servicios" onClick={close}>
            Servicios
          </Link>
          <Link className="nav-link" href="/#comparativa" onClick={close}>
            Mediación vs Juicio
          </Link>
          <Link className="nav-link" href="/#preguntas" onClick={close}>
            Preguntas
          </Link>

          {/* Acciones para el menú móvil */}
          <div className="mobile-drawer-actions">
            <a
              className="button button-whatsapp"
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hola Isidora, quisiera coordinar una consulta.')}`}
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              <span>💬</span> WhatsApp Directo
            </a>
            <a
              className="button button-gold"
              href="/#agendar"
              onClick={close}
              style={{ marginTop: '10px', width: '100%' }}
            >
              Agendar Consulta <span>→</span>
            </a>
          </div>
        </nav>

        {/* Acciones de la Cabecera (Derecha) */}
        <div className="nav-actions">
          <a
            className="nav-phone-quick"
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hola Isidora, quisiera hacer una consulta sobre mediación o derecho de familia.')}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Hablar por WhatsApp"
          >
            <span style={{ color: '#25d366', fontSize: '15px' }}>●</span> WhatsApp
          </a>

          <a className="button button-gold button-header-cta" href="/#agendar">
            Agendar Consulta <span>→</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ opacity: open ? 0 : 1 }}></span>
            <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </button>
        </div>
      </div>
    </header>
  )
}
