export default function Footer({ moduleName }) {
  return (
    <footer>
      <p>
        Curso de C# para Principiantes
        {moduleName ? ` | ${moduleName}` : ' | Creado con ❤️ para aprender programación'}
      </p>
    </footer>
  );
}
