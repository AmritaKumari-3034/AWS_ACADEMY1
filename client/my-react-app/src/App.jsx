import {BrowserRouter, Routes, Route} from "react-router-dom";
import CoprateTraining from './components/container/CoprateTraining';
import HireFromUs from './components/container/HireFromUs';
import Contact from './components/Home/Contact';
import OurFounder from './components/Home/OurFounder';
import Home from './components/header/Home';
import Banner from './components/header/Banner';
import ExlporeOurServices from './components/header/ExlporeOurServices';
import FooterComponet from "./components/header/FooterComponet";
import DataScience from "./components/Courses/Courses/DataScience";
import  CloudComputing from "./components/Courses/Courses/CloudComputing";
import CyberSecurity from "./components/Courses/Courses/CyberSecurity";
import UxUIDev from "./components/Courses/Courses/UxUIDev";
import SoftwareDev from "./components/Courses/Courses/SoftwareDev";
import DIDB from "./components/Courses/Courses/DIDB";
import Devops from "./components/Courses/Courses/Devops";
import Management from "./components/Courses/Courses/Management";
import ITServices from "./components/Courses/Courses/ITservices";
import Automation from "./components/Courses/Courses/Automation";
import ExploreCourses from "./components/container/ExploreCourses";
import Sign from './components/container/Sign';







const App = () => {

  
  return(
    

    <BrowserRouter>
    <Home/>
    <Routes>
      <Route path="/copratetraining" element= {<CoprateTraining/>}/>
      <Route path="/explorecourses" element= {<ExploreCourses/>}/>
      <Route path="/hirefromus" element= {<HireFromUs/>}/>
      <Route path="contact" element= {<Contact/>}/>
      <Route path="ourfounder" element= {<OurFounder/>}/>
      <Route path="/" element= {<Banner/> }/>
      <Route path="/register" element= {<Sign/> }/>
      <Route path="/Program" element= {<ExlporeOurServices/> }/>
      <Route path="/datascience" element= {<DataScience/> }/>
      <Route path="/cloudcomputing" element= {<CloudComputing/> }/>
      <Route path="/cybersecurity" element= {<CyberSecurity/> }/>
      <Route path="/uiuxdev" element= {<UxUIDev/> }/>
      <Route path="/softwaredev" element= {<SoftwareDev/> }/>
      <Route path="/dianddatabase" element= {<DIDB/> }/>
      <Route path="/devops" element= {<Devops/> }/>
      <Route path="/itservices" element= {<ITServices/> }/>
      <Route path="/automation" element= {<Automation/> }/>
      <Route path="/management" element= {<Management/> }/>


    </Routes>
    <FooterComponet/>
    </BrowserRouter>
    

  );
};

export default App ;


