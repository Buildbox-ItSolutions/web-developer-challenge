import { useState } from "react";
import Card from "../Card";
import { ContainerButtonS, ContainerInputS, CreateButtonS, FileInputS, InputS, LabelFileS, ResetButtonS, SelectImageS, TextareaS, TrashImgS } from "./style";


export default function CreatePost() {

    const [imagePath, setImagePath] = useState('')
    const [name, setName] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [canpost, setCanpost] = useState<boolean>(false)

    function handleChange(event: any) {
        console.log(event)
        if (!event.target.files[0]) setImagePath("")
        else setImagePath(URL.createObjectURL(event.target.files[0]))
        verifyIfCanPost()
    }

    function verifyIfCanPost() {
        console.log(name, message, imagePath)
        if (name.length > 2 && message.length > 4 && imagePath.length > 5) {
            setCanpost(true)
        } else {
            setCanpost(false)
        }
    }

    function deleteImage(){
        setCanpost(false)
        setImagePath("")
        setName("")
        setMessage("")
    }

    return (
        <Card>
            <form onChange={verifyIfCanPost}>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center" }}>
                    <label htmlFor="fileInput">
                        <LabelFileS>
                            {
                                imagePath ?
                                    <SelectImageS src={imagePath} alt="" />
                                    :
                                    <SelectImageS src="/image.svg" alt="" />
                            }

                        </LabelFileS>
                    </label>
                    {imagePath && <TrashImgS src="/trash.svg" alt="" onClick={deleteImage} />}
                    <FileInputS onChange={handleChange} id="fileInput" type="file" accept="image/png, image/jpeg" />
                </div>

                <ContainerInputS>
                    <InputS type="text" placeholder="Digite seu nome" required onChange={(e) => setName(e.target.value)} />
                    <TextareaS placeholder="Mensagem" required onChange={(e) => setMessage(e.target.value)} />
                </ContainerInputS>

                <ContainerButtonS>
                    <ResetButtonS type="reset" onClick={()=>setCanpost(false)}>Descartar</ResetButtonS>
                    <CreateButtonS canpost={canpost} disabled type="submit">Publicar</CreateButtonS>
                </ContainerButtonS>
            </form>
        </Card>
    )
}