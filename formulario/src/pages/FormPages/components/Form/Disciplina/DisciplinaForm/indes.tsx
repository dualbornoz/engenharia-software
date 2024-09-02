import { useState } from 'react';

interface DisciplinaFormProps {
    onAdd: (nome: string, professorId: string, alunoId: string) => void;
}

export function DisciplinaForm({ onAdd }: DisciplinaFormProps) {
    const [nome, setNome] = useState('');
    const [professorId, setProfessorId] = useState('');
    const [alunoId, setAlunoId] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onAdd(nome, professorId, alunoId);
        setNome('');
        setProfessorId('');
        setAlunoId('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome da Disciplina:</label>
                <input 
                    type="text" 
                    id="nome" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="professorId">Nome do Professor:</label>
                <input 
                    type="text" 
                    id="professorId" 
                    value={professorId} 
                    onChange={(e) => setProfessorId(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="alunoId">Nome do Aluno:</label>
                <input 
                    type="text" 
                    id="alunoId" 
                    value={alunoId} 
                    onChange={(e) => setAlunoId(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Adicionar Disciplina</button>
        </form>
    );
}
