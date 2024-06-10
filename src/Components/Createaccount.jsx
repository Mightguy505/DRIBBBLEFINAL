import React from 'react'
import './Createaccount.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Finish from './Finish';
import Select from 'react-select';


const Createaccount = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setSelectedFile(reader.result);
            };
        }
    };
  return (
    <>
     <div className="dribble pacifico-regular">
            <h2>dribble</h2>
        </div>
    <div className='Containeraccount'>
        <div className="headline lexend">
            <h1>Welcome! let's create your profile</h1>
        </div>
        <div className="para lexend">
            <p>Let others get to know you better! You can do this later</p>
        </div>
        <div className="avatar lexend">
           <h2>Add an avatar</h2>
        </div>
        <div className="gg">
        <div className="imag">
        <img src={selectedFile || "src/image1.png"} alt="Selected image" />
        
        </div>
        <div className="btn">
        <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg" />
        </div>
        </div>
        <div className="dflt lexend text-gray-400">
        <a> &gt; Or choose one of our defaults </a>
        </div>
        <div className="addloc lexend">
            <h2>Add your location</h2>
        </div>
        <div className="locinp">
        <form action="post">
            <input type='text' name='text' placeholder='Enter your location' className="input-field" />
          </form>
        </div>
        <div className='linee inter'>
  <div>________________________________________________________________</div>
            <div className="btnnext">
                <Link to='/Nextpage'><button>Next</button></Link></div>
          </div>
         <Link to='/Finish'> profileImage={selectedFile}</Link>
    </div>
    
    </>
  )
}

export default Createaccount
