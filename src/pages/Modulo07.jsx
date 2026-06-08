import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ModuleGuard from '../components/ModuleGuard';
import Quiz from '../components/Quiz';

const codeTryCatch = `<code><span class="keyword">try</span>
{
    Console.<span class="method">Write</span>(<span class="string">"Ingresa un número: "</span>);
    <span class="keyword">int</span> num = <span class="keyword">int</span>.<span class="method">Parse</span>(Console.<span class="method">ReadLine</span>());
    Console.<span class="method">WriteLine</span>(<span class="string">$"Resultado: {num}"</span>);
}
<span class="keyword">catch</span> (Exception ex)
{
    Console.<span class="method">WriteLine</span>(<span class="string">$"Error: {ex.Message}"</span>);
}
Console.<span class="method">WriteLine</span>(<span class="string">"El programa continúa..."</span>);</code>`;

const codeMultipleCatch = `<code><span class="keyword">try</span>
{
    <span class="keyword">int</span> numero = <span class="keyword">int</span>.<span class="method">Parse</span>(Console.<span class="method">ReadLine</span>());
    <span class="keyword">int</span> divisor = <span class="keyword">int</span>.<span class="method">Parse</span>(Console.<span class="method">ReadLine</span>());
    Console.<span class="method">WriteLine</span>(numero / divisor);
}
<span class="keyword">catch</span> (FormatException)
{
    Console.<span class="method">WriteLine</span>(<span class="string">"Error: Ingresa un número válido."</span>);
}
<span class="keyword">catch</span> (DivideByZeroException)
{
    Console.<span class="method">WriteLine</span>(<span class="string">"Error: No puedes dividir entre cero."</span>);
}
<span class="keyword">catch</span> (Exception ex)
{
    Console.<span class="method">WriteLine</span>(<span class="string">$"Error inesperado: {ex.Message}"</span>);
}</code>`;

const codeFinally = `<code><span class="keyword">try</span>
{
    Console.<span class="method">WriteLine</span>(<span class="string">"Dentro del try"</span>);
    <span class="keyword">int</span> x = <span class="number">10</span> / <span class="number">0</span>;
}
<span class="keyword">catch</span> (Exception)
{
    Console.<span class="method">WriteLine</span>(<span class="string">"Dentro del catch"</span>);
}
<span class="keyword">finally</span>
{
    Console.<span class="method">WriteLine</span>(<span class="string">"Siempre se ejecuta"</span>);
}</code>`;

const codeThrow = `<code><span class="keyword">static void</span> <span class="method">ValidarEdad</span>(<span class="keyword">int</span> edad)
{
    <span class="keyword">if</span> (edad &lt; <span class="number">0</span>)
        <span class="keyword">throw new</span> ArgumentException(<span class="string">"La edad no puede ser negativa."</span>);
    <span class="keyword">if</span> (edad &lt; <span class="number">18</span>)
        <span class="keyword">throw new</span> ArgumentException(<span class="string">"Debes ser mayor de 18 años."</span>);
    Console.<span class="method">WriteLine</span>(<span class="string">"Edad válida."</span>);
}

<span class="keyword">try</span> { <span class="method">ValidarEdad</span>(<span class="number">15</span>); }
<span class="keyword">catch</span> (ArgumentException ex)
{ Console.<span class="method">WriteLine</span>(<span class="string">$"Error: {ex.Message}"</span>); }</code>`;

const codeCustomException = `<code><span class="keyword">class</span> <span class="class-name">SaldoInsuficienteException</span> : Exception
{
    <span class="keyword">public decimal</span> SaldoActual { <span class="keyword">get</span>; }
    <span class="keyword">public decimal</span> MontoSolicitado { <span class="keyword">get</span>; }

    <span class="keyword">public</span> <span class="method">SaldoInsuficienteException</span>(<span class="keyword">decimal</span> saldo, <span class="keyword">decimal</span> monto)
        : <span class="keyword">base</span>(<span class="string">$"Saldo insuficiente. Tienes \${saldo}, necesitas \${monto}"</span>)
    {
        SaldoActual = saldo;
        MontoSolicitado = monto;
    }
}</code>`;

const codeTryParse = `<code><span class="comment">// TryParse - Conversión segura sin excepción</span>
<span class="keyword">if</span> (<span class="keyword">int</span>.<span class="method">TryParse</span>(Console.<span class="method">ReadLine</span>(), <span class="keyword">out int</span> edad))
    Console.<span class="method">WriteLine</span>(<span class="string">$"Tienes {edad} años."</span>);
<span class="keyword">else</span>
    Console.<span class="method">WriteLine</span>(<span class="string">"Edad inválida."</span>);</code>`;

const quizQuestions = [
  {
    question: '1. ¿Qué bloque usas para capturar errores en C#?',
    check: (a) => a.includes('catch'),
  },
  {
    question: '2. ¿Qué excepción ocurre al dividir por cero?',
    check: (a) => a.includes('dividebyzero') || a.includes('divide by zero') || a.includes('dividir'),
  },
  {
    question: '3. ¿Qué bloque se ejecuta siempre, haya o no excepción?',
    check: (a) => a.includes('finally'),
  },
];

export default function Modulo07() {
  return (
    <ModuleGuard moduleNum={7}>
      <Layout
        title="Módulo 7: Manejo de Excepciones"
        subtitle="Try-Catch y manejo de errores"
        footerName="Módulo 7: Excepciones"
      >
        <div className="container">
          <h2>🎯 Objetivos de este módulo</h2>
          <ul>
            <li>Entender qué son las excepciones</li>
            <li>Usar try-catch-finally</li>
            <li>Conocer excepciones comunes</li>
            <li>Crear excepciones personalizadas</li>
          </ul>
        </div>

        <div className="container">
          <h2>📖 ¿Qué es una Excepción?</h2>
          <p>Una <strong>excepción</strong> es un error que ocurre durante la ejecución. Sin manejo adecuado, el programa se detiene.</p>
          <table>
            <thead><tr><th>Excepción</th><th>Causa</th></tr></thead>
            <tbody>
              <tr><td><code>DivideByZeroException</code></td><td>Dividir entre cero</td></tr>
              <tr><td><code>FormatException</code></td><td>Convertir texto inválido</td></tr>
              <tr><td><code>IndexOutOfRangeException</code></td><td>Índice fuera de rango</td></tr>
              <tr><td><code>NullReferenceException</code></td><td>Acceder a objeto null</td></tr>
              <tr><td><code>FileNotFoundException</code></td><td>Archivo no existe</td></tr>
            </tbody>
          </table>
        </div>

        <div className="container">
          <h2>🔹 Try-Catch Básico</h2>
          <CodeBlock html={codeTryCatch} />
        </div>

        <div className="container">
          <h2>🔹 Múltiples Catch</h2>
          <CodeBlock html={codeMultipleCatch} />
        </div>

        <div className="container">
          <h2>🔹 Finally</h2>
          <p>El bloque <code>finally</code> <strong>siempre se ejecuta</strong>, haya o no excepción.</p>
          <CodeBlock html={codeFinally} />
        </div>

        <div className="container">
          <h2>🔹 Lanzar Excepciones (throw)</h2>
          <CodeBlock html={codeThrow} />
        </div>

        <div className="container">
          <h2>🔹 Excepciones Personalizadas</h2>
          <CodeBlock html={codeCustomException} />
        </div>

        <div className="container">
          <h2>🔹 TryParse — Evitar Excepciones</h2>
          <CodeBlock html={codeTryParse} />
        </div>

        <div className="container">
          <h2>📚 Resumen del Módulo</h2>
          <table>
            <thead><tr><th>Concepto</th><th>Descripción</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td><code>try</code></td><td>Código a proteger</td><td><code>try {'{ ... }'}</code></td></tr>
              <tr><td><code>catch</code></td><td>Captura excepciones</td><td><code>catch (Exception ex) {'{ }'}</code></td></tr>
              <tr><td><code>finally</code></td><td>Siempre se ejecuta</td><td><code>finally {'{ }'}</code></td></tr>
              <tr><td><code>throw</code></td><td>Lanza excepción</td><td><code>throw new Exception();</code></td></tr>
              <tr><td><code>TryParse</code></td><td>Conversión segura</td><td><code>int.TryParse(s, out n)</code></td></tr>
            </tbody>
          </table>
        </div>

        <Quiz moduleNum={7} questions={quizQuestions} />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <Link to="/modulo-06" className="btn btn-secondary">← Anterior: Colecciones</Link>
          <Link to="/modulo-08" className="btn btn-primary">Siguiente: Ejercicios →</Link>
        </div>
      </Layout>
    </ModuleGuard>
  );
}
