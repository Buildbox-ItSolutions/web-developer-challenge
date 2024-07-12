import {BaseInput} from "./Input.styles.ts";

export const BaseInputComponent = (props: Parameters<typeof BaseInput>[0]) => {
    return <BaseInput {...props} />
}
