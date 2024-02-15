// import React from "react";
import { FaDownload } from "react-icons/fa";
import resumee from "../assets/Abhishek Bhonde Resume.pdf";
import { useNavigate } from "react-router-dom";

function Buttons() {
    const Navigate = useNavigate()
  return (
    <div className="md:flex justify-around md:w-2/3 md:mt-10 mt-6 ">
      <div className="py-4 px-4  rounded-full  md:rounded-full border-4 bg-purple-900/30 border-white shadow-white/50 shadow-lg relative w-max">
        <button onClick={() => Navigate("/project")}>View Projects</button>
      </div>
      <div className="py-4 px-4 rounded-full border-4 bg-purple-900/30 border-white shadow-white/50 shadow-lg relative w-max mt-5 md:mt-0">
        <a href={resumee} target="_blank" rel="noopener noreferrer">
          <button
            className="flex items-center"
            onClick={() => {
              console.log("Button clicked");
            }}
          >
            <FaDownload className="mr-3" />
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Buttons;
