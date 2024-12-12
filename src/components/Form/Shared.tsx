import tw from "twin.macro";
import {Field} from "formik";

export const FormInput = tw(Field)`
    rounded-[8px]
    my-auto
    py-4
    px-6
    bg-black-500
    flex-grow
`;

export const FormGroup = tw.div`
    m-1
    flex
`;

export const BaseButton = tw.button`
    py-3
    px-8
    rounded-[8px]
`;