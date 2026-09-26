'use client'
import { useState } from 'react';
import EventType from "@/app/header/eventType";

export default function EventTypeList({updateType}:{updateType: (type: string) => void}){
    const [selectedIndex, setSelectedIndex] = useState(0);
    function onClicked(index: number) {
        if (selectedIndex == index){
            index = 0;
        }
        setSelectedIndex(index)
        let type = ""
        switch (index) {
            case 1:
                type = "music";
                break;
            case 2:
                type = "art";
                break;
            case 3:
                type = "community";
                break;
            default:
                break;
        }
        updateType(type)
    }
    return (
        <div className='flex gap-4 items-center place-content-start p-4'>
            <EventType
                name={"Music"}
                isSelected={selectedIndex === 1}
                onEventTypeClick={() => onClicked(1)}>
                <div>Music</div>
            </EventType>
            <EventType
                name={"Art"}
                isSelected={selectedIndex === 2}
                onEventTypeClick={() => onClicked(2)}>
                <div>Art</div>
            </EventType>
            <EventType
                name={"Community"}
                isSelected={selectedIndex === 3}
                onEventTypeClick={() => onClicked(3)}>
                <div>Community</div>
            </EventType>
        </div>
    )
}