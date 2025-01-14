import React from "react";

function Home() {
  return (
    <div className="image-container" style={{maxWidth: 500, gap: 70, marginTop: 40}}>
      <div>
        <img src={`${process.env.PUBLIC_URL}/img/home/FREEZ!.JPG`} />
      </div>
    </div>
  );
}

export default Home;