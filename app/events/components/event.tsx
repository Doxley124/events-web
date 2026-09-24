import {Key} from "react";
import Image from "next/image";
import poster from '@/src/assets/poster.png';

export default function Event({
    id,
    name,
    description,
    date,
    mainType
}:{id: Key | null | undefined, name: string, description: string, date: string, mainType: string})  {
    return (
        <div className="grid grid-flow-col grid-rows-3 gap-4 border-2 rounded-lg">
            <div className="row-span-3 m-2">
                <Image
                   src={poster}
                   height={200}
                   width={100}
                   alt="Event poster"
                />
            </div>
            <div className="flex col-span-2 justify-between">
                <div className="text-lg">{name}</div>
                <div className="pr-4">{mainType}</div>
            </div>
            <div className="col-span-2 row-span-2 content-between">
                <div className="">{description}</div>
                <div className="">{date}</div>
            </div>
        </div>
    );
}