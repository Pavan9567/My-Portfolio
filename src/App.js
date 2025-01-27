import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const projects = [
    {
      id: 1,
      title: 'RESTful Blog Application API',
      description: 'A RESTful Blog Application API created by using Django Rest Framework for managing blog posts and comments.',
      image: 'https://via.placeholder.com/300x200',
      demo_link: '#',
      github_link: 'https://github.com/Pavan9567/RESTful-Blog-API.git',
    },
    {
      id: 2,
      title: 'Geotagging APP',
      description: 'A full-stack application developed for locating real time geolocations based on the uploaded image data.',
      image: 'https://via.placeholder.com/300x200',
      demo_link: '#',
      github_link: 'https://github.com/Pavan9567/Geotagged-App.git',
    },
    {
      id: 3,
      title: 'Chat Application',
      description: 'A real-time chat app with WebSocket-based communication developed by using Django framework.',
      image: 'https://via.placeholder.com/300x200',
      demo_link: '#',
      github_link: 'https://github.com/Pavan9567/Chat-App-Project.git',
    },
    {
      id: 4,
      title: 'Job Portal Application',
      description: 'A Job Portal application useful for posting and applying for open job roles posted in the application.',
      image: 'https://via.placeholder.com/300x200',
      demo_link: '#',
      github_link: 'https://github.com/Pavan9567/Chat-App-Project.git',
    },
    {
      id: 5,
      title: 'Message Box',
      description: 'A simple Message Box application created by using HTML,CSS,Javascript for frontend and PHP for backend.',
      image: 'https://via.placeholder.com/300x200',
      demo_link: '#',
      github_link: 'https://github.com/Pavan9567/Message-Box.git',
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
};

export default App;
