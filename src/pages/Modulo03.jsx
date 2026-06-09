import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ModuleGuard from '../components/ModuleGuard';
import Quiz from '../components/Quiz';

const codeIf = `<code><span class="keyword">int</span> edad = <span class="number">20</span>;
<span class="keyword">if</span> (edad &gt;= <span class="number">18</span>)
{
    Console.<span class="method">WriteLine</span>(<span class="string">"Eres mayor de edad"</span>);
}</code>`;

const codeIfElse = `<code><span class="keyword">int</span> numero = <span class="number">7</span>;
<span class="keyword">if</span> (numero % <span class="number">2</span> == <span class="number">0</span>)
    Console.<span class="method">WriteLine</span>(<span class="string">$"{numero} es PAR"</span>);
<span class="keyword">else</span>
    Console.<span class="method">WriteLine</span>(<span class="string">$"{numero} es IMPAR"</span>);</code>`;

const codeElseIf = `<code><span class="keyword">int</span> nota = <span class="number">85</span>;
<span class="keyword">string</span> letra;
<span class="keyword">if</span> (nota &gt;= <span class="number">90</span>)      letra = <span class="string">"A"</span>;
<span class="keyword">else if</span> (nota &gt;= <span class="number">80</span>) letra = <span class="string">"B"</span>;
<span class="keyword">else if</span> (nota &gt;= <span class="number">70</span>) letra = <span class="string">"C"</span>;
<span class="keyword">else if</span> (nota &gt;= <span class="number">60</span>) letra = <span class="string">"D"</span>;
<span class="keyword">else</span>                   letra = <span class="string">"F"</span>;
Console.<span class="method">WriteLine</span>(<span class="string">$"Tu calificación: {letra}"</span>);</code>`;

const codeTernario = `<code><span class="keyword">int</span> edad = <span class="number">20</span>;
<span class="keyword">string</span> resultado = edad &gt;= <span class="number">18</span> ? <span class="string">"Mayor"</span> : <span class="string">"Menor"</span>;</code>`;

const codeSwitch = `<code><span class="keyword">int</span> dia = <span class="number">3</span>;
<span class="keyword">switch</span> (dia)
{
    <span class="keyword">case</span> <span class="number">1</span>: nombreDia = <span class="string">"Lunes"</span>; <span class="keyword">break</span>;
    <span class="keyword">case</span> <span class="number">2</span>: nombreDia = <span class="string">"Martes"</span>; <span class="keyword">break</span>;
    <span class="keyword">case</span> <span class="number">3</span>: nombreDia = <span class="string">"Miércoles"</span>; <span class="keyword">break</span>;
    <span class="keyword">case</span> <span class="number">6</span>:
    <span class="keyword">case</span> <span class="number">7</span>: nombreDia = <span class="string">"Fin de semana"</span>; <span class="keyword">break</span>;
    <span class="keyword">default</span>: nombreDia = <span class="string">"Día inválido"</span>; <span class="keyword">break</span>;
}</code>`;

const codeSwitchExpr = `<code><span class="keyword">string</span> nombreDia = dia <span class="keyword">switch</span>
{
    <span class="number">1</span> =&gt; <span class="string">"Lunes"</span>,
    <span class="number">2</span> =&gt; <span class="string">"Martes"</span>,
    <span class="number">3</span> =&gt; <span class="string">"Miércoles"</span>,
    <span class="number">6</span> or <span class="number">7</span> =&gt; <span class="string">"Fin de semana"</span>,
    _ =&gt; <span class="string">"Día inválido"</span>
};</code>`;

const codeFor = `<code><span class="keyword">for</span> (<span class="keyword">int</span> i = <span class="number">1</span>; i &lt;= <span class="number">10</span>; i++)
    Console.<span class="method">WriteLine</span>(<span class="string">$"Número: {i}"</span>);

<span class="comment">// Tabla del 7</span>
<span class="keyword">for</span> (<span class="keyword">int</span> i = <span class="number">1</span>; i &lt;= <span class="number">10</span>; i++)
    Console.<span class="method">WriteLine</span>(<span class="string">$"7 × {i} = {<span class="number">7</span> * i}"</span>);</code>`;

const codeWhile = `<code>Random random = <span class="keyword">new</span> Random();
<span class="keyword">int</span> secreto = random.<span class="method">Next</span>(<span class="number">1</span>, <span class="number">101</span>);
<span class="keyword">int</span> intento = <span class="number">0</span>;

<span class="keyword">while</span> (intento != secreto)
{
    Console.<span class="method">Write</span>(<span class="string">"Adivina (1-100): "</span>);
    intento = <span class="keyword">int</span>.<span class="method">Parse</span>(Console.<span class="method">ReadLine</span>());
    <span class="keyword">if</span> (intento &lt; secreto)
        Console.<span class="method">WriteLine</span>(<span class="string">"Mayor..."</span>);
    <span class="keyword">else if</span> (intento &gt; secreto)
        Console.<span class="method">WriteLine</span>(<span class="string">"Menor..."</span>);
}
Console.<span class="method">WriteLine</span>(<span class="string">"¡Correcto!"</span>);</code>`;

const codeForeach = `<code><span class="keyword">string</span>[] frutas = { <span class="string">"Manzana"</span>, <span class="string">"Naranja"</span>, <span class="string">"Plátano"</span> };
<span class="keyword">foreach</span> (<span class="keyword">string</span> fruta <span class="keyword">in</span> frutas)
    Console.<span class="method">WriteLine</span>(<span class="string">$"Fruta: {fruta}"</span>);</code>`;

const codeBreak = `<code><span class="comment">// BREAK - Sale del bucle</span>
<span class="keyword">for</span> (<span class="keyword">int</span> i = <span class="number">1</span>; i &lt;= <span class="number">10</span>; i++)
{
    <span class="keyword">if</span> (i == <span class="number">5</span>) <span class="keyword">break</span>;
    Console.<span class="method">WriteLine</span>(i);  <span class="comment">// Imprime: 1, 2, 3, 4</span>
}

<span class="comment">// CONTINUE - Salta la iteración</span>
<span class="keyword">for</span> (<span class="keyword">int</span> i = <span class="number">1</span>; i &lt;= <span class="number">10</span>; i++)
{
    <span class="keyword">if</span> (i % <span class="number">2</span> == <span class="number">0</span>) <span class="keyword">continue</span>;
    Console.<span class="method">WriteLine</span>(i);  <span class="comment">// Solo impares</span>
}</code>`;


const quizQuestions = [
  {
    question: '1. ¿Qué estructura usarías para elegir entre múltiples caminos según el valor de una variable?',
    check: (a) => a.includes('switch') || a.includes('if'),
  },
  {
    question: '2. ¿Qué bucle recorre una colección elemento a elemento?',
    check: (a) => a.includes('foreach') || a.includes('for each') || a.includes('for'),
  },
  {
    question: '3. ¿Cómo escribirías la condición para ejecutar código cuando x sea mayor que 10?',
    check: (a) => a.includes('> 10') || a.includes('>10') || a.includes('mayor que 10') || a.includes('>'),
  },
];

export default function Modulo03() {
  return (
    <ModuleGuard moduleNum={3}>
      <Layout
        title="Módulo 3: Estructuras de Control"
        subtitle="Condicionales y Bucles"
        footerName="Módulo 3: Estructuras de Control"
      >
        <div className="container">
          <h2>🎯 Objetivos de este módulo</h2>
          <ul>
            <li>Entender y usar condicionales (if, else, switch)</li>
            <li>Dominar los bucles (for, while, do-while, foreach)</li>
            <li>Controlar el flujo de tus programas</li>
          </ul>
        </div>

        <div className="container">
          <h2>🔹 Condicional IF</h2>
          <CodeBlock html={codeIf} />
        </div>

        <div className="container">
          <h2>🔹 IF - ELSE</h2>
          <CodeBlock html={codeIfElse} />
        </div>

        <div className="container">
          <h2>🔹 IF - ELSE IF - ELSE</h2>
          <CodeBlock html={codeElseIf} />
        </div>

        <div className="container">
          <h2>🔹 Operador Ternario</h2>
          <p>Forma corta de escribir un if-else simple:</p>
          <CodeBlock html={codeTernario} />
        </div>

        <div className="container">
          <h2>🔹 SWITCH</h2>
          <CodeBlock html={codeSwitch} />
          <h3>Switch Expression (C# 8+)</h3>
          <CodeBlock html={codeSwitchExpr} />
        </div>

        <div className="container">
          <h2>🔄 Bucle FOR</h2>
          <CodeBlock html={codeFor} />
        </div>

        <div className="container">
          <h2>🔄 Bucle WHILE</h2>
          <CodeBlock html={codeWhile} />
        </div>

        <div className="container">
          <h2>🔄 Bucle FOREACH</h2>
          <CodeBlock html={codeForeach} />
        </div>

        <div className="container">
          <h2>⏹️ BREAK y CONTINUE</h2>
          <CodeBlock html={codeBreak} />
        </div>

        <div className="container">
          <h2>📚 Resumen del Módulo</h2>
          <table>
            <thead><tr><th>Estructura</th><th>Uso</th></tr></thead>
            <tbody>
              <tr><td><code>if / else</code></td><td>Ejecutar código según condición</td></tr>
              <tr><td><code>switch</code></td><td>Múltiples casos exactos</td></tr>
              <tr><td><code>for</code></td><td>Repetir n veces</td></tr>
              <tr><td><code>while</code></td><td>Repetir mientras condición sea verdadera</td></tr>
              <tr><td><code>foreach</code></td><td>Recorrer colecciones</td></tr>
              <tr><td><code>break</code></td><td>Salir del bucle</td></tr>
              <tr><td><code>continue</code></td><td>Saltar a la siguiente iteración</td></tr>
            </tbody>
          </table>
        </div>

        <Quiz moduleNum={3} questions={quizQuestions} />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <Link to="/modulo-02" className="btn btn-secondary">← Anterior: Fundamentos</Link>
          <Link to="/modulo-04" className="btn btn-primary">Siguiente: Funciones →</Link>
        </div>
      </Layout>
    </ModuleGuard>
  );
}
