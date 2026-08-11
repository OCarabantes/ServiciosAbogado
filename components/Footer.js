import Link from 'next/link'
import Image from 'next/image'
import { contact, practice } from '../site.config'

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div><Link className="brand footer-brand logo-brand" href="/" aria-label={`${practice.name}, inicio`}><Image className="brand-logo" src="/logo-isidora-jara.png" alt="Isidora Jara Weisser, abogada" width={1100} height={576} /></Link><p>Orientación legal clara, cercana y confidencial para asuntos de familia.</p></div>
    <div><h3>Navegación</h3><Link href="/#nosotras">El estudio</Link><Link href="/#servicios">Servicios</Link><Link href="/#proceso">Cómo trabajamos</Link><Link href="/#agendar">Agendar consulta</Link></div>
    <div><h3>Contacto</h3><a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={contact.instagram} target="_blank" rel="noreferrer">Instagram · {contact.instagramDisplay}</a><span>{practice.location}</span><span>{practice.hours}</span></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {practice.name}. Todos los derechos reservados.</span><Link href="/privacidad">Privacidad</Link><span>La información de este sitio es general y no constituye asesoría legal.</span></div></footer>
}
