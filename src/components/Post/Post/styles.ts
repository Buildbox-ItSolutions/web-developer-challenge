import tw from "tailwind-styled-components";

export const MainContainer = tw.section`
  bg-[#313131]
  border
  border-[#3b3b3b]
  w-full
  flex
  flex-col
  p-3
`;

export const IconContainer = tw.section`
  w-full
  flex
  justify-end
  items-center
`;

export const Content = tw.section`
  flex
  flex-col
  md:flex-row
  items-center
  md:items-start
  justify-center
  md:justify-start
  w-full
  gap-8
  md:mt-8
`;

export const AuthorImageSection = tw.section`
  w-[88px]
  h-[88px]
  flex
  items-center
  justify-center
  mb-4
  rounded-[36px]
  overflow-hidden
  md:ml-6
`;

export const MessageSection = tw.section`
  w-11/12
  md:w-[300px]
  flex
  flex-col
  items-center
  md:items-start
  justify-center
  md:mr-6
  mb-2
  md:mb-8
  gap-6
`;

export const Message = tw.p`
  text-[#9f9f9f]
  text-center
  md:text-start
`;

export const AuthorSection = tw.section`
  w-full
  flex
  flex-col
  md:items-start
  items-start
  justify-center
`;

export const AuthorLabel = tw.span`
  text-[#5f5f5f]
  text-sm
`;

export const AuthorName = tw.span`
  text-[#7a7a7a]
`;
