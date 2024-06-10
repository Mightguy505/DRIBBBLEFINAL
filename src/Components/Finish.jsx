import React from 'react'
import './Finish.css'
const Finish = ({ profileImage }) => {
  

  return (
    <div>
        <div className="Container ">
        <div className="dribblee pacifico-regular">dribble</div>
   
          <nav>
            <ul>
              <li>Inspiration</li>
              <li>Find Work</li>
              <li>Learn Design</li>
              <li>GoPro</li>
              <li> Hire Designers</li>
              <li>
              <div className="search-bar ">
                <input type="text" placeholder="           Search"  />
                <img src="https://cdn.hugeicons.com/icons/shopping-bag-remove-stroke-rounded.svg" alt="shopping-bag-remove" width="24" height="24" />
                <img src={profileImage || "src/profile-pic.png"} alt="Profile Pic" className="profile-pic" />
                <button className="upload-btn">Upload</button>
              </div>
            </li>
            </ul>
          </nav>
        </div>
         <div className="headlinee lexend">
          <h1>Please verify your email...</h1>
         </div>
         <div className="icon">
         <img src="https://cdn.hugeicons.com/icons/search-01-stroke-rounded.svg" alt="search-01" width="14" height="14" />
         </div>
         <div className="mailicon">
         <img src="https://cdn.hugeicons.com/icons/mail-validation-02-stroke-rounded.svg" alt="mail-validation-02" width="24" height="24" />
         </div>
         <div className="Cont2">
          Please verify your email address.We've sent a confirmation email to:
         </div>
         <div className='email lexend'><h2>account@refro.design</h2></div>
         <div className='click'>Click the confirmation email to start using Dribbble.</div>
         <div className='rest'>Didn't receive the email?Check your Spam folder,it may have been caught by a filter.If <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you still don't see it, you can<a href=""><br />resend the confirmation email.</a></div>
        <div className="wrongemail">Wrong email address?<a href="">Change it</a></div>


        <footer className="footer">
          <div className="1">
        <div className="dribble2 pacifico-regular">dribble</div>
        <div className="paradribblee lexend">Dribbble is the world's leading <br /> community for creatives to share,grow <br />and get hired</div>
        <div className="iconss">
        <div className="icondribble">          
        <img src="https://cdn.hugeicons.com/icons/dribbble-stroke-rounded.svg" alt="dribbble" width="24" height="24" />
        </div>
        <div className="icontwitter">          
        <img src="https://cdn.hugeicons.com/icons/twitter-stroke-rounded.svg" alt="twitter" width="24" height="24" />
        </div>
        <div className="iconfacebook">          
        <img src="https://cdn.hugeicons.com/icons/facebook-02-stroke-rounded.svg" alt="facebook-02" width="24" height="24" />
        </div>
        <div className="iconinstagram">          
        <img src="https://cdn.hugeicons.com/icons/instagram-stroke-rounded.svg" alt="instagram" width="24" height="24" />
        </div>
        <div className="iconpintrest">          
        <img src="https://cdn.hugeicons.com/icons/pinterest-stroke-rounded.svg" alt="pinterest" width="24" height="24" />
        </div>
        </div>
        </div>
        <div className="lists">
          <div className="fordesigners lexend">
            <h4>For designers</h4>
            <ul>
              <li>GoPro!</li>
              <li>Explore design work</li>
              <li>Design blog</li>
              <li>Overtime Podcast</li>
              <li>Playoffs</li>
              <li>Weekly Warm-up</li>
              <li>Refer a Friend</li>
              <li>Code of conduct</li>
            </ul>
          </div>
          <div className="hiredesigners lexend">
            <h4>Hire designers</h4>
            <ul>
              <li>Post a job opening</li>
              <li>Post a freelance project</li>
              <li> Search for designers</li>
              
           </ul>
           <h4>Brands</h4>
           <ul>
            <li>Advertise with us</li>
           </ul>
          </div>
          <div className="company lexend">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Media kit</li>
              <li> Testimonials</li>
              <li>API</li>
              <li>Terms of services</li>
              <li>Privacy policy</li>
              <li>Cookie policy</li>
            </ul>
          </div>
          <div className="directories lexend">
            <h4>Directories</h4>
            <ul>
              <li>Design jobs</li>
              <li>Designers for hire</li>
              <li>Freelance designers <br /> for hire</li>
              <li>Tags</li>
              <li>Places</li>
            </ul>
            <h4>Design assets</h4>
            <ul>
              <li>Dribbble Marketplace</li>
              <li>Creative Market</li>
              <li>Fontspring</li>
              <li>Font Squirrel</li>
            </ul>
          </div>
          <div className="designresources lexend">
            <h4>Design resources</h4>
            <ul>
              <li>Freelancing</li>
              <li>Design Hiring</li>
              <li>Design Portfolio</li>
              <li>Design Eductaion</li>
              <li>Creative Process</li>
              <li>Design Industry <br /> Trends</li>
            </ul>
          </div>
        </div>
      </footer>
      </div>
  )
}

export default Finish
