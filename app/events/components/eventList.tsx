import Event from "@/app/events/components/event";
import { Key } from "react";

export default async function EventList() {
    const data = await fetch('http://localhost:8080/events')
    const events = await data.json()
    return (
        <section>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-4 m-4">
                {events.map((event: {
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