
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./component/product/home";
import Detail from "./component/product/detail";
import Search from "./component/search/search";


function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<Detail/>}/>
          <Route path="/products/search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
