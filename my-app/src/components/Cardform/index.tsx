import Image from 'next/image';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { BiTrashAlt } from 'react-icons/bi'
import styles from './styles.module.scss';
import photo from '../../../public/photo-upload@3x.png';
import icondeletePost from '../../../public/image.png';


import { AuthContext } from '../../Context/AuthContext';
import PostsFeed from '../Post/indext';

export default function Cardform() {
    const { handlesave } = useContext(AuthContext)

    const PHOTO = photo.src.toString()
    const [iconupload, seticonUpload] = useState<boolean>(false)
    const [icontrash, setIcontrash] = useState<string>("hidden")
    const [secondary, setSecondary] = useState<string>("secondary");
    const [disabled, setDisable] = useState(true);
    const [btcolor, setBtcolor] = useState("#313131")

    const [avatarUrl, setavatarUrl] = useState<string>(PHOTO)
    const [nome, setNome] = useState<string>("");
    const [menssage, setMenssage] = useState<string>("");


    useEffect(() => {
        if (nome !== "" && menssage !== "" && avatarUrl !== PHOTO) {
            setSecondary("success")
            setDisable(false)
            setBtcolor("#fff")
        }

        if (nome === "" || menssage === "" || avatarUrl === PHOTO) {
            setSecondary("secondary")
            setDisable(true)
            setBtcolor("#fff")
        }
    }, [nome, menssage, avatarUrl])

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            return;
        }

        const image: any = e.target.files[0];
        if (!image) {
            return;
        }

        if (image.type === 'image/jpeg' || image.type === 'image/png') {
            seticonUpload(true)
            setIcontrash("visible")
            let imageurl = URL.createObjectURL(e.target.files[0])
            setavatarUrl(imageurl)
        } else {
            notifcationToast()
        }

    }

    const save = async () => {
        const data: any = {
            nome: nome,
            menssage: menssage,
            urlimg: avatarUrl
        }
        handlesave(data)
        setNome("")
        setMenssage("")
        setavatarUrl(PHOTO)
        seticonUpload(false)
        setIcontrash("hidden")
    }

    function reset() {
        setSecondary("secondary")
        setDisable(true)
        setNome("")
        setMenssage("")
        setBtcolor("313131")
        setavatarUrl(PHOTO)
        seticonUpload(false)
        setIcontrash("hidden")
    }

    function removeImg() {
        setavatarUrl(PHOTO)
        seticonUpload(false)
        setIcontrash("hidden")
    }


    const notifcationToast = async () => {
        return toast.error('Imagens png/jpeg', {
            theme: "colored",
            position: 'top-center'
        })
    }


    return (
            <Row>
                <Col className={styles.containerForm} xs={12} sm={12} md={12} lg={12}>
                    <Form.Label>
                        <Image
                            src={icondeletePost}
                            hidden={iconupload}
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
                        visibility={icontrash} />

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
                        style={{ maxHeight: 80 }} />
                </Col>
                
                <Col className={styles.containerbutton} xs={12} sm={12} md={12} lg={12}>
                    <a href='#' onClick={reset}>Descartar</a>
                    <Button
                        variant={secondary}
                        disabled={disabled}
                        style={{ color: btcolor }}
                        onClick={save}
                    >Publicar</Button>
                </Col>

                <Col className={styles.feed} xs={12} sm={12} md={12} lg={12}>
                    <p>Feed</p>
                </Col>

            <ToastContainer />
            </Row>
       
    

    )
}