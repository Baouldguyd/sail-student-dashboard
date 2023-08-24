import React, { useState } from 'react'
import techtalent from '../../Assets/Techtalent.png'
import learningShadow from '../../Assets/Shadow.jpg'
import datascience from '../../Assets/datascience.png'
import stem from '../../Assets/stem.png'
import { SearchOutlined } from '@ant-design/icons'
import teachers from '../../Assets/teachersfellowship.jpg'

import DownloadButton from './DownloadButton'




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
    justifyContent: 'space-evenly',

    width: '400px',
    height: 'auto',
    flexShrink: 0,
    borderRadius: '20px',
    background: 'var(--secondary-primary-white, #FFF)',
    padding: '1rem 3.5rem 1rem 0'
}

const discussionStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '1rem',
    width: '400px',
    height: 'auto',
    flexShrink: 0,
    borderRadius: '20px',
    background: 'var(--secondary-primary-white, #FFF)',
    padding: '1rem'
}



const Content = () => {
    const [isTilted, setIsTilted] = useState(false);

    const imageStyle = {
        borderRadius: '10px',
        transition: '0.3s',
        transform: isTilted ? 'rotate(60deg)' : 'rotate(0deg)'
    }


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
                <h4 style={nameStyle}
                >Hi Dami</h4>


                <div className=' flex justify-between'>
                    <h2
                        style={welcomeStyle}>Here are your Courses</h2>
                    <input type="text" name="" id="" icon={<SearchOutlined />} placeholder='Search' style={searchBoxStyle} />
                </div>
            </div>

            <div className=' flex mt-[1rem] gap-[1rem]'>
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
                        <div className='flex flex-row text-[14px] font-bold pb-[10px] justify-center items-center gap-[1rem] tracking-tight'>
                        <h6>HTML</h6>
                        <DownloadButton />

                        </div>

                        <div className='flex flex-row text-[14px] font-bold pb-[10px] justify-center items-center gap-[1rem] tracking-tight'>
                        <h6 >CSS</h6>
                        <DownloadButton />

                        </div>
                        <div className='flex flex-row text-[14px] font-bold pb-[10px] justify-center items-center gap-[1rem] tracking-tight'>
                        <h6 >Js.</h6>
                        <DownloadButton />

                        </div>
                        
                        <div className='flex flex-row text-[14px] font-bold pb-[10px] justify-center items-center gap-[0.8rem] tracking-tight'>
                        <h6 >REACT</h6>
                        <DownloadButton />

                        </div>
                        



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
                         
                         <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-row text-[14px] font-bold pb-[10px] justify-center items-center gap-[1rem] tracking-tight'>
                        <h6 >R.</h6>
                        <DownloadButton />

                        </div>

                        <div className='flex flex-row text-[14px] font-bold pb-[10px] justify-center items-center gap-[1rem] tracking-tight'>
                        <h6 >Python</h6>
                        <DownloadButton />
                        </div>

                        <div className='flex flex-row text-[14px] font-bold pb-[10px] pr-[2.2rem] justify-center items-center gap-[1rem] tracking-tight'>
                        <h6 >Data Wrangling</h6>
                        <DownloadButton />

                        </div>

                         </div>


                    </div>


                </div>

            </div>

            <div className=' flex mt-[3rem] gap-[1rem]'>
                
                <div className='learning' style={discussionStyle} >
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
                        <img src={stem} alt="" style={imageStyle}
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
                        }}>Science, Technology, Engineering and Math (STEM)</p>
                        <p style={{
                            color: 'var(--secondary-grey-600, #A3AED0)',

                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '32px',
                            letterSpacing: '-0.48px'
                        }}
                        >3 Modules</p>
                         <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-row text-[14px] font-bold pb-[10px] justify-center items-center gap-[1rem] tracking-tight'>
                        <h6 > Physics</h6>
                        <DownloadButton />

                        </div>

                        <div className='flex flex-row text-[14px] font-bold pb-[10px] justify-center items-center gap-[1rem] tracking-tight'>
                        <h6 >Maths.</h6>
                        <DownloadButton />
                        </div>

                        <div className='flex flex-row text-[14px] font-bold pb-[10px] pr-[2.2rem] justify-center items-center gap-[1rem] tracking-tight'>
                        <h6 >Engineering</h6>
                        <DownloadButton />

                        </div>

                         </div>



                    </div>



                </div>


                <div className='activites' style={learningStyle}>
                    <div style={{
                        // backgroundImage: "linear-gradient(rgba(134, 140, 255, 1), rgba(0, 102, 255, 1))",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '80px',
                        height: '60px',
                        flexShrink: 0,
                        borderRadius: '50%'

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
                            lineHeight: '24px'
                        }}>Teachers Fellowship</p>
                        <p style={{
                            color: 'var(--secondary-grey-600, #A3AED0)',

                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '32px',
                            letterSpacing: '-0.48px'
                        }}
                        >1 Module</p>
                        
                        <DownloadButton />
                    </div>


                </div>

            </div>



          











        </div >
    )
}

export default Content;
