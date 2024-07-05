import { Image } from "lucide-react";
import { Input } from "../Input";
import { Container, IconContainer } from "./style";
import { ChangeEventHandler } from "react";

interface Props {
	onFileUpload: ChangeEventHandler<HTMLInputElement>;
	value: File | null;
}

export function ImageInput({ onFileUpload, value }: Readonly<Props>) {
	return (
		<label htmlFor="image">
			<Container>
				{value ? (
					<img src={URL.createObjectURL(value)} alt="" />
				) : (
					<IconContainer>
						<Image size={32} />
					</IconContainer>
				)}
				<Input type="file" id="image" name="image" style={{ display: "none" }} onChange={onFileUpload} />
			</Container>
		</label>
	);
}
