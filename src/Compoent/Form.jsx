import React from 'react'

export default function Form(props) {
  return (
    <>
        <div className="pt-4 text-center">
            <h2 className='fw-bold mb-3'>Get Weather!</h2>
            <form onSubmit={props.getWeather}>
                <input type="text" name='city' 
                className='mx-auto rounded-1 form-control py-2 mb-3' 
                placeholder='City...' />
                <input type="text" name='country' 
                className='mx-auto rounded-1 form-control py-2 my-3' 
                placeholder='Country...' />
                <button className='btn text-white fw-bold
                btn-dark py-2 px-5 rounded-1 mt-3'>Get Weather</button>
            </form>
        </div>
    </>
  )
}
