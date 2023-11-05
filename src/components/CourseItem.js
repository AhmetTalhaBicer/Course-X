import React, { useState } from 'react'; // useState'ı içe aktar
import courses from "../data/courses";

function CourseItem({ course, addToCart }) {
  const [purchasedCourses, setPurchasedCourses] = useState([]); // Satın alınan kursların id'lerini tutan dizi

  const handleBuyNow = (course) => {
    if (!purchasedCourses.includes(course.id)) {
      addToCart(course);
      setPurchasedCourses([...purchasedCourses, course.id]);
    } else {
      alert("Bu kursu zaten satın aldınız.");
    }
  };

  return (
    <div className="group m-2 overflow-hidden border rounded-lg text-gray-700 shadow-md hover:shadow-lg relative bg-white background-card-color">
      <a href="#" className="block relative overflow-hidden">
        <div className="h-40 overflow-hidden course-image-container">
          <img
            src={course.image}
            alt={course.title}
            className="course-image h-full object-cover transition-transform transform group-hover:scale-105"
          />
          {purchasedCourses.includes(course.id) ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
              <span className="text-white text-xl font-semibold">Purchased</span>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button
                className="text-lg font-semibold text-white bg-orange-600 rounded-full px-5 py-2 transition-transform transform hover:scale-105"
                onClick={() => handleBuyNow(course)}
              >
                Buy Now
              </button>
            </div>
          )}
        </div>
      </a>
      <div className="p-4">
        <a href="#" className="mt-3 text-xl font-semibold">
          {course.title}
        </a>
        <p className="text-sm mt-2">{course.description}</p>
        <div className="text-sm mt-4 text-green-700 font-semibold">
          Advance Level
        </div>
        <div className="flex items-center text-sm mt-2">
          <span className="text-gray-700 mr-1">Price:</span>
          <span className="text-orange-600 text-lg font-bold">
            ${course.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
