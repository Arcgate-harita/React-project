import React from "react";
import data from "./data"; // Import the data from the data.js file
import './App.css';
import Component from './components/Component';
import { galleryImages } from "./data";
import { uitImages } from "./data";
import { parkImages } from "./data";
import { udaipurImages } from "./data";
import { jalImages } from "./data";
import { campImages } from "./data";
import { helpImages } from "./data";
import { functionImages } from "./data";
import { communityImages } from "./data";
import { placeImages } from "./data";
import { foundationImages } from "./data";
import { supportImages } from "./data";
import { surgicalImages } from "./data";
import { festivalImages } from "./data";
import bgImage from '../src/background.jpg';
import logo from '../src/logo.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import udaipur from '../src/sheisudaipur.webp';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

AOS.init({
  // Global settings:
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99, 


  offset: 120, 
  delay: 0, 
  duration: 500, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});


function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={bgImage} alt="bgImage" className='bg-image' />
        <img src={logo} alt="Logo" className='logo-image' />
        <p className='para'>Arcgate Foundation, a not-for-profit initiative, focuses on improving the local community through programs in the areas of education, healthcare, sports and rural development.
          Our mission is to support the less privileged sections of the society through various efforts that will help create a brighter future.</p>
      </div>

      <div className="section1">
      
        {data.map((section, index) => (
          <div key={index}>
            {section.heading1 && <h1>{section.heading1}</h1>}
            {section.heading2 && <h3>{section.heading2}</h3>}
            <p>{section.paragraph1}</p>
            <p>{section.paragraph2}</p>
            <p>{section.paragraph3}</p>
          </div>
        ))}
           <div className="line2"></div>
      </div>

      <div className="ayurvediv">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading3 && <h3>{section.heading3}</h3>}
            <p>{section.paragraph4}</p>
            {section.images && (
              <div data-aos="fade-up">
                <Component images ={galleryImages} />
              </div>
            )}
            {section.bulletPoints && (
              <ul>
                {section.bulletPoints.map((point, bulletIndex) => (
                  <li key={bulletIndex}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="section2">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading4 && <h1>{section.heading4}</h1>}
            {section.images1 && (
              <div data-aos="fade-up">
                <Component images={uitImages} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section3">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading5 && <h1>{section.heading5}</h1>}
            {section.images2 && (
              <div data-aos="fade-up">
                <Component images={parkImages} />
              </div>
            )}
          </div>
        ))}
      </div>



      <div className="section4">
     
      <img src={udaipur} alt="udaipur" className='udaipur-image' />
        {data.map((section, index) => (
          <div key={index}>
           {section.heading6 && <h1>{section.heading6}</h1>}
           <p>{section.paragraph5}</p>
            {section.images3 && (
              <div data-aos="fade-up">
                <Component images={udaipurImages}  className = "images3"/>
              </div>
            )}
          </div>
        ))}
        <div className="line1"></div>
      </div>



      <div className="section5">
        {data.map((section, index) => (
          <div key={index}>
         
            {section.heading7 && <h3>{section.heading7}</h3>}
            {section.images4 && (
              <div data-aos="fade-up">
                <Component images={jalImages} />
              </div>
            )}
           
          </div>
        ))}
         <div className="line3"></div>
      </div>



      <div className="section6">
        {data.map((section, index) => (
          <div key={index}>
           
            {section.heading8 && <h3>{section.heading8}</h3>}
            <p>{section.paragraph6}</p>
            <p>{section.paragraph7}</p>
            <p>{section.paragraph8}</p>
            {section.images5 && (
              <div data-aos="fade-up">
                <Component images={campImages} />
              </div>
            )}
          </div>
        ))}
         <div className="line4"></div>
      </div>



      <div className="section7">
        {data.map((section, index) => (
          <div key={index}>
            
            {section.heading9 && <h3>{section.heading9}</h3>}
            <p>{section.paragraph9}</p>
            <p>{section.paragraph10}</p>
            <p>{section.paragraph11}</p>
            {section.images6 && (
              <div data-aos="fade-up">
                <Component images={helpImages} />
              </div>
            )}
          </div>
        ))}
         <div className="line5"></div>
      </div>


      <div className="section8">
        {data.map((section, index) => (
          <div key={index}>
           
            {section.heading10 && <h3>{section.heading10}</h3>}
            <p>{section.paragraph12}</p>
            <p>{section.paragraph13}</p>
            <p>{section.paragraph14}</p>
            {section.images7 && (
              <div data-aos="fade-up">
                <Component images={functionImages} />
              </div>
            )}
          </div>
        ))}
         <div className="line6"></div>
      </div>


      <div className="section9">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading11 && <h3>{section.heading11}</h3>}
            <p>{section.paragraph15}</p>
            <p>{section.paragraph16}</p>
            <p>{section.paragraph17}</p>
          </div>
        ))}
         <div className="line7"></div>
      </div>



      <div className="section10">
        {data.map((section, index) => (
          <div key={index}>
          
            {section.heading12 && <h3>{section.heading12}</h3>}
            <p>{section.paragraph18}</p>
            <p>{section.paragraph19}</p>
            <p>{section.paragraph20}</p>
            {section.images8 && (
              <div data-aos="fade-up">
                <Component images={communityImages} />
              </div>
            )}
          </div>
        ))}
         <div className="line8"></div>
      </div>


      <div className="section11">
        {data.map((section, index) => (
          <div key={index}>
            
            {section.heading11 && <h3>{section.heading11}</h3>}
            <p>{section.paragraph21}</p>
            <p>{section.paragraph22}</p>
            <p>{section.paragraph23}</p>
            {section.images9 && (
              <div data-aos="fade-up">
                <Component images={placeImages} />
              </div>
            )}
          </div>
        ))}
         <div className="line9"></div>
      </div>


      <div className="section12">
        {data.map((section, index) => (
          <div key={index}>
          
            {section.heading14 && <h3>{section.heading14}</h3>}
            <p>{section.paragraph24}</p>
            <p>{section.paragraph25}</p>
            <p>{section.paragraph26}</p>
            {section.images10 && (
              <div data-aos="fade-up">
                <Component images={foundationImages} />
              </div>
            )}
          </div>
        ))}
        <div className="line10"></div>
      </div>



      <div className="section13">
        {data.map((section, index) => (
          <div key={index}>
           
            {section.heading15 && <h3>{section.heading15}</h3>}
            <p>{section.paragraph27}</p>
            <p>{section.paragraph28}</p>
            <p>{section.paragraph29}</p>
            {section.images11 && (
              <div data-aos="fade-up">
                <Component images={supportImages} />
              </div>
            )}
          </div>
        ))}
        <div className="line11"></div>
      </div>



      <div className="section14">
        {data.map((section, index) => (
          <div key={index}>
           
            {section.heading16 && <h3>{section.heading16}</h3>}
            <p>{section.paragraph30}</p>
            <p>{section.paragraph31}</p>
            <p>{section.paragraph32}</p>
            {section.images12 && (
              <div data-aos="fade-up">
                <Component images={surgicalImages} />
              </div>
            )}
          </div>
        ))}
        <div className="line11"></div>
      </div>



      <div className="section15">
        {data.map((section, index) => (
          <div key={index}>
          
            {section.heading17 && <h3>{section.heading17}</h3>}
            <p>{section.paragraph33}</p>
            <p>{section.paragraph34}</p>
            <p>{section.paragraph35}</p>
          </div>
        ))}
        <div className="line12"></div>
      </div>




      <div className="section16">
        {data.map((section, index) => (
          <div key={index}> 
            {section.heading18 && <h3>{section.heading18}</h3>}
            <p>{section.paragraph36}</p>
            <p>{section.paragraph37}</p>
            <p>{section.paragraph38}</p>
          </div>
        ))}
<div className="line13"></div>
      </div>



      <div className="section17">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading19 && <h3>{section.heading19}</h3>}
            <p>{section.paragraph39}</p>
            <p>{section.paragraph40}</p>
            <p>{section.paragraph41}</p>
            <p>{section.paragraph42}</p>
            {section.images13 && (
              <div data-aos="fade-up">
                <Component images={festivalImages} />
              </div>
            )}
          </div>
        ))}
        <div className="line14"></div>
      </div>
       <div className='footer'>
        <p> Copyright © 2023. All rights reserved</p>
      </div>
    </div>
  );

}

export default App;
