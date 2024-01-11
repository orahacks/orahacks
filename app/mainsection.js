import React from 'react';
// import './MainSection.css'; // CSS file for MainSection styling

const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

function MainSection() {
  return (
    <div className="MainSection">
      <h1>ORAHACKS CHICAGO</h1>
      <p>WEB3 and AI</p>
      {/* Replace 'button-link' with actual paths or functions */}
      <button className="join-btn" onClick={() => openInNewTab("https://form.typeform.com/to/ZnWxoOlH")}>JOIN US</button>
      <button className="explore-btn" onClick={() => openInNewTab("https://oravew.xyz/winter-is-coming-hackathon-2023-2/")}>LAST SEASON</button>
      {/* Dates or any other information */}
      <p className="dates">03.29.2023 - 03.31.2023</p>
    </div>
  );
}

export default MainSection;
