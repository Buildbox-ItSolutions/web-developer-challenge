import { PostCreationProps } from '../interface/postCreationProps';
import { ChangeEvent, useState } from 'react';
import userInputs from '../interface/userInputs';

function PostCreation({ setFeed }: PostCreationProps) {
  const [userInputs, setUserInputs] = useState<userInputs>({
    name: '',
    message: '',
    imageUrl: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
  };

  const handleImageChanger = () => {
    null;
  };

  const sendButton = (e: React.MouseEvent): void => {
    e.preventDefault();

    setFeed((prevState) => [...prevState, <h1>{userInputs.name}</h1>]);
  };

  const discardButton = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-[516px] h-[353px] bg-mainColor-dark m-[40px] flex flex-col items-center p-[24px] border border-mainColor-lightGrey">
      <div className="w-[88px] h-[88px] flex items-center justify-center bg-cover bg-center mb-[16px] rounded-[36px] border border-mainColor-lightGrey">
        <img src={userInputs.imageUrl == '' ? 'src/assets/image.png' : userInputs.imageUrl} />
      </div>
      <form className="flex flex-col items-center justify-between">
        <input
          className="w-[468px] h-[40px] bg-mainColor-lightGrey rounded-[8px] mb-[8px] pl-[16px] text-[14px]"
          placeholder="Digite seu nome"
          type="text"
          name="name"
          value={userInputs.name}
          onChange={(e) => handleInputChange(e)}
        ></input>
        <textarea
          className="w-[468px] h-[80px] bg-mainColor-lightGrey rounded-[8px] resize-none pt-[12px] pl-[16px] text-[14px]"
          placeholder="Menssagem"
          name="message"
          value={userInputs.message}
          onChange={(e) => handleInputChange(e)}
        />
        <div className="flex w-full justify-end relative bottom-[-32px]">
          <button
            className="w-[98px] h-[41px] text-mainColor-subtitle mr-[12px]"
            onClick={(e) => discardButton(e)}
          >
            Descartar
          </button>
          <button
            className="w-[98px] h-[41px] bg-mainColor-lightGrey rounded-[8px] text-mainColor-textDark"
            onClick={(e) => sendButton(e)}
          >
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostCreation;
