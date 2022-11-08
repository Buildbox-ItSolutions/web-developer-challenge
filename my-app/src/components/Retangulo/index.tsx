import Image from 'next/image';
import { Row, Col, Form } from 'react-bootstrap';
import styles from './styles.module.scss';
import logo from '../../../public/photo-upload.png';
import Inputs from '../Inputs';
import Buttons from '../Buttons/Buttons';
import { useState } from 'react';



export default function Retangulo() {
    const [secondary, setSecondary] = useState("secondary");
    const [disabled, setDisable] = useState(true);

    return (
      
            <Row className={styles.container}>

                <Col className={styles.containerForm}  sm={12} md={4} lg={4}>
                    <Form.Label>
                        <Inputs file="file"/>
                        <Image src={logo} alt="logo" />
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
       
    )
}