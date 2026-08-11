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
      <nav className={open ? 'open' : ''} aria-label="Navegación principal"><Link href="/#nosotras" onClick={close}>El estudio</Link><Link href="/#servicios" onClick={close}>Servicios</Link><Link href="/#proceso" onClick={close}>Cómo trabajamos</Link><Link href="/#preguntas" onClick={close}>Preguntas</Link><a className="nav-cta" href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hola, quisiera solicitar una consulta de derecho de familia.')}`} target="_blank" rel="noreferrer" onClick={close}>WhatsApp</a></nav>
    </div>
  </header>
}
