import React from "react"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import MaterialUi from "./materialUi";
import Resturant from "./Resturant";




function App() {
  return (
      <Router>
          <Routes>
              <Route path="/explore" exact element={<Resturant />}/>
              <Route path="/" exact element={<MaterialUi />}/>
              <Route path="*" exact element={<h1>404 Not Found</h1>}/>
          </Routes>
      </Router>
  );
}

export default App;
