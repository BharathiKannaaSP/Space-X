import React from 'react'

function Announcement() {
  return (
    <div className='announcement' style={{backgroundColor:'teal'}}>
        <marquee  direction="left" scrollamount='15' style={{color:'white'}}>
            Flat 10% off on all products.
        </marquee>
    </div>
  )
}

export default Announcement