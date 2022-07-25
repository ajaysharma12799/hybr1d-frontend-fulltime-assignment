import React, { useState } from 'react'
import axios from 'axios';
import Card from '../components/Card';
import Spinner from '../asset/Spinner.gif';

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    const Url = `http://hn.algolia.com/api/v1/search?query=${searchQuery}`;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await axios.get(Url);
      const data = response.data.hits;
      setSearchResult(data);
      setLoading(false);
      setSearchQuery('');
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className="container mx-auto">
        <div className="mt-4 mb-5">
          <input 
            type="text" 
            placeholder='Search Something' 
            className="border-2 rounded-lg w-full px-2 py-3 text-lg outline-none"
            value={searchQuery} 
            onChange={e => setSearchQuery(e.target.value)} 
          />
        </div>
        <div className="mt-4 mb-4">
          <button 
            type="submit" 
            className="border-2 border-[#3944f7] w-full px-2 py-3 text-lg hover:bg-[#3944f7] transition-all duration-300 hover:text-[#ffffff] rounded-lg"
          >
            Search
          </button>
        </div>
      </form>
      {
        searchResult.length === 0 ? <h1 className='text-2xl text-center'>No News as of Now</h1> : (        
        <div className="container mx-auto mt-5 mb-5">
        {
            loading ? <img src={Spinner} alt="Spinner" className='mx-auto' /> : (
                <>
                    <h1 className='text-center text-2xl mb-3'>All News</h1>
                    {
                        searchResult.map((post, idx) => <Card post={post} key={idx} />)
                    }
                </>
            )
        }
        </div>
        )
      }
    </div>
  )
}

export default HomePage