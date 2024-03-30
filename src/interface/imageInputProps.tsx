export default interface ImageInputPropsInterface {
  imageUrl: string;
  handleImageChanger: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
