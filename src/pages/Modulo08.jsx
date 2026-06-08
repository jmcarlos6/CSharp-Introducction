import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ModuleGuard from '../components/ModuleGuard';
import Quiz from '../components/Quiz';

const codeCalculadora = `<code><span class="keyword">class</span> <span class="class-name">Program</span>
{
    <span class="keyword">static void</span> <span class="method">Main</span>()
    {
        <span class="keyword">bool</span> continuar = <span class="keyword">true</span>;
        <span class="keyword">while</span> (continuar)
        {
            Console.<span class="method">WriteLine</span>(<span class="string">"\\n=== CALCULADORA ==="</span>);
            Console.<span class="method">Write</span>(<span class="string">"Número 1: "</span>);
            <span class="keyword">if</span> (!<span class="keyword">double</span>.<span class="method">TryParse</span>(Console.<span class="method">ReadLine</span>(), <span class="keyword">out double</span> num1))
                { Console.<span class="method">WriteLine</span>(<span class="string">"Inválido"</span>); <span class="keyword">continue</span>; }

            Console.<span class="method">Write</span>(<span class="string">"Operador (+, -, *, /): "</span>);
            <span class="keyword">string</span> op = Console.<span class="method">ReadLine</span>();

            Console.<span class="method">Write</span>(<span class="string">"Número 2: "</span>);
            <span class="keyword">if</span> (!<span class="keyword">double</span>.<span class="method">TryParse</span>(Console.<span class="method">ReadLine</span>(), <span class="keyword">out double</span> num2))
                { Console.<span class="method">WriteLine</span>(<span class="string">"Inválido"</span>); <span class="keyword">continue</span>; }

            <span class="keyword">double</span> resultado = op <span class="keyword">switch</span>
            {
                <span class="string">"+"</span> =&gt; num1 + num2,
                <span class="string">"-"</span> =&gt; num1 - num2,
                <span class="string">"*"</span> =&gt; num1 * num2,
                <span class="string">"/"</span> =&gt; num2 != <span class="number">0</span> ? num1 / num2 : <span class="keyword">throw new</span> DivideByZeroException(),
                _ =&gt; <span class="keyword">throw new</span> ArgumentException(<span class="string">"Operador no válido"</span>)
            };
            Console.<span class="method">WriteLine</span>(<span class="string">$"Resultado: {resultado}"</span>);
            Console.<span class="method">Write</span>(<span class="string">"¿Continuar? (s/n): "</span>);
            continuar = Console.<span class="method">ReadLine</span>()?.ToLower() == <span class="string">"s"</span>;
        }
    }
}</code>`;

const codeAdivinanza = `<code><span class="keyword">class</span> <span class="class-name">JuegoAdivinanza</span>
{
    <span class="keyword">static void</span> <span class="method">Main</span>()
    {
        Random rnd = <span class="keyword">new</span> Random();
        <span class="keyword">int</span> secreto = rnd.<span class="method">Next</span>(<span class="number">1</span>, <span class="number">101</span>);
        <span class="keyword">int</span> intentos = <span class="number">0</span>, maxIntentos = <span class="number">7</span>;

        Console.<span class="method">WriteLine</span>(<span class="string">"¡Adivina el número del 1 al 100!"</span>);

        <span class="keyword">while</span> (intentos &lt; maxIntentos)
        {
            Console.<span class="method">Write</span>(<span class="string">$"Intento {intentos + <span class="number">1</span>}/{maxIntentos}: "</span>);
            <span class="keyword">if</span> (!<span class="keyword">int</span>.<span class="method">TryParse</span>(Console.<span class="method">ReadLine</span>(), <span class="keyword">out int</span> intento)) <span class="keyword">continue</span>;
            intentos++;

            <span class="keyword">if</span> (intento == secreto)
                { Console.<span class="method">WriteLine</span>(<span class="string">"¡Correcto! 🎉"</span>); <span class="keyword">return</span>; }
            Console.<span class="method">WriteLine</span>(intento &lt; secreto ? <span class="string">"Mayor..."</span> : <span class="string">"Menor..."</span>);
        }
        Console.<span class="method">WriteLine</span>(<span class="string">$"Era {secreto}. ¡Suerte la próxima!"</span>);
    }
}</code>`;

const codeGestorTareas = `<code><span class="keyword">class</span> <span class="class-name">Tarea</span>
{
    <span class="keyword">public string</span> Nombre { <span class="keyword">get</span>; <span class="keyword">set</span>; }
    <span class="keyword">public bool</span> Completada { <span class="keyword">get</span>; <span class="keyword">set</span>; }
    <span class="keyword">public</span> <span class="method">Tarea</span>(<span class="keyword">string</span> nombre) { Nombre = nombre; Completada = <span class="keyword">false</span>; }
}

<span class="keyword">class</span> <span class="class-name">GestorTareas</span>
{
    <span class="keyword">static</span> List&lt;<span class="class-name">Tarea</span>&gt; tareas = <span class="keyword">new</span> List&lt;<span class="class-name">Tarea</span>&gt;();

    <span class="keyword">static void</span> <span class="method">Main</span>()
    {
        <span class="keyword">while</span> (<span class="keyword">true</span>)
        {
            Console.<span class="method">WriteLine</span>(<span class="string">"1.Agregar 2.Completar 3.Listar 4.Salir"</span>);
            <span class="keyword">switch</span> (Console.<span class="method">ReadLine</span>())
            {
                <span class="keyword">case</span> <span class="string">"1"</span>:
                    Console.<span class="method">Write</span>(<span class="string">"Tarea: "</span>);
                    tareas.<span class="method">Add</span>(<span class="keyword">new</span> <span class="class-name">Tarea</span>(Console.<span class="method">ReadLine</span>()));
                    <span class="keyword">break</span>;
                <span class="keyword">case</span> <span class="string">"2"</span>:
                    <span class="comment">// marcar completada...</span>
                    <span class="keyword">break</span>;
                <span class="keyword">case</span> <span class="string">"3"</span>:
                    <span class="keyword">foreach</span> (<span class="keyword">var</span> t <span class="keyword">in</span> tareas)
                        Console.<span class="method">WriteLine</span>(<span class="string">$"[{(t.Completada ? "X" : " ")}] {t.Nombre}"</span>);
                    <span class="keyword">break</span>;
                <span class="keyword">default</span>: <span class="keyword">return</span>;
            }
        }
    }
}</code>`;

const quizQuestions = [
  {
    question: '1. ¿Qué comando crea un proyecto de consola con dotnet CLI?',
    check: (a) => a.includes('dotnet new console') || (a.includes('dotnet') && a.includes('new')),
  },
  {
    question: '2. ¿Qué método usamos para leer texto desde la consola?',
    check: (a) => a.includes('readline'),
  },
  {
    question: '3. ¿Qué método convierte una cadena a entero?',
    check: (a) => a.includes('int.parse') || (a.includes('parse') && a.includes('int')),
  },
];

export default function Modulo08() {
  return (
    <ModuleGuard moduleNum={8}>
      <Layout
        title="Módulo 8: Ejercicios Prácticos"
        subtitle="Proyectos para poner en práctica todo lo aprendido"
        footerName="Módulo 8: Ejercicios"
      >
        <div className="container">
          <h2>🎯 Objetivos de este módulo</h2>
          <ul>
            <li>Aplicar todos los conceptos en proyectos reales</li>
            <li>Desarrollar pensamiento algorítmico</li>
            <li>Crear programas de consola completos</li>
          </ul>
        </div>

        <div className="container">
          <h2>📋 Índice de Ejercicios</h2>
          <table>
            <thead><tr><th>Nivel</th><th>Ejercicio</th><th>Conceptos</th></tr></thead>
            <tbody>
              <tr><td>🟢 Básico</td><td>Calculadora Completa</td><td>Funciones, switch, while</td></tr>
              <tr><td>🟡 Intermedio</td><td>Juego Adivinanza</td><td>Random, TryParse, loops</td></tr>
              <tr><td>🔴 Avanzado</td><td>Gestor de Tareas</td><td>POO, List&lt;T&gt;, excepciones</td></tr>
            </tbody>
          </table>
        </div>

        <div className="container">
          <h2>🟢 Ejercicio 1: Calculadora Completa</h2>
          <CodeBlock html={codeCalculadora} />
        </div>

        <div className="container">
          <h2>🟡 Ejercicio 2: Juego de Adivinanza</h2>
          <CodeBlock html={codeAdivinanza} />
        </div>

        <div className="container">
          <h2>🔴 Ejercicio 3: Gestor de Tareas</h2>
          <CodeBlock html={codeGestorTareas} />
        </div>

        <div className="container">
          <h2>💡 Consejos Finales</h2>
          <ul>
            <li><strong>Practica todos los días</strong> — Escribe al menos un programa por día</li>
            <li><strong>Lee código ajeno</strong> — Aprende viendo cómo otros resuelven problemas</li>
            <li><strong>No memorizaces</strong> — Entiende el concepto, busca la sintaxis cuando la necesites</li>
            <li><strong>Comete errores</strong> — Los errores son parte del aprendizaje</li>
          </ul>
        </div>

        <div className="container">
          <h2>📚 Recursos para Continuar</h2>
          <ul>
            <li>Documentación oficial: <a href="https://docs.microsoft.com/es-es/dotnet/csharp/" target="_blank" rel="noreferrer">docs.microsoft.com/es-es/dotnet/csharp</a></li>
            <li>Microsoft Learn: <a href="https://learn.microsoft.com/es-es/dotnet/csharp/" target="_blank" rel="noreferrer">learn.microsoft.com/es-es/dotnet/csharp</a></li>
          </ul>
        </div>

        <Quiz moduleNum={8} questions={quizQuestions} />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <Link to="/modulo-07" className="btn btn-secondary">← Anterior: Excepciones</Link>
          <Link to="/" className="btn btn-primary">🏠 Volver al Inicio</Link>
        </div>
      </Layout>
    </ModuleGuard>
  );
}
