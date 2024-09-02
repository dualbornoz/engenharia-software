import React, { useState } from "react";
import { Professor } from "../ProfessorPage";
import { ProfessorList } from "../../../../../List/ProfessorListPage";
import { ulid } from "ulidx";

interface ProfessorFormProps {
  onAdd: (professor: Professor) => void;
  professors: Professor[];
  onRemoveProfessor: (index: number) => void;
}

export function ProfessorForm({ onAdd, professors, onRemoveProfessor }: ProfessorFormProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const professor = new Professor();
    professor.nome = nome;
    professor.email = email;
    professor.id = ulid();

    onAdd(professor);
    setNome("");
    setEmail("");
  };

  const handleRemoveProfessor = (index: number) => {
    onRemoveProfessor(index);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input type="submit" value="Enviar formulário" />
      </form>
      <ProfessorList professors={professors} onRemoveProfessor={handleRemoveProfessor} />
    </div>
  );
}