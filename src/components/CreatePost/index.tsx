import { FormEvent, useState } from "react";
import Card from "../Card";
import { ContainerButtonS, ContainerInputS, CreateButtonS, FileInputS, InputS, ShowImageS, ResetButtonS, ImageS, TextareaS, TrashImgS } from "./style";
import useStore from "../../store/posts";


export default function CreatePost() {

    const {addPost} = useStore()

    const [imagePath, setImagePath] = useState('')
    const [name, setName] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [canpost, setCanpost] = useState<boolean>(false)

    function handleChange(event: any) {
        if (!event.target.files[0]) setImagePath("")
        else setImagePath(URL.createObjectURL(event.target.files[0]))
        verifyIfCanPost()
    }

    function verifyIfCanPost() {
        if (name.length > 2 && message.length > 4 && imagePath.length > 5) {
            setCanpost(true)
        } else {
            setCanpost(false)
        }
    }

    function cleanForm(){
        setCanpost(false)
        setImagePath("")
        setName("")
        setMessage("")
    }

    function cleanImage(){
        setCanpost(false)
        setImagePath("")
    }

    function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault()

        addPost({
            image: imagePath,
            message,
            owner: name
        })
        cleanForm()
    }

    return (
        <Card>
            <form onChange={verifyIfCanPost} onSubmit={handleSubmit}>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center" }}>
                    <label htmlFor="fileInput">
                        <ShowImageS>
                            {
                                imagePath ?
                                    <ImageS src={imagePath} alt="" />
                                    :
                                    <ImageS src="/image.svg" alt="" />
                            }

                        </ShowImageS>
                    </label>
                    {imagePath && <TrashImgS src="/trash.svg" alt="" onClick={cleanImage} />}
                    <FileInputS onChange={handleChange} id="fileInput" type="file" accept="image/png, image/jpeg" />
                </div>

                <ContainerInputS>
                    <InputS type="text" placeholder="Digite seu nome" required onChange={(e) => setName(e.target.value)} value={name}/>
                    <TextareaS placeholder="Mensagem"  required onChange={(e) => setMessage(e.target.value)} value={message} />
                </ContainerInputS>

                <ContainerButtonS>
                    <ResetButtonS type="reset" onClick={cleanForm}>Descartar</ResetButtonS>
                    <CreateButtonS canpost={canpost} disabled={!canpost}  type="submit">Publicar</CreateButtonS>
                </ContainerButtonS>
            </form>
        </Card>
    )
}