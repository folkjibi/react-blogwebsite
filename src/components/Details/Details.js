import React, { useEffect, useState } from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import blogDB from '../../data/blogDB'

const Details = () => {
    const { id } = useParams()
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        // ดึงข้อมูลบทความ
        const result = blogDB.find((item) => item.id === parseInt(id))
        setTitle(result.title)
        setImage(result.image_url)
        setContent(result.content)
        setAuthor(result.author)
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container">
            <h2 className="title">บทความ : {title}</h2>
            <img src={image} alt={title} className="blog-image" />
            <div className="blog-detail">
                <strong>ผู้เขียน : {author}</strong>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Details