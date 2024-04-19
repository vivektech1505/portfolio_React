import React from 'react'
import card1 from './Frame 4.png'
import card2 from './Frame 5.png'
import card3 from './Frame 6.png'
import card4 from './Frame 7.png'
import card5 from './Frame 8.png'
import card6 from './Frame 10.png'
import card7 from './Frame 11.png'
import card8 from './Frame 12.png'
import card9 from './Frame 9.png'

const Cards = () => {
  return (
    <>
    
     <div className='cards'>
     <h1 className='project'>Projects</h1>
     <div className='cardsItems'>
        <img src={card1} alt='cards'/>
        <img src={card2} alt='cards'/>
        <img src={card3} alt='cards'/>
        <img src={card4} alt='cards'/>
        <img src={card5} alt='cards'/>
        <img src={card6} alt='cards'/>
        <img src={card7} alt='cards'/>
        <img src={card8} alt='cards'/>
        <img src={card9} alt='cards'/>
     </div>

    </div>
    </>
   
  )
}

export default Cards