import React from 'react'

export default function Card(props) {
    return (
        <main>
            <img src={props.item.imageUrl} className='props-image' alt="location" />
            <div className='span-goog'>
            <img src={process.env.PUBLIC_URL + '/images/ping.png'} className='ping-image' alt="ping" />
            <h4 className='location'>{props.item.location}</h4>
            <a href={props.item.googleMapsUrl} className="maps"><h4>View on Google Maps</h4></a>
            </div>
            <h1 className='title'>{props.item.title}</h1>
            <h4 className='date'>{props.item.startDate} - {props.item.endDate}</h4>
            <h4 className='description'>{props.item.description}</h4>
            <hr />
        </main>
    )
}