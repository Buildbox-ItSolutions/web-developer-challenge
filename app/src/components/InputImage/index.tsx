import { IoImageOutline } from "react-icons/io5";

import { Image, InputWrapper } from "./styled";

interface IProps {
  value: string;
  onChange: (newValue: string) => void;
}

const InputImage = (props: IProps) => {
  const handleChange = (event: any) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      props.onChange(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  return props.value === "" ?  (
    <InputWrapper className="p-5">
      <input type="file" onChange={handleChange}/>
      <IoImageOutline />
    </InputWrapper>
  ) : <Image src={props.value} />;
}



export default InputImage;