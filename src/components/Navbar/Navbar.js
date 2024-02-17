import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="logo">
                <h3>Blog Webisite</h3>
            </Link>
            <Link to="/">หน้าแรก</Link>
            <Link to="/about">เกี่ยวกับเรา</Link>
            <Link to="/blog">บทความทั้งหมด</Link>
        </nav>
    )
}

export default Navbar