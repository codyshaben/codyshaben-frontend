import React from 'react'

const BlogLi = (props) => {
    const { title, description, link } = props.blog

    return(
        <li className="blog-li">
            <h4 className="blog-title">{title}</h4>
            <p>{description}</p>
            <p>Check it out!</p>
            <a
                className="medium-link"
                href={link}
                target='_blank'
                rel="noopener noreferrer"
            >{link}</a>
        </li>
    )

}

export default BlogLi