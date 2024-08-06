import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>movie name</h1>
            <div className='banner_button'>
               <button className='button' >play</button>
               <button className='button'> my list</button>
               </div>
               <h1 className='description'>Netflix is the home of amazing original programming that you can’t find anywhere else. Movies, TV shows, specials and more, all tailored specifically to you</h1>
               <div className="fade_bottom"></div>
        </div>
        
         

      
    </div>
  )
}

export default Banner
