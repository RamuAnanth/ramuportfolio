import React from 'react'
import './ContentPart.css'
import Footer from './Footer';
import image from './images/developer.jpg'
import Contact from './contact';
import ProjectPage from './ProjectPage';
import AchievementsPage from './AchievementsPage';
function ContentPart(props) {
    const x=props.values;
    let val;
    if(x=="About"){
        val=(<div className='aboutdiv'>
          <div className='name'>
            <div className='head'>
            <p className='para'>I'm Anantha Ramu</p>
            </div>
         
          <div className='developimage'><img src={image} className='image'/></div>
          
          </div>
            <h6 style={{color:"#ffffff"}}>Frontend developer , Python developer , Javascript engineer ,<span ca>Photochromic Lens</span> enthusiast,practicing minimalist,and Pop Music & Jazz lover in search of flow</h6>
            <h6 style={{color:"#ffffff"}}>Working with my hands to make magic happen on the internet.View my Project , Articles , Achivements , ContactMe , or send me an email at <span>ramuanantha6299@gmail.com</span></h6>
            <br/>
            <br/>
            <h6>See More About Me  ---&gt;</h6><br/><br/><br/><br/>
            <div className='urls'>
              <ul className="ul">
              <li>
                <a href="https://www.linkedin.com/in/ramu-anantha-b19722273/">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@LKlite">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/RamuAnanth">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ramu_anantha_/">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            </div>
        </div>);
    }
    else if(x=="Projects"){
        val=(<div>
            <ProjectPage/>
            </div>);
    }
    else if(x=="Contact"){
      val=(<div className='contactdiv'>
        <Contact/>
      </div>
        );
    }
    else if(x=="Acheivements"){
      val=(<div>
        <AchievementsPage/>
      </div>);
    }
  return (
    <div className='bodypart'>
           
      {val}
    </div>
  );
}

export default ContentPart
