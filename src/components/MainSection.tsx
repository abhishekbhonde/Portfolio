import { TypeAnimation } from "react-type-animation";
import Buttons from "./Buttons";

function MainSection() {
  return (
    <div>

    <div className="flex justify-center items-center h-screen flex-col ">
      <div
        className="md:text-5xl text-2xl font-bold font-serif"
        style={{ fontFamily: "Roboto" }}
      >
        I'm Abhishek Bhonde
      </div>
      <div className="md:text-4xl text-lg md:mt-5 mt-2">
        I code{" "}
        <TypeAnimation
          className="font-bold"
          sequence={[
            "Frontend Websites",
            2000,
            "Backend Servers",
            2000,
            "MERN Stack Applications",
            2000,
          ]}
          wrapper="span"
          speed={3}
          repeat={Infinity}
        />
      </div>
      <div className="md:mt-10 mt-4  md:mx-48 mx-10 md:text-lg text-sm text-white/60">
        A Third year Btech undergraduate student with specialized expertise in developing MERN
        (MongoDB, Express.js, React.js, Node.js) applications and deploying them
        in the cloud using AWS (Amazon Web Services) and Devops Tools. Highly motivated and
        possessing the ability to work collaboratively within a team
        environment, I am adept at leveraging modern technologies to create
        efficient and scalable web solutions. With a strong foundation in
        full-stack development and cloud computing, I am driven to contribute to
        projects that require innovative problem-solving and a collaborative
        approach to achieve success.
      </div>
      <Buttons />
    </div>
    </div>
  );
}

export default MainSection;
