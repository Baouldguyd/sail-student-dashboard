import React from 'react';
import { Carousel } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'
import linkedinImg from '../../Assets/linkedin.jpg'

const contentStyle = {
  height: 'auto',
  color: '#fff',
  width:'70rem',
  textAlign: 'center',
  background: '#364d79',
};

const eventsDivStyle = {
    width: '70rem',
    height: 'auto',
    flexShrink: 0,
    borderRadius: '20px',
    background: 'var(--secondary-primary-white, #FFF)'
}
const CarouselApp= () => (
    <div className="w-[20rem]">

  <Carousel autoplay>
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
                    <h1 className='eventTitle text-lg font-semibold'>Personal Branding (LinkedIn and Portfolio)</h1>
                    <br />
                    <p className='eventDate font-semibold'> Date: August 11th, 2023</p>
                    <div>
                        <p>Understand the importance of personal branding and how it can enhance their professional visibility.</p>
                    </div>
                </div>
                <div className='events-image w-[32rem] h-[10rem]'>
                    <img src={linkedinImg} alt="" className=' w-[100%] h-[100%] rounded-md' />
                </div>
            </div>
            <div className='events-button flex justify-end'>
                <a href="/"><button className=' bg-blue-600 w-[auto] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] text-white font-semibold p-[0.5rem]'> Register Now <ArrowRightOutlined />  </button></a>
            </div>
                    

            </div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </div>
);

export default CarouselApp;