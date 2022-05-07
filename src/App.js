import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import BlogList from "./components/BlogList";
import Error from "./components/Error";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>

        <Route index element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="blog/:slug" element={<Blog />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
