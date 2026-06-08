import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout
      title=""
      footerName="Creado por Ing. Javier Carlos Mateos"
    >
      <section className="author-hero" style={{
        background: 'var(--gradient-primary)',
        padding: '5rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-xl)',
        marginBottom: '2rem',
      }}>
        <div style={{
          width: 150, height: 150, borderRadius: '50%',
          background: 'linear-gradient(135deg, #fff 0%, #f3f4f6 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 2rem', fontSize: '4rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          border: '4px solid rgba(255,255,255,0.3)',
        }}>
          👨‍💻
        </div>
        <h1 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.75rem,4vw,2.5rem)', marginBottom: '0.5rem' }}>
          Ing. Javier Carlos Mateos
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', fontWeight: 500 }}>
          Desarrollador de Software Full Stack
        </p>
      </section>

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div className="container">
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, textAlign: 'center', marginBottom: '2rem' }}>
            Apasionado por la tecnología y el desarrollo de aplicaciones web.
            Con experiencia en el desarrollo Full Stack, me dedico a crear soluciones
            tecnológicas innovadoras y a compartir conocimientos con la comunidad de desarrolladores.
          </p>

          <div style={{
            background: 'linear-gradient(135deg,rgba(99,102,241,.05),rgba(139,92,246,.05))',
            borderLeft: '4px solid var(--primary)',
            padding: '1.5rem 2rem',
            borderRadius: '0 var(--radius-lg) var(--radius-lg) 0',
            margin: '2rem 0',
          }}>
            <p style={{ fontStyle: 'italic', color: 'var(--gray-700)', fontSize: '1.1rem', margin: 0 }}>
              "La programación no es solo escribir código, es resolver problemas y crear soluciones
              que impacten positivamente en la vida de las personas."
            </p>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Áreas de Especialización</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: '1rem' }}>
              {[
                { icon: '💻', label: 'C# / .NET' },
                { icon: '🌐', label: 'Web Apps' },
                { icon: '⚙️', label: 'Backend' },
                { icon: '🎨', label: 'Frontend' },
                { icon: '🗄️', label: 'Bases de Datos' },
                { icon: '☁️', label: 'Cloud' },
              ].map(({ icon, label }) => (
                <div key={label} className="skill-badge" style={{
                  background: 'linear-gradient(135deg,var(--gray-50),var(--white))',
                  border: '1px solid var(--gray-200)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1rem', textAlign: 'center',
                  transition: 'all var(--transition)',
                }}>
                  <span style={{ display: 'block', fontSize: '2rem', marginBottom: '0.5rem' }}>{icon}</span>
                  <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-700)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--gray-200)' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Sobre este Curso</h3>
            <p style={{ textAlign: 'center', color: 'var(--gray-500)' }}>
              Este curso de C# para principiantes fue creado con el objetivo de proporcionar
              una guía clara y práctica para aquellos que desean iniciar su camino en la programación.
              Cada módulo ha sido diseñado pensando en la experiencia de aprendizaje,
              con ejemplos reales y ejercicios prácticos.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/" className="btn btn-primary">← Volver al Curso</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
