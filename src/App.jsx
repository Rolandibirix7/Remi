import React from 'react';
import { ArrowRight, BellRing, Check, Clock3, HeartHandshake, ShieldCheck, Smartphone, Menu, X, Instagram, Linkedin, Github } from 'lucide-react';

const APK_FILE = '/remi.apk'; // Coloca el archivo APK dentro de public/ con este nombre.

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#inicio" aria-label="Remi, inicio">
          <img src="/logo-remi.jpeg" alt="" />
          <span>Remi</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Cómo funciona</a>
          <a href="#beneficios" onClick={() => setMenuOpen(false)}>Beneficios</a>
          <a className="nav-cta" href="#descarga" onClick={() => setMenuOpen(false)}>Descargar <ArrowRight size={16}/></a>
        </div>
      </nav>

      <section className="hero wrap" id="inicio">
        <div className="hero-copy">
          <h1>Tu salud tiene horarios. <span>Remi te ayuda a cumplirlos.</span></h1>
          <p className="hero-lead">Remi conecta a pacientes y cuidadores para organizar horarios de medicación, confirmar cada toma en tiempo real y generar alertas cuando una dosis queda pendiente.</p>
          <div className="hero-actions">
            <a className="primary-btn" href={APK_FILE} download="Remi.apk">Descargar Remi <ArrowRight size={19}/></a>
            <a className="text-link" href="#como-funciona">Conoce cómo funciona <span>↓</span></a>
          </div>
          <div className="trust-line"><ShieldCheck size={17}/> Recordatorios claros. Más tranquilidad para todos.</div>
        </div>
        <div className="hero-visual">
          <div className="visual-glow" />
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <img className="banner-art" src="/banner-remi.png" alt="Vista previa de Remi en un teléfono, con recordatorios de medicamentos y aviso al cuidador" />
          <div className="floating-note"><span className="note-icon"><BellRing size={18}/></span><span><b>Tu próxima toma</b><small>Un recordatorio justo a tiempo.</small></span><span className="note-check"><Check size={17}/></span></div>
        </div>
      </section>

      <section className="stats wrap" aria-label="Ventajas de Remi">
        <div><span className="stat-icon"><Clock3/></span><span><b>A tiempo</b><small>Recordatorios para cada toma</small></span></div>
        <div><span className="stat-icon"><HeartHandshake/></span><span><b>Acompañamiento</b><small>Cuidador informado</small></span></div>
        <div><span className="stat-icon"><ShieldCheck/></span><span><b>Más control</b><small>Historial de cumplimiento</small></span></div>
      </section>

      <section className="features section-pad" id="beneficios">
        <div className="wrap">
          <div className="section-heading">
            <span className="kicker">CUIDAR TAMBIÉN ES RECORDAR</span>
            <h2>Un pequeño recordatorio.<br/><span>Una gran tranquilidad.</span></h2>
            <p>Remi convierte la rutina de tus medicamentos en algo más sencillo de organizar y compartir.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon mint"><BellRing/></div>
              <h3>Alarmas a la hora exacta</h3>
              <p>Configura horarios de medicación y recibe avisos cuando llega el momento de cada dosis.</p>
              <span className="card-number">01</span>
            </article>
            <article className="feature-card featured">
              <div className="feature-icon white"><HeartHandshake/></div>
              <h3>Tu cuidador está al tanto</h3>
              <p>Vincula tu cuenta con la de un familiar o cuidador para que pueda supervisar las tomas y recibir alertas automáticas si una dosis no se confirma a tiempo.</p>
              <span className="card-number">02</span>
            </article>
            <article className="feature-card">
              <div className="feature-icon mint"><Clock3/></div>
              <h3>Historial y estadísticas</h3>
              <p>Revisa las confirmaciones y mantén un seguimiento más claro del cumplimiento del tratamiento.</p>
              <span className="card-number">03</span>
            </article>
          </div>
        </div>
      </section>

      <section className="how wrap section-pad" id="como-funciona">
        <div className="how-image">
          <img src="/logo-remi.jpeg" alt="Logo de Remi: cápsula, reloj y campana" />
          <div className="image-caption"><span className="pulse" /> Tu rutina, más organizada</div>
        </div>
        <div className="how-copy">
          <span className="kicker">FÁCIL DE INTEGRAR A TU DÍA</span>
          <h2>Más tranquilidad,<br/>paso a paso.</h2>
          <ol className="steps">
            <li><span>1</span><div><b>Organiza tus medicamentos</b><p>El paciente y su cuidador vinculan sus cuentas y organizan los horarios del tratamiento.</p></div></li>
            <li><span>2</span><div><b>Recibe una notificación</b><p>Remi te avisa cuándo es momento de tomar tu medicamento.</p></div></li>
            <li><span>3</span><div><b>Confirma y mantén el seguimiento</b><p>La confirmación se refleja para el cuidador; si no llega a tiempo, Remi genera una alerta.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="download-section" id="descarga">
        <div className="download-pattern" />
        <div className="wrap download-inner">
          <div className="download-copy">
            <span className="kicker light">REMl · CUIDADO DIARIO</span>
            <h2>Que no se te pase<br/>ni una toma.</h2>
            <p>Muy pronto podrás llevar Remi contigo en Android. Prepárate para una rutina más acompañada.</p>
            <a className="download-btn" href={APK_FILE} download="Remi.apk"><Smartphone size={20}/> Descargar APK para Android <ArrowRight size={19}/></a>
            <small className="platform-note">Descarga directa del instalador APK para Android</small>
          </div>
          <div className="download-badge"><img src="/logo-remi.jpeg" alt="Remi" /><span>REMI</span><b>Tu aliado para<br/>recordar cada toma.</b><div className="badge-dots">✳　✳　✳</div></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content wrap">
          <div className="footer-about">
            <a className="brand footer-brand" href="#inicio"><img src="/logo-remi.jpeg" alt=""/><span>Remi</span></a>
            <p>Más tranquilidad en cada tratamiento. Conectamos a pacientes y cuidadores para que ninguna toma pase desapercibida.</p>
          </div>
          <div className="footer-links">
            <span className="footer-label">ENLACES RÁPIDOS</span>
            <a href="#inicio">Inicio</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#descarga">Descargar</a>
          </div>
          <div className="footer-social">
            <span className="footer-label">SÍGUENOS</span>
            <div className="social-icons" aria-label="Redes sociales">
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom wrap">
          <span>© {new Date().getFullYear()} Remi. Todos los derechos reservados.</span>
          <span>Hecho para cuidar mejor.</span>
        </div>
      </footer>
    </main>
  );
}

export default App;