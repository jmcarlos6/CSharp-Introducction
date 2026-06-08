import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ModuleGuard from '../components/ModuleGuard';

const code1 = `<code><span class="comment">// Crear una carpeta para tus proyectos</span>
mkdir MisProyectosCSharp
cd MisProyectosCSharp

<span class="comment">// Crear tu primer proyecto</span>
dotnet new console -n HolaMundo

<span class="comment">// Entrar a la carpeta del proyecto</span>
cd HolaMundo</code>`;

const code2 = `<code><span class="comment">// Program.cs - Mi primer programa en C#</span>
Console.<span class="method">WriteLine</span>(<span class="string">"¡Hola Mundo!"</span>);
Console.<span class="method">WriteLine</span>(<span class="string">"Este es mi primer programa en C#"</span>);
Console.<span class="method">WriteLine</span>(<span class="string">"¡Estoy aprendiendo a programar!"</span>);</code>`;

const code3 = `<code><span class="keyword">using</span> System;

<span class="keyword">namespace</span> <span class="class-name">MiPrimerPrograma</span>
{
    <span class="keyword">class</span> <span class="class-name">Program</span>
    {
        <span class="keyword">static void</span> <span class="method">Main</span>(<span class="keyword">string</span>[] args)
        {
            Console.<span class="method">WriteLine</span>(<span class="string">"¿Cómo te llamas?"</span>);
            <span class="keyword">string</span> nombre = Console.<span class="method">ReadLine</span>();
            Console.<span class="method">WriteLine</span>(<span class="string">"¡Hola, "</span> + nombre + <span class="string">"! Bienvenido a C#"</span>);
        }
    }
}</code>`;

const code4 = `<code><span class="keyword">using</span> System;

<span class="keyword">class</span> <span class="class-name">CalculadoraSuma</span>
{
    <span class="keyword">static void</span> <span class="method">Main</span>()
    {
        Console.<span class="method">WriteLine</span>(<span class="string">"================================="</span>);
        Console.<span class="method">WriteLine</span>(<span class="string">"    CALCULADORA DE SUMA"</span>);
        Console.<span class="method">WriteLine</span>(<span class="string">"================================="</span>);
        Console.<span class="method">WriteLine</span>();

        Console.<span class="method">Write</span>(<span class="string">"Ingresa el primer número: "</span>);
        <span class="keyword">int</span> numero1 = <span class="keyword">int</span>.<span class="method">Parse</span>(Console.<span class="method">ReadLine</span>());

        Console.<span class="method">Write</span>(<span class="string">"Ingresa el segundo número: "</span>);
        <span class="keyword">int</span> numero2 = <span class="keyword">int</span>.<span class="method">Parse</span>(Console.<span class="method">ReadLine</span>());

        <span class="keyword">int</span> resultado = numero1 + numero2;
        Console.<span class="method">WriteLine</span>(<span class="string">$"Resultado: {numero1} + {numero2} = {resultado}"</span>);
    }
}</code>`;

export default function Modulo01() {
  return (
    <ModuleGuard moduleNum={1}>
      <Layout
        title="Módulo 1: Introducción a C#"
        subtitle="Tu primer paso en el mundo de la programación"
        footerName="Módulo 1: Introducción"
      >
        <div className="container">
          <h2>🎯 Objetivos de este módulo</h2>
          <ul>
            <li>Entender qué es C# y para qué se usa</li>
            <li>Instalar las herramientas necesarias</li>
            <li>Crear y ejecutar tu primer programa</li>
          </ul>
        </div>

        <div className="container">
          <h2>📖 ¿Qué es C#?</h2>
          <p><strong>C#</strong> (pronunciado "C Sharp") es un lenguaje de programación moderno, desarrollado por Microsoft en el año 2000.</p>

          <h3>¿Para qué se usa C#?</h3>
          <table>
            <thead><tr><th>Tipo de Aplicación</th><th>Ejemplos</th></tr></thead>
            <tbody>
              <tr><td>Aplicaciones de escritorio</td><td>Programas para Windows</td></tr>
              <tr><td>Aplicaciones web</td><td>Sitios web con ASP.NET</td></tr>
              <tr><td>Videojuegos</td><td>Juegos con Unity</td></tr>
              <tr><td>Aplicaciones móviles</td><td>Apps con Xamarin/MAUI</td></tr>
              <tr><td>Servicios en la nube</td><td>Azure Functions, APIs</td></tr>
            </tbody>
          </table>

          <h3>¿Por qué aprender C#?</h3>
          <ol>
            <li><strong>Fácil de aprender</strong> - Sintaxis clara y legible</li>
            <li><strong>Muy demandado</strong> - Muchas empresas lo usan</li>
            <li><strong>Versátil</strong> - Sirve para muchos tipos de proyectos</li>
            <li><strong>Gran comunidad</strong> - Mucha documentación y ayuda disponible</li>
            <li><strong>Herramientas gratuitas</strong> - Visual Studio Community es gratis</li>
          </ol>
        </div>

        <div className="container">
          <h2>🛠️ Instalación del Entorno de Desarrollo</h2>

          <h3>Opción 1: Visual Studio (Recomendado para Windows)</h3>
          <div className="note note-info">
            <strong>Pasos de instalación:</strong>
            <ol>
              <li>Ve a <a href="https://visualstudio.microsoft.com/es/" target="_blank" rel="noreferrer">https://visualstudio.microsoft.com/es/</a></li>
              <li>Descarga <strong>Visual Studio Community</strong> (es gratis)</li>
              <li>Ejecuta el instalador</li>
              <li>Selecciona: <strong>"Desarrollo de escritorio y Web de .NET"</strong></li>
              <li>Haz clic en "Instalar"</li>
            </ol>
          </div>

          <h3>Opción 2: Visual Studio Code (Multiplataforma)</h3>
          <div className="note note-info">
            <strong>Pasos de instalación:</strong>
            <ol>
              <li>Descarga VS Code desde <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">https://code.visualstudio.com/</a></li>
              <li>Instala VS Code</li>
              <li>Abre VS Code y ve a Extensiones (Ctrl+Shift+X)</li>
              <li>Busca e instala: <strong>"C# Dev Kit"</strong></li>
              <li>Instala el SDK de .NET desde <a href="https://dotnet.microsoft.com/download" target="_blank" rel="noreferrer">https://dotnet.microsoft.com/download</a></li>
            </ol>
          </div>

          <h3>Verificar la instalación</h3>
          <p>Abre una terminal y escribe:</p>
          <pre><code>dotnet --version</code></pre>
          <p>Deberías ver algo como: <code>8.0.100</code></p>
        </div>

        <div className="container">
          <h2>🚀 Tu Primer Programa: "Hola Mundo"</h2>

          <h3>Crear el proyecto</h3>
          <CodeBlock html={code1} />

          <h3>El código</h3>
          <CodeBlock html={code2} />

          <h3>Ejecutar el programa</h3>
          <pre><code>dotnet run</code></pre>

          <div className="note note-success">
            <strong>Resultado esperado:</strong>
            <pre>¡Hola Mundo!{'\n'}Este es mi primer programa en C#{'\n'}¡Estoy aprendiendo a programar!</pre>
          </div>
          <p>🎉 <strong>¡Felicidades!</strong> Has escrito y ejecutado tu primer programa en C#.</p>
        </div>

        <div className="container">
          <h2>📝 Anatomía de un Programa C#</h2>
          <CodeBlock html={code3} />

          <h3>Explicación de cada parte:</h3>
          <table>
            <thead><tr><th>Elemento</th><th>Descripción</th></tr></thead>
            <tbody>
              <tr><td><code>//</code></td><td>Comentario - el programa lo ignora, es para humanos</td></tr>
              <tr><td><code>using System;</code></td><td>Importa funcionalidades que necesitamos</td></tr>
              <tr><td><code>namespace</code></td><td>Agrupa código relacionado (como una carpeta)</td></tr>
              <tr><td><code>class</code></td><td>Contenedor de código</td></tr>
              <tr><td><code>static void Main()</code></td><td>Punto de entrada - aquí comienza el programa</td></tr>
              <tr><td><code>Console.WriteLine()</code></td><td>Muestra texto en pantalla</td></tr>
              <tr><td><code>Console.ReadLine()</code></td><td>Lee texto que escribe el usuario</td></tr>
              <tr><td><code>string nombre</code></td><td>Variable que guarda texto</td></tr>
            </tbody>
          </table>
        </div>

        <div className="container">
          <h2>💻 Ejemplo Práctico: Calculadora Simple</h2>
          <CodeBlock html={code4} />

          <h3>Conceptos nuevos:</h3>
          <ul>
            <li><code>Console.Write()</code> - Escribe sin saltar de línea</li>
            <li><code>int.Parse()</code> - Convierte texto a número entero</li>
            <li><code>int</code> - Tipo de dato para números enteros</li>
            <li><code>$"texto {'{variable}'}"</code> - Interpolación de strings</li>
          </ul>
        </div>

        <div className="container">
          <h2>✏️ Ejercicios para Practicar</h2>
          <div className="note note-warning">
            <strong>Ejercicio 1: Presentación Personal</strong>
            <p>Crea un programa que muestre tu nombre, edad y ciudad en la consola.</p>
          </div>
          <div className="note note-warning">
            <strong>Ejercicio 2: Datos del Usuario</strong>
            <p>Modifica el programa de saludo para que también pregunte la edad y la muestre.</p>
          </div>
          <div className="note note-warning">
            <strong>Ejercicio 3: Calculadora de Resta</strong>
            <p>Crea una calculadora que reste dos números (similar a la de suma).</p>
          </div>
        </div>

        <div className="container">
          <h2>📚 Resumen del Módulo</h2>
          <ul>
            <li>✅ Qué es C# y para qué se utiliza</li>
            <li>✅ Cómo instalar Visual Studio o VS Code</li>
            <li>✅ Cómo crear y ejecutar un proyecto de consola</li>
            <li>✅ La estructura básica de un programa C#</li>
            <li>✅ Usar <code>Console.WriteLine()</code> y <code>Console.ReadLine()</code></li>
            <li>✅ Convertir texto a números con <code>int.Parse()</code></li>
          </ul>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <Link to="/" className="btn btn-secondary">← Volver al índice</Link>
          <Link to="/modulo-02" className="btn btn-primary">Siguiente: Fundamentos →</Link>
        </div>
      </Layout>
    </ModuleGuard>
  );
}
