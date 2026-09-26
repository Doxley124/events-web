'use client'
import {Suspense, useState} from 'react'
import EventList from './events/eventList'
import EventListSkeleton from './events/eventListSkeleton'
import Header from "@/app/header/header";

export default function EventsPage() {
    const [type, setType] = useState("");
    const [city, setCity] = useState("");
    function updateType(newType: string) {
        setType(newType)
    }
    function updateCity(newCity: string) {
        if (newCity === "ALL LOCATIONS") {
            setCity("")
        }
        else {
            setCity(newCity)
        }
    }
    return (
        <main>
            <Header
                updateType={(newType: string) => updateType(newType)}
                updateCity={(newCity: string) => updateCity(newCity)}
            />
            <Suspense fallback={<EventListSkeleton />}>
                <EventList
                    city={city}
                    type={type}
                />
            </Suspense>
        </main>
    )
}