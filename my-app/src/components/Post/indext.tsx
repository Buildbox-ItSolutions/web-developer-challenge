import { Col, Container, Row } from "react-bootstrap";
import { Posts } from "../../interfaces/interface";
import styles from './styles.module.scss'

export default function PostsFeed(props: Posts[]) {

    return (

        <>
            <Row className={styles.container}>
                <Col className={styles.feed} sm={12} md={6} lg={6}>
                    <p>Feed</p>
                </Col>
            </Row>
            <Row className={styles.container}>
                <Col className={styles.img} sm={5} md={2} lg={2}>img</Col>
                <Col className={styles.message} sm={6} md={3} lg={3}>mensagem</Col>
                <Col className={styles.close} sm={1} md={1} lg={1}>x</Col>
            </Row>
            
    
           
        </>


    )
}