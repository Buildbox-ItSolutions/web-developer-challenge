import styles from './styles.module.scss'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import logo from '../../../public/bx-logo.png';
import Image from 'next/image';

export default function HeaderBar(){
    return(
        <Row>
            <Col className={styles.header}>
                <Image src={logo} alt="bx-logo.png"/>
            </Col>
        </Row>
    )
}