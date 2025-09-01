import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home";
import Foo from "./Foo";
import Viewer from "./Viewer.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/foo" element={<Foo />} />
          <Route path="/viewer/:videoId" element={<Viewer />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
