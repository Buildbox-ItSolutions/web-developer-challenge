import {FeedContext, FeedType} from "../../Contexts/FeedContext.tsx";
import {ImageDisplay} from "./cardForm/cardForm.styles.ts";
import {useContext} from "react";
import {Card, CardContent, CardHeader, CardText, CloseCard} from "./CardFeed.styles.ts";

export const CardFeed = ({mensagem, nome, imagem, id}: FeedType) => {
    const { removeFeed } = useContext(FeedContext)

    return <Card style={{marginTop: "15px"}}>
        <CardHeader>
            <CloseCard onClick={()=>{
                removeFeed(id)
            }}>X</CloseCard>
        </CardHeader>
        <CardContent>
            <CardContent style={{width: "40%", display: "flex", alignItems: "start"}}>
                {imagem && <ImageDisplay
                    $imageToDisplay={URL.createObjectURL(imagem)}
                />}
            </CardContent>
            <CardContent style={{width: "60%", display: "flex", flexDirection: "column"}}>
                <CardContent style={{maxHeight: "80%", overflowY: "auto", marginTop: "30px"}}>
                    <CardText style={{height: "100%"}}>{mensagem}</CardText>
                </CardContent>
                <CardContent style={{display: "flex", flexDirection: "column"}}>
                    <CardText>Enviado Por:</CardText>
                    <CardText>{nome}</CardText>
                </CardContent>
            </CardContent>
        </CardContent>
    </Card>
}


