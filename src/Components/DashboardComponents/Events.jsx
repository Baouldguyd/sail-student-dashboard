import React, { useState, useEffect } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined, ScheduleOutlined } from '@ant-design/icons';
import axios from 'axios';



const eventsDivStyle = {
    width: 'auto',
    height: 'auto',
    flexShrink: 0,
    borderRadius: '20px',
    background: 'var(--secondary-primary-white, #FFF)'
}






const EventsApp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [events, setEvents] = useState([]);
    const [fetchingEvents, setFetchingEvents] = useState(false);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    };
  
    const token = sessionStorage.getItem('token');
    
  
    const fetchEvents = async () => {
      try {
        setFetchingEvents(true);
        const response = await axios.get(
          'https://ssmp-api.onrender.com/api/v1/events/getAllEvents',
          
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            events
          }
        );
          console.log(response.data.responseMessage);
          console.log(response.data.data);
          

          setEvents(response.data.data);


        if (response.status === '00') {
          console.log('Events fetched successfully');
          
        }


      } catch (error) {
        console.error('An error occurred:', error);
        window.alert( error.response.data.responseMessage)
      } finally {
        setFetchingEvents(false);
      }
    };
  
    useEffect(() => {
      fetchEvents();
    },[token]);




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



                <div className='events-details flex justify-between p-[1rem] gap-[1rem] w-[45vw]'>
                    <div className='events-text'>
                        <h1 className='eventTitle text-lg font-semibold'>
                            Event Title: {events[currentIndex]?.eventName} {/* Use ?. to handle null/undefined */}
                        </h1>
                        <br />
                        <p className='eventDate font-semibold'>
                            Event Date: {events[currentIndex]?.eventDate} {/* Use ?. to handle null/undefined */}
                        </p>
                        <div>
                            <p>Event Description: {events[currentIndex]?.eventDescription} {/* Use ?. to handle null/undefined */}</p>
                        </div>
                        <br />
                        <div>
                            <p className='speaker font-semibold'> Featured Speaker: {events[currentIndex]?.speaker} {/* Use ?. to handle null/undefined */}</p>
                        </div>
                    </div>
                   
                </div>

        <div className='events-button flex justify-end gap-[1rem]'>
        <a href={events[currentIndex]?.eventUrl} target="_blank" rel="noopener noreferrer"><button className=' bg-blue-600 w-[auto] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] text-white font-semibold p-[0.5rem]'> Register Now <ArrowRightOutlined />  </button></a>
                
            </div>
            <div className='events-button flex justify-end gap-[1rem]'>
        <button
          className='bg-blue-600 w-[auto] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] text-white font-semibold p-[0.5rem]'
          onClick={fetchEvents} // Trigger the event fetch on button click
          disabled={fetchingEvents} // Disable button while fetching
        >
          {fetchingEvents ? 'Fetching...' : 'Click here to see Latest events'}
        </button>
      </div>

                <div className=' flex mt-[1rem]'>
                    <button className=' bg-blue-600 w-[auto] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] text-white font-semibold p-[0.5rem]' onClick={handlePrev} >  <ScheduleOutlined /> <ArrowLeftOutlined /> </button>
                    <button className=' bg-blue-600 w-[auto] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] text-white font-semibold p-[0.5rem]' onClick={handleNext} ><ScheduleOutlined /><ArrowRightOutlined />  </button>
                </div>

            </div>
        </div>
    )
}

export default EventsApp;