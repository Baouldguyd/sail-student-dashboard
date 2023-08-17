import React from 'react';
import { Collapse } from 'antd';

const text = `
  Build A Netflix Clone
`;

const text2 = `
Build a Youtube Clone`;

const text3 = `Build a Facebook Login Page`
const items = [
  {
    key: '1',
    label: 'Your First Task',
    children: <p>{text}</p>,
    
  },
  {
    key: '2',
    label: 'Your Second Task',
    children: <p>{text2}</p>,
  },
  {
    key: '3',
    label: 'Your Third Task',
    children: <p>{text3}</p>,
  },
];

const TaskApp = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
};

export default TaskApp;