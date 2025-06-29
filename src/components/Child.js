import React, { useRef } from 'react'

const Child = ({ handleSubmit}) => {
    
  return (
    <div>
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width: "300px"}}>
            <input style={{marginBottom: "20px", height: "40px"}} type='text' placeholder='Enter your Username' />
            <input style={{marginBottom: "20px", height: "40px"}} type='password' placeholder='Enter your Password' />
            <button style={{height: "40px"}} type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Child;