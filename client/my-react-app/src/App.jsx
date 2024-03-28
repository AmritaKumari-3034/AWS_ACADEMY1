import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
import Login from './components/container/Login';
import { Logout } from "./components/container/Logout";
import MyCourses from "./components/MyCourses/MyCourses";
import Calender from "./components/MyCourses/Calender";
import Messages from "./components/MyCourses/Messages";
import Mysession from "./components/MyCourses/Mysession";
import Notification from "./components/MyCourses/Notification";
import Supports from "./components/MyCourses/Supports";
import Alladmin from "./components/MyCourses/Alladminpannel/Alladmin";
import NoOfStudent from "./components/MyCourses/Alladminpannel/NoOfStudent";
import NoOfCourses from "./components/MyCourses/Alladminpannel/NoOfCourses";
import OneStudentDetails from "./components/MyCourses/Alladminpannel/OneStudentDetails";
import PerCourseStudent from "./components/MyCourses/Alladminpannel/PerCourseStudent";
import Updateuserform from "./components/MyCourses/Alladminpannel/Updateuserform";
import Days from "./components/MyCourses/Alladminpannel/DataRange/Days";
import Weeks from "./components/MyCourses/Alladminpannel/DataRange/Weeks";
import Months from "./components/MyCourses/Alladminpannel/DataRange/Months";


const AllAdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Alladmin />} />
      <Route path="allstudentdetails" element={<NoOfStudent />} />
      <Route path="allcoursesdetails" element={<NoOfCourses />} />
      <Route path="onestudentdetails" element={<OneStudentDetails />} />
      <Route path="perstudentcourse" element={<PerCourseStudent />} />
      <Route path="allstudentdetails/update" element={<Updateuserform />} />
      <Route path="days" element={<Days />} />
      <Route path="weeks" element={<Weeks />} />
      <Route path="months" element={<Months />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <Home />
      <Routes>
        {/* Navbar */}
        <Route path="/" element={<Banner />} />
        <Route path="/copratetraining" element={<CoprateTraining />} />
        <Route path="/explorecourses" element={<ExploreCourses />} />
        <Route path="/hirefromus" element={<HireFromUs />} />

        {/* Auth */}
        <Route path="/register" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        {/* courses */}
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/cloudcomputing" element={<CloudComputing />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/uiuxdev" element={<UxUIDev />} />
        <Route path="/softwaredev" element={<SoftwareDev />} />
        <Route path="/dianddatabase" element={<DIDB />} />
        <Route path="/devops" element={<Devops />} />
        <Route path="/itservices" element={<ITServices />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/management" element={<Management />} />

        {/* Admin Routes */}
        <Route path="/alladmin/*" element={<AllAdminRoutes />} />

        {/* Unauthorized Program */}
        <Route path="contact" element={<Contact />} />
        <Route path="ourfounder" element={<OurFounder />} />
        <Route path="/Program" element={<ExlporeOurServices />} />

        {/* User Admin Routes */}
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/mysession" element={<Mysession />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/supports" element={<Supports />} />
      </Routes>
      <FooterComponet />
    </Router>
  );
};

export default App;

