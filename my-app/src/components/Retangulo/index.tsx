import Image, { StaticImageData } from 'next/image';
import { Row, Col, Form, Container } from 'react-bootstrap';
import styles from './styles.module.scss';
import logo from '../../../public/photo-upload.png';
import Inputs from '../Inputs';
import Buttons from '../Buttons/Buttons';
import { ChangeEvent, SetStateAction, useState } from 'react';



export default function Retangulo() {
    const [secondary, setSecondary] = useState("secondary");
    const [disabled, setDisable] = useState(true);

    const [avatarUrl, setavatarUrl] = useState<any>(logo)
    const [imgavatar, setimgavatar] = useState(null)


    console.log(imgavatar);
    console.log(avatarUrl);


    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if(!e.target.files){
            return;
        }

       const image:any = e.target.files[0] ;
       if(!image){
        return;
       }

       if(image.type === 'image/jpeg' || image.type === 'image/png'){
        setimgavatar(image);
        
        let imageurl:any = URL.createObjectURL(e.target.files[0])
        
        setavatarUrl(imageurl)
       }

    }

    return (
            <Container>

            <Row className={styles.container}>

                <Col className={styles.containerForm}  sm={12} md={6} lg={6}>
                    <Form.Label>
                        <Inputs file="file" 
                        handleFile={handleFile}
                       />
    
                        <Image
                        src={avatarUrl} 
                        alt="logo" 
                        height={88}
                        width={88}/>
                    </Form.Label>

                    <Inputs 
                    texto="text"
                    placeholder='Digite seu nome'/>

                    <Form.Control
                        as="textarea"
                        placeholder="Menssagem"
                     />
                    <Col className={styles.containerbutton} sm={12} md={12} lg={12}>
                                    <a>Descartar</a>
                                    <Buttons 
                                    variant={secondary}
                                    disabled={disabled}
                                    value="Publicar"
                                    />
                    </Col>
                </Col>
           

            

            </Row>
            </Container>
       
    )
}