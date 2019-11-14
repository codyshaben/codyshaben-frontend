import React from 'react'

import './Blog.css'


import BlogLi from './BlogLi'

const Blogs = (props) => {
    const { user } = props
    const blog = user.blogs.map(blog => {
        return <ul className="blog-ul" key={blog.id}>
            <BlogLi blog={blog} />
        </ul>
    })
    return(
        <div className="blogs">
            <h2>Blogs</h2>
            {blog}
        </div>
    )
}

export default Blogs