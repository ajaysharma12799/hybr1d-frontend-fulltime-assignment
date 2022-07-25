/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({post}) => {
  return (
    <Link to={`/news/${post?.objectID}`}>
        <div className='border-2 w-full p-2 m-1 hover:border-[#3944f7] transition-all   duration-300 rounded-lg'>
            <h4>Title: {post?.title}</h4>
            <p>Author: {post?.author}</p>
            <a href={post?.url} target="_blank" rel="noreferrer">Checkout Original Post</a>
        </div>
    </Link>
  )
}

export default Card