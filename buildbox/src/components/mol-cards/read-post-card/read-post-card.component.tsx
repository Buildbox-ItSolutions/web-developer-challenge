import { Col, Container, Row } from "react-grid-system";
import { ImageCard } from "../../atm-image/image.component";
import { CustomText } from "../../atm-text/text.component";
import { Separator } from "../../utils/separator.component";
import {
    CloseButton,
    ReadPostCardContainerStyled,
} from "./read-post-card.component.style";

interface ReadPostCardProps {
  id: string;
  author: string;
  message: string;
  image: string;
  onDelete: (id: string) => void;
}

export const ReadPostCard: React.FunctionComponent<ReadPostCardProps> = (
  props
) => {
  return (
    <ReadPostCardContainerStyled>
      <CloseButton onClick={() => props.onDelete(props.id)} />
      <Container fluid>
        <Row align="start" justify="center">
          <Col xs={3} md={3}>
            <ImageCard src={props.image} alt="avatar" />
          </Col>
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12}>
                <CustomText size="lg">{props.message}</CustomText>
              </Col>
            </Row>
            <Separator size="md" />
            <Row align="start" justify="start">
              <Col xs={12}>
                <CustomText size="sm">Enviado por:</CustomText>
              </Col>
            </Row>
            <Row align="start" justify="start">
              <Col xs={12}>
                <CustomText size="md">{props.author}</CustomText>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </ReadPostCardContainerStyled>
  );
};
