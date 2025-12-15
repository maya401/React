interface buttonProps {
    text: string;
    className ?: string;
    link ? :string
}

export default function Button ({text, className, link} : buttonProps){
return(
    <button className={` ${className}`}>
        <a href={link}> {text}</a>
    </button>
);

}