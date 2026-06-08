import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ModuleGuard from '../components/ModuleGuard';
import Quiz from '../components/Quiz';

const codeFuncBasica = `<code><span class="keyword">static void</span> <span class="method">Saludar</span>()
{
    Console.<span class="method">WriteLine</span>(<span class="string">"¡Hola! Bienvenido."</span>);
}

<span class="keyword">static void</span> <span class="method">Main</span>()
{
    <span class="method">Saludar</span>();  <span class="comment">// Llamar la función</span>
    <span class="method">Saludar</span>();
}</code>`;

const codeFuncParams = `<code><span class="keyword">static void</span> <span class="method">SaludarPersona</span>(<span class="keyword">string</span> nombre)
{
    Console.<span class="method">WriteLine</span>(<span class="string">$"¡Hola, {nombre}!"</span>);
}

<span class="keyword">static void</span> <span class="method">MostrarInfo</span>(<span class="keyword">string</span> nombre, <span class="keyword">int</span> edad)
{
    Console.<span class="method">WriteLine</span>(<span class="string">$"Nombre: {nombre}, Edad: {edad}"</span>);
}

<span class="method">SaludarPersona</span>(<span class="string">"Ana"</span>);
<span class="method">MostrarInfo</span>(<span class="string">"María"</span>, <span class="number">25</span>);</code>`;

const codeFuncRetorno = `<code><span class="keyword">static int</span> <span class="method">Sumar</span>(<span class="keyword">int</span> a, <span class="keyword">int</span> b)
{
    <span class="keyword">return</span> a + b;
}

<span class="keyword">static bool</span> <span class="method">EsPar</span>(<span class="keyword">int</span> numero)
{
    <span class="keyword">return</span> numero % <span class="number">2</span> == <span class="number">0</span>;
}

<span class="keyword">int</span> resultado = <span class="method">Sumar</span>(<span class="number">5</span>, <span class="number">3</span>);  <span class="comment">// 8</span>
Console.<span class="method">WriteLine</span>(<span class="string">$"¿8 es par? {<span class="method">EsPar</span>(<span class="number">8</span>)}"</span>);</code>`;

const codeCalculadora = `<code><span class="keyword">class</span> <span class="class-name">Calculadora</span>
{
    <span class="keyword">static void</span> <span class="method">Main</span>()
    {
        <span class="keyword">double</span> a = <span class="number">10</span>, b = <span class="number">3</span>;
        Console.<span class="method">WriteLine</span>(<span class="string">$"Suma: {<span class="method">Sumar</span>(a, b)}"</span>);
        Console.<span class="method">WriteLine</span>(<span class="string">$"Resta: {<span class="method">Restar</span>(a, b)}"</span>);
    }

    <span class="keyword">static double</span> <span class="method">Sumar</span>(<span class="keyword">double</span> a, <span class="keyword">double</span> b) =&gt; a + b;
    <span class="keyword">static double</span> <span class="method">Restar</span>(<span class="keyword">double</span> a, <span class="keyword">double</span> b) =&gt; a - b;
    <span class="keyword">static double</span> <span class="method">Multiplicar</span>(<span class="keyword">double</span> a, <span class="keyword">double</span> b) =&gt; a * b;
    <span class="keyword">static double</span> <span class="method">Dividir</span>(<span class="keyword">double</span> a, <span class="keyword">double</span> b) =&gt; b != <span class="number">0</span> ? a / b : <span class="number">0</span>;
}</code>`;

const codeOpcionales = `<code><span class="keyword">static void</span> <span class="method">ImprimirMensaje</span>(<span class="keyword">string</span> mensaje, <span class="keyword">int</span> veces = <span class="number">1</span>, <span class="keyword">string</span> prefijo = <span class="string">"-"</span>)
{
    <span class="keyword">for</span> (<span class="keyword">int</span> i = <span class="number">0</span>; i &lt; veces; i++)
        Console.<span class="method">WriteLine</span>(<span class="string">$"{prefijo} {mensaje}"</span>);
}

<span class="method">ImprimirMensaje</span>(<span class="string">"Hola"</span>);           <span class="comment">// usa defaults</span>
<span class="method">ImprimirMensaje</span>(<span class="string">"Hola"</span>, <span class="number">3</span>);        <span class="comment">// repite 3 veces</span>
<span class="method">ImprimirMensaje</span>(<span class="string">"Hola"</span>, <span class="number">2</span>, <span class="string">"*"</span>);  <span class="comment">// personaliza todo</span></code>`;

const codeRecursion = `<code><span class="keyword">static long</span> <span class="method">Factorial</span>(<span class="keyword">int</span> n)
{
    <span class="keyword">if</span> (n &lt;= <span class="number">1</span>) <span class="keyword">return</span> <span class="number">1</span>;  <span class="comment">// caso base</span>
    <span class="keyword">return</span> n * <span class="method">Factorial</span>(n - <span class="number">1</span>);
}

Console.<span class="method">WriteLine</span>(<span class="string">$"5! = {<span class="method">Factorial</span>(<span class="number">5</span>)}"</span>);  <span class="comment">// 120</span></code>`;

const quizQuestions = [
  {
    question: '1. ¿Qué palabra clave define una función que no retorna valor?',
    check: (a) => a.includes('void'),
  },
  {
    question: '2. ¿Cómo declaras un parámetro string llamado nombre? (ej: string nombre)',
    check: (a) => a.includes('string') && a.includes('nombre'),
  },
  {
    question: '3. ¿Qué palabra clave usas para devolver un valor desde una función?',
    check: (a) => a.includes('return'),
  },
];

export default function Modulo04() {
  return (
    <ModuleGuard moduleNum={4}>
      <Layout
        title="Módulo 4: Funciones y Métodos"
        subtitle="Organiza y reutiliza tu código"
        footerName="Módulo 4: Funciones y Métodos"
      >
        <div className="container">
          <h2>🎯 Objetivos de este módulo</h2>
          <ul>
            <li>Entender qué son las funciones y por qué son importantes</li>
            <li>Crear funciones con y sin parámetros</li>
            <li>Trabajar con valores de retorno</li>
            <li>Comprender el alcance de las variables</li>
          </ul>
        </div>

        <div className="container">
          <h2>📖 ¿Qué es una Función?</h2>
          <p>Una <strong>función</strong> es un bloque de código reutilizable que realiza una tarea específica.</p>
          <table>
            <thead><tr><th>Beneficio</th><th>Descripción</th></tr></thead>
            <tbody>
              <tr><td><strong>Reutilización</strong></td><td>Escribes una vez, usas muchas veces</td></tr>
              <tr><td><strong>Organización</strong></td><td>Divide problemas grandes en partes pequeñas</td></tr>
              <tr><td><strong>Mantenimiento</strong></td><td>Cambias en un solo lugar</td></tr>
              <tr><td><strong>Legibilidad</strong></td><td>Código más fácil de entender</td></tr>
            </tbody>
          </table>
        </div>

        <div className="container">
          <h2>🔹 Función Básica (void)</h2>
          <CodeBlock html={codeFuncBasica} />
        </div>

        <div className="container">
          <h2>🔹 Funciones con Parámetros</h2>
          <CodeBlock html={codeFuncParams} />
        </div>

        <div className="container">
          <h2>🔹 Funciones con Valor de Retorno</h2>
          <CodeBlock html={codeFuncRetorno} />
        </div>

        <div className="container">
          <h2>🔹 Calculadora con Funciones</h2>
          <CodeBlock html={codeCalculadora} />
        </div>

        <div className="container">
          <h2>🔹 Parámetros Opcionales</h2>
          <CodeBlock html={codeOpcionales} />
        </div>

        <div className="container">
          <h2>🔹 Funciones Recursivas</h2>
          <CodeBlock html={codeRecursion} />
        </div>

        <div className="container">
          <h2>📚 Resumen del Módulo</h2>
          <table>
            <thead><tr><th>Concepto</th><th>Descripción</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>void</td><td>No retorna valor</td><td><code>static void Saludar()</code></td></tr>
              <tr><td>Con retorno</td><td>Devuelve un valor</td><td><code>static int Sumar(int a, int b)</code></td></tr>
              <tr><td>Parámetros</td><td>Datos de entrada</td><td><code>(string nombre, int edad)</code></td></tr>
              <tr><td>Opcionales</td><td>Valor por defecto</td><td><code>(int x = 10)</code></td></tr>
            </tbody>
          </table>
        </div>

        <Quiz moduleNum={4} questions={quizQuestions} />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <Link to="/modulo-03" className="btn btn-secondary">← Anterior: Control</Link>
          <Link to="/modulo-05" className="btn btn-primary">Siguiente: POO →</Link>
        </div>
      </Layout>
    </ModuleGuard>
  );
}
