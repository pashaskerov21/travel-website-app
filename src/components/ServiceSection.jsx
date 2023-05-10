import React from 'react'
import { cardContextArr } from './CardContext'
import ServiceCard from './ServiceCard'


function ServiceSection() {
  return (
    <section className="service-card-section">
      <div className="container">
        <h1>Check out these EPIC Destination !</h1>
        <div className="row card-row">
          {
            cardContextArr.map(item => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4 ">
                <ServiceCard src={item.src} text={item.text} label={item.label} path={item.path} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
