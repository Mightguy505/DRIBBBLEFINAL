import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import { useState } from 'react'
import Btn from './Btn'
const Homelogin = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
  
    formData.append("access_key", "3d3c4062-d14e-44fb-a638-5d0a67d947d0");
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  
    const data = await response.json();
  
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      console.log("Form submitted successfully:", data);
    } else {
      setResult(data.message);
      console.log("Form submission failed:", data);
    }
  };

  return (
    <>
     
     <div className="container2">
        
         <img src="src/login3.png" alt="IMAGE"  />
         <div className="member flex justify-end pr-4 gap-1" >
           Already a member?
         <Link to="/Signin" style={{ color:'blue'}}>Sign in</Link>
         </div>
         <div className="container">
           <div className=' lexend flex center text-4xl pl-96 pt-32' >
             <h1>Sign Up To Dribbble</h1>
           </div>
         </div>
         
         <div className="form" style={{ display: 'flex',maxWidth:'350px'}}>
           <form onSubmit={onSubmit} action="post" method="post">
             <div className="sp"style={{ marginBottom: '10px' }}>
               <div>
                 <label htmlFor="name" style={{ marginBottom: '35px' }}> Name </label>
                 <div>
                   <input type="text " id="name" name="name" /></div>
 
               </div>
               <div className="hp" style={{ marginBottom: '35px' }}>
                 <label htmlFor="username" style={{ marginBottom: '20px' }}> Username </label>
                 <div>
 
                   <input type="text" id="username" name="username" /></div>
               </div>
             </div>
             <div style={{ marginBottom: '30px' }}>
               <label htmlFor="email" style={{ marginBottom: '45px' }}> Email </label>
               <div>
                 <input type="email" id="email" name="email  "  placeholder='  account@gmail.com'/></div></div>
 
             <div style={{ marginBottom: '10px' }}>
 
               <label htmlFor="password"> Password </label>
               <div>
                 <input type="password" id="password" name="password" placeholder='   6+ characters' /></div></div>
 
             <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginBottom: '0px'}}>
               <input type="checkbox" id="terms" name="terms" style={{marginBottom:'45px'}}/>
           
             
               <label htmlFor="terms" style={{whiteSpace:'normal',maxWidth:'500px',display:'block'}}><p> Creating an account means you are okay with our<a href='' target='_blank' style={{ color:'blue' }} > Terms of Service,
                Privacy Policy </a> and our default <a href='' target='_blank' style={{ color:'blue' }} >Notification settings</a></p>
               </label></div>
               
           </form>
           <Btn/>
           <div>{result}</div>
         </div>
       </div>
       
   
      
     </>
  )
}

export default Homelogin
