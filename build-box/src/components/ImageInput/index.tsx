import photograph from '../../assets/images/photograph.svg';
import styled from 'styled-components';

const StylizedContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 16px;
`;

const StylizedLabel = styled.label`
	align-items: center;
	cursor: pointer;
	background-position: center;
	background-size: 24px 24px;
	background-repeat: no-repeat;
	border-radius: 36px;
	border: solid 1px #4b4b4b;
	display: flex;
	height: 88px;
	justify-content: center;
	width: 88px;
`;

const StylizedImage = styled.img`
	borderRadius: '36px',
	height: '88px',
	objectFit: 'cover',
	width: '88px',
`;

function Header({
	image,
	handleImage,
}: {
	image: string;
	handleImage: (files: FileList | null) => void;
}) {
	return (
		<StylizedContainer>
			<StylizedLabel htmlFor="file-input">
				<input
					name="file"
					id="file-input"
					type="file"
					data-testid="image-input"
					onChange={({ target: { files } }) => handleImage(files)}
					hidden
				/>
				{!image ? (
					<StylizedImage
						src={photograph}
						alt="square with two mountains and a sun drawn"
					/>
				) : (
					<StylizedImage src={image} alt="" />
				)}
			</StylizedLabel>
		</StylizedContainer>
	);
}

export default Header;
