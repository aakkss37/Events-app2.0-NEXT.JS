import React from 'react'
import EventItem from './EventItem';
import style from "./eventList.module.css"

const EventList = (props) => {
    const { events } = props;
    return (
        <ul className={style.list}>
            {events.map((event, i) => <EventItem key={i} event={event}></EventItem>)}
        </ul>
    )
}

export default EventList