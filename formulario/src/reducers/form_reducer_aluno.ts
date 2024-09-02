import { Aluno } from "../pages/FormPages/components/Form/Aluno/AlunoPage"
interface TaskState{
    alunos: Aluno[]
}

export enum ActionType{
    ADDED, UPDATED, REMOVED, LOADED}

type ActionAdded = {type: ActionType.ADDED, payload: {aluno: Aluno}}
type ActionUpdated = {type: ActionType.UPDATED, payload: {aluno: Aluno}}
type ActionRemoved = {type: ActionType.REMOVED, payload: {id: string}}
type ActionLoaded = {type: ActionType.LOADED, payload: {alunos: Aluno[]}}

type Action = ActionAdded | ActionLoaded | ActionRemoved | ActionUpdated

function reducer (state: TaskState, action: Action): TaskState{
    switch (action.type) {
        case ActionType.ADDED: {
          const new_task = action.payload.aluno
          return { alunos: [new_task, ...state.alunos] }
        }
        case ActionType.UPDATED: {
          const aluno_updated = action.payload.aluno
          const alunos = state.alunos.filter(aluno =>
            aluno.id === aluno_updated.id ? aluno_updated : aluno
          )
    
          return { alunos }
        }
        case ActionType.REMOVED: {
          const removed_id = action.payload.id
          return { alunos: state.alunos.filter(t => t.id !== removed_id) }
        }
        case ActionType.LOADED: {
          return { alunos: [...action.payload.alunos] }
        }
        default: {
          console.warn('Action Inválida')
          return state
        }
    
      }    
}

export {reducer as AlunoFormReducer}