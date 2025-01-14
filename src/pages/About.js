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
          src={`${process.env.PUBLIC_URL}/img/about/passport.png`}
          style={{
            marginBottom: 20,
          }}
        />
      </div>

      <h2>Foccacia Handler.</h2>
      <h2>Deckhand.</h2>
      <h2>Cashier.</h2>
      <h2>Server.</h2>
      <h2>Cellar Worker.</h2>
      <h2>Coder.</h2>
      <h2>Filmmaker.</h2>
      <h2>Photographer.</h2>
      <h2>Part-time Uber Driver.</h2>
      <h2>MGTS548.</h2>

      {/* Toggle Resume */}
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <a
          id="link-show-resume"
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            setShowResume((prev) => !prev); // Toggle state
          }}
        >
          {showResume ? "Hide Resume" : "Show Resume"}
        </a>

        {/* Conditionally Render Resume */}
        {showResume && (
          <img
            id="resume"
            src={`${process.env.PUBLIC_URL}/img/about/resume_jl_2024.jpg`}
            alt="Resume not found"
            style={{ maxWidth: "100%", marginTop: 0 }}
          />
        )}
      </div>

    </div>
  )
}

export default About;
