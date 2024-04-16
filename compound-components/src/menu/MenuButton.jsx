import Button from "../Button/button";

export default function MenuButton({buttonText, onClick}) {
    return (
        <Button onClick={onClick}> {buttonText}</Button>
    )
}