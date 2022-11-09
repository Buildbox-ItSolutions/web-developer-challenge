import { Col, Row } from "react-bootstrap";
import { Posts } from "../../interfaces/interface";
import styles from './styles.module.scss'
import Image from "next/image";
import logo from '../../../public/image.png';
import icondelete from '../../../public/delete@3x.png';

export default function PostsFeed(props: Posts[]) {

    return (

        <>
            <Row className={styles.container}>
                <Col className={styles.feed} sm={12} md={6} lg={6}>
                    <p>Feed</p>
                </Col>
            </Row>
            
            <Row className={styles.container}>
                <Col className={styles.img} sm={4} md={2} lg={2}>
                    <Image
                        src={logo}
                        alt="logo"
                        height={88}
                        width={88} />
                </Col>
                <Col className={styles.message} sm={7} md={3} lg={3}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla mattis ligula
                    vel velit scelerisque iaculis.
                    Nam mattis justo id orci commodo,
                    eu tempus purus cursus.
                    </p>
                    <span className={styles.span1}>Enviado por</span>
                    <span className={styles.span2}>Mardonis Alves</span>
                </Col>
                <Col className={styles.close} sm={1} md={1} lg={1}>
                <Image
                        src={icondelete}
                        alt="logo"
                        height={20}
                        width={20} />
                </Col>
            </Row>



        </>


    )
}