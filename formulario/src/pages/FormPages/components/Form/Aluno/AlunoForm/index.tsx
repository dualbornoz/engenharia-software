import React, {useRef} from "react";

interface   AlunoFormProps {
    onAdd: (nome: string, email: string) => void
}

export function AlunoForm({onAdd}: AlunoFormProps){
    const nomeInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const nome = nomeInputRef.current!.value
        const email = emailInputRef.current!.value

        const form = (event.target as HTMLFormElement)
        form.reset()
        nomeInputRef.current!.focus()

        onAdd(nome, email);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" ref={nomeInputRef} placeholder="Nome" />
            <input type="email" ref={emailInputRef} placeholder="Email" />
            <input type="submit" value="Enviar formulário" />
        </form>
    )
}