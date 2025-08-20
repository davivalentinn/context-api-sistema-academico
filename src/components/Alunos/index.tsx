import { Nome } from "../nome";
import { UserContext } from "../../contexts/user";
import { useContext } from "react";

    export function Alunos(){
        const {qtdAlunos, mudaNome} = useContext(UserContext);
        return(
            <div>
                <h3>Quantidade de alunos: {qtdAlunos}</h3>
                <button onClick={() => mudaNome("Davi Valetins")}>
                    mudar nome
                </button>
                <br />
                <br />
                <Nome/>
            </div>
        )
    }