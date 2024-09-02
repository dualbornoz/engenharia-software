import { Professor } from "../pages/FormPages/components/Form/Professor/ProfessorPage"

interface TaskState{
    professores: Professor[]
}

export enum ActionType{
    ADDED, UPDATED, REMOVED, LOADED}

type ActionAdded = {type: ActionType.ADDED, payload: {task: Professor}}
type ActionUpdated = {type: ActionType.UPDATED, payload: {task: Professor}}
type ActionRemoved = {type: ActionType.REMOVED, payload: {id?: string | undefined}}
type ActionLoaded = {type: ActionType.LOADED, payload: {professores: Professor[]}}

type Action = ActionAdded | ActionLoaded | ActionRemoved | ActionUpdated

function reducer (state: TaskState, action: Action): TaskState{
    switch (action.type) {
        case ActionType.ADDED: {
          const new_task = action.payload.task
          return { professores: [new_task, ...state.professores] }
        }
        case ActionType.UPDATED: {
          const task_updated = action.payload.task
          const professores = state.professores.filter(task =>
            task.id === task_updated.id ? task_updated : task
          )
    
          return { professores }
        }
        case ActionType.REMOVED: {
          const removed_id = action.payload.id
          return { professores: state.professores.filter(t => t.id !== removed_id) }
        }
        case ActionType.LOADED: {
          return { professores: [...action.payload.professores] }
        }
        default: {
          console.warn('Action Inválida')
          return state
        }
    
      }    
}

export {reducer as FormReducer}
