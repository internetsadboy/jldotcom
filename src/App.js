import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Photo from "./pages/Photo";
import Film from "./pages/Film";
import Code from "./pages/Code";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("HOME");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const renderPage = (isMobile) => {
    switch (currentPage) {
      case "HOME":
        return <Home isMobile={isMobile} />;
      case "ABOUT":
        return <About isMobile={isMobile} />;
      case "PHOTO":
        return <Photo isMobile={isMobile} />;
      case "CODE":
        return <Code isMobile={isMobile} />;
      case "FILM":
        return <Film isMobile={isMobile} />;
      default:
        return <Home isMobile={isMobile} />;
    }
  };

  return (
    <div>
      {/* Pass state and setter function to NavBar */}
      <NavBar isMobile={isMobile} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={{
        marginTop: 40,
        margin: 'auto',
        textAlign: 'center',
        display: 'flex',
        justifyContent:'center'}}>
        {renderPage(isMobile)}
      </main>
    </div>
  );
}

export default App;
