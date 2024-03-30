import { PostCreationProps } from '../../interface/postCreationProps';
import { ChangeEvent, useEffect, useState } from 'react';
import UserInputs from '../../interface/userInputs';
import { v4 as uuidv4 } from 'uuid';
import Post from '../post/Post';
import './postCreation.css';
import ImageInput from '../ImageInput';

function PostCreation({ setFeed }: PostCreationProps) {
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [userInputs, setUserInputs] = useState<UserInputs>({
    name: '',
    message: '',
    imageUrl: '',
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
  };

  const handleImageChanger = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const readerImageUrl = reader.result as string;
        setUserInputs({
          ...userInputs,
          imageUrl: readerImageUrl,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleValidationForm = () => {
    if (
      userInputs.name.length > 0 &&
      userInputs.message.length > 0 &&
      userInputs.imageUrl.length > 0
    ) {
      return true;
    }
    return false;
  };

  const sendButton = (e: React.MouseEvent): void => {
    e.preventDefault();
    if (handleValidationForm()) {
      setFeed((prevState) => [
        <Post id={uuidv4()} userInputs={userInputs} setFeed={setFeed} />,
        ...prevState,
      ]);

      setUserInputs({
        name: '',
        message: '',
        imageUrl: '',
      });
    }
    return;
  };

  const discardButton = (e: React.MouseEvent) => {
    e.preventDefault();
    setUserInputs({
      name: '',
      message: '',
      imageUrl: '',
    });
  };

  useEffect(() => {
    handleValidationForm() ? setIsValidated(true) : setIsValidated(false);
  }, [handleValidationForm]);

  return (
    <div className="w-[516px] h-[353px] bg-mainColor-dark m-[40px] flex flex-col items-center p-[24px] border border-mainColor-lightGrey">
      <ImageInput
        imageUrl={userInputs.imageUrl}
        setUserInputs={setUserInputs}
        handleImageChanger={handleImageChanger}
      />
      <form className="flex flex-col items-center justify-between mt-[16px]">
        <input
          className="w-[468px] h-[40px] rounded-[8px] mb-[8px] pl-[16px] text-[14px] input"
          placeholder="Digite seu nome"
          type="text"
          name="name"
          value={userInputs.name}
          onChange={(e) => handleInputChange(e)}
        ></input>
        <textarea
          className="w-[468px] h-[80px] rounded-[8px] resize-none pt-[12px] pl-[16px] text-[14px] input"
          placeholder="Menssagem"
          name="message"
          value={userInputs.message}
          onChange={(e) => handleInputChange(e)}
        />
        <div className="flex w-full justify-end relative bottom-[-32px]">
          <div className="w-[190px] flex items-center justify-between">
            <button
              className="w-[98px] h-[41px] text-mainColor-subtitle text-[14px] underline"
              onClick={(e) => discardButton(e)}
            >
              Descartar
            </button>
            <button
              className={`w-[98px] h-[41px] ${
                isValidated ? 'bg-mainColor-title' : 'bg-mainColor-lightGrey'
              } rounded-[8px] text-mainColor-textDark text-[14px]`}
              onClick={(e) => sendButton(e)}
            >
              Publicar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostCreation;
