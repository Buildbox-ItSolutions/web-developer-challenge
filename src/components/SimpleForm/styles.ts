import tw from "tailwind-styled-components";

export const MainContainer = tw.section`
  p-6
  pb-0
  rounded-[3px]
  w-full
  sm:w-4/5
  md:w-[516px]
  flex
  flex-col
  items-center
  justify-center
  bg-[#313131]
  border
  border-[#3b3b3b]
  mb-12
  md:mb-14
`;

export const FormContainer = tw.form`
  flex
  flex-col
  items-center
  justify-center
  w-full
`;
