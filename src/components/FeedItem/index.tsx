import tw, { styled } from 'twin.macro'
import React, {useCallback} from "react";
import FeedItem from "../../model/FeedItem";
import Box from "../Box";
import Image from "../Image";
import deleteIco from "../../assets/delete.svg";
import {useFeedStore} from "../../data/FeedStore";

const FeedItemStyled = tw.div`
    my-[8px]
`;

const ItemContainer = tw.div`
    flex
    flex-row
`;

const SubItems = tw.div`
    flex
    flex-col
    ml-[32px]
    my-[56px]
    flex-grow
`;

const ItemComment = tw.p`
    mb-[24px]
    text-black-800
`;

const ItemDeleteBtn = tw.button`
    w-[20px]
    min-w-[20px]
    
    h-[20px]
    min-h-[20px]
    
    rounded-full
`;

const ItemImage = tw.div`
    self-center
    flex-grow-0
    
    w-[88px]
    min-w-[88px]
    max-w-[88px]
    
    h-[88px]
    min-h-[88px]
    max-h-[88px]
`;

const ItemName = tw.div`
    mt-[12px]
    text-black-700
`;

const ItemActions = tw.div`
    self-start
`;

const FeedItemComponent: React.FC<{ item: FeedItem, index: number }> = ({ item, index }) => {
    const deleteSelf = useFeedStore(state => state.removeItem);
    const deleteAction = () => {
        deleteSelf(index)
    }

    return (
    <FeedItemStyled>
        <Box>
            <ItemContainer>
                <ItemImage>
                    <Image imageUri={item.image} imageAlt={item.name} />
                </ItemImage>
                <SubItems>
                    <ItemComment>
                        {item.comment}
                    </ItemComment>
                    <ItemName>
                        <p tw={"text-black-550"}>Enviado por</p>
                        {item.name}
                    </ItemName>
                </SubItems>
                <ItemActions>
                    <ItemDeleteBtn onClick={deleteAction}>
                        <Image imageUri={deleteIco} />
                    </ItemDeleteBtn>
                </ItemActions>
            </ItemContainer>
        </Box>
    </FeedItemStyled>)
}

export default FeedItemComponent;
