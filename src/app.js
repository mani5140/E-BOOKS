import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./sass/style.css"
import Register from "./Register";
import Main from "./Main";
import BookDetails from "./books";

const App = () => {
  return(
    <div>
      <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<Register />}/>
        <Route exact path="/main" element={<Main/>}/>
        <Route exact path="/books" element={<BookDetails/>}/>
       </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
