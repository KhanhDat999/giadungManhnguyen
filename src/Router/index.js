import { Routes, Route } from "react-router-dom";
import Home from "../Layout/Home";

function Router() {
    return (
          <Routes>
            <Route path="/" element={<Home />} />
        
          </Routes>
     
    );
  }
  
  export default Router;