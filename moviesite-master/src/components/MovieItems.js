import React from 'react'

export default function MovieItems(props) {
  return (
    <>
      <div className="items">
        <div className="image">
            <img src={`https://image.tmdb.org/t/p/w500${props.url}`} alt="" />
        </div>
        <div className="details">
            <p className='info'>Name-{props.title}</p>
            <p className='info'>Reviews-{props.rating}</p>
        </div>
        <button type="button"  className="btn btn-outline-primary button"><a href={props.linkurl} target='_blank'>Full Details</a></button>
      </div>
      </>
  )
}
