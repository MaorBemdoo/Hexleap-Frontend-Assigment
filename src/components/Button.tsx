const Button = ({ children, className }: ButtonProps) => {
    return (
        <button className={`text-white rounded-sm font-[600] text-sm py-2 px-8 shadow-md  hover:brightness-125 hover:scale-110 transition ${className}`}>{children}</button>
    )
}
export default Button