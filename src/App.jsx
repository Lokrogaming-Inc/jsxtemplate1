import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Success from "./pages/Success";

export default function App() {
  return (
    <BrowserRouter>
<div className="min-h-screen bg-gradient-to-b from-pink-500 via-purple-500 to-blue-800">

      

        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
<div className="mb-0">
        <Footer />
</div>
      </div>

    </BrowserRouter>
  );
}
