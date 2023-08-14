import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <img 
        src='https://www.freepngimg.com/thumb/trollface/98096-trollface-man-free-photo-thumb.png' 
        className="header--image"
        alt='logo'/>
        <h2 className='header--title'>Meme Generator</h2>
        <h4 className='dev'>Kanish Mohariya</h4>
    </header>
  )
}

export default Header