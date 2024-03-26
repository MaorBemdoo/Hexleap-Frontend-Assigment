import { sports } from "@/data";
import Button from "../Button";
import Sport from "./Sport";
import Advertisement from "./Advertisement";

export default function Sports() {
    return (
        <div className="w-full space-y-8">
            <h4 className="font-bold text-2xl border-b-2 border-[#738FFF] w-fit">Sports</h4>
            <div className="flex flex-wrap gap-2">
                {
                    sports.map(({ image, location, totalEvents, sport, id }) => {
                        return <Sport image={image} location={location} totalEvents={totalEvents} sport={sport} key={id}/>
                    })
                }
                <Advertisement />
            </div>
            <Button className="flex mx-auto bg-[#2c9bef]">See More</Button>
        </div>
    );
}
