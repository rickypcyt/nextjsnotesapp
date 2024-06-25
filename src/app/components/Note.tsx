// components/Note.tsx
import React from 'react';

interface NoteProps {
  note: {
    title: string;
    content: string;
  };
}

const Note: React.FC<NoteProps> = ({ note }) => {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </div>
  );
};

export default Note;
