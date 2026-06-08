import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCourse } from '../context/CourseContext';

const modules = [
  { num: 1, icon: '📖', title: 'Módulo 1', subtitle: 'Introducción a C#', desc: '¿Qué es C#? Instalación del entorno y tu primer programa "Hola Mundo".', to: '/modulo-01' },
  { num: 2, icon: '🔢', title: 'Módulo 2', subtitle: 'Fundamentos', desc: 'Variables, tipos de datos, operadores aritméticos, lógicos y de comparación.', to: '/modulo-02' },
  { num: 3, icon: '🔀', title: 'Módulo 3', subtitle: 'Estructuras de Control', desc: 'Condicionales (if, switch) y bucles (for, while, foreach).', to: '/modulo-03' },
  { num: 4, icon: '⚙️', title: 'Módulo 4', subtitle: 'Funciones y Métodos', desc: 'Creación de funciones, parámetros, valores de retorno y recursión.', to: '/modulo-04' },
  { num: 5, icon: '🏗️', title: 'Módulo 5', subtitle: 'POO Básico', desc: 'Clases, objetos, encapsulamiento, herencia y polimorfismo.', to: '/modulo-05' },
  { num: 6, icon: '📦', title: 'Módulo 6', subtitle: 'Colecciones', desc: 'Arrays, listas, diccionarios y consultas con LINQ.', to: '/modulo-06' },
  { num: 7, icon: '⚠️', title: 'Módulo 7', subtitle: 'Excepciones', desc: 'Manejo de errores con try-catch y excepciones personalizadas.', to: '/modulo-07' },
  { num: 8, icon: '💻', title: 'Módulo 8', subtitle: 'Ejercicios Prácticos', desc: 'Proyectos completos para poner en práctica todo lo aprendido.', to: '/modulo-08' },
];

export default function Home() {
  const { courseUnlocked, unlockCourse, canAccessModule } = useCourse();
  const navigate = useNavigate();
  const [codeInput, setCodeInput] = useState('');
  const [codeError, setCodeError] = useState('');
  const [showCodeForm, setShowCodeForm] = useState(false);

  const handleStartCourse = () => {
    if (courseUnlocked) {
      navigate('/modulo-01');
    } else {
      setShowCodeForm(true);
    }
  };

  const handleUnlock = () => {
    const ok = unlockCourse(codeInput.trim());
    if (ok) {
      setShowCodeForm(false);
      navigate('/modulo-01');
    } else {
      setCodeError('Código incorrecto. Intenta de nuevo.');
    }
  };

  return (
    <>
      <header>
        <h1>📚 Curso de Programación en C#</h1>
        <p>Guía completa para principiantes</p>
      </header>
      <Navbar />
      <main>
        <div className="container">
          <h2>🎯 Objetivo del Curso</h2>
          <p>Al finalizar este curso, serás capaz de:</p>
          <ul>
            <li>Comprender los fundamentos de la programación</li>
            <li>Escribir programas funcionales en C#</li>
            <li>Aplicar conceptos de Programación Orientada a Objetos</li>
            <li>Resolver problemas utilizando lógica de programación</li>
          </ul>
        </div>

        <h2>📋 Contenido del Curso</h2>

        <div className="module-grid">
          {modules.map(({ num, icon, title, subtitle, desc, to }) => {
            const accessible = canAccessModule(num);
            return (
              <div className={`module-card${!accessible ? ' locked' : ''}`} key={num}>
                <h3>{icon} {title}</h3>
                <h4>{subtitle}</h4>
                <p>{desc}</p>
                {accessible ? (
                  <Link to={to}>Comenzar →</Link>
                ) : (
                  <span className="lock-badge">🔒 Completa el módulo anterior</span>
                )}
              </div>
            );
          })}
        </div>

        <div className="container">
          <h2>🛠️ Requisitos Previos</h2>
          <ul>
            <li>Computadora con Windows, macOS o Linux</li>
            <li>Conexión a internet para descargar herramientas</li>
            <li>¡Ganas de aprender!</li>
          </ul>

          <h2>🚀 ¿Cómo usar este curso?</h2>
          <ol>
            <li><strong>Lee cada módulo en orden</strong> - Los conceptos se construyen uno sobre otro</li>
            <li><strong>Escribe el código tú mismo</strong> - No solo copies y pegues, escríbelo</li>
            <li><strong>Experimenta</strong> - Modifica los ejemplos y observa qué sucede</li>
            <li><strong>Practica</strong> - Realiza los ejercicios al final de cada módulo</li>
          </ol>

          <div className="note note-info">
            <strong>💡 Consejo:</strong> La programación se aprende practicando. 30 minutos diarios son mejores que 5 horas una vez a la semana.
          </div>
        </div>

        {showCodeForm && (
          <div className="container">
            <h2>🔐 Ingresa el código de acceso</h2>
            <input
              type="text"
              placeholder="Código de seguridad"
              value={codeInput}
              onChange={(e) => { setCodeInput(e.target.value); setCodeError(''); }}
              style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid #d1d5db', marginRight: '1rem' }}
            />
            <button className="btn btn-primary" onClick={handleUnlock}>Ingresar</button>
            {codeError && <p style={{ color: 'red', marginTop: '0.5rem' }}>{codeError}</p>}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn btn-primary" onClick={handleStartCourse}>
            ¡Comenzar el Curso! →
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
