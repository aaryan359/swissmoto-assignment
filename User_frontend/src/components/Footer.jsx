import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About us</h3>
            <ul className="space-y-2 text-sm">
              <li>Leadership</li>
              <li>Our Mission</li>
              <li>Our Vision</li>
              <li>Features</li>
              <li>Career At</li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact us</h3>
            <ul className="space-y-2 text-sm">
              <li>Mail us at: EventTribe@Gmail.com</li>
              <li>Contact at: 1234567890</li>
              <li>0987654321</li>
              <li>Press</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* Help & Support Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2 text-sm">
              <li>Customer Support</li>
              <li>Organizer Support</li>
              <li>Terms of Service</li>
              <li>Conditions of Service</li>
              <li>Privacy Policy</li>
              <li>Report a scam</li>
            </ul>
          </div>

          {/* For Regular Event Updates Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">For regular event updates</h3>
            <div className="border-light-200">
              <input
                type="email"
                placeholder="Enter your mail id here..."
                className="w-full py-2 px-4 rounded-lg text-gray-50 mb-4 border-light-200 "
              />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636a9 9 0 11-12.728 12.728A9 9 0 0118.364 5.636z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12.79l-1.9-1.93a4.923 4.923 0 01-1.45-.87c-.48-.33-.87-.74-1.15-1.2-.67-.93-.98-1.97-1.04-2.83-.06-.86-.17-1.62-.34-2.33-.17-.71-.42-1.29-.77-1.83-.35-.54-.8-.99-1.33-1.31a4.42 4.42 0 00-1.99-.72c-.73-.05-1.43.1-2.06.36-.63.26-1.18.64-1.6 1.13-.42.48-.77.99-1.01 1.53-.24.54-.44 1.11-.61 1.68-.17.57-.32 1.15-.47 1.74-.16.59-.32 1.19-.49 1.78-.18.58-.36 1.17-.55 1.76.49-.28.98-.56 1.47-.84l.57.25-1.21 1.57a4.911 4.911 0 01-3.76-1.9z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12c0-2.62-2.01-4.8-4.6-5.4l-1.12 2.3a1.25 1.25 0 01-2.3 0L13 10.6a2.75 2.75 0 00-5.4 0l-1.02 2.3C3.01 7.2 1 9.4 1 12c0 2.62 2.01 4.8 4.6 5.4l1.12-2.3a1.25 1.25 0 012.3 0l1.02-2.3a2.75 2.75 0 005.4 0l1.02 2.3c1.7-.35 3.2-1.7 4.6-3.4z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 17c-1.66 0-3-1.34-3-3 0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.66-1.34 3-3 3zm0-4.5c-.83 0-1.5-.67-1.5-1.5S11.17 9 12 9s1.5.67 1.5 1.5S12.83 12.5 12 12.5zm0-6.25c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="text-center text-sm text-gray-400 mt-12">
          <p>© EventTribe Pvt. LTD. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;