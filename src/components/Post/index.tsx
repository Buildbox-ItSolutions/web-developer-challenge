import { Post as PostType } from "../../types/post";
import Card from "../Card";
import { ImageS, ShowImageS } from "../CreatePost/style";
import { ContainerPostS, DeletePostS, OwnerPostS, SendByS, TextS, TextContainersS } from "./style";

interface IProps {
    postData: PostType;
    deleteFunction: (index:number) => void;
    index: number
}

export default function Post({postData, deleteFunction, index}:IProps) {

    const {image, message, owner} = postData
    return (
        <Card>
            <ContainerPostS>
            <DeletePostS src="delete.svg" alt="" onClick={()=>deleteFunction(index)} />
                <ShowImageS>

                <ImageS src={image} alt="" />
                </ShowImageS>
                <TextContainersS>
                    <TextS>{message}</TextS>
                    <div>
                        <SendByS>Enviado por</SendByS>
                        <OwnerPostS>{owner}</OwnerPostS>
                    </div>
                </TextContainersS>
            </ContainerPostS>
        </Card>
    )

}