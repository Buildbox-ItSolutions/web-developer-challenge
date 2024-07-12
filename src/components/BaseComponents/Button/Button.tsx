import {BaseButton, BaseButtonCancel} from "./Button.styles.ts";

export const BaseButtonComponent = ({ variant = "confirm", ...props }: Parameters<typeof BaseButtonCancel>[0] & { variant?: "cancel" | "confirm" }) => {
    const Buttons = {
        cancel: <BaseButtonCancel { ...props }/>,
        confirm: <BaseButton { ...props }/>
    }
    return Buttons[variant]
}
