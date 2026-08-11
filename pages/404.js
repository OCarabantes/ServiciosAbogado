import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function NotFound(){return <><Header/><main className="not-found"><div><p className="eyebrow">Página no encontrada</p><h1>404</h1><p>La dirección que buscas no está disponible.</p><Link className="button button-dark" href="/">Volver al inicio</Link></div></main><Footer/></>}
