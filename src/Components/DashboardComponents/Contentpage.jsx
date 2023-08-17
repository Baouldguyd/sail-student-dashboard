import React, {useState} from 'react'
import learningIcon from '../../Assets/Icon.png'
import learningShadow from '../../Assets/Shadow.jpg'
import activityIcon from '../../Assets/activityIcon.png'
import keyboardIcon from '../../Assets/keyboardIcon.png'
import { SearchOutlined } from '@ant-design/icons'
import TaskApp from './TaskApp';
import keyboardblueIcon from '../../Assets/keyboardblueIcon.png'

import EventsApp from './Events'


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

const searchBoxStyle = {
    width: '15rem',
    height: '3rem',
    flexShrink: 0,
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px 0px rgba(244, 247, 254, 0.25)'
}

const learningStyle = {
    display: 'flex',
    gap: '1rem',
    width: '336px',
    height: '97px',
    flexShrink: 0,
    borderRadius: '20px',
    background: 'var(--secondary-primary-white, #FFF)',
    padding: '1rem'
}

const discussionStyle = {
    display: 'flex',
    width: '339px',
    height: '97px',
    padding: '1rem',
    
    
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '1px',
    flexShrink: 0,
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #868CFF 0%, #06F 100%)'
}



const taskStyle = {
    width: '35%',
height: 'auto',
flexShrink: 0,
borderRadius: '20px',
background: 'var(--secondary-primary-white, #FFF)'
}

const Contentpage = () => {
    const [isTilted, setIsTilted] = useState(false);

    const imageStyle = {
        
        transition: '0.3s',
        transform: isTilted ? 'rotate(60deg)' : 'rotate(0deg)'
    }
   
    

    // const handleMouseEnter = () => {
    //     imageStyle.transform = 'rotate(60deg)';
    //   };
    
    //   const handleMouseLeave = () => {
    //     imageStyle.transform = 'rotate(0deg)';
    //   };


    return (
        <div style={{
            backgroundColor : "#F4F7FE",
            width: '83%',
            padding: '2rem'
        }}>
        
        <div className='header'>
            <h4 style={nameStyle}
            >Hi Dami</h4>
            <div className=' flex justify-between'>
                <h2
                style={welcomeStyle}>Welcome to SAIL!</h2>
                <input type="text" name="" id="" icon={<SearchOutlined/>} placeholder='Search' style={searchBoxStyle} />
            </div>
        </div>

        <div className=' flex justify-between mt-[1rem]'>
            <div className='learning' style={learningStyle} >
                <div style={{
                    background: {learningShadow},
                    backgroundColor: 'var(--secondary-grey-300, #F4F7FE)',
                    width: '56px',
                    height: '56px',
                    flexShrink: 0,
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                    
                }}>
                    <img src={learningIcon}  alt="" style={imageStyle} 
                    onMouseEnter={() => setIsTilted(true)}
                    onMouseLeave={() => setIsTilted(false)}
                    />
                </div>
                <div>
                    <p style={{
                        color: 'var(--secondary-grey-600, #A3AED0)',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '24px',
                        letterSpacing: '-0.28px'
                    }}>Learning Time</p>
                    <p style={{
                        color: 'var(--secondary-dark-grey-900, #1B2559)',
                        
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '32px',
                        letterSpacing: '-0.48px'
                    }}
                    >2h 17m</p>
                </div>
            </div>

            <div className='activites' style={learningStyle}>
            <div style={{
                    backgroundImage: "linear-gradient(rgba(134, 140, 255, 1), rgba(0, 102, 255, 1))",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '56px',
                    height: '56px',
                    flexShrink: 0,
                    borderRadius: '50%'
                    
                }}>
                    <img src={activityIcon}  alt="" style={imageStyle}
                   onMouseEnter={() => setIsTilted(true)}
                   onMouseLeave={() => setIsTilted(false)}
                    />
                </div>
                <div>
                    <p style={{
                        color: 'var(--secondary-grey-600, #A3AED0)',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '24px',
                        letterSpacing: '-0.28px'
                    }}>My Activities</p>
                    <p style={{
                        color: 'var(--secondary-dark-grey-900, #1B2559)',
                        
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '32px',
                        letterSpacing: '-0.48px'
                    }}
                    >5 Tasks</p>
                </div>

            </div>
            <div className='discussion flex' style={discussionStyle}>
            <div>
                    <p style={{
                        color: 'white',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '24px',
                        letterSpacing: '-0.28px'
                    }}>Discussion Box</p>

                    <p style={{
                        color: 'white',
                        
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '32px',
                        letterSpacing: '-0.48px'
                    }}
                    >3 New Messages</p>
                </div>
            
            <div style={{
                    backgroundImage: "linear-gradient(rgba(134, 140, 255, 1), rgba(0, 102, 255, 1))",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '56px',
                    height: '56px',
                    flexShrink: 0,
                    borderRadius: '50%'
                    
                }}>
                    <img src={keyboardIcon}  alt="" style={imageStyle}
                    onMouseEnter={() => setIsTilted(true)}
                    onMouseLeave={() => setIsTilted(false)}
                    />
                </div>
               

            </div>
        </div>



        <div className=' flex  mt-[2rem] gap-[1rem]'
        
        >
            <EventsApp/>
            

            <div className='upcoming-task'
            style={
                taskStyle
            }>
                <div className=' p-[1rem] flex flex-col justify-between'>
                    <h1 style={{
                        color: 'var(--secondary-dark-grey-900, #1B2559)',
                        fontSize: '28px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '42px',
                        letterSpacing: '-0.68px'
                    }}
                    
                    >Upcoming Tasks</h1>

                </div>
                <div className='p-[1rem]'>
                <TaskApp/>
                </div>
                <div className=' flex justify-end mt-[1rem] gap-[8px]'>
                    <h3 style={{
                        color: '#06F',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '28px',
                        letterSpacing: '-0.32px',
                    }}>View all Tasks</h3>
                    <img src={keyboardblueIcon} alt="" style={{
                        color : 'blue'
                    }} 
                    
                    />
                </div>
            </div>
        </div>

        









        </div >
    )
}

export default Contentpage;