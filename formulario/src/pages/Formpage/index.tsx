import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { Professor } from "../FormPages/components/Form/Professor/ProfessorPage";

export function TaskPage(){
    const [professor, setProfessor] = useState<Professor | null>(null);
    const {id} = useParams()

    useEffect(() => {
        const getTask = async () => {
            const response = await fetch(``)

            if(response.ok){
                const data = await response.json()
                setProfessor(data)
            }else{
                alert(`Erro ao buscar Lista ${id}`)
            }
        }
        getTask()
    }, [id])
}