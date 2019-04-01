import React from 'react'

const ContractVehicle = ({id, link, img, alt}) => {
  return (
    <li style={{ display: `inline` }}>
      <a href={link}>
        <img className="attachment-pinnacle-full-width size-pinnacle-full-width wp-post-image" src={img} alt={alt} sizes="(max-width: 150px) 100vw, 150px"/>
      </a>
    </li>
  )
}

export default ContractVehicle
