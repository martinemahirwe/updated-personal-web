import {Routes, Route} from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const Index = () => {
    return (
      
          <Routes>
             <Route path="/" element={<LandingPage />}/>
          </Routes>
      
    )
  }
  
  export default Index