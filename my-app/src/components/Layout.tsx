import { Container } from "react-bootstrap";
import HeaderBar from "./HeaderBar";
import styles from './../../styles/Home.module.scss'
import PostsFeed from "./Post/indext";

export default function Layout({children}:any){
    return(
        <>
        <HeaderBar />
        <Container className={styles.container}>
            <main>{children}</main>
        </Container>
        </>
    )
}