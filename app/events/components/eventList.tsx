import Event from "@/app/events/components/event";
import {Key} from "react";
import useSWR from 'swr'


export default function EventList({city, type}:{city: string, type: string}) {
    const fetcher = async () => {
        const response = await fetch(`http://localhost:8080/events/filter?city=${city}&mainType=${type}`)
        const data = await response.json()
        return data
    }

    const { data, error, isLoading} = useSWR(
        ['events', city, type],
        () => fetcher(),
        {fallbackData: []}
    )
    if (isLoading) return <div></div>
    return (
        <section>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-center gap-4 m-4 relative z-0">
                {data.map((event: {
                    id: Key | null | undefined;
                    eventName: string;
                    description: string;
                    date: string;
                    mainType: string;}) => (
                    <Event
                        key={event.id}
                        name={event.eventName}
                        description={event.description}
                        date={event.date}
                        id={event.id}
                        mainType={event.mainType}
                    />
                ))}
            </div>
        </section>
    );
}