import IMAGES from "../assets/images";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <>
      <footer className="bg-gray-600 text-white py-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Section */}
          <div className="flex flex-col space-y-2 mr-8">
            <a href="/about" className="hover:text-gray-400">
              About Us
            </a>
            <a href="/contact" className="hover:text-gray-400">
              Contact Us
            </a>
            <a href="/privacy-policy" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square text-2xl hover:text-gray-400 mb-2"></i> Facebook
            </a>
           
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-2xl hover:text-gray-400 mb-2"></i> Instagram 
            </a> 
            
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube-square text-2xl hover:text-gray-400"></i> Youtube
            </a>
          </div>

        </div>

          {/* Copyright Section */}
  <div className="text-center mt-4">
    &copy; 2023 Your Gym. All Rights Reserved.
  </div>
      </footer>
    </>
  );
}

export default Footer;
