import React from 'react'
import '../stylesheet/ProfilePic.css'
import Profile from '../assets/img/profile.jpg';


export const ProfilePic = () => {
  return (
    <div className='wrapper my-3'>
        <div className='profile'>
            <img src={Profile}/>
        </div>
    </div>
  )
}
