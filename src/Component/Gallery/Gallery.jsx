import React from 'react'
import "./Gallery.scss"
const Gallery = () => {
  return (
    <div>
        <div className='grid'>
            <div className='gimage1'>
            <img src="./images/g1.jpg" alt="" />
            </div>
            <div className='gimage1'>
            <img src="./images/g2.jpg" alt="" />
            </div><div className='gimage1'>
            <img src="./images/g3.jpg" alt="" />
            </div><div className='gimage1'>
            <img src="./images/g4.jpg" alt="" />
            </div><div className='gimage1'>
            <img src="./images/g5.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery