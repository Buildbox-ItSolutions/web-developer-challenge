import { IoMdCloseCircleOutline } from "react-icons/io";

import { IconButton } from "../../components/IconButton";
import { ItemProps } from "../ItemForm/itemform";

import {
  Card,
  CardContent,
  Image,
  ImageContainer,
  Text,
  TextLabel,
} from "./feed.styles";

interface FeedProps {
  items: ItemProps[];
  setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
}

export default function Feed({ items, setItems }: FeedProps) {
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
