import { Col, Container, Row } from "react-bootstrap";
import styles from './styles.module.scss'
import Image from "next/image";
import icondelete from '../../../public/delete@3x.png';
import { AuthContext } from '../../Context/AuthContext';
import { useContext } from "react";

export default function PostsFeed() {

    const { posts, removePost } = useContext(AuthContext)

    const remove = async (i: number) => {
        removePost(i)
    }

    return (

        <>
            {posts.length !== 0 ?
                posts.map((item, i) => {
                    return (
                        <>
                        <Row>
                            <Col className={styles.close} xs={12} sm={12} md={12} lg={12}>
                                <Image
                                    src={icondelete}
                                    alt="logo"
                                    height={20}
                                    width={20}
                                    onClick={() => remove(i)} />
                            </Col>
                        </Row>
                        <Row>
                                <Col className={styles.img} xs={4} sm={3} md={2} lg={5}>
                                    <Image
                                        src={item.urlimg}
                                        alt="logo"
                                        height={88}
                                        width={88} />
                                </Col>
                                <Col className={styles.message} xs={8} sm={9} md={10} lg={7}>
                                    {item.menssage}
                                    <span className={styles.span1}>Enviado por</span>
                                    <span className={styles.span2}>{item.nome}</span>
                                </Col>
                            </Row></>
                    )
                })

                :
                ''}


        </>


    )
}