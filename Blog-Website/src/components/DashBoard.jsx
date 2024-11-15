import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import './Dashboard.css';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);        // General loading state
  const [viewLoading, setViewLoading] = useState(false); // Loading state for viewing posts
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);

        setLoading(true); // Set loading to true while fetching data
        const q = query(collection(db, 'posts'), where('userId', '==', currentUser.uid));
        const querySnapshot = await getDocs(q);

        const postsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(postsArray);
        setLoading(false); // Set loading to false after data is fetched
      } else {
        navigate('/signIn');
      }
    };
    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signIn');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const handleViewPost = (postId) => {
    setViewLoading(true);  // Set view loading to true
    setTimeout(() => {
      navigate(`/post/${postId}`);
      setViewLoading(false); // Reset view loading after navigating
    }, 1000); // Optional delay to show loading spinner for effect
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome {user?.displayName || 'User'}!</h1>
        <div className="button-group">
          <button onClick={() => navigate('/create')} className="create-post-btn">
            + Create New Post
          </button>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      <section className="posts-section">
        {loading || viewLoading ? ( // Show loading spinner if loading or viewing a post
          <div className="loader"></div>
        ) : (
          posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="post-card">
                <h2>{post.title}</h2>
                <p>{post.createdAt ? new Date(post.createdAt.seconds * 1000).toDateString() : 'Unknown Date'}</p>
                <p className="post-snippet">{post.content.slice(0, 100)}...</p>
                <button onClick={() => handleViewPost(post.id)} className="view-post-btn">
                  View Post
                </button>
              </div>
            ))
          ) : (
            <p className="no-posts">Oops, you don’t have any content yet. Start by creating a post!</p>
          )
        )}
      </section>

      <Link to="/feed" className="feed-button">
        <div className="feed-icon">
          <span role="img" aria-label="feed">📰</span>
        </div>
        Feed
      </Link>
    </div>
  );
};

export default Dashboard;
