import { ReactNode, createContext, useState } from "react";

// Define o tipo das props que o UserProvider vai receber
// "children" é o conteúdo/elementos que ficam dentro do componente <UserProvider>...</UserProvider>
interface UserProviderProps {
    children: ReactNode;
}


// Aqui dizemos quais dados e funções estarão disponíveis para quem consumir o contexto
type UserContextData = {
    aluno: string;                // Nome do aluno atual
    qtdAlunos: number;            // Quantidade de alunos
    mudaNome: (nome: string) => void;  // Função que altera o nome do aluno
    novoAluno: () => void;             // Função que aumenta a quantidade de alunos
}

// Cria o contexto em si, já tipado
// O "as UserContextData" é um "type assertion" para garantir a tipagem
export const UserContext = createContext({} as UserContextData);


// Componente (UserProvider, usado no app.tsx) que vai envolver a aplicação e fornecer os dados do contexto
function UserProvider({ children }: UserProviderProps) {
    // Estado que guarda o nome do aluno
    const [aluno, setAluno] = useState("Paulo Sócrates")

    // Estado que guarda a quantidade de alunos
    const [qtdAlunos, setQtdAlunos] = useState(10)

    // Funções
    // Função para alterar o nome do aluno
    function mudaNome(nome: string) {
        setAluno(nome);
    }

    // Função para incrementar a quantidade de alunos
    function novoAluno() {
        setQtdAlunos(alunos => alunos + 1) // Usa função para pegar valor anterior e somar +1
    }
    // Fim Funções

    return (
        // "value" fornece os dados e funções do contexto
        <UserContext.Provider value={{ aluno, qtdAlunos, mudaNome, novoAluno }}>
            {children}  {/* Renderiza os componentes filhos dentro do Provider */}
        </UserContext.Provider>
    )
}

export default UserProvider;