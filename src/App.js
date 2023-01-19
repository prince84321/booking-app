import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import List from "./pages/hotel-list/List";
import Hotel from "./pages/hotel/Hotel";


function App() {
  return (
    
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/List" element={<List />} />
      <Route path="/Hotel" element={<Hotel />} />

    </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
