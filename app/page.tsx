import { Suspense } from 'react'
import EventList from './events/components/eventList'
import EventListSkeleton from './events/components/eventListSkeleton'
import Header from "@/app/header/header";

export default function EventsPage() {
    const city = "LONDON";
    const type = "music";
    return (
        <main>
            <Header />
            <Suspense fallback={<EventListSkeleton />}>
                <EventList
                    city={city}
                    type={type}
                />
            </Suspense>
        </main>
    )
}