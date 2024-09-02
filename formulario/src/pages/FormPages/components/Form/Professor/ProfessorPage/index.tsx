import { useState, useEffect, useReducer } from "react";
import { ulid } from 'ulidx';
import { ActionType, FormReducer } from "../../../../../../reducers/form_reducer";
import axios from 'axios';
import { ProfessorForm } from "../ProfessorForm";

export class Professor {
    id?: string | undefined = '';
    nome: string = '';
    email: string = '';
}

export function ProfessorPage() {
    const [{ professores }, dispatch] = useReducer(FormReducer, { professores: [] });

    useEffect(() => {
        axios.get('http://localhost:3000/professores')
            .then(response => response.data)
            .then(data => {
                dispatch({ type: ActionType.LOADED, payload: { professores: data } });
            })
            .catch((error) => {
                console.error('Erro ao carregar professores: ', error);
            });
    }, []);

    const handleAddProfessor = (professor: Professor) => {
        axios.post('http://localhost:3000/professores', { nome: professor.nome, email: professor.email })
          .then((response) => {
            dispatch({ type: ActionType.ADDED, payload: { task: response.data } });
          })
          .catch((error) => {
            console.error('Erro ao adicionar professor: ', error);
          });
      }

      const handleRemoveProfessor = (index: number) => {
        const professorToRemove = professores[index];
        if (!professorToRemove.id) {
          console.error('Professor ID is missing');
          return;
        }
        axios.delete(`http://localhost:3000/professores/${professorToRemove.id}`)
          .then(() => {
            dispatch({ type: ActionType.REMOVED, payload: { id: professorToRemove.id } });
          })
          .catch((error) => {
            console.error('Erro ao remover professor', error);
          });
      }

    const handleSaveInfo = (professor: Professor) => {
        axios.put(`http://localhost:3000/professores/${professor.id}`, professor)
            .then(() => {
                dispatch({ type: ActionType.UPDATED, payload: { task: professor } });
            })
            .catch((error) => {
                console.error('Erro ao atualizar professor', error);
            });
    }

    return (
        <main>
          <ProfessorForm 
            onAdd={handleAddProfessor} 
            onRemoveProfessor={handleRemoveProfessor} 
            professors={professores} 
          />
        </main>
      );
}