import Image from "next/image"

const CollectionSpotlight = () => {
    return (
        <div className="mt-6 w-full text-center p-10 bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C]">
            <h2 className="text-5xl font-['Poppins',_sans-serif] font-bold">Collection Spotlight</h2>
            <p className="text-sm mt-2 mb-4">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
            <div className="flex items-center justify-between w-full">
                <Image src="/chervon_left.png" alt="chervon left" className="p-2 border border-[#2C9CF0] cursor-pointer h-8 w-6 text-start" width={0} height={0} />
                <div className="basis-8/12"></div>
                <Image src="/chervon_right.png" alt="chervon right" className="p-2 border border-[#2C9CF0] cursor-pointer h-8 w-6 text-end" width={0} height={0} />
            </div>
        </div>
    )
}
export default CollectionSpotlight