import React, { useEffect, useState } from 'react';
import DownloadButton from './DownloadButton';
import axios from "axios";


const nameStyle = {
    color: '#707EAE',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: '-0.28px'
}

const welcomeStyle = {

    fontSize: '34px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '42px',
    letterSpacing: '-0.68px'
}



const learningStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '400px',
    height: 'auto',
    flexShrink: 0,
    borderRadius: '20px',
    background: 'var(--secondary-primary-white, #FFF)',
    padding: '1rem 3.5rem 1rem 0',
    
}



const Content = () => {
  const [isTilted, setIsTilted] = useState(false);
  const imageStyle = {
    borderRadius: '10px',
    transition: '0.3s',
    transform: isTilted ? 'rotate(60deg)' : 'rotate(0deg)',
  };
  const [userProfile, setUserProfile] = useState(null); // State to hold user profile data

  const token = sessionStorage.getItem('token')

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("https://ssmp-api.onrender.com/api/v1/user/getUserProfileInfo", {
          headers: {
            Authorization: `Bearer ${token}`, // Assuming userInfo contains the token
            "Content-Type": "application/json",
          },
        });

        setUserProfile(response.data.data);
        console.log(response.data.data);
        
        
        
        // Set user profile data in state
        if (userProfile?.programme === 'Tech Talent') {
            
        } else if (userProfile?.programme === 'Data Science') {
            
        } 


      } catch (error) {
        console.error("An error occurred while fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [token]);

 
  


const courseTechTalent = [
  { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    image : 'https://w7.pngwing.com/pngs/186/608/png-transparent-html5-icon-%E2%80%A2-html-social-network-icon.png'
},
  { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" ,
  image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' },
  
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" ,
  image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' },
  
  { name: "React", url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" ,
  image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
  
  { name: "NodeJS", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction" ,
  image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' },

  { name: "Mongoose", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose" ,
  image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYe1t_PpB7ArqY4qLWcDhPocIcnOaLbqHcQgdP0DLiA&s' },
  
  // Add more courses here
];

const courseDataScience = [
    { name: "R Programming", url: "https://www.w3schools.com/r/",
      image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/2560px-R_logo.svg.png'      
},
    
    { name: "Python", url: "https://developer.mozilla.org/en-US/docs/Glossary/Python" ,
      image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'
},  

];
const programCourses = {
    'Tech Talent': courseTechTalent,
    'Data Science': courseDataScience,
    // Add more programs and their course lists here
  };
  

    const enrolledProgram = userProfile?.programme;

    const coursesToShow = programCourses[enrolledProgram] || [];
  
  return (
    <div style={{
      backgroundColor: "#F4F7FE",
      width: '83%',
      height: '100%',
      padding: '2rem',
      overflow: 'auto',
      innerHeight: '100vh'
    }}>
      <div className='header'>
        {/* ... (rest of your code) */}
        <h4 style={nameStyle}
                >{userProfile?.firstName} {userProfile?.lastName}. You are Enrolled in the {userProfile?.programme} programme </h4>


                 <div className=' flex justify-between'>
                     <h2
                         style={welcomeStyle}>Here are your Learning Aids</h2>
                 </div>
      </div>

      <div className='flex mt-[1rem] gap-[1rem] flex-wrap '>
       
        {coursesToShow.map(course => (
          <div className='learning' style={learningStyle} key={course.name}>
            <div style={{
              backgroundColor: 'var(--secondary-grey-300, #F4F7FE)',
              width: '60px',
              height: '60px',
              flexShrink: 0,
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              
            }}>
              <img src={course.image} alt="" style={imageStyle}
                onMouseEnter={() => setIsTilted(true)}
                onMouseLeave={() => setIsTilted(false)}
              />
            </div>
            <div>
              <p style={{
                color: 'var(--secondary-dark-grey-900, #1B2559)',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '24px',
              }}>{course.name}</p>
              <div className='flex flex-row text-[14px] font-bold pb-[10px] justify-center items-center gap-[1rem] tracking-tight'>
                <h6>{course.name}</h6>
                <a href={course.url} target="_blank" rel="noopener noreferrer">
                  <DownloadButton />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ... (rest of your code) */}
    </div>
  );
}

export default Content;
