import React, { useEffect, useState } from 'react'
import './Blog.css'
import blogDB from '../../data/blogDB';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [search, setSearch] = useState("");
  const [filterBlog, setFilterBlog] = useState([]);

  useEffect(() => {
    // กรองข้อมูลบทความทั้งหมด
    const result = blogDB.filter((item) => item.title.includes(search))
    setFilterBlog(result)
  }, [search])

  return (
    <div className="blog-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="ค้นหาบทความ"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <article>
        {filterBlog.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className="card">
              <h2>{item.title}</h2>
              <p>{item.content.substring(0, 300)}</p>
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  )
}

export default Blog