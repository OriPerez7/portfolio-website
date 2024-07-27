import React from 'react'
import SocialMediaLinks from './SocialMediaLinks'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-4 mb-4'>
        <SocialMediaLinks />
        <p>All rights reserved © 2024 Orian Perez</p>
    </footer>
  )
}

export default Footer