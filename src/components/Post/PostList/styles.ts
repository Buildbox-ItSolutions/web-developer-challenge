import tw from "tailwind-styled-components";

export const MainContainer = tw.section`
  flex
  flex-col
  items-start
  justify-center
  w-full
  sm:w-4/5
  md:w-[516px]
  gap-2
`;

export const Title = tw.h2`
  text-[#7a7a7a]
  text-start
  font-semibold
  md:text-base
  text-sm
`;

export const PostSection = tw.section`
  flex
  flex-col
  items-center
  justify-center
  w-full
  rounded-[3px]
  gap-4
`;
