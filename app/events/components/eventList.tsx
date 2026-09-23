import Event from "@/app/events/components/event";
import { Key } from "react";
import styles from './eventList.module.css';

export default async function EventList() {
    const data = await fetch('http://localhost:8080/events')
    const events = await data.json()
    return (
        <section>
            <ul className={styles.eventList}>
                {events.map((event: {
                    id: Key | null | undefined;
                    eventName: string;
                    description: string;
                    date: string; }) => (
                    <Event
                        key={event.id}
                        name={event.eventName}
                        description={event.description}
                        date={event.date}
                        id={event.id}
                    />
                ))}
            </ul>
        </section>
    );
}