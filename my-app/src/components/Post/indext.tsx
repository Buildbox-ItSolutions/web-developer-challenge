import { Col, Container, Row } from "react-bootstrap";
import { Posts } from "../../interfaces/interface";
import styles from './styles.module.scss'

export default function PostsFeed(props:Posts[]){
   
    return(
        <Container className={styles.container}>
            <Row>
                <Col sm={12} md={6} lg={6}><p>Feed</p></Col>
            </Row>
        </Container>
    )
}