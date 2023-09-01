import React, {useState, useEffect} from 'react'
import axios from 'axios';


const UserHead = () => {
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
          console.log(response.data.data); // Set user profile data in state
        } catch (error) {
          console.error("An error occurred while fetching user profile:", error);
        }
      };
  
      fetchUserProfile();
    }, [token]);
  
   
  return (
    <div>
            <div className='header'>
                <h4 style={nameStyle}
                >
                   Hi, {userProfile?.firstName}
                
                </h4>


                <div className=' flex justify-between'>
                    <h2
                        style={welcomeStyle}> Duration of your Program</h2>
                    
                </div>
            </div>
    </div>
  )
}

export default UserHead