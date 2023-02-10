import React, { FormEvent, useContext, useState } from "react";
import { Container } from "./styles";
import image from "../../assets/imgs/image.svg";
import photoUpload from "../../assets/imgs/photoUpload.svg";
import trash from "../../assets/icons/trash.svg";
import {PostContext } from "../../context/PostContext";

const PublicationPanel = () => {

    const [, setImagem] = useState<File>();
    const [srcImage, setSrcImage] = useState<string>("");
    const [inputName, setInputName] = useState<string>("");
    const [textareaValue, setTexareaValue] = useState<string>("");
    const {post , setPost} = useContext(PostContext);
    const formIsValid= (Boolean(inputName && textareaValue));

    function captureImagem(e: React.ChangeEvent<HTMLInputElement>) {

        // Verifica se usuaário selecionou alguma imagem
        if ( e.target.files && e.target.files?.length > 0) {
            setImagem(e.target?.files[0]);

            // Permite ler o conteúdo do arquivo do computador do usuário
            const readFile = new FileReader();

            // Função executada se a leitura do arquivo for sucesso
            readFile.onload = function(arquivocCarregado) {
                // Converter imagem para base64
                const baseImagem64 = arquivocCarregado.target!.result!;
                setSrcImage(baseImagem64 as string);
            };

            // Método responsável por ler o conteúdo
            readFile.readAsDataURL(e.target.files[0]);
        }
    }

    function publication(event: FormEvent) {
        event.preventDefault();

        // Verifica se  os campos e input foram preenchidos
        if (inputName && textareaValue && srcImage) {


            // Objeto com todos os valores preenchidos
            const formData = {
                id: Math.floor(Date.now() * Math.random()).toString(36),
                name: inputName,
                content: textareaValue,
                img: srcImage
            };

            //Atualiza a lista de postagens
            setPost([formData, ...post]);

            // Limpa campos de textos e imagem
            setInputName("");
            setTexareaValue("");
        }
    }

    function removeImageSelected(){
        setSrcImage("");
    }

    function clearInputsAndImage() {
        setInputName("");
        setTexareaValue("");
        setSrcImage("");
    }

    return (
        <Container onSubmit={publication} isValid={formIsValid} >
            <div className="container-group">
                <div style={{backgroundImage: `url(${photoUpload})`}} role="button" className="container-img" onClick={() => document.getElementById("file")!.click()}>
                    <input type="file" onChange={captureImagem}  style={{display: "none"}} id="file" name="file" accept="image/*"></input>
                    {srcImage &&
                        <img className="imagePreview" src={srcImage} />
                    }
                    {!srcImage && <img src={image} alt="Ícone para quando nenhuma imagem foi selecionada pelo usuário" />}
                </div>

                <img
                    className={`${srcImage ? "icon-delete-show" : "icon-delete-hidden"}`}
                    src={trash}
                    alt="Ícone para remover imagem selecionada pelo usuário"
                    onClick={removeImageSelected}
                />

            </div>
            <input
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder="Digite seu nome" type="text"
            />
            <textarea
                value={textareaValue}
                onChange={(e) => setTexareaValue(e.target.value)}
                placeholder="Mensagem" />
            <div className="container-actions">
                <button className="delete" onClick={clearInputsAndImage}>Descartar</button>
                <button type="submit" className="btn-publish">Publicar</button>
            </div>
        </Container>
    );
};

export default PublicationPanel;
