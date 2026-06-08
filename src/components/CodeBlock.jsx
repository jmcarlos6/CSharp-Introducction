// Renders pre/code blocks with syntax-highlighted HTML safely.
// Content is always authored statically — never user input.
export default function CodeBlock({ html }) {
  return <pre dangerouslySetInnerHTML={{ __html: html }} />;
}
