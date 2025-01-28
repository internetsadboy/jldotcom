import React from "react";

const Code = ({ isMobile }) => {
  return (
    <div className="tracking-wider">
      <h1 className="text-4xl" style={{lineHeight: '5rem', marginBottom: 20}}>CODE</h1>
      <h2 className="py-2 text-2xl"><span className="style-border-btm">PAYPAL</span> <span style={{fontWeight: 200}}>[ 2015, 2017]</span></h2>
      <ol className="py-2">
        <li className="py-2 text-xl" style={{lineHeight: '30px'}}><span className="style-border-btm">TEAMS</span></li>
        <li className="py-2 text-lg">Application Infrastructure, Merchant Servicing, <br />Consumer P2P (send / request money)</li>
      </ol>
      <ol className="py-2 text-lg">
        <li><span className="font-semibold">Node</span>, js, html, css, HTTP, UI/UX Engineering</li>
      </ol>
      <ul className="py-2 text-lg">
        <li>
          <a className="style-border-btm" href="https://www.linkedin.com/in/jaredlamont/" target="_blank">LINKEDIN</a>
        </li>
        <li className="py-2">
          <a className="style-border-btm" href="https://github.com/internetsadboy">github</a>
        </li>
      </ul>
    </div>
  )
}

export default Code;
