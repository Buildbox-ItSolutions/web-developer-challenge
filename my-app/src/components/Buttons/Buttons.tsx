import { Button, ButtonProps } from "react-bootstrap"


export default function Buttons(props:ButtonProps){
    return(
        <Button 
        variant={props.variant} 
        disabled={props.disabled}>
            {props.value}
        </Button>
    )
}