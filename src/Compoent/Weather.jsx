import React from 'react'

export default function Weather(props) {
  return (
    <>
        <div className="w-75 mx-auto pt-4 mt-4">
            {
                props.city ? 
                <p className='fw-bold pb-1'>City: <span className='fw-normal'>{props.city}</span> </p>: ''
            }
            {
                props.country ? <p className='fw-bold pb-1'>Country:
                <span className='fw-normal'> {props.country} </span></p>: ''
            }
            {
                props.humidity ? <p className='fw-bold pb-1'>Humidity: 
                <span className='fw-normal'> {props.humidity} </span></p>: ''
            }
            {
                props.description ? <p className='fw-bold pb-1'>Description: 
                <span className='fw-normal'> {props.description} </span></p>: ''
            }
        </div>
    </>
  )
}