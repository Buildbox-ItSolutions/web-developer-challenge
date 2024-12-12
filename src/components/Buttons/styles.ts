import tw from "tailwind-styled-components";

export const ButtonsContainer = tw.section`
	text-sm
	md:text-base
	mt-8
	mb-6
	w-full
	flex
	items-center
	justify-end
	gap-6
`;

export const SimpleButton = tw.button`
	px-4
	py-2
	md:px-5
	rounded-lg
	bg-[#71bb00]
	text-[#ffffff]
`;

export const UnderlinedButton = tw.span`
	underline
	text-[#5f5f5f]
	cursor-pointer
`;
