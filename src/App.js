import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import List from "./pages/hotel-list/List";
import Hotel from "./pages/hotel/Hotel";


function App() {
  return (
    
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Hotel" element={<List />} />
      <Route path="/Hotel/:id" element={<Hotel />} />

    </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
