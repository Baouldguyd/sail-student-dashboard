import React from 'react';
import { Avatar, List } from 'antd';
import DownloadButton from './DownloadButton';
const data = [
  {
    title: 'HTML',
  },
  {
    title: 'CSS',
  },
  {
    title: 'JAVASCRIPT',
  },
  {
    title: 'REACT',
  },
];

const data2 = [
  {
    title: 'R',
  },
  {
    title: 'PYTHON',
  },
  {
    title: 'DATA VISUALIZATION',
  },
  {
    title: 'MYSQL',
  },
];

export const CourseContentApp = () => (
  <div className='flex flex-row justify-between items-center bg-red-700 gap-10'>

    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
            title={<a href="https://ant.design">{item.title}</a>}
          />
          
          <DownloadButton />
        </List.Item>
      )}
  
      
    />
  </div>
);
export default CourseContentApp;
