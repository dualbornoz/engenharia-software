import { Professor } from "../../FormPages/components/Form/Professor/ProfessorPage";


interface ProfessorListProps {
  professors: Professor[];
  onRemoveProfessor: (index: number) => void;
}

export function ProfessorList({ professors, onRemoveProfessor }: ProfessorListProps) {
  return (
    <ul>
      {professors.map((professor, index) => (
        <li key={index}>
          {professor.nome}
          <button onClick={() => onRemoveProfessor(index)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}