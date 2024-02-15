// import Error from "./components/Error";
import MainSection from "./components/MainSection";
import Par from "./components/Par";
// import ProjectSection from "./components/ProjectSection";
import SideSocial from "./components/SideSocial";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="bg-[#09001f] w-full h-full text-white">
        <Par/>
        <div>

        <SideSocial />
        <Routes>
          <Route path="/" element={<MainSection />} />
          {/* <Route path="/project" element={<ProjectSection/>}/> */}
          {/* <Route path="*" element={<Error/>}/> */}
        </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
