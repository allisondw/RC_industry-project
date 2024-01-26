import React from "react";
import "../src/styles/Main.scss";
import "./App.scss";
import CardContainer from "./components/CardContainer/CardContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import hero from "../src/assets/heroimage_720.png"
function App() {
  return (
    <>
      <Header />
      <div className="Container">
      <div className="Hero-Container">
        <img className='Hero-Image' src={hero} alt='Hero'></img>
        <div className="Hero-Div">
            <div className="Hero-Title">
            <h1>Remarkably New Experiences</h1>
            </div>
            <div className="Hero-Paragragh">
            <p>Savor exquisite cuisine, embrace thrilling experiences, and meet new friends. Start your memorable journey with a click today!</p>
            </div>
        </div>
      </div>
      <div className='Hero-Banner'>
        <h3 className="Banner-Titles">Before the season ends, set sail for unforgettable moments! Grab your ticket now for luxury, breathtaking views, and endless memories!</h3>
        <button className='Button-Shop'>SHOP NOW</button>
      </div>
      <div className='Body-Top'>
        <div className='Body-Header'>
        <h1>UNFORGETTABLE JOY AWAITS</h1>
        </div>
        <div className="Body-Paragraph">
            <p>
            We guarantee an unforgettable experience, prioritize excitement, adventure, and safety throughout the entire journey. Royal Caribbean staff members cherish every individual on board, ensuring that everyone has an unforgettably enjoyable vacation.
            </p>
        </div>
      </div>

      <div className='Card-Container'>
      <CardContainer />
      </div>

      <div className='Ready_to_Book'>
        <h1 className="Book-Title">Claim Your Adventure</h1>
        <p className="Book-Paragraph">
          Ready to turn your travel dreams into reality? Click the link above to get started.  Embark on a journey that promises endless horizons and exhilarating experiences.  Let's set sail on a voyage that will redefine the way you see the world!
        </p>
        <button className='Button-Adventure'> EMBARK ON YOUR NEW ADVENTURE</button>
      </div>
      {/* <div>
        <h1>STILL HAVE QUESTIONS?</h1>
        <p> </p>
        <button className='Button-Faq'> EMBARK ON YOUR NEW ADVENTURE</button>
      </div> */}
    </div>
     
      <Footer />
     
    </>
  );
}
export default App;
