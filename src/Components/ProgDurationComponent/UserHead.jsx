import React from 'react'
import { SearchOutlined } from '@ant-design/icons'

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
    
    const searchBoxStyle = {
        width: '15rem',
        height: '3rem',
        flexShrink: 0,
        padding: '1rem',
        borderRadius: '10px',
        boxShadow: '0px 4px 4px 0px rgba(244, 247, 254, 0.25)'
    }
  return (
    <div>
            <div className='header'>
                <h4 style={nameStyle}
                >Hi Dami</h4>


                <div className=' flex justify-between'>
                    <h2
                        style={welcomeStyle}> Duration of your Program</h2>
                    <input type="text" name="" id="" icon={<SearchOutlined />} placeholder='Search' style={searchBoxStyle} />
                </div>
            </div>
    </div>
  )
}

export default UserHead