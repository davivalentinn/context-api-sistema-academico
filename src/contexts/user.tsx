import { ReactNode, createContext, useState } from "react";

interface UserProviderProps{
    children: ReactNode;
}

type UserContextData = {
    aluno: string;
    qtdAlunos: number; 
    mudaNome: (nome: string) => void;
}

export const UserContext = createContext({} as UserContextData);


function UserProvider({children}: UserProviderProps){
    const [aluno, setAluno] = useState("Paulo Sócrates")
    const [qtdAlunos, setQtdAlunos] = useState(10)


    function mudaNome (nome: string){
        setAluno(nome);
    }

    return(
        // Renderizar as rotas
        <UserContext.Provider value={{aluno, qtdAlunos, mudaNome}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;