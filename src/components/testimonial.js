import React from 'react'

const Testimonial = ({id, quote, client}) => {
  return (
    <li id={id} className="entry-testimonial">
      <div className="testimonial-wrapper">
        <p className="quote">{quote}</p>
        <p className="client">{client}</p>
      </div>
    </li>
  )
}

export default Testimonial
