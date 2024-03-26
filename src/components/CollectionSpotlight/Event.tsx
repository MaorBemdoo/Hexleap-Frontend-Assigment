import Image from "next/image"
import Button from "../Button"

const Event = ({ image, title, location, time, btnText }: EventProps) => {
    return (
        <div className="relative w-[260px] p-4 overflow-hidden shadow-md bg-white dark:bg-[#3B3E47] before:content-[''] before:absolute before:top-[calc(70%+1rem+1px)] before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 before:w-5 before:h-5 before:rounded-full before:bg-[#f4f9ff] dark:before:bg-[#201e2c] after:content-[''] after:absolute after:top-[calc(70%+1rem+1px)] after:right-0 after:translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:rounded-full after:bg-[#f4f9ff] dark:after:bg-[#201e2c]">
            <Image src={image} alt={`${title} image`} height={500} width={250} className="w-full h-[70%] shadow-md border-b border-dashed border-[#A9ACB2] dark:border-[#818A97]"/>
            <div className="text-center mt-2">
                <h2 className="font-['Poppins',_sans-serif] font-medium">{title}</h2>
                <p className="font-['Poppins',_sans-serif] text-sm">{time}</p>
                <p className="text-sm text-[#525965] dark:text-[#DFDFDF]">{location}</p>
                <Button className="rounded-none bg-black font-medium text-xs">{btnText}</Button>
            </div>
        </div>
    )
}
export default Event