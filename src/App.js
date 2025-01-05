import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Photo from "./pages/Photo";
import Film from "./pages/Film";
import Code from "./pages/Code";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("HOME");

  const renderPage = () => {
    switch (currentPage) {
      case "HOME":
        return <Home />;
      case "ABOUT":
        return <About />;
      case "PHOTO":
        return <Photo />;
      case "CODE":
        return <Code />;
      case "FILM":
        return <Film />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* Pass state and setter function to NavBar */}
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={{
        marginTop: 40,
        margin: 'auto',
        textAlign: 'center',
        display: 'flex',
        justifyContent:'center'}}>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
