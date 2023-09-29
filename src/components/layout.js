import React from 'react';
import { useLocation } from 'react-router-dom';

function BodyClassManager() {
  const location = useLocation();

  // Define a function to determine the body class based on the route
  const getBodyClass = () => {
    if (location.pathname === '/') {
      return 'home-page'; // Add 'abc' class on the home page
    } else {
      return 'other-pages'; // Add 'def' class on other pages
    }
  };

  React.useEffect(() => {
    // Set the body class based on the route
    document.body.className = getBodyClass();
  }, [location.pathname]);

  return null;
}

export default BodyClassManager;
