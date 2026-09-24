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
        <div className="flex flex-col border-2 rounded-lg">
            <div className="flex flex-row">
                <Image className="m-2"
                       src={poster}
                       height={200}
                       width={100}
                       alt="Event poster"
                />
                <div className="flex flex-col p-2 grow">
                    <div className="flex flex-row items-start justify-between border-b-4">
                        <div className="text-2xl">{name}</div>
                        <div className="text-sm">{mainType}</div>
                    </div>
                    <div className="text-base grow mt-2 truncate">{description}</div>
                    <div className="text-sm text-end">{date}</div>
                </div>
            </div>
        </div>
    );
}