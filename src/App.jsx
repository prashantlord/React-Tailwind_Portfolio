import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";


function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
