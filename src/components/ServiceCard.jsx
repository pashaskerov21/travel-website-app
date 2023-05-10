import React from 'react'
import { Link } from 'react-router-dom'

function ServiceCard(props) {
    return (
        <>
            <Link className='service-card' to={props.path}>
                <figure className='card-img' data-category={props.label}>
                    <img src={props.src} alt="travel-img" />
                </figure>
                <div className='card-info'>
                    <h5 className='card-text'>{props.text}</h5>
                </div>
            </Link>
        </>
    )
}

export default ServiceCard
