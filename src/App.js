import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";
import SinglePost from "./pages/SinglePost";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import NavBar from './components/Navbar/NavBar';
import FooterSection from "./components/Sections/FooterSection";
import Donate from './pages/Donate';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<SinglePost />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <FooterSection />
    </ChakraProvider>
  );
}

export default App;