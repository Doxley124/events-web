'use client'
import { useState } from 'react';
import Image from "next/image";
import EventType from "@/app/header/eventType";

export default function EventTypeList(){
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div className='flex gap-4 items-center place-content-start p-4'>
            <Image
                src="/favicon.ico"
                className='size-10 md:size-20'
                width={30}
                height={30}
                alt="Picture of the author"
            />
            <EventType
                name={"Music"}
                isSelected={selectedIndex === 1}
                onEventTypeClick={() => setSelectedIndex(1)}
            />
            <EventType
                name={"Art"}
                isSelected={selectedIndex === 2}
                onEventTypeClick={() => setSelectedIndex(2)}
            />
            <EventType
                name={"Community"}
                isSelected={selectedIndex === 3}
                onEventTypeClick={() => setSelectedIndex(3)}
            />
        </div>
    )
}