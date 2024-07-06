import { IoMdCloseCircleOutline } from "react-icons/io";

import styled from "styled-components";

import { IconButton } from "../components/IconButton";
import { IItem } from "../ItemForm";

const Card = styled("div")(() => ({
  position: "relative",
  padding: "1.5rem",
  marginBottom: "1rem",
  border: "1px solid #3b3b3b",
  borderRadius: "4px",
  backgroundColor: "#313131",
}));

const CardContent = styled("div")(() => ({
  marginTop: "1.8rem",
  display: "flex",
  gap: "1.5rem",
}));

const Text = styled("p")(() => ({
  color: "#7a7a7a",
}));

const TextLabel = styled.p`
  color: #595959;

  // extra-small
  @media (min-width: 0) {
    fontsize: 8pt;
  }

  // small
  @media (min-width: 600px) {
    fontsize: 10pt;
  }
`;

const ImageContainer = styled.div`
  border-radius: 40%;

  // extra-small
  @media (min-width: 0) {
    width: 50px;
    height: 50px;
  }

  // small
  @media (min-width: 600px) {
    width: 90px;
    height: 90px;
  }
`;

const Image = styled.img`
  border-radius: 40%;

  // extra-small
  @media (min-width: 0) {
    width: 50px;
    height: 50px;
  }

  // small
  @media (min-width: 600px) {
    width: 90px;
    height: 90px;
  }
`;

interface IFeed {
  items: IItem[];
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>;
}

export default function Feed({ items, setItems }: IFeed) {
  const handleRemoveItem = (index: number) => {
    const newItems = items.filter((_item, indexItem) => {
      return indexItem !== index;
    });

    setItems(newItems);
  };

  return (
    <div style={{ marginTop: "3rem" }}>
      <h4 style={{ marginBottom: "0.5rem", color: "#7a7a7a" }}>Feed</h4>

      {items.map((item, index) => (
        <Card key={index}>
          <IconButton
            onClick={() => handleRemoveItem(index)}
            style={{
              position: "absolute",
              margin: "8px",
              top: 0,
              right: 0,
            }}
          >
            <IoMdCloseCircleOutline size={20} color="#bc5225" />
          </IconButton>

          <CardContent>
            <ImageContainer>
              <Image src={item.image} alt={item.name} />
            </ImageContainer>

            <div>
              <Text style={{ marginBottom: "1.2rem" }}>{item.description}</Text>

              <div>
                <TextLabel>Enviado por</TextLabel>
                <Text>{item.name}</Text>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
