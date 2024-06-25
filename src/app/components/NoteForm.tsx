// components/NoteForm.tsx
import { useState } from 'react';

interface NoteFormProps {
  addNote: (note: Note) => void;
}

interface Note {
  title: string;
  content: string;
}

const NoteForm: React.FC<NoteFormProps> = ({ addNote }) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === '' || content.trim() === '') {
      alert('Por favor, ingresa título y contenido para la nota.');
      return;
    }
    addNote({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Guardar Nota</button>
    </form>
  );
};

export default NoteForm;
