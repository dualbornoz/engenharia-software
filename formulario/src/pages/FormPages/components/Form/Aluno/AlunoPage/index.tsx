import { useState, useEffect, useReducer } from "react";
import { ulid } from 'ulidx';
import { AlunoFormReducer, ActionType } from "../../../../../../reducers/form_reducer_aluno";
import axios from 'axios';
import { AlunoForm } from "../AlunoForm";

export class Aluno {
    id: string = '';
    nome: string = '';
    email: string = '';
}


export function AlunoPage() {
    const [{ alunos }, dispatch] = useReducer(AlunoFormReducer, { alunos: [] });

    useEffect(() => {
        axios.get('http://localhost:3000/alunos')
            .then(response => response.data)
            .then(data => {
                dispatch({ type: ActionType.LOADED, payload: { alunos: data } });
            })
            .catch((error) => {
                console.error('Erro ao carregar alunos: ', error);
            });
    }, []);

    const handleAddAluno = (nome: string, email: string) => {
        const aluno: Aluno = {
            id: ulid(),
            nome: nome,
            email: email
        };

        axios.post('http://localhost:3000/alunos', aluno)
            .then((response) => {
                dispatch({ type: ActionType.ADDED, payload: { aluno: response.data } });
            })
            .catch((error) => {
                console.error('Erro ao adicionar aluno: ', error);
            });
    }

    const handleRemoveAluno = (aluno: Aluno) => {
        axios.delete(`http://localhost:3000/alunos/${aluno.id}`)
            .then(() => {
                dispatch({ type: ActionType.REMOVED, payload: { id: aluno.id } });
            })
            .catch((error) => {
                console.error('Erro ao remover aluno', error);
            });
    }

    const handleSaveInfo = (aluno: Aluno) => {
        axios.put(`http://localhost:3000/alunos/${aluno.id}`, aluno)
            .then(() => {
                dispatch({ type: ActionType.UPDATED, payload: { aluno: aluno } });
            })
            .catch((error) => {
                console.error('Erro ao atualizar aluno', error);
            });
    }

    return (
        <main>
            <AlunoForm onAdd={handleAddAluno} />
        </main>
    );
}
