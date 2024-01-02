import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const TextChanger = () => {
  const [displayText, setDisplayText] = useState("Web");
  const alternateText = "Blockchain";

  useEffect(() => {
    // Set an interval to change the text every 3 seconds
    const intervalId = setInterval(() => {
      setDisplayText((prevText) =>
        prevText === alternateText ? "Web" : alternateText
      );
    }, 2000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <h1 className="hero--section--title">
      <span className="hero--section-title--color">{displayText}</span> <br />
      Developer
    </h1>
  );
};

const handleDownloadResume = () => {
  // Replace 'your_resume.pdf' with the actual path to your PDF resume
  const resumePath = "./img/ResumeAVL_241223.pdf";

  // Create a link element
  const link = document.createElement("a");
  link.href = resumePath;
  link.download = "Anoop_Resume.pdf"; // Set the desired file name

  // Trigger a click on the link to start the download
  link.click();
};

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Anoop</p>
          {/* Render the TextChanger component here */}
          <TextChanger />
          <p className="hero--section-description">
            Passionate creator specializing in dApps and websites. I blend
            innovative design with functional development, crafting seamless
            digital experiences. Join me on this exciting journey!💻🌐
          </p>
        </div>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
        <button className="btn btn-primary" onClick={handleDownloadResume}>
          Download Resume
        </button>
      </div>
      <div className="hero--section--img">
        <img
          src="./img/AVL-sqr1.png"
          alt="Hero Section"
          height={794}
          width={632}
        />
      </div>
    </section>
  );
}

// import React, { useState, useEffect } from 'react';

// const TextChanger = () => {
//   const [displayText, setDisplayText] = useState('Web');
//   const alternateText = 'Blockchain';

//   useEffect(() => {
//     // Set an interval to change the text every 3 seconds
//     const intervalId = setInterval(() => {
//       setDisplayText((prevText) => (prevText === alternateText ? 'Web' : alternateText));
//     }, 3000);

//     // Cleanup the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array ensures the effect runs only once on mount

// export default function HeroSection() {
//   return (
//     <section id="heroSection" className="hero--section">
//       <div className="hero--section--content--box">
//         <div className="hero--section--content">
//           <p className="section--title">Hey, I'm Anoop</p>
//           <h1 className="hero--section--title">
//             {/* <span className="hero--section-title--color">Web</span> <br /> */}
//             <span className="hero--section-title--color">{displayText}</span> <br />
//             Developer
//           </h1>
//           <p className="hero--section-description">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//             <br /> Dolorum, quas. Amet soluta assumenda cum?
//           </p>
//         </div>
//         <button className="btn btn-primary">Get In Touch</button>
//       </div>
//       <div className="hero--section--img">
//         <img
//           src="./img/AVL-sqr1.png"
//           alt="Hero Section"
//           height={794}
//           width={632}
//         />
//       </div>
//     </section>
//   );
// }
