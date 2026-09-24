import { Suspense } from 'react'
import EventList from './events/components/eventList'
import EventListSkeleton from './events/components/eventListSkeleton'
import EventTypeList from "@/app/header/eventTypeList";

export default function EventsPage() {
    return (
        <div>
            <EventTypeList />
            <main>
            {/* If there's any dynamic content inside this boundary, it will be streamed in */}
                <Suspense fallback={<EventListSkeleton />}>
                    <EventList />
                </Suspense>
            </main>
        </div>
    )
}