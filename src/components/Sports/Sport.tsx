import Image from "next/image"

const Sport = ({ image, location, totalEvents, sport }: SportProps) => {
    return (
        <div className="p-2 space-y-2 h-[500px] w-[230px] shadow-md dark:bg-[#3B3E47]">
            <Image src={image} alt={`${location} image`} width={220} height={400} priority className="h-[70%] w-full"/>
            <p>{location}</p>
            <div className="flex justify-between items-center rounded-sm p-2 bg-[#F7F7F8] dark:bg-[#292B32]">
                <div>
                    <p className="text-[.75rem] text-[#525965] dark:text-[#DFDFDF]">Total Events</p>
                    <p className="text-sm font-medium">{totalEvents} Events</p>
                </div>
                <div>
                    <p className="text-[.75rem] text-[#525965] dark:text-[#DFDFDF]">Sport</p>
                    <p className="text-sm font-medium">{sport}</p>
                </div>
            </div>
        </div>
    )
}
export default Sport