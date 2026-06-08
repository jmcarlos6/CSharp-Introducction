import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ModuleGuard from '../components/ModuleGuard';
import Quiz from '../components/Quiz';

const codeClase = `<code><span class="keyword">class</span> <span class="class-name">Persona</span>
{
    <span class="keyword">public string</span> nombre;
    <span class="keyword">public int</span> edad;

    <span class="keyword">public void</span> <span class="method">Presentarse</span>()
    {
        Console.<span class="method">WriteLine</span>(<span class="string">$"Hola, soy {nombre} y tengo {edad} años."</span>);
    }
}

<span class="class-name">Persona</span> p1 = <span class="keyword">new</span> <span class="class-name">Persona</span>();
p1.nombre = <span class="string">"Ana"</span>;
p1.edad = <span class="number">25</span>;
p1.<span class="method">Presentarse</span>();</code>`;

const codeConstructor = `<code><span class="keyword">class</span> <span class="class-name">Producto</span>
{
    <span class="keyword">public string</span> nombre;
    <span class="keyword">public double</span> precio;

    <span class="keyword">public</span> <span class="method">Producto</span>(<span class="keyword">string</span> nombre, <span class="keyword">double</span> precio)
    {
        <span class="keyword">this</span>.nombre = nombre;
        <span class="keyword">this</span>.precio = precio;
    }
}

<span class="class-name">Producto</span> p = <span class="keyword">new</span> <span class="class-name">Producto</span>(<span class="string">"Laptop"</span>, <span class="number">15000</span>);</code>`;

const codeEncapsulamiento = `<code><span class="keyword">class</span> <span class="class-name">CuentaBancaria</span>
{
    <span class="keyword">private decimal</span> saldo;
    <span class="keyword">public string</span> Titular { <span class="keyword">get</span>; <span class="keyword">set</span>; }
    <span class="keyword">public decimal</span> Saldo =&gt; saldo;

    <span class="keyword">public bool</span> <span class="method">Depositar</span>(<span class="keyword">decimal</span> cantidad)
    {
        <span class="keyword">if</span> (cantidad &lt;= <span class="number">0</span>) <span class="keyword">return false</span>;
        saldo += cantidad;
        <span class="keyword">return true</span>;
    }

    <span class="keyword">public bool</span> <span class="method">Retirar</span>(<span class="keyword">decimal</span> cantidad)
    {
        <span class="keyword">if</span> (cantidad &gt; saldo) <span class="keyword">return false</span>;
        saldo -= cantidad;
        <span class="keyword">return true</span>;
    }
}

<span class="class-name">CuentaBancaria</span> cuenta = <span class="keyword">new</span> <span class="class-name">CuentaBancaria</span>();
cuenta.<span class="method">Depositar</span>(<span class="number">1000</span>);
cuenta.<span class="method">Retirar</span>(<span class="number">200</span>);
Console.<span class="method">WriteLine</span>(<span class="string">$"Saldo: \${cuenta.Saldo}"</span>);  <span class="comment">// 800</span></code>`;

const codeHerencia = `<code><span class="keyword">class</span> <span class="class-name">Animal</span>
{
    <span class="keyword">public string</span> Nombre { <span class="keyword">get</span>; <span class="keyword">set</span>; }
    <span class="keyword">public virtual void</span> <span class="method">HacerSonido</span>()
    {
        Console.<span class="method">WriteLine</span>(<span class="string">"El animal hace un sonido"</span>);
    }
}

<span class="keyword">class</span> <span class="class-name">Perro</span> : <span class="class-name">Animal</span>
{
    <span class="keyword">public override void</span> <span class="method">HacerSonido</span>()
    {
        Console.<span class="method">WriteLine</span>(<span class="string">$"{Nombre} dice: ¡Guau!"</span>);
    }
}

<span class="keyword">class</span> <span class="class-name">Gato</span> : <span class="class-name">Animal</span>
{
    <span class="keyword">public override void</span> <span class="method">HacerSonido</span>()
    {
        Console.<span class="method">WriteLine</span>(<span class="string">$"{Nombre} dice: ¡Miau!"</span>);
    }
}

<span class="comment">// Polimorfismo</span>
<span class="class-name">Animal</span>[] animales = { <span class="keyword">new</span> <span class="class-name">Perro</span> { Nombre = <span class="string">"Firulais"</span> }, <span class="keyword">new</span> <span class="class-name">Gato</span> { Nombre = <span class="string">"Michi"</span> } };
<span class="keyword">foreach</span> (<span class="keyword">var</span> a <span class="keyword">in</span> animales)
    a.<span class="method">HacerSonido</span>();</code>`;

const quizQuestions = [
  {
    question: '1. ¿Qué palabra clave define una clase en C#?',
    check: (a) => a.includes('class'),
  },
  {
    question: '2. ¿Cómo instancias un objeto de la clase Persona? (ej: new Persona())',
    check: (a) => a.includes('new') && a.includes('persona'),
  },
  {
    question: '3. ¿Qué modificador hace una propiedad accesible públicamente?',
    check: (a) => a.includes('public'),
  },
];

export default function Modulo05() {
  return (
    <ModuleGuard moduleNum={5}>
      <Layout
        title="Módulo 5: Programación Orientada a Objetos"
        subtitle="Clases, Objetos y Encapsulamiento"
        footerName="Módulo 5: POO"
      >
        <div className="container">
          <h2>🎯 Objetivos de este módulo</h2>
          <ul>
            <li>Entender los conceptos fundamentales de POO</li>
            <li>Crear clases y objetos</li>
            <li>Aplicar encapsulamiento con propiedades</li>
            <li>Comprender herencia y polimorfismo</li>
          </ul>
        </div>

        <div className="container">
          <h2>📖 ¿Qué es la POO?</h2>
          <table>
            <thead><tr><th>Concepto</th><th>En un Auto</th><th>En Código</th></tr></thead>
            <tbody>
              <tr><td>Clase</td><td>Plano/Diseño</td><td><code>class Auto {'{}'}</code></td></tr>
              <tr><td>Objeto</td><td>Un auto específico</td><td><code>new Auto()</code></td></tr>
              <tr><td>Atributos</td><td>Color, marca</td><td><code>string color;</code></td></tr>
              <tr><td>Métodos</td><td>Arrancar, frenar</td><td><code>void Arrancar()</code></td></tr>
            </tbody>
          </table>
        </div>

        <div className="container">
          <h2>🔹 Tu Primera Clase</h2>
          <CodeBlock html={codeClase} />
        </div>

        <div className="container">
          <h2>🔹 Constructores</h2>
          <CodeBlock html={codeConstructor} />
        </div>

        <div className="container">
          <h2>🔹 Encapsulamiento y Propiedades</h2>
          <CodeBlock html={codeEncapsulamiento} />
          <h3>Modificadores de acceso:</h3>
          <table>
            <thead><tr><th>Modificador</th><th>Acceso</th></tr></thead>
            <tbody>
              <tr><td><code>public</code></td><td>Desde cualquier lugar</td></tr>
              <tr><td><code>private</code></td><td>Solo dentro de la clase</td></tr>
              <tr><td><code>protected</code></td><td>Clase y clases derivadas</td></tr>
            </tbody>
          </table>
        </div>

        <div className="container">
          <h2>🔹 Herencia y Polimorfismo</h2>
          <CodeBlock html={codeHerencia} />
        </div>

        <div className="container">
          <h2>📚 Resumen del Módulo</h2>
          <table>
            <thead><tr><th>Concepto</th><th>Descripción</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>Clase</td><td>Plantilla para objetos</td><td><code>class Persona {'{}'}</code></td></tr>
              <tr><td>Objeto</td><td>Instancia de clase</td><td><code>new Persona()</code></td></tr>
              <tr><td>Constructor</td><td>Inicializa objeto</td><td><code>public Persona(string n)</code></td></tr>
              <tr><td>Propiedad</td><td>Acceso controlado</td><td><code>public string Nombre {'{ get; set; }'}</code></td></tr>
              <tr><td>Herencia</td><td>Extender clases</td><td><code>class Perro : Animal</code></td></tr>
              <tr><td>override</td><td>Sobrescribir método</td><td><code>public override void Metodo()</code></td></tr>
            </tbody>
          </table>
        </div>

        <Quiz moduleNum={5} questions={quizQuestions} />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <Link to="/modulo-04" className="btn btn-secondary">← Anterior: Funciones</Link>
          <Link to="/modulo-06" className="btn btn-primary">Siguiente: Colecciones →</Link>
        </div>
      </Layout>
    </ModuleGuard>
  );
}
