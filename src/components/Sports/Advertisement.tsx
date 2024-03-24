import Image from "next/image"

const Advertisement = () => {
    return (
        <div className="p-2 h-[500px] w-[230px] shadow-md dark:bg-[#3B3E47]">
            <div className="relative mb-4">
                <span className="absolute right-0 px-2 text-[.75rem] bg-black text-white">Ad</span>
                <Image src="/advert_banner.png" alt={`ad image`} width={0} height={0} priority className="h-full w-full"/>
            </div>
            <p>Advertisement title</p>
            <p className="text-[.75rem] text-[#525965] dark:text-[#DFDFDF] pt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quae iste maxime accusamus delectus quisquam, numquam quod reprehenderit iure facere? Maiores temporibus ratione voluptatum nisi enim, aperiam ab necessitatibus deleniti! Libero quasi amet eius incidunt harum, esse ipsum?</p>
        </div>
    )
}
export default Advertisement