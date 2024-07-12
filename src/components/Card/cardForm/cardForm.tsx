import {useEffect, useRef, useState} from "react";
import {IconButton} from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {PictureSvg} from "../../../../src/assets"
import {Card, DefaultImageDisplay, ImageDisplay} from "./cardForm.styles.ts";
import {BaseButtonComponent, BaseInputComponent, BaseTextAreaComponent} from "../../BaseComponents";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {Controller, useForm} from "react-hook-form";
import {CardSchema, CardSchemaType} from "./CardForm.schema.ts";
import {toast} from "react-toastify";
import {zodResolver} from "@hookform/resolvers/zod";

export const CardFormComponent = ({cbOnCompleteForm, ...props}: Parameters<typeof Card>[0] & { cbOnCompleteForm?: (data: {nome: string; mensagem: string; imagem: File})=>void }) => {
    const formObject = useForm<CardSchemaType>({
        resolver: zodResolver(CardSchema),
        defaultValues: {
            imagem: "",
            mensagem: "",
            nome: ""
        }
    })

    const [parent] = useAutoAnimate()
    const InputFileRef = useRef<HTMLInputElement>(null)
    const [inputFile, setInputFile] = useState<File>()

    useEffect(() => {
        formObject.setValue("imagem", InputFileRef?.current?.value || "")
    }, [inputFile]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        formObject.handleSubmit((data) => {
            (cbOnCompleteForm && inputFile) && cbOnCompleteForm({
                nome: data.nome,
                mensagem: data.mensagem,
                imagem: inputFile
            })
            formObject.reset()
            setInputFile(undefined)
            InputFileRef.current && (InputFileRef.current.value = "")
        }, (e)=>{
            console.log("error", e)
            toast("Erro ao enviar formulário", {type: "error"})
        })()
    }
    return <form onSubmit={handleSubmit}>
        <Card {...props}>
            <input
                type={"file"}
                style={{display: "none"}}
                ref={InputFileRef}
                accept={"image/*"}
                onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) setInputFile(e.target.files[0])
                }}
            />
            <div style={{display: "flex"}} ref={parent}>
                {
                    inputFile ?
                    <ImageDisplay
                        $imageToDisplay={URL.createObjectURL(inputFile)} onClick={() => {
                        InputFileRef.current && InputFileRef.current.click()
                    }}
                    /> :
                    <DefaultImageDisplay $imageToDisplay={PictureSvg.default} onClick={() => {
                        InputFileRef.current && InputFileRef.current.click()
                    }}
                    />
                }
                {
                    inputFile && <IconButton
                        onClick={() => {
                            setInputFile(undefined)
                            InputFileRef.current && (InputFileRef.current.value = "")
                        }}>
                        <DeleteOutlineOutlinedIcon color={"error"}/>
                    </IconButton>
                }
            </div>
            <div style={{display: "flex", flexDirection: "column", width: "80%"}}>
                <Controller
                    name="nome"
                    control={formObject.control}
                    defaultValue=""
                    render={({ field }) => (
                        <BaseInputComponent
                            placeholder={"Digite seu nome"}
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="mensagem"
                    control={formObject.control}
                    defaultValue=""
                    render={({ field }) => (
                        <BaseTextAreaComponent
                            rows={3}
                            canresize={false}
                            placeholder={"Mensagem"}
                            style={{marginTop: "15px"}}
                            {...field}
                        />
                    )}
                />
                <div style={{display: "flex", justifyContent: "end"}}>
                    <div style={{display: "flex", marginTop: "15px", gap: "10px"}}>
                        <BaseButtonComponent variant={"cancel"} type={"button"}>
                            Descartar
                        </BaseButtonComponent>
                        <BaseButtonComponent type={"submit"}>
                            Proximo
                        </BaseButtonComponent>
                    </div>
                </div>
            </div>
        </Card>
        </form>
}

