import React, { useState } from 'react'
import linkedinImg from '../../Assets/linkedin.jpg'
import { ArrowLeftOutlined, ArrowRightOutlined, ScheduleOutlined } from '@ant-design/icons'
import interviewImg from '../../Assets/interview.jpg'
// import elevatorImg from '../../Assets/elevatorpitch.png'
import coverletterImg from '../../Assets/coverletter.jpg'
import companyImg from '../../Assets/companyculture.png'


const eventsDivStyle = {
    width: 'auto',
    height: 'auto',
    flexShrink: 0,
    borderRadius: '20px',
    background: 'var(--secondary-primary-white, #FFF)'
}

const slidesContent = [
    {
        eventName:'Personal Branding (LinkedIn and Portfolio)',
        eventDate: 'Date: August 11th, 2023',
        eventInfo : 'Understand the importance of personal branding and how it can enhance their professional visibility.',
        eventImg: linkedinImg,
        eventUrl: ''
    },

    {
        eventName:'Personal Branding (LinkedIn and Portfolio)',
        eventDate: 'Date: August 11th, 2023',
        eventInfo : 'Understand the importance of personal branding and how it can enhance their professional visibility.',
        eventImg: interviewImg,
        eventUrl: ''
    },

    {
        eventName:'CVs, Resumes, and Cover Letters',
        eventDate: 'Date: August 14, 2023',
        eventInfo : 'Understand the purpose of a CV, resume, and cover letter and learn the key differences between them..',
        eventImg: coverletterImg,
        eventUrl: ''
    },

    {
        eventName:'Assessing Company cultures',
        eventDate: 'Date: August 21, 2023',
        eventInfo : 'Understand the importance of company culture and how it impacts job satisfaction and performance.',
        eventImg: companyImg,
        eventUrl: ''
    },

    {
        eventName:'Acing your Interviews ',
        eventDate: 'Date: August 17, 2023',
        eventInfo : 'Familiarize students with common interview formats (behavioral, technical, etc.) and the importance of preparation.',
        eventImg: interviewImg,
        eventUrl: ''
    },

    

    


]





const EventsApp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesContent.length) % slidesContent.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesContent.length);
  };


  return (
    <div>
        <div className='learn-course p-[1rem]' style={
            eventsDivStyle
        }>
            <h1 style={{
                        color: 'var(--secondary-dark-grey-900, #1B2559)',
                        fontSize: '28px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '42px',
                        letterSpacing: '-0.68px'
                    }}>Upcoming Events at SAIL </h1>
            <div className='events-details flex justify-between p-[1rem] gap-[1rem]'>
                <div className='events-text'>
                    <h1 className='eventTitle text-lg font-semibold'>{slidesContent[currentIndex].eventName}</h1>
                    <br />
                    <p className='eventDate font-semibold'> {slidesContent[currentIndex].eventDate}</p>
                    <div>
                        <p>{slidesContent[currentIndex].eventInfo}</p>
                    </div>
                </div>
                <div className='events-image w-[32rem] h-[10rem]'>
                    <img src={slidesContent[currentIndex].eventImg} alt="" className=' w-[100%] h-[100%] rounded-md' />
                </div>
            </div>
            <div className='events-button flex justify-end gap-[1rem]'>
                <a href="/"><button className=' bg-blue-600 w-[auto] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] text-white font-semibold p-[0.5rem]'> Register Now <ArrowRightOutlined />  </button></a>
                
            </div>
                    
            <div className=' flex mt-[1rem]'>
            <button className=' bg-blue-600 w-[auto] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] text-white font-semibold p-[0.5rem]' onClick={handlePrev}>  <ScheduleOutlined/> <ArrowLeftOutlined/> </button>
                <button className=' bg-blue-600 w-[auto] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] text-white font-semibold p-[0.5rem]' onClick={handleNext}><ScheduleOutlined/><ArrowRightOutlined/>  </button>
            </div>

            </div>
    </div>
  )
}

export default EventsApp