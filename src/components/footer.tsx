import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { AppleButton } from "./buttons/appleButton";
import { PlayStoreButton } from "./buttons/playStoreButton";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] p-8 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        <div className="text-center sm:text-start">
          <h4 className="font-bold mb-4">Product</h4>
          <ul>
            <li>Pricing</li>
            <li>Overview</li>
            <li>Browse</li>
            <li>Accessibility</li>
            <li>Five</li>
          </ul>
        </div>
        <div className="text-center sm:text-start">
          <h4 className="font-bold mb-4">Solutions</h4>
          <ul>
            <li>Brainstorming</li>
            <li>Ideation</li>
            <li>Wireframing</li>
            <li>Research</li>
            <li>Design</li>
          </ul>
        </div>
        <div className="text-center sm:text-start">
          <h4 className="font-bold mb-4">Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Developers</li>
            <li>Documentation</li>
            <li>Integrations</li>
            <li>Reports</li>
          </ul>
        </div>
        <div className="text-center sm:text-start ">
          <h4 className="font-bold mb-4">Get the App</h4>
          <div className="flex flex-col gap-y-4 items-center sm:items-start ">
            <AppleButton />
            <PlayStoreButton />
          </div>
          <div className="mt-6 ">
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex  gap-4  justify-center sm:justify-start">
              <a href="https://www.youtube.com" aria-label="YouTube">
                <FaYoutube size={24} />
              </a>
              <a href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-gray-700 my-8" />
      <div className="mt-12 text-center">
        <p>Collers © 2023. All rights reserved.</p>
      </div>
    </footer>
  );
}
