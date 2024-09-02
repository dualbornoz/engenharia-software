import { useReducer } from "react";
import { ProfessorList } from "../List/ProfessorListPage";
import { FormReducer } from "../../reducers/form_reducer";

export function HomePage(){
    const [{professores}, dispatch] = useReducer(FormReducer, {professores: []});

    return(
        <div>
            
        </div>
    )
}