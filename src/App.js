import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = ()=>{
  let apikey = "97b420b3a97d4d3db44bed41cb3cd634"
    return (
      <div>
      <Router>
        <Navbar />
        <Routes>
          <Route   exact path="/" element={<News apikey={apikey} key="general" pagesize={20} Category="general" />}/>
          <Route  exact path="technology" element={<News apikey={apikey} key="technology" pagesize={20} Category="technology" />}/>
          <Route   exact path="business" element={<News apikey={apikey} key="business"pagesize={20} Category="business" />}/>
          <Route   exact path="health" element={<News apikey={apikey} key="health"pagesize={20} Category="health" />}/>
          <Route   exact path="science" element={<News apikey={apikey} key="science"pagesize={20} Category="science" />}/>
          <Route   exact path="entertainment" element={<News apikey={apikey} key="entertainment"pagesize={20} Category="entertainment" />}/>
          <Route   exact path="sports" element={<News apikey={apikey} key="sports" pagesize={20} Category="sports" />}/>
          </Routes>
      </Router>
      </div>
    );
}
export default App;