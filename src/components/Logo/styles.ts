'use client';

import Image from 'next/image';
import tw from 'tailwind-styled-components';

export const MainContainer = tw.figure`
  w-24
  md:w-28
  object-cover
  flex
  items-center
  justify-center
  overflow-hidden
`;

export const Logo = tw(Image)`
  h-full
  w-full
  object-cover
`;
