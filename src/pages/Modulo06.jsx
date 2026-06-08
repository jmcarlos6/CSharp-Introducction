import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ModuleGuard from '../components/ModuleGuard';
import Quiz from '../components/Quiz';

const codeArrays = `<code><span class="keyword">int</span>[] numeros = <span class="keyword">new int</span>[<span class="number">5</span>];
<span class="keyword">string</span>[] dias = { <span class="string">"Lunes"</span>, <span class="string">"Martes"</span>, <span class="string">"Miércoles"</span> };

Console.<span class="method">WriteLine</span>(dias[<span class="number">0</span>]);  <span class="comment">// Lunes</span>

<span class="keyword">foreach</span> (<span class="keyword">string</span> dia <span class="keyword">in</span> dias)
    Console.<span class="method">WriteLine</span>(dia);

<span class="comment">// Ordenar y buscar</span>
<span class="keyword">int</span>[] nums = { <span class="number">45</span>, <span class="number">12</span>, <span class="number">78</span>, <span class="number">34</span> };
Array.<span class="method">Sort</span>(nums);
<span class="keyword">int</span> idx = Array.<span class="method">IndexOf</span>(nums, <span class="number">34</span>);</code>`;

const codeLista = `<code>List&lt;<span class="keyword">string</span>&gt; frutas = <span class="keyword">new</span> List&lt;<span class="keyword">string</span>&gt;();

frutas.<span class="method">Add</span>(<span class="string">"Manzana"</span>);
frutas.<span class="method">Add</span>(<span class="string">"Naranja"</span>);
frutas.<span class="method">AddRange</span>(<span class="keyword">new</span>[] { <span class="string">"Plátano"</span>, <span class="string">"Fresa"</span> });

frutas.<span class="method">Remove</span>(<span class="string">"Naranja"</span>);
<span class="keyword">bool</span> tiene = frutas.<span class="method">Contains</span>(<span class="string">"Fresa"</span>);
Console.<span class="method">WriteLine</span>(frutas.Count);</code>`;

const codeDictionary = `<code>Dictionary&lt;<span class="keyword">string</span>, <span class="keyword">int</span>&gt; edades = <span class="keyword">new</span> Dictionary&lt;<span class="keyword">string</span>, <span class="keyword">int</span>&gt;();
edades.<span class="method">Add</span>(<span class="string">"Ana"</span>, <span class="number">25</span>);
edades[<span class="string">"Carlos"</span>] = <span class="number">30</span>;

Console.<span class="method">WriteLine</span>(edades[<span class="string">"Ana"</span>]);  <span class="comment">// 25</span>

<span class="keyword">if</span> (edades.<span class="method">TryGetValue</span>(<span class="string">"Juan"</span>, <span class="keyword">out int</span> edad))
    Console.<span class="method">WriteLine</span>(edad);
<span class="keyword">else</span>
    Console.<span class="method">WriteLine</span>(<span class="string">"No encontrado"</span>);

<span class="keyword">foreach</span> (<span class="keyword">var</span> par <span class="keyword">in</span> edades)
    Console.<span class="method">WriteLine</span>(<span class="string">$"{par.Key}: {par.Value} años"</span>);</code>`;

const codeLINQ = `<code><span class="keyword">using</span> System.Linq;

List&lt;<span class="keyword">int</span>&gt; nums = <span class="keyword">new</span> List&lt;<span class="keyword">int</span>&gt; { <span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>, <span class="number">6</span>, <span class="number">7</span>, <span class="number">8</span>, <span class="number">9</span>, <span class="number">10</span> };

<span class="keyword">var</span> pares = nums.<span class="method">Where</span>(n =&gt; n % <span class="number">2</span> == <span class="number">0</span>);
<span class="keyword">var</span> cuadrados = nums.<span class="method">Select</span>(n =&gt; n * n);

<span class="keyword">int</span> suma = nums.<span class="method">Sum</span>();          <span class="comment">// 55</span>
<span class="keyword">double</span> avg = nums.<span class="method">Average</span>();   <span class="comment">// 5.5</span>
<span class="keyword">int</span> max = nums.<span class="method">Max</span>();          <span class="comment">// 10</span>

<span class="comment">// Combinar operaciones</span>
<span class="keyword">var</span> resultado = nums
    .<span class="method">Where</span>(n =&gt; n % <span class="number">2</span> == <span class="number">0</span>)
    .<span class="method">Select</span>(n =&gt; n * n)
    .<span class="method">OrderByDescending</span>(n =&gt; n);  <span class="comment">// 100, 64, 36, 16, 4</span></code>`;

const quizQuestions = [
  {
    question: '1. ¿Cómo declaras un array de enteros? (ej: int[] numeros)',
    check: (a) => a.includes('int[]') || (a.includes('int') && a.includes('[]')),
  },
  {
    question: '2. ¿Qué método agrega un elemento a una List<T>?',
    check: (a) => a.includes('add'),
  },
  {
    question: '3. ¿Qué estructura guarda pares clave-valor?',
    check: (a) => a.includes('dictionary') || a.includes('clave') || a.includes('key'),
  },
];

export default function Modulo06() {
  return (
    <ModuleGuard moduleNum={6}>
      <Layout
        title="Módulo 6: Colecciones"
        subtitle="Arrays, Listas, Diccionarios y LINQ"
        footerName="Módulo 6: Colecciones"
      >
        <div className="container">
          <h2>🎯 Objetivos de este módulo</h2>
          <ul>
            <li>Dominar arrays unidimensionales y multidimensionales</li>
            <li>Trabajar con <code>List&lt;T&gt;</code> y sus métodos</li>
            <li>Usar <code>Dictionary&lt;TKey, TValue&gt;</code></li>
            <li>Aplicar LINQ para consultas</li>
          </ul>
        </div>

        <div className="container">
          <h2>🔹 Arrays (Arreglos)</h2>
          <p>Colección de tamaño fijo del mismo tipo de datos.</p>
          <CodeBlock html={codeArrays} />
        </div>

        <div className="container">
          <h2>🔹 List&lt;T&gt; — Listas Genéricas</h2>
          <p>Colección dinámica que puede crecer o reducirse.</p>
          <CodeBlock html={codeLista} />
        </div>

        <div className="container">
          <h2>🔹 Dictionary&lt;TKey, TValue&gt;</h2>
          <p>Almacena pares de clave-valor.</p>
          <CodeBlock html={codeDictionary} />
        </div>

        <div className="container">
          <h2>🔹 LINQ Básico</h2>
          <p><strong>LINQ</strong> permite consultar colecciones de forma elegante.</p>
          <CodeBlock html={codeLINQ} />
        </div>

        <div className="container">
          <h2>📚 Resumen del Módulo</h2>
          <table>
            <thead><tr><th>Colección</th><th>Características</th><th>Uso</th></tr></thead>
            <tbody>
              <tr><td><code>Array</code></td><td>Tamaño fijo</td><td>Datos de tamaño conocido</td></tr>
              <tr><td><code>List&lt;T&gt;</code></td><td>Tamaño dinámico</td><td>Colección general</td></tr>
              <tr><td><code>Dictionary</code></td><td>Clave-valor</td><td>Búsqueda rápida por clave</td></tr>
              <tr><td>LINQ</td><td>Consultas elegantes</td><td>Filtrar, ordenar, agrupar</td></tr>
            </tbody>
          </table>
        </div>

        <Quiz moduleNum={6} questions={quizQuestions} />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <Link to="/modulo-05" className="btn btn-secondary">← Anterior: POO</Link>
          <Link to="/modulo-07" className="btn btn-primary">Siguiente: Excepciones →</Link>
        </div>
      </Layout>
    </ModuleGuard>
  );
}
