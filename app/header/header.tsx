import Image from "next/image";
import EventTypeList from "@/app/header/eventTypeList";
import iconBlack from '@/src/assets/events-icon-black.png';
import iconWhite from '@/src/assets/events-icon-white.png';
import LocationSelector from "@/app/header/locationSelector";

export default function Header({updateType, updateCity}:{ updateType: (type: string) => void,
    updateCity: (city: string) => void}){
    return (
        <div className='flex gap-4 items-center place-content-start p-4'>
            <EventTypeList updateType={(type: string) => updateType(type)}/>
            <LocationSelector  updateCity={(city: string) => updateCity(city)}/>
        </div>
    )
}