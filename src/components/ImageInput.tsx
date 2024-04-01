import ImageInputPropsInterface from '../interface/imageInputProps';

function ImageInput({ imageUrl, setUserInputs, handleImageChanger }: ImageInputPropsInterface) {
  const handleTrashButton = () => {
    setUserInputs((prevState) => ({
      ...prevState,
      imageUrl: '',
    }));
  };

  return (
    <div className="flex h-[88px] justify-center items-center">
      <div className="relative">
        <label
          htmlFor="imageInput"
          className="inset-0 flex items-center justify-center w-[88px] h-[88px] bg-cover bg-center rounded-[36px] border border-mainColor-textGrey absolute top-[-44px] left-[-28px]"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        >
          <img src={imageUrl == '' ? 'src/assets/image.png' : ''} />
        </label>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleImageChanger}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
      <button className="flex items-center justify-center w-[24px] h-[24px] ml-2 relative right-[-62px]">
        {imageUrl.length > 0 && <img src="src/assets/trash.png" onClick={handleTrashButton} />}
      </button>
    </div>
  );
}

export default ImageInput;
