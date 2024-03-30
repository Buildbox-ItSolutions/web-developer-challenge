import ImageInputPropsInterface from '../interface/imageInputProps';

function ImageInput({ imageUrl, handleImageChanger }: ImageInputPropsInterface) {
  return (
    <div>
      <label
        htmlFor="imageInput"
        className="w-[88px] h-[88px] flex items-center justify-center bg-cover bg-center mb-[16px] rounded-[36px] border border-mainColor-lightGrey"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      ></label>

      {
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleImageChanger}
          className="hidden"
        ></input>
      }
    </div>
  );
}

export default ImageInput;
