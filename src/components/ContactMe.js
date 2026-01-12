import './ContactMe.css';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareGitlab } from "react-icons/fa6";

export default function ContactMe() {
  return (
    <section className="contact flex items-center justify-center h-screen">
      <div className="title flex flex-col lg:flex-row items-center lg:items-center justify-center text-center lg:text-left max-w-6xl space-y-6 lg:space-y-0 lg:space-x-6 px-6">
        {/* Text Section */}
        <div className="lg:w-1/2 mr-10">
          <h2 className=" text-6xl font-bold font-pixel">Contact Me</h2>
        </div>

        {/* Ions Section */}
        <div className="lg:w-1/2 ml-10 flex justify-left space-x-6">
            <MdEmail className="text-7xl cursor-pointer hover:text-gray-700 transition-transform duration-200 transform hover:scale-110" onClick={() => window.location = 'mailto:dilshad.h@proton.me'}></MdEmail>
            <FaLinkedin className="text-7xl cursor-pointer hover:text-gray-700 transition-transform duration-200 transform hover:scale-110" onClick={() => window.open('https://www.linkedin.com/in/md-dilshad-hossain/','_blank')}></FaLinkedin>
            <FaGithubSquare className="text-7xl cursor-pointer hover:text-gray-700 transition-transform duration-200 transform hover:scale-110" onClick={() => window.open('https://github.com/dh-saheel','_blank')}></FaGithubSquare>
            <FaSquareGitlab className="text-7xl cursor-pointer hover:text-gray-700 transition-transform duration-200 transform hover:scale-110" onClick={() => window.open('https://git.cs.usask.ca/mdh413','_blank')}></FaSquareGitlab>
        </div>
      </div>
    </section>
  );
}