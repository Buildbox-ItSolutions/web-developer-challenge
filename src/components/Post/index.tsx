import Card from "../Card";
import { ImageS, ShowImageS } from "../CreatePost/style";
import { ContainerPostS, DeletePostS, OwnerPostS, SendByS, TextS } from "./style";



export default function Post() {

    return (
        <Card>
            <ContainerPostS>
            <DeletePostS src="delete.svg" alt="" />
                <ShowImageS>

                <ImageS src="/bx-logo.svg" alt="" />
                </ShowImageS>
                <div style={{display:"flex", flexDirection:"column", gap:"24px"}}>
                    <TextS>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but al</TextS>
                    <div>
                        <SendByS>Enviado por</SendByS>
                        <OwnerPostS>Raphael Borba</OwnerPostS>
                    </div>
                </div>
            </ContainerPostS>
        </Card>
    )

}