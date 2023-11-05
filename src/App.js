// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './components/ShoppingCart';
import Navbar from './components/Navbar';
import courses from './data/courses';
import Courses from './pages/CoursesPage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  const addToCart = (course) => {
    setCartItems([...cartItems, course]);
  };

  const handleSearch = (searchTerm) => {
    const result = courses.find((course) =>
      course.title.toLowerCase() === searchTerm.toLowerCase()
    );
    setSearchResult(result);
  };

  return (
    <Router>
      <div className="App-relative">
        <Navbar cartItems={cartItems} onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={<Home addToCart={addToCart} cartItems={cartItems} />}
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route
            path="/courses"
            element={<Courses courses={courses} addToCart={addToCart} searchResult={searchResult} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
