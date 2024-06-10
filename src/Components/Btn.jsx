import React from 'react'
import { Link } from "react-router-dom";

const Btn = () => {
  return (
    <div>
      <Link to="/Createaccount">
        <button className='btn1 bg-pink-600 relative bottom-10' style={{display:'flex',justifyContent:'center'}} >Create Account</button>
      </Link>
    </div>
  )
}

export default Btn