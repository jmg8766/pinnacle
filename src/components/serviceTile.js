import React from 'react'

const ServiceTile = ({id, img, link, text}) => {
  return (

    <div id={id} className="service-entry" style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="service-excerpt">
        <h3 className="service-title">
          <a href={link}>{text}</a>
        </h3>
        <div className="the-excerpt"/>
      </div>
    </div>
  )
}

export default ServiceTile
