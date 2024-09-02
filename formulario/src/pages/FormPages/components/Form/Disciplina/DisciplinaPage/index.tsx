import { useState, useEffect, useReducer } from "react";
import { ulid } from 'ulidx';
import { DisciplinaFormReducer, ActionType } from "../../../../../../reducers/form_reducer_Disciplina";
import axios from 'axios';
import { DisciplinaForm } from '../DisciplinaForm/indes';

export class Disciplina {
    id: string = '';
    nome: string = '';
    professorId: string = '';
    alunoId: string = '';
}

export function DisciplinaPage() {
    const [{ disciplinas }, dispatch] = useReducer(DisciplinaFormReducer, { disciplinas: [] });

    useEffect(() => {
        axios.get('http://localhost:3000/disciplinas')
            .then(response => response.data)
            .then(data => {
                dispatch({ type: ActionType.LOADED, payload: { disciplinas: data } });
            })
            .catch((error) => {
                console.error('Erro ao carregar disciplinas: ', error);
            });
    }, []);

    const handleAddDisciplina = (nome: string, professorId: string, alunoId: string) => {
        const disciplina: Disciplina = {
            id: ulid(),
            nome: nome,
            professorId: professorId,
            alunoId: alunoId
        };

        axios.post('http://localhost:3000/disciplinas', disciplina)
            .then((response) => {
                dispatch({ type: ActionType.ADDED, payload: { disciplina: response.data } });
            })
            .catch((error) => {
                console.error('Erro ao adicionar disciplina: ', error);
            });
    }

    const handleRemoveDisciplina = (disciplina: Disciplina) => {
        axios.delete(`http://localhost:3000/disciplinas/${disciplina.id}`)
            .then(() => {
                dispatch({ type: ActionType.REMOVED, payload: { id: disciplina.id } });
            })
            .catch((error) => {
                console.error('Erro ao remover disciplina', error);
            });
    }

    const handleSaveInfo = (disciplina: Disciplina) => {
        axios.put(`http://localhost:3000/disciplinas/${disciplina.id}`, disciplina)
            .then(() => {
                dispatch({ type: ActionType.UPDATED, payload: { disciplina: disciplina } });
            })
            .catch((error) => {
                console.error('Erro ao atualizar disciplina', error);
            });
    }

    return (
        <main>
            <DisciplinaForm onAdd={handleAddDisciplina} />
        </main>
    );
}
