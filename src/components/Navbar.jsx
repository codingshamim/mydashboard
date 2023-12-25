import React from 'react'
import Logo from './Logo'
import Icon from './Icon'
import Profile from './Profile'

export default function Navbar() {
  return (
    <div>
        <div className="row flex justify-between items-center nav">
            <div className="logo">
                <Logo/>
            </div>
            <div className="right-side flex justify-center items-center gap-2">
                <div className="item">
                    <Icon iconName="fa-solid fa-magnifying-glass"/>
                </div>
                <div className="item">
                    <Icon iconName="fa-solid fa-envelope"/>
                </div>
                <div className="item">
                    <Icon iconName="fa-solid fa-bell"/>
                </div>
                <div className="item">
                    <Icon iconName="fa-solid fa-gear"/>
                </div>
                <div className="profile-item">
                   <Profile/>    
                </div>
            </div>
        </div>
    </div>
  )
}
