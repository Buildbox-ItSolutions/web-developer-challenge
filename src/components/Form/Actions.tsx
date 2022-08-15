import React from "react";
import {BaseButton, FormGroup} from "./Shared";
import tw from "twin.macro";

const ResetButton = tw(BaseButton)`
    text-black-550
    underline
`;

const SubmitButton = tw(BaseButton)`
    bg-black-550
    text-black-300
`;

const ActionsInput: React.FC<{}> = () => {
    return <FormGroup tw={"justify-end mt-8"}>
        <ResetButton children={"Descartar"} type={"reset"} />
        <SubmitButton children={"Publicar"} type={"submit"} />
    </FormGroup>
}

export default ActionsInput