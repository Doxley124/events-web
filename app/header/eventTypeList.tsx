'use client'
import { useState } from 'react';
import EventType from "@/app/header/eventType";

export default function EventTypeList(){
    const [selectedIndex, setSelectedIndex] = useState(0);
    function onClicked(index: number) {
        setSelectedIndex(index)
    }
    return (
        <div className='flex gap-4 items-center place-content-start p-4'>
            <EventType
                name={"Music"}
                isSelected={selectedIndex === 1}
                onEventTypeClick={() => onClicked(1)}
            />
            <EventType
                name={"Art"}
                isSelected={selectedIndex === 2}
                onEventTypeClick={() => onClicked(2)}
            />
            <EventType
                name={"Community"}
                isSelected={selectedIndex === 3}
                onEventTypeClick={() => onClicked(3)}
            />
        </div>
    )
}