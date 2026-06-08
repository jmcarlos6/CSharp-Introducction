import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: '🏠 Inicio', end: true },
  { to: '/modulo-01', label: '📖 Introducción' },
  { to: '/modulo-02', label: '🔢 Fundamentos' },
  { to: '/modulo-03', label: '🔀 Control' },
  { to: '/modulo-04', label: '⚙️ Funciones' },
  { to: '/modulo-05', label: '🏗️ POO' },
  { to: '/modulo-06', label: '📦 Colecciones' },
  { to: '/modulo-07', label: '⚠️ Excepciones' },
  { to: '/modulo-08', label: '💻 Ejercicios' },
  { to: '/about', label: '👨‍💻 Autor' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  return (
    <nav ref={navRef}>
      <div className="nav-container">
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          <span className="nav-logo-icon">💻</span>
          <span>Curso C#</span>
        </NavLink>

        <button
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          aria-label="Menú"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={menuOpen ? 'active' : ''}>
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
