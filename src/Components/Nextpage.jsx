import React from 'react'
import './Nextpage.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
const Nextpage = () => {
  const [checked, setChecked] = useState(false)

  const animationProps = useSpring({
    transform: checked ? 'translateY(0px)' : 'translateY(20px)',
    opacity: checked ? 1 : 0,
    config: { duration: 300 }
  })
  return (
    <>
     <div className="Conatiner">
      <div className="dribble pacifico-regular">dribble</div>
   

      <div className='arrowbtn '>
       <Link to='/Createaccount'> <button>&gt;</button></Link></div>
   
     
     <div className="headlinenext lexend">
      <h1>What brings you to Dribbble?</h1>
     </div>

     <div className="paranext lexend">
      <p>Select the options that best describe you.Don't worry, you can explore other options</p>
     </div>
     <div className="boxee">

     <div className="box1 lexend">
      <img src="src\box1.png" alt="rendering..." />
            <div className="head1"><h3>I'm a designer looking to <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;share my work</h3></div>
            <div><input type="checkbox" name='checkbox' checked={checked} onChange={() => setChecked(!checked)} /></div>
            <animated.div style={animationProps}>
              <div className="text"><p>Text to be displayed when checkbox is checked</p></div>
            </animated.div>
            <div></div>
     </div>

     <div className="box2 lexend">
     <img src="src\box2.png" alt="rendering..." />
           <div className="head2"><h3>I'm looking to hire a <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;designer</h3></div>
           <div><input type="checkbox" name='checkbox'/></div>
     </div>

     <div className="box3 lexend">
     <img src="src\box3.png" alt="rendering..." />
      <div className="head3"><h3>I'm looking for some design <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inspiration</h3></div>
      <div><input type="checkbox" name='checkbox'/></div>
      <div className='text'><h4>Anything else?You can select multiple</h4></div>
       <div className="finishbtn">
        <Link to='/Finish'><button>Finish</button></Link>
     </div>
      </div>
     </div>
     </div>
    </>
  )
}

export default Nextpage
