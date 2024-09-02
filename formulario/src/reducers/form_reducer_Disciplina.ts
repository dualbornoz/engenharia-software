import { Disciplina } from "../pages/FormPages/components/Form/Disciplina/DisciplinaPage"

interface TaskState{
    disciplinas: Disciplina[]
}

export enum ActionType{
    ADDED, UPDATED, REMOVED, LOADED}

type ActionAdded = {type: ActionType.ADDED, payload: {disciplina: Disciplina}}
type ActionUpdated = {type: ActionType.UPDATED, payload: {disciplina: Disciplina}}
type ActionRemoved = {type: ActionType.REMOVED, payload: {id: string}}
type ActionLoaded = {type: ActionType.LOADED, payload: {disciplinas: Disciplina[]}}

type Action = ActionAdded | ActionLoaded | ActionRemoved | ActionUpdated

function reducer (state: TaskState, action: Action): TaskState{
    switch (action.type) {
        case ActionType.ADDED: {
          const new_task = action.payload.disciplina
          return { disciplinas: [new_task, ...state.disciplinas] }
        }
        case ActionType.UPDATED: {
          const disciplina_updated = action.payload.disciplina
          const disciplinas = state.disciplinas.filter(disciplina =>
            disciplina.id === disciplina_updated.id ? disciplina_updated : disciplina
          )
    
          return { disciplinas }
        }
        case ActionType.REMOVED: {
          const removed_id = action.payload.id
          return { disciplinas: state.disciplinas.filter(t => t.id !== removed_id) }
        }
        case ActionType.LOADED: {
          return { disciplinas: [...action.payload.disciplinas] }
        }
        default: {
          console.warn('Action Inválida')
          return state
        }
    
      }    
}

export {reducer as DisciplinaFormReducer}