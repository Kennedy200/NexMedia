import React, { useState, useEffect } from 'react';
import { db, storage, auth } from '../firebase'; // Adjust to ensure auth is correctly imported
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { onAuthStateChanged } from 'firebase/auth'; // Import Firebase auth
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS
import './CreatePost.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null); // State to store the authenticated user

  const categories = ['Technology', 'Health', 'Finance', 'Travel', 'Food', 'Lifestyle']; // Predefined categories

  // Listen for the authentication state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the authenticated user
      } else {
        setUser(null); // Handle unauthenticated state if necessary
      }
    });
    return () => unsubscribe(); // Clean up the listener
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result); // Preview image before upload
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = () => {
    if (!image) return;
    const storageRef = ref(storage, `blogImages/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed", 
      () => setLoading(true), 
      (error) => {
        console.error("Upload error:", error);
        setLoading(false);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
          setLoading(false);
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure the user is authenticated
    if (!user) {
      toast.error("You must be logged in to create a post", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (title && content) {
      try {
        await addDoc(collection(db, "posts"), {
          title,
          content,
          category,
          tags: tags.split(',').map(tag => tag.trim()), // split and trim tags
          imageUrl,
          createdAt: serverTimestamp(),
          userId: user.uid, // Use the actual user ID from Firebase Auth
          userEmail: user.email // Optional: store the user's email
        });

        // Clear fields after successful post creation
        setTitle('');
        setContent('');
        setCategory('');
        setTags('');
        setImage(null);
        setImageUrl('');

        // Show success toast notification
        toast.success("Post created successfully!", {
          position: "top-center",
          autoClose: 5000, // Close after 5 seconds
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            backgroundColor: '#4BB543', // Custom background color (green for success)
            color: '#fff',              // Text color
          },
          icon: '🚀', // Custom icon
        });

        // Redirect to dashboard after 5 seconds
        setTimeout(() => {
          window.location.href = "/Dashboard"; // Adjust this to match your route for the dashboard page
        }, 5000);

      } catch (error) {
        console.error("Error creating post:", error);
        toast.error("Failed to create post. Try again!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            backgroundColor: '#ff4d4d', // Custom background color (red for error)
            color: '#fff',              // Text color
          },
          icon: '❌', // Custom icon
        });
      }
    } else {
      toast.warn("Title and content are required", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="create-post">
      <ToastContainer /> {/* ToastContainer must be placed here for toasts to appear */}

      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </label>
        
        <label>
          Content:
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          />
        </label>

        <label>
          Category:
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>

        <label>
          Tags (comma separated):
          <input 
            type="text" 
            value={tags} 
            onChange={(e) => setTags(e.target.value)} 
          />
        </label>

        <label>
          Upload Image:
          <input type="file" onChange={handleImageChange} />
        </label>

        {imageUrl && !loading && <img src={imageUrl} alt="Preview" />}
        {loading && <div className="spinner"></div>} {/* Spinner for loading */}

        <button type="button" onClick={handleImageUpload}>Upload Image</button>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
