import { Col, Row } from "react-bootstrap";
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
            <Row className={styles.container}>
                <Col className={styles.feed} xs={12} sm={12} md={6} lg={6}>
                    <p>Feed</p>
                </Col>
            </Row>

            {posts.length !== 0 ?
                posts.map((item, i) => {

                    return (

                        <Row className={styles.container} key={i}>
                            <Col className={styles.img} xs={3} sm={4} md={2} lg={2}>
                                <Image
                                    src={item.urlimg}
                                    alt="logo"
                                    height={88}
                                    width={88} 
                                    className="img-fluid" />
                            </Col>
                            <Col className={styles.message} xs={7} sm={7} md={3} lg={3}>
                                {item.menssage}
                                <span className={styles.span1}>Enviado por</span>
                                <span className={styles.span2}>{item.nome}</span>
                            </Col>
                            <Col className={styles.close} xs={2} sm={1} md={1} lg={1}>
                                <Image
                                    src={icondelete}
                                    alt="logo"
                                    height={20}
                                    width={20}
                                    onClick={() => remove(i)} />
                            </Col>
                        </Row>
                    )
                })

                :
                ''}


        </>


    )
}