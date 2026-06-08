import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ModuleGuard from '../components/ModuleGuard';

const codeDeclaracion = `<code><span class="comment">// Sintaxis: tipo nombreVariable = valor;</span>
<span class="keyword">int</span> edad = <span class="number">25</span>;
<span class="keyword">string</span> nombre = <span class="string">"María"</span>;
<span class="keyword">bool</span> esEstudiante = <span class="keyword">true</span>;
<span class="keyword">double</span> precio = <span class="number">99.99</span>;</code>`;

const codeNumericos = `<code><span class="keyword">byte</span> edad = <span class="number">25</span>;
<span class="keyword">short</span> temperatura = <span class="number">-15</span>;
<span class="keyword">int</span> poblacion = <span class="number">1500000</span>;
<span class="keyword">long</span> distancia = <span class="number">9460730472580800L</span>;</code>`;

const codeDecimales = `<code><span class="keyword">float</span> precio = <span class="number">19.99f</span>;
<span class="keyword">double</span> pi = <span class="number">3.14159265358979</span>;
<span class="keyword">decimal</span> salario = <span class="number">45000.50m</span>;</code>`;

const codeString = `<code><span class="keyword">string</span> nombre = <span class="string">"Ana"</span>;
<span class="keyword">string</span> apellido = <span class="string">"García"</span>;

Console.<span class="method">WriteLine</span>(<span class="string">$"Hola, soy {nombre} {apellido}"</span>);
Console.<span class="method">WriteLine</span>(nombre.<span class="method">Length</span>);
Console.<span class="method">WriteLine</span>(nombre.<span class="method">ToUpper</span>());
Console.<span class="method">WriteLine</span>(nombre.<span class="method">ToLower</span>());</code>`;

const codeBool = `<code><span class="keyword">bool</span> esMayorDeEdad = <span class="keyword">true</span>;
<span class="keyword">int</span> edad = <span class="number">20</span>;
<span class="keyword">bool</span> puedeVotar = edad >= <span class="number">18</span>;  <span class="comment">// true</span>
<span class="keyword">bool</span> puedeComprar = edad >= <span class="number">21</span>; <span class="comment">// false</span></code>`;

const codeAritmeticos = `<code><span class="keyword">int</span> a = <span class="number">10</span>, b = <span class="number">3</span>;
Console.<span class="method">WriteLine</span>(a + b);   <span class="comment">// Suma: 13</span>
Console.<span class="method">WriteLine</span>(a - b);   <span class="comment">// Resta: 7</span>
Console.<span class="method">WriteLine</span>(a * b);   <span class="comment">// Multiplicación: 30</span>
Console.<span class="method">WriteLine</span>(a / b);   <span class="comment">// División: 3</span>
Console.<span class="method">WriteLine</span>(a % b);   <span class="comment">// Módulo: 1</span>

<span class="keyword">int</span> numero = <span class="number">10</span>;
numero += <span class="number">5</span>;  <span class="comment">// 15</span>
numero -= <span class="number">3</span>;  <span class="comment">// 12</span>
numero *= <span class="number">2</span>;  <span class="comment">// 24</span></code>`;

const codeComparacion = `<code><span class="keyword">int</span> a = <span class="number">10</span>, b = <span class="number">5</span>, c = <span class="number">10</span>;
a == b   <span class="comment">// false</span>
a == c   <span class="comment">// true</span>
a != b   <span class="comment">// true</span>
a &gt; b    <span class="comment">// true</span>
a &lt; b    <span class="comment">// false</span>
a &gt;= c   <span class="comment">// true</span></code>`;

const codeLogicos = `<code><span class="keyword">bool</span> a = <span class="keyword">true</span>, b = <span class="keyword">false</span>;
a &amp;&amp; b   <span class="comment">// AND: false</span>
a || b   <span class="comment">// OR: true</span>
!a       <span class="comment">// NOT: false</span>

<span class="keyword">int</span> edad = <span class="number">25</span>;
<span class="keyword">bool</span> tieneID = <span class="keyword">true</span>;
<span class="keyword">bool</span> puedeEntrar = (edad &gt;= <span class="number">18</span>) &amp;&amp; tieneID;
<span class="comment">// true</span></code>`;

const codeIMC = `<code><span class="keyword">using</span> System;
<span class="keyword">class</span> <span class="class-name">CalculadoraIMC</span>
{
    <span class="keyword">static void</span> <span class="method">Main</span>()
    {
        Console.<span class="method">Write</span>(<span class="string">"Peso en kg: "</span>);
        <span class="keyword">double</span> peso = <span class="keyword">double</span>.<span class="method">Parse</span>(Console.<span class="method">ReadLine</span>());

        Console.<span class="method">Write</span>(<span class="string">"Altura en metros: "</span>);
        <span class="keyword">double</span> altura = <span class="keyword">double</span>.<span class="method">Parse</span>(Console.<span class="method">ReadLine</span>());

        <span class="keyword">double</span> imc = peso / (altura * altura);
        Console.<span class="method">WriteLine</span>(<span class="string">$"Tu IMC es: {imc:F2}"</span>);
    }
}</code>`;

export default function Modulo02() {
  return (
    <ModuleGuard moduleNum={2}>
      <Layout
        title="Módulo 2: Fundamentos"
        subtitle="Variables, Tipos de Datos y Operadores"
        footerName="Módulo 2: Fundamentos"
      >
        <div className="container">
          <h2>🎯 Objetivos de este módulo</h2>
          <ul>
            <li>Entender qué son las variables y cómo usarlas</li>
            <li>Conocer los tipos de datos principales en C#</li>
            <li>Aprender a usar operadores aritméticos y lógicos</li>
            <li>Practicar con ejemplos reales</li>
          </ul>
        </div>

        <div className="container">
          <h2>📦 ¿Qué es una Variable?</h2>
          <p>Una <strong>variable</strong> es como una caja donde guardamos información. Cada caja tiene un nombre, un tipo y un valor.</p>
          <CodeBlock html={codeDeclaracion} />

          <h3>Reglas para nombres de variables:</h3>
          <table>
            <thead><tr><th>✅ Correcto</th><th>❌ Incorrecto</th><th>Razón</th></tr></thead>
            <tbody>
              <tr><td><code>edad</code></td><td><code>1edad</code></td><td>No puede empezar con número</td></tr>
              <tr><td><code>nombreCompleto</code></td><td><code>nombre completo</code></td><td>No puede tener espacios</td></tr>
              <tr><td><code>_total</code></td><td><code>total-ventas</code></td><td>No puede tener guiones</td></tr>
              <tr><td><code>miVariable</code></td><td><code>class</code></td><td>No puede ser palabra reservada</td></tr>
            </tbody>
          </table>
        </div>

        <div className="container">
          <h2>🔢 Tipos de Datos Numéricos</h2>
          <h3>Números Enteros</h3>
          <CodeBlock html={codeNumericos} />
          <h3>Números Decimales</h3>
          <CodeBlock html={codeDecimales} />
          <h3>¿Cuál usar?</h3>
          <table>
            <thead><tr><th>Tipo</th><th>Uso Recomendado</th></tr></thead>
            <tbody>
              <tr><td><code>int</code></td><td>Contadores, edades, cantidades</td></tr>
              <tr><td><code>double</code></td><td>Cálculos científicos, mediciones</td></tr>
              <tr><td><code>decimal</code></td><td>Dinero, finanzas (mayor precisión)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="container">
          <h2>📝 Tipo de Dato Texto (string)</h2>
          <CodeBlock html={codeString} />
        </div>

        <div className="container">
          <h2>✅ Tipo de Dato Booleano (bool)</h2>
          <CodeBlock html={codeBool} />
        </div>

        <div className="container">
          <h2>➕ Operadores Aritméticos</h2>
          <CodeBlock html={codeAritmeticos} />
        </div>

        <div className="container">
          <h2>⚖️ Operadores de Comparación</h2>
          <CodeBlock html={codeComparacion} />
        </div>

        <div className="container">
          <h2>🔗 Operadores Lógicos</h2>
          <CodeBlock html={codeLogicos} />
          <h3>Tabla de verdad:</h3>
          <table>
            <thead><tr><th>A</th><th>B</th><th>A &amp;&amp; B</th><th>A || B</th><th>!A</th></tr></thead>
            <tbody>
              <tr><td>true</td><td>true</td><td>true</td><td>true</td><td>false</td></tr>
              <tr><td>true</td><td>false</td><td>false</td><td>true</td><td>false</td></tr>
              <tr><td>false</td><td>true</td><td>false</td><td>true</td><td>true</td></tr>
              <tr><td>false</td><td>false</td><td>false</td><td>false</td><td>true</td></tr>
            </tbody>
          </table>
        </div>

        <div className="container">
          <h2>💻 Ejemplo Práctico: Calculadora de IMC</h2>
          <CodeBlock html={codeIMC} />
        </div>

        <div className="container">
          <h2>📚 Resumen del Módulo</h2>
          <table>
            <thead><tr><th>Concepto</th><th>Descripción</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>Variable</td><td>Contenedor de datos</td><td><code>int edad = 25;</code></td></tr>
              <tr><td>int</td><td>Número entero</td><td><code>int cantidad = 100;</code></td></tr>
              <tr><td>double</td><td>Número decimal</td><td><code>double precio = 99.99;</code></td></tr>
              <tr><td>string</td><td>Texto</td><td><code>string nombre = "Ana";</code></td></tr>
              <tr><td>bool</td><td>Verdadero/Falso</td><td><code>bool activo = true;</code></td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <Link to="/modulo-01" className="btn btn-secondary">← Anterior: Introducción</Link>
          <Link to="/modulo-03" className="btn btn-primary">Siguiente: Estructuras de Control →</Link>
        </div>
      </Layout>
    </ModuleGuard>
  );
}
