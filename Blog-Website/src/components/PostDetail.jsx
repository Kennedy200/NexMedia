import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './PostDetail.css';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!postId) {
          console.error("Post ID is undefined or null.");
          return;
        }

        console.log("Fetching post with ID:", postId);
        const docRef = doc(db, "posts", postId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Post data:", docSnap.data());
          setPost(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  const { title, content, createdAt, imageUrl, tags, category } = post;

  return (
    <div className="post-detail-container">
      {/* Post Header */}
      <div className="post-detail-header">
        <h1>{title}</h1>
        <div className="post-detail-meta">
          <p>{new Date(createdAt.seconds * 1000).toLocaleDateString()}</p>
          <p>Category: {category ? category : 'Uncategorized'}</p>
          {tags && tags.length > 0 && <p>Tags: {tags.join(', ')}</p>}
        </div>
      </div>

      {/* Image */}
      {imageUrl && (
        <div className="post-detail-image">
          <img src={imageUrl} alt={title} />
        </div>
      )}

      {/* Post Content */}
      <div className="post-detail-content">
        <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
      </div>

      {/* Social Sharing */}
      <div className="post-detail-social-sharing">
        <p>Share this post:</p>
        <div className="post-detail-social-icons">
          <a
            href={`https://twitter.com/share?url=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=Check out this post: ${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
