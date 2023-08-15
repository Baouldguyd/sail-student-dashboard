import { BookOutlined, CalendarOutlined, CommentOutlined, DashboardOutlined, FolderOpenOutlined, LayoutFilled, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons/lib/icons';
import React from 'react'


const studentStyle = {
    color: "#06F",
    fontSize: "26px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "100%"
}

const buttonStyle = {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "28px",
    letterSpacing: "-0.32px",
    color: "#A3AED0"
}



const Sidebar = () => {
    return (
        <div className=' w-[17%] bg-white flex flex-col justify-between p-7'>

            <div className='logo h-[5rem] w-[100%]'>
                <div className=' flex h-[4rem] rounded-md'>
                    <div className='icon h-[100%]'>
                        <LayoutFilled className=' bg-white text-blue-600 w-[2rem]' />

                    </div>
                    <div>
                        <h1 className=' font-bold text-[26px] text-blue-600' style={
                            studentStyle
                        }>Student</h1>
                        <p className=' font-bold text-[12px] text-blue-600'>DASHBOARD</p>
                    </div>
                </div>
            </div>

            <div className='nav-buttons flex flex-col justify-between gap-[5px]' >
                <button className=' bg-blue-600 w-[90%] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] gap-[14px] text-white font-semibold'><DashboardOutlined className=' mr-[1rem]' />   Dashboard</button>
                <button className=' w-[90%] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] gap-[14px]'
                    style={
                        buttonStyle
                    }><BookOutlined className=' mr-[1rem]' />    Course</button>

                <button className=' w-[90%] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] gap-[14px]'
                    style={
                        buttonStyle
                    }
                ><FolderOpenOutlined className=' mr-[1rem]' />   Resources</button>
                <button className=' w-[90%] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] gap-[14px]'
                    style={
                        buttonStyle
                    }
                > <CommentOutlined className=' mr-[1rem]' />   Discussion</button>
                <button className=' w-[90%] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] gap-[14px]'
                    style={
                        buttonStyle
                    }
                ><CalendarOutlined className=' mr-[1rem]' />   Schedule</button>
                <button className=' w-[90%] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] gap-[14px]'
                    style={
                        buttonStyle
                    }
                ><UserOutlined className=' mr-[1rem]' />   My Account</button>
                <button className=' w-[90%] h-[45px] p-[9px 83px 8px 10px] rounded-md text-[1rem] m-[auto] gap-[14px]'
                    style={
                        buttonStyle
                    }
                ><SettingOutlined className=' mr-[1rem]' />   Settings</button>
            </div>

            <div className='logout gap-[2rem]'>
                <LogoutOutlined /> <a href="/"><button style={buttonStyle}> Log Out</button></a>
            </div>


        </div>
    )
}

export default Sidebar;