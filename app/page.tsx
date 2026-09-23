import { Suspense } from 'react'
import EventList from './events/components/eventList'
import EventListSkeleton from './events/components/eventListSkeleton'

export default function EventsPage() {
    return (
        <div>
            {/* This content will be sent to the client immediately */}
            <header>
                <h1>Music</h1>
            </header>
            <main>
                {/* If there's any dynamic content inside this boundary, it will be streamed in */}
                <Suspense fallback={<EventListSkeleton />}>
                    <EventList />
                </Suspense>
            </main>
        </div>
    )
}