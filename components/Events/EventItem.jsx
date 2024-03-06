import Image from 'next/image'
import React from 'react'
import style from './event-item.module.css'
import Button from '../UI/Button.jsx'
import DateIcon from '../Icons/date-icon'
import AddressIcon from '../Icons/address-icon'
import ArrowRightIcon from '../Icons/arrow-right-icon'

const EventItem = ({ event }) => {
    const { title, image, date, location, id } = event;
    const formattedDate = new Date(date).toLocaleDateString('en-US', { day: '2-digit', month: "short", year: "numeric" })
    const formattedAddress = location.replace(', ', '\n')
    return (
        <li className={style.item}>
            <Image src={"/" + image} alt={title} width={360} height={300} />
            <div className={style.content}>
                <div className={style.summary}>
                    <h2>{title}</h2>
                    <div className={style.date}>
                        <DateIcon />
                        <time>{formattedDate}</time>
                    </div>
                    <div className={style.address}>
                        <AddressIcon />
                        <time>{formattedAddress}</time>
                    </div>
                </div>
                <div className={style.actions}>
                    <Button link={`/events/${id}`} ><span>Explore <span className={style.icon}><ArrowRightIcon /></span> </span></Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem