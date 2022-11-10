import Image from 'next/image';
import { Row, Col, Form, Container, Button } from 'react-bootstrap';
import { BiTrashAlt } from 'react-icons/bi'
import styles from './styles.module.scss';
import logo from '../../../public/photo-upload@3x.png';
import icon from '../../../public/image.png';
import { ChangeEvent, useContext, useEffect, useState } from 'react';

import PostsFeed from '../Post/indext';
import { AuthContext } from '../../Context/AuthContext';

export default function Retangulo() {
    const {handlesave}  = useContext(AuthContext)
    
    const LOGO = logo.src.toString()
    const [secondary, setSecondary] = useState<string>("secondary");
    const [disabled, setDisable] = useState(true);
    const [btcolor, setBtcolor] = useState("#313131")

    const [avatarUrl, setavatarUrl] = useState<string>(LOGO)
    const [imgavatar, setimgavatar] = useState(null)

    const [nome, setNome] = useState<string>("");
    const [menssage, setMenssage] = useState<string>("");


    useEffect(() => {
        if (nome !== "" && menssage !== "") {
            setSecondary("success")
            setDisable(false)
            setBtcolor("#fff")
        }
    }, [nome, menssage])

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            return;
        }

        const image: any = e.target.files[0];
        if (!image) {
            return;
        }

        if (image.type === 'image/jpeg' || image.type === 'image/png') {
            setimgavatar(image);
            let imageurl = URL.createObjectURL(e.target.files[0])
            setavatarUrl(imageurl)
        }

    }

    const save = async () => {
        const data:any = {
            nome: nome,
            menssage: menssage,
            urlimg: avatarUrl
        }
        handlesave(data)
    }

    function reset() {
        setSecondary("secondary")
        setDisable(true)
        setNome("")
        setMenssage("")
        setBtcolor("313131")
        setavatarUrl(LOGO)
    }

    function removeImg(){
        setavatarUrl(LOGO)
    }

   

    return (
        <><Container>
            <Row className={styles.container}>
                <Col className={styles.containerForm} xs={12} sm={12} md={6} lg={6}>
                    <Row>
                        <Col>
                            <Form.Label>
                                <Image
                                    src={icon}
                                    className={styles.icon}
                                    alt="icon" />
                                <Form.Control type="file"
                                    onChange={handleFile} />

                                <Image
                                    src={avatarUrl}
                                    alt="logo"
                                    height={88}
                                    width={88} />

                            </Form.Label>
                            <BiTrashAlt
                                color='#FF5858'
                                size={25}
                                onClick={removeImg}
                                style={{ marginLeft: 5 }} />
                        </Col>
                    </Row>

                    <Form.Control
                        type="text"
                        value={nome}
                        placeholder='Digite seu nome'
                        onChange={(e) => setNome(e.target.value)} />

                    <Form.Control
                        as="textarea"
                        placeholder="Menssagem"
                        value={menssage}
                        onChange={(e) => setMenssage(e.target.value)} 
                        style={{maxHeight:80}}/>
                    <Col className={styles.containerbutton} xs={12} sm={12} md={12} lg={12}>
                        <a href='#' onClick={reset}>Descartar</a>

                        <Button
                            variant={secondary}
                            disabled={disabled}
                            style={{ color: btcolor }}
                            onClick={save}
                        >Publicar</Button>
                    </Col>
                </Col>
                    <PostsFeed />
            </Row>
        </Container>
        </>

    )
}