import styles from './styles.module.scss'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import logo from '../../../public/bx-logo.png';
import Image from 'next/image';
import { Container } from 'react-bootstrap';

export default function HeaderBar() {
    return (
        <Container>
            <Row>

                <Col className={styles.header} xs={12} sm={12} md={12} lg={12} >
                    <Image src={logo} alt="bx-logo.png" />
                </Col>
            </Row>
        </Container>
    )
}