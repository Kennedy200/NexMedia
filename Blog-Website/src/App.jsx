import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs'; 
import Services from './components/Services';
import Quote from './components/Quote';
import Email from './components/Email';
import Testimonial from './components/Testimonial';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import NewsletterPopup from './components/NewsletterPopup';
import GetStarted from './components2/GetStarted';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import LearnMore from './components2/LearnMore';
import SignIn from './components/SignIn';  // Assuming it's inside components folder
import SignUp from './components/SignUp';
import DashBoard from './components/DashBoard';
import PrivateRoute from './components/PrivateRoute';
import CreatePost from './components/CreatePost';
import PostDetail from './components/PostDetail';
import Feed from './components/Feed';
import Pricing from './components/Pricing';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={
          <>
            <Header />
            <section id="about">
              <AboutUs />
            </section>
            <section id="services">
              <Services />
            </section>
            <Quote />
            <Email />
            <Testimonial />
            <section id="contact">
              <ContactUs />
            </section>
            <Footer />
            <NewsletterPopup />
          </>
        } />
        
        {/* Get Started route */}
        <Route path="/getstarted" element={<GetStarted />} />

        {/* About Us route (navigating from nav links) */}
        <Route path="/about" element={<AboutUs />} />

        {/* Sign Up route */}
        <Route path="/signup" element={<SignUp />} />

        {/* Pricing route */}
        <Route path="/pricing" element={<Pricing />} />
        
        {/* News Feed route */}
        <Route path="/feed" element={<Feed />} />

        {/* Sign In route */}
        <Route path="/signin" element={<SignIn />} /> {/* Add the Sign In route */}

        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:postId" element={<PostDetail />} />

        {/* Protecting the dashboard route */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<DashBoard />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
