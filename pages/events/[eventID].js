import EventContent from '@/components/EventsDetail/event-content'
import EventLogistics from '@/components/EventsDetail/event-logistics'
import EventSummary from '@/components/EventsDetail/event-summary'
import { getEventById } from '@/dummy-data'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

const EventDetailPage = () => {
    const route = useRouter()
    // console.log(route)
    const eventID = route.query.eventID
    const event = getEventById(eventID)
    console.log(eventID)
    console.log(event)

    if (!event) {
        return (
            <div>
                <h1>No event found</h1>
            </div>
        )
    }
    return (
        <Fragment >
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent><p>{event.description}</p></EventContent>
        </Fragment>
    )
}

export default EventDetailPage