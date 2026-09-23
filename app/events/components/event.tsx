import {Key} from "react";
import styles from './event.module.css';

export default function Event({
    id,
    name,
    description,
    date
}:{id: Key | null | undefined, name: string, description: string, date: string})  {
    return (
        <li key={id}>
            <div className={styles.event}>
                <div className="alert alert-info d-flex flex-column">
                    <h3 className="subtitle">{name}</h3>
                    <p>{description}</p>
                    <small style={{ width:"100%" }} className="text-right text-accept">
                        {date}
                    </small>
                </div>
            </div>
        </li>
    );
}