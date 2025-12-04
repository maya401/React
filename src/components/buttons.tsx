interface buttonProps {
    text: string;
    className ?: string;
}

export default function Button ({text, className} : buttonProps){
return(
    <button className={` ${className}`}>{text}</button>
);

}