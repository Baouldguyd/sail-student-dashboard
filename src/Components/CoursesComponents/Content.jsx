import React, { useState } from 'react'
import techtalent from '../../Assets/Techtalent.png'
import learningShadow from '../../Assets/Shadow.jpg'
import datascience from '../../Assets/datascience.png'
import stem from '../../Assets/stem.png'
import { SearchOutlined } from '@ant-design/icons'
import teachers from '../../Assets/teachersfellowship.jpg'
import CourseContentApp from './CourseContentApp'



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
    height: '300px',
    flexShrink: 0,
    borderRadius: '20px',
    background: 'var(--secondary-primary-white, #FFF)',
    padding: '1rem'
}

const discussionStyle = {
    display: 'flex',
    width: '336px',
    height: '300px',
    padding: '1rem',


    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '1px',
    flexShrink: 0,
    borderRadius: '20px',
    background: 'var(--secondary-primary-white, #FFF)',
}

// const courseStyle= {
//     display:'flex',
//     justifyContent:'flex-start',
//     paddingRight:'72px',
//     width:'100%',
//     height:'100%',
//     backgroundColor:'red'
// }

const Content = () => {
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
            backgroundColor: "#F4F7FE",
            width: '83%',
            height:'100%',
            padding: '2rem'
        }}>

            <div className='header'>
                <h4 style={nameStyle}
                >Hi Dami</h4>
                <div className=' flex justify-between'>
                    <h2
                        style={welcomeStyle}>Welcome to SAIL!</h2>
                    <input type="text" name="" id="" icon={<SearchOutlined />} placeholder='Search' style={searchBoxStyle} />
                </div>
            </div>

            <div className=' flex justify-evenly mt-[1rem]'>
                <div className='learning' style={learningStyle} >
                    <div style={{
                        background: { learningShadow },
                        backgroundColor: 'var(--secondary-grey-300, #F4F7FE)',
                        width: '60px',
                        height: '60px',
                        flexShrink: 0,
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}>
                        <img src={techtalent} alt="" style={imageStyle}
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
                            // letterSpacing: '-0.28px'
                        }}>Tech Talent</p>
                        <p style={{
                            color: 'var(--secondary-grey-600, #A3AED0)',

                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '32px',
                            letterSpacing: '-0.48px'
                        }}
                        >4 Modules</p>
                        
                        

                    

                        {/* <div>
                    <p style={{
                            color: 'var(--secondary-dark-grey-900, #1B2559)',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '24px',
                            letterSpacing: '-0.28px'
                        }}>Frontend Development, Backend Development and Full stack Development </p> 
                    </div> */}
                        {/* <div className='h-7 bg-black'>
                    <CourseContentApp/>

                    </div> */}
                    <CourseContentApp/>
                    </div>

                    
                </div>


                <div className='activites' style={learningStyle}>
                    <div style={{
                        backgroundImage: "linear-gradient(rgba(134, 140, 255, 1), rgba(0, 102, 255, 1))",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '60px',
                        height: '60px',
                        flexShrink: 0,
                        borderRadius: '50%'

                    }}>
                        <img src={datascience} alt="" style={imageStyle}
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
                            lineHeight: '24px'
                        }}>Data Science</p>
                        <p style={{
                            color: 'var(--secondary-grey-600, #A3AED0)',

                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '32px',
                            letterSpacing: '-0.48px'
                        }}
                        >3 Modules</p>
                    </div>

                </div>

            </div>



            <div className=' flex justify-evenly  mt-[2rem] gap-[1rem]'>



                <div className='flex justify-between' style={discussionStyle}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '60px',
                        height: '60px',
                        flexShrink: 0,
                        borderRadius: '50%',


                    }}>
                        <img src={stem} alt="" style={imageStyle}
                            onMouseEnter={() => setIsTilted(true)}
                            onMouseLeave={() => setIsTilted(false)}
                        />
                    </div>
                    <div>
                        <p style={{
                            color: 'var(--secondary-dark-grey-900, #1B2559)',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '20px',
                            letterSpacing: '-0.70px',
                            paddingLeft: '12px'


                        }}>Science, Technology, Engineering and Math (STEM)</p>
                        <p style={{
                            color: 'var(--secondary-grey-600, #A3AED0)',

                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '32px',
                            letterSpacing: '-0.48px',
                            paddingLeft: '12px',
                            paddingBottom: '10px'
                        }}
                        >1 Module</p>
                    </div>


                </div>

                <div className='discussion flex' style={discussionStyle}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '60px',
                        height: '60px',
                        flexShrink: 0,
                        borderRadius: '50%',
                        paddingBottom: '10px'

                    }}>
                        <img src={teachers} alt="" style={imageStyle}
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
                        }}>Teachers Fellowship</p>

                        <p style={{
                            color: 'var(--secondary-grey-600, #A3AED0)',

                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '32px',
                            letterSpacing: '-0.48px',
                            paddingRight: '18px'
                        }}
                        >1 Module</p>
                    </div>


                </div>
            </div>











        </div >
    )
}

export default Content;
