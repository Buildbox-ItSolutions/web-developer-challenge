import React, { useEffect } from "react";

import { Row, Image } from "antd";

import {
  CardContainer,
  Column,
  ParagraphData,
  TitleContainer,
  TextContainer,
  Sendby,
  CloseIcon,
  FeedTitle,
  CloseIconContainer,
  ImageContainer,
  ParagraphContainer,
} from "./styles";

import { useFeed } from "../../../services/hooks/useFeed";

const index = () => {
  const { data } = useFeed();

  const handleDelete = async () => {
    console.log("delete");
  };

  useEffect(() => {
    () => {
      useFeed();
    };
  }, [data.feeds]);
  return (
    <>
      <Row>
        <TitleContainer xs={24} xl={24}>
          <FeedTitle level={4}>Feed</FeedTitle>
        </TitleContainer>
        <Column xs={24} xl={24}>
          {data.feeds.map(
            (feed: {
              image: string | undefined;
              id: React.Key | null | undefined;
              comment:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              name:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => {
              return (
                <CardContainer key={feed.id}>
                  <CloseIconContainer>
                    <CloseIcon size={20} onClick={handleDelete} />
                  </CloseIconContainer>
                  <Row>
                    <ImageContainer xl={6} xs={6}>
                      <Image src={feed.image} preview={false} />
                    </ImageContainer>
                    <ParagraphContainer xl={16} xs={16}>
                      <ParagraphData>{feed.comment}</ParagraphData>
                      <Sendby>
                        Enviado por <br />{" "}
                        <TextContainer>{feed.name}</TextContainer>
                      </Sendby>
                    </ParagraphContainer>
                  </Row>
                </CardContainer>
              );
            }
          )}
        </Column>
      </Row>
    </>
  );
};

export default index;
