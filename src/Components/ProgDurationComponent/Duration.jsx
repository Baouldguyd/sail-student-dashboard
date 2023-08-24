import { CalendarFilled, CalendarOutlined, ClockCircleFilled, ClockCircleOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import UserHead from './UserHead';


const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    height: '5rem',
    backgroundColor: 'white',
    borderRadius: '10px solid rgb(244,247,254)'
    
    
}



const durationStyle = {
    color: 'var(--secondary-dark-grey-900, #1B2559)',
    fontSize: '1.5rem',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '42px',
    letterSpacing: '-0.68px'
}

const iconShape= {
    width: 'auto',
    height : '4rem'
}


const DurationApp = () => {
  const [firstLoginDate, setFirstLoginDate] = useState(null);
  const [programEndDate, setProgramEndDate] = useState(null);
  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    // Simulate fetching user data from an API/database
    // For demonstration purposes, I'm using a setTimeout
    const fetchData = () => {
      const savedFirstLoginDate = localStorage.getItem('firstLoginDate');
      
      if (!savedFirstLoginDate) {
        const currentDate = new Date();
        localStorage.setItem('firstLoginDate', currentDate.toISOString());
        setFirstLoginDate(currentDate);
        const sixMonthsLater = new Date(currentDate);
        sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);
        setProgramEndDate(sixMonthsLater);
      } else {
        setFirstLoginDate(new Date(savedFirstLoginDate));
        const savedProgramEndDate = new Date(savedFirstLoginDate);
        savedProgramEndDate.setMonth(savedProgramEndDate.getMonth() + 6);
        setProgramEndDate(savedProgramEndDate);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (programEndDate) {
      const currentDate = new Date();
      const timeDiff = programEndDate.getTime() - currentDate.getTime();
      const remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setDaysLeft(remainingDays);
    }
  }, [programEndDate]);

  return (
    <div 
    style={{
        backgroundColor: "#F4F7FE",
        width: '83%',
        height: '100%',
        padding: '2rem',
        overflow: 'auto',
        innerHeight: '100vh'
    }}

    >

        <UserHead/>

        <div 
        style={{
            marginTop : '2rem',
            display: 'flex',
            flexDirection : 'column',
            justifyContent: 'space-between',
            gap: '2rem',
            
        }}
        >
            <div style={containerStyle}>
            {daysLeft !== null && (
            <p style={durationStyle}>You have {daysLeft} Days left on the program</p>
             )}

             <div>
             <ClockCircleOutlined />
             </div>
        </div>

        <div style={containerStyle}>
            {firstLoginDate && (
            <p style={durationStyle}>Your Program Start Date is {firstLoginDate.toDateString()}</p>
            )}

            <div>
                <CalendarOutlined/>
                <AiOutlineCalendar/>
                
            </div>

        </div>
        
        <div style={containerStyle}>
             {programEndDate && (
            <p style={durationStyle}>Your Program end date is {programEndDate.toDateString()}</p>
             )}

             <div>
                <CalendarFilled/>
             </div>
        </div>
      
        
      
    </div>

      
    </div>
  );
};

export default DurationApp;
