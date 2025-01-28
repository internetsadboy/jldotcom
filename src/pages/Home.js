import React from "react";

const Home = ({ isMobile }) => {
  return (
    <div className="image-container" style={{maxWidth: 500, gap: 70, marginTop: 40}}>
      <div>
        <img src={`${process.env.PUBLIC_URL}/img/${isMobile ? `mobile` : `desktop` }/home/FREEZ!.JPG`} />
      </div>
    </div>
  );
}

export default Home;
