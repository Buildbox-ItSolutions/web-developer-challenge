import Card from "../Card";
import { ContainerButtonS, ContainerInputS, InputS, TextareaS } from "./style";


export default function CreatePost() {

    return (
        <Card>
            <form >
                <ContainerInputS>
                    <InputS type="text" placeholder="Digite seu nome" required />
                    <TextareaS placeholder="Mensagem"  required/>
                </ContainerInputS>

                <ContainerButtonS>
                    <button type="reset">Descartar</button>
                    <button type="submit">Publicar</button>
                </ContainerButtonS>
            </form>
        </Card>
    )
}