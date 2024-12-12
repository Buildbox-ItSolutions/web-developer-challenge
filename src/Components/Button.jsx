import "./Button.css"

function Button({type, value, idName, handleClick}) {
    return (
        <button type={type} id={idName} onClick={handleClick}>{value}</button>
    )
}

export default Button