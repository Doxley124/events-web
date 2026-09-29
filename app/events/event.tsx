import {Key} from "react";
import Image from "next/image";
import EventTypeSmall from "@/app/events/eventTypeSmall";

export default function Event({
    id,
    name,
    description,
    date,
    mainType,
    imageURL
}:{id: Key | null | undefined, name: string, description: string, date: string, mainType: string,
    imageURL: string})  {
    return (
        <div className="flex flex-col border-2 rounded-lg">
            <div className="flex flex-row">
                <Image className="m-2"
                       src={"/" + imageURL}
                       height={200}
                       width={150}
                       alt="Event poster"
                />
                <div className="flex flex-col p-2 grow">
                    <div className="flex flex-row items-start justify-between border-b-4">
                        <div className="text-base md:text-2xl truncate">{name}</div>
                        <EventTypeSmall type={mainType} />
                    </div>
                    <div className="text-base grow mt-2 truncate text-wrap">{description}</div>
                    <div className="text-sm text-end">{date.slice(0,10)}</div>
                </div>
            </div>
        </div>
    );
}