import React, {useState} from "react";

const About = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <div>
      <h1 className="text-4xl" style={{
        lineHeight: '5rem',        
      }}
      >
        ABOUT
      </h1>

      <div style={{border: '0px solid', display: 'flex', justifyContent: 'center'}}>
        <img
          height="120"
          width="120"
          src="/img/about/passport.png"
          style={{
            marginBottom: 20,
          }}
        />
      </div>

      <h2>Foccacia handler.</h2>
      <h2>Deckhand.</h2>
      <h2>Pasta Shop.</h2>
      <h2>Fine-dining server.</h2>
      <h2>Cellar worker.</h2>
      <h2>Closet coder.</h2>
      <h2>Filmmaker.</h2>
      <h2>Photographer.</h2>
      <h2>MGTS.</h2>

      {/* Toggle Resume */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor behavior
          setShowResume((prev) => !prev); // Toggle state
        }}
        style={{
          display: "block",
          marginTop: 20,
          fontWeight: "bold",
        }}
      >
        {showResume ? "Hide Resume" : "Show Resume"}
      </a>

      {/* Conditionally Render Resume */}
      {showResume && (
        <img
          id="resume"
          src="/img/about/resume_jl_2024.jpg"
          alt="Resume not found"
          style={{ maxWidth: "100%", marginTop: 0 }}
        />
      )}
    </div>
  )
}

export default About;
