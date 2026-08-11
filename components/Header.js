import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { contact, practice } from '../site.config'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="site-header">
    <div className="container header-inner">
      <Link className="brand logo-brand" href="/" onClick={close} aria-label={`${practice.name}, abogada, inicio`}><Image className="brand-logo" src="/logo-isidora-jara.png" alt="Isidora Jara Weisser, abogada" width={1100} height={576} priority /></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menú"><i></i><i></i></button>
      <nav className={open ? 'open' : ''} aria-label="Navegación principal"><Link href="/#nosotras" onClick={close}>El estudio</Link><Link href="/#servicios" onClick={close}>Servicios</Link><Link href="/#proceso" onClick={close}>Cómo trabajamos</Link><Link href="/#preguntas" onClick={close}>Preguntas</Link><a className="nav-cta mail-cta" href="/#agendar" onClick={close}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> Agenda tu consulta</a></nav>
      <svg aria-hidden="true" viewBox="0 0 100 1000" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%) rotate(-90deg)', height: '1100px', width: 'auto', opacity: 0.025, pointerEvents: 'none', zIndex: -1, color: 'var(--green)' }} fill="currentColor">
        <path d="M40 0 C 50 100, 30 200, 45 300 C 60 400, 40 500, 50 600 C 60 700, 30 800, 40 900 C 50 950, 20 980, 25 1000 L 15 1000 C 10 980, 30 950, 20 900 C 10 800, 40 700, 30 600 C 20 500, 40 400, 25 300 C 10 200, 30 100, 20 0 Z" />
      </svg>
    </div>
  </header>
}
