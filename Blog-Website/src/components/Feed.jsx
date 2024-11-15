import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Feed.css';

const Feed = () => {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // To handle errors

  const queries = ['blog', 'technology', 'web development', 'coding', 'react', 'javascript', 'programming', 'startup']; // Random search queries

  const getRandomQuery = () => {
    const randomIndex = Math.floor(Math.random() * queries.length);
    return queries[randomIndex];
  };

  const getRandomPage = () => {
    // Randomize the page number to fetch different data sets
    return Math.floor(Math.random() * 5) + 1; // Pages 1-5
  };

  useEffect(() => {
    const fetchFeed = async () => {
      const randomQuery = getRandomQuery(); // Get a random query term
      const randomPage = getRandomPage();   // Get a random page number

      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything', 
          {
            params: {
              q: randomQuery,           // Use a random query term
              apiKey: '6ced8f8a31c44352bd354ed2ed896fd8',    // Replace with your NewsAPI key
              language: 'en',
              pageSize: 10,
              page: randomPage,          // Use random page to get different content
            }
          }
        );
        setFeedData(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching feed data', error);
        setError('Failed to load feed data');
        setLoading(false);
      }
    };

    fetchFeed();
  }, []); // Runs every time the component is mounted (refresh or re-entering the page)

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="feed-container">
      <h2>Latest Blogs & News</h2>
      <div className="feed-content">
        {feedData.map((item, index) => (
          <div key={index} className="feed-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
