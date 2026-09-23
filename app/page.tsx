import { Suspense } from 'react'
import EventList from './events/components/eventList'
import EventListSkeleton from './events/components/eventListSkeleton'
import EventTypeTitle from "@/app/header/eventTypeTitle";
import Image from 'next/image'

export default function EventsPage() {
    return (
        <div>
            {/* This content will be sent to the client immediately */}
            <div className='flex gap-4 items-center place-content-start px-4 py-4 text-2xl md:text-4xl'>
                <Image
                    src="/favicon.ico"
                    className='size-10 md:size-20'
                    width={30}
                    height={30}
                    alt="Picture of the author"
                />
                <EventTypeTitle name={"Music"}/>
                <EventTypeTitle name={"Art"}/>
                <EventTypeTitle name={"Community"}/>
            </div>
            <main>
            {/* If there's any dynamic content inside this boundary, it will be streamed in */}
                <Suspense fallback={<EventListSkeleton />}>
                    <EventList />
                </Suspense>
            </main>
        </div>
    )
}