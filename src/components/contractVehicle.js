import React from 'react'

const ContractVehicle = ({id, link, img, alt}) => {
  return (
    <li id={id} className="entry-contract-vehicle">
      <div className="contract-vehicle-content">
        <a href={link}>
          <img className="attachment-pinnacle-full-width size-pinnacle-full-width wp-post-image" src={img} alt={alt} sizes="(max-width: 150px) 100vw, 150px"/>
        </a>
      </div>
    </li>
  )
}

export default ContractVehicle
