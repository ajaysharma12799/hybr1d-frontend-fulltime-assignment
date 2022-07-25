import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Spinner from '../asset/Spinner.gif';

const PostPage = () => {
    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState({});
    const UrlParams = useParams();
    const Url = `https://hn.algolia.com/api/v1/items/${UrlParams.id}`;

    const fetchNews = async () => {
        const response = await axios.get(Url);
        const data = response.data;
        setPostData(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchNews();
    }, []);

    const dangerousHtml = (value) => {
        return { __html: value };
    }

  return (
    <div className='container mx-auto p-5 border-2'>
        {
            loading ? (<img src={Spinner} className="mx-auto" alt="Spinner" />) : (
                <>
                <div>
            <h1 className='text-2xl'>{postData?.title}</h1>
            <p className="text-lg mt-5 font-bold">Points: {postData?.points}</p>
            <p 
                className='text-lg mt-5'
                dangerouslySetInnerHTML={dangerousHtml(postData?.text)}
            ></p>
            <p className='mt-5 text-base'>Author: {postData?.author}</p>
        </div>
        <div className='mt-5 font-bold text-2xl'>
            <h3 className=''>Comments</h3>
            <div>
                {
                    postData?.children.map((comment, idx) => (
                        <div className="border-2 mt-2 p-2" key={idx}>
                            <h4 className="text-lg">Author: {comment?.author}</h4>
                            <p
                                className="text-base"
                                dangerouslySetInnerHTML={dangerousHtml(postData?.text)}
                            ></p>
                        </div>
                    ))
                }
            </div>
        </div>
                </>
            )
        }
    </div>
  )
}

export default PostPage
