import React, { useEffect, useState } from "react";

import { Row, Image } from "antd";
import { api } from "@/services/api";

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

export default function index() {
  const { data } = useFeed();

  const handleDelete = async () => {
    console.log("delete");
  };

  return (
    <>
      <Row>
        <TitleContainer xs={24} xl={24}>
          <FeedTitle level={4}>Feed</FeedTitle>
        </TitleContainer>
        <Column xs={24} xl={24}>
          {data.feeds.map((feed: any) => {
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
          })}
        </Column>
      </Row>
    </>
  );
}
