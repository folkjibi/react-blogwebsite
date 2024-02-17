import React from 'react'
import './NotFound.css'
import IMG from '../../asset/images/notfound.svg'

const NotFound = () => {
    return (
        <div className="container">
            <h3 className="title">ไม่พบหน้าเว็บ (404 Page Not Found)</h3>
            <img src={IMG} alt="Main" />
        </div>
    )
}

export default NotFound