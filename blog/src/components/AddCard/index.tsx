import { DeleteIcon } from "../../utils/icons/delete";
import InputName from "../InputName";
import InputDescription from "../InputDescription";
import ButtonTrash from "../Buttons/buttonTrash";
import ButtonPublish from "../Buttons/buttonPublish";
import PublishedCard from "../PublishedCard";
import { useImagePreview } from "../../services/hooks/useImage/index";
import { Card, ItensButtons, ItensContent, ItensInputs } from './style'


export default function AddCard() {
    const { imagePreview, handleImageChange, handleRemoveImage } = useImagePreview();

    return (
        <>
        <Card>
            <ItensContent>
            <input
                    type="file"
                    accept="image/*"
                    id="image-upload"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                />
                <label htmlFor="image-upload">
                    <img 
                        id="image-preview" 
                        src={imagePreview ? imagePreview : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"}
                        alt="Pre-visualização da imagem"
                    />
                </label>
                <span>
                        <button onClick={handleRemoveImage}>
                            <DeleteIcon/>
                        </button>
                </span>
            </ItensContent>
            <ItensInputs>
                <InputName />
                <InputDescription />
            </ItensInputs>
            <ItensButtons>
                <ButtonTrash />
                <ButtonPublish />
            </ItensButtons>
        </Card>
        <PublishedCard />
        </>
    );
}

