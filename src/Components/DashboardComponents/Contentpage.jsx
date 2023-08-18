import React from 'react'
import learningIcon from '../../Assets/Icon.png'
import learningShadow from '../../Assets/Shadow.jpg'
import activityIcon from '../../Assets/activityIcon.png'
import keyboardIcon from '../../Assets/keyboardIcon.png'

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
    lineHeight: '42px', /* 123.529% */
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
    // width: '336px',
    height: '97px',
    flexShrink: 0,
    borderRadius: '20px',
    background: 'var(--secondary-primary-white, #FFF)',
    padding: '1rem'
}

const discussionStyle = {
    display: 'flex',
    // width: '339px',
    height: '97px',
    padding: '1rem',
    // flexDirection: 'column',
    
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '1px',
    flexShrink: 0,
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #868CFF 0%, #06F 100%)'
}

const Contentpage = () => {
    return (
        <div style={{
            backgroundColor : "#F4F7FE",
            width: '80%',
            padding: '2rem'
        }}>
        
        <div className='header'>
            <h4 style={nameStyle}
            >Hi Dami</h4>
            <div className=' flex justify-between'>
                <h2
                style={welcomeStyle}>Welcome to SAIL!</h2>
                <input type="text" name="" id="" placeholder='Search' style={searchBoxStyle} />
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
                    <img src={learningIcon}  alt="" style={{
                        
                    }} />
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
                    <img src={activityIcon}  alt="" style={{
                        margin: 'auto',
                        display: 'block'
                    }} />
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
                    <img src={keyboardIcon}  alt="" style={{
                        margin: 'auto',
                        display: 'block'
                    }} />
                </div>
               

            </div>
        </div>



        <div className='learn-div'>
            <div className='learn-course'>

            </div>
            <div className='upcoming-task'>

            </div>
        </div>

        <div>

        </div>









        </div >
    )
}

export default Contentpage;