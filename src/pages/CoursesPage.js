import React from 'react';
import CourseItem from '../components/CourseItem';
import Footer from './Footer';

function Courses({ courses, addToCart, searchResult }) {
  return (
    <div className="bg-gray-100">
      <div className="py-36">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResult ? (
              <CourseItem course={searchResult} addToCart={addToCart} />
            ) : (
              courses.map((course) => (
                <CourseItem key={course.id} course={course} addToCart={addToCart} />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
