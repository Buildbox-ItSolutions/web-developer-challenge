import tw from "tailwind-styled-components";

export const InputSection = tw.section`
  w-full
  mb-2
  text-white
`;

export const Input = tw.input`
  p-3
  w-full
  rounded-[8px]
  focus:outline-none
  bg-[#494949]
  text-sm
`;

export const TextArea = tw.textarea`
  p-3
  w-full
  rounded-[8px]
  focus:outline-none
  bg-[#494949]
  text-sm
`;

export const ImageInputMainContainer = tw.section`
  flex
  items-center
  justify-center
  gap-4
`;

export const ImageInputSection = tw.label`
  w-[88px]
  h-[88px]
  flex
  items-center
  justify-center
  cursor-pointer
  mb-4
  rounded-[36px]
  overflow-hidden
`;
