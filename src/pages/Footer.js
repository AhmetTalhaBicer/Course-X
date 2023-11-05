import React from "react";

function Footer() {
  return (
    <footer className="bg-sky-600  text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 flex flex-col items-center">
            <a href="index.html">
              <img src="/images/Logo4.png" alt="Logo" className="w-52 h-12" />
            </a>
            <p className="mt-4 text-white text-center">
              The automated process starts as soon as your clothes go into the machine.
            </p>
            <div className="mt-4">
              <a href="#" className="text-white hover-text-gray-100 mr-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmet-talha-biçer-597353177"
                className="text-white hover-text-gray-100 mr-4"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white hover-text-gray-100">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-4">Our Solutions</h4>
            <ul className="text-white">
              <li>
                <a href="#" className="hover-text-white">
                  Design & Creatives
                </a>
              </li>
              <li>
                <a href="#" className="hover-text-white">
                  Telecommunication
                </a>
              </li>
              <li>
                <a href="#" className="hover-text-white">
                  Restaurant
                </a>
              </li>
              <li>
                <a href="#" className="hover-text-white">
                  Programming
                </a>
              </li>
              <li>
                <a href="#" className="hover-text-white">
                  Architecture
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-4">Support</h4>
            <ul className="text-white">
              <li>
                <a href="#" className="hover-text-gray-100">
                  Design & Creatives
                </a>
              </li>
              <li>
                <a href="#" className="hover-text-gray-100">
                  Telecommunication
                </a>
              </li>
              <li>
                <a href="#" className="hover-text-gray-100">
                  Restaurant
                </a>
              </li>
              <li>
                <a href="#" className="hover-text-gray-100">
                  Programming
                </a>
              </li>
              <li>
                <a href="#" className="hover-text-gray-100">
                  Architecture
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="text-white">
              <li>
                <a href="#" className="hover-text-gray-100">
                  Design & Creatives
                </a>
              </li>
              <li>
                <a href="#" className="hover-text-gray-100">
                  Telecommunication
                </a>
              </li>
              <li>
                <a href="#" className="hover-text-gray-100">
                  Restaurant
                </a>
              </li>
              <li>
                <a href="#" className="hover-text-gray-100">
                  Programming
                </a>
              </li>
              <li>
                <a href="#" className="hover-text-gray-100">
                  Architecture
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-sky-600">
        <div className="container mx-auto py-4 flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/ahmet-talha-biçer-597353177"
            className="text-white hover-text-gray-300"
            target="_blank"
          >
            <img src="/images/linkedin.png" alt="LinkedIn" className="linkedin-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
