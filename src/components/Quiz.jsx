import { useState } from 'react';
import { useCourse } from '../context/CourseContext';

export default function Quiz({ moduleNum, questions }) {
  const { completeModule, moduleDone } = useCourse();
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [msg, setMsg] = useState(moduleDone[moduleNum] ? '✅ Módulo completado previamente.' : '');
  const alreadyDone = moduleDone[moduleNum];

  const handleChange = (i, val) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[i] = val;
      return copy;
    });
  };

  const handleSubmit = () => {
    const allCorrect = questions.every((q, i) =>
      q.check(answers[i].toLowerCase().trim())
    );
    if (allCorrect) {
      completeModule(moduleNum);
      setMsg('🎉 ¡Correcto! Módulo completado. Ya puedes avanzar al siguiente.');
    } else {
      setMsg('❌ Algunas respuestas son incorrectas. Intenta de nuevo.');
    }
  };

  return (
    <div className="container" id="module-quiz">
      <h2>📝 Quiz del Módulo {moduleNum}</h2>
      <p>Responde correctamente las preguntas para desbloquear el siguiente módulo.</p>
      <ol>
        {questions.map((q, i) => (
          <li key={i} style={{ marginBottom: '1rem' }}>
            <p style={{ marginBottom: '0.4rem' }}>{q.question}</p>
            <input
              placeholder={`Respuesta ${i + 1}`}
              value={answers[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              disabled={alreadyDone}
              style={{ display: 'block', padding: '0.5rem', maxWidth: '420px', width: '100%', borderRadius: '6px', border: '1px solid #d1d5db' }}
            />
          </li>
        ))}
      </ol>
      {!alreadyDone && (
        <button className="btn btn-primary" onClick={handleSubmit} style={{ marginTop: '0.5rem' }}>
          Enviar respuestas
        </button>
      )}
      {msg && <p style={{ marginTop: '0.75rem', fontWeight: 600 }}>{msg}</p>}
    </div>
  );
}
