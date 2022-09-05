import { Routes, Route } from "react-router-dom";

import { CardOnly } from "./components/CardOnly/CardOnly";
import { InCard } from "./components/InCard/InCard";

function App() {


  return (
    <div>
       <Routes>
        <Route path="/" element={<CardOnly />} />
        <Route path="about" element={<InCard />} />
      </Routes>
    </div>
  );
}

export default App;
