import React from 'react'
import './home.css';
const home = () => {
  return (
    <div className='search-input'>
      <div className='input-row'>
        <div className='input-box'>

        {/* <label for='fullurl'>Full URL</label> */}
          <input type='text' name='fullurl' placeholder=' Full Url*'/>
        </div>
        <div className='input-box'>

          {/* <label for='shorturl'>Short URL</label> */}
          <input type='text' name='shorturl' placeholder=' Short url code(Optional)'/>
        </div>
        <div className='input-box'>

        <button className='save-button'>Save</button>
        </div>
      </div>
      <div class='messege'>
        <span>Your short URL is <a href="http://www.ascionas.sacnuosa">http://www.ascionas.sacnuosa</a></span>
      </div>
    </div>
      
  )
}

export default home