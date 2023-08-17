import React, { useState } from 'react';
import { Tabs } from 'antd';
import HtmlQuestions from './HtmlQuestions';
import CssQuestions from './CssQuestions';
import JavascriptQuestions from './JavascriptQuestions';
import ReactQuestions from './ReactQuestions';

const { TabPane } = Tabs;

const Tab = () => {
  const [activeTab, setActiveTab] = useState('1');

  const handleTabChange = key => {
    setActiveTab(key);
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        alignright
        activeKey={activeTab}
        onChange={handleTabChange}
      >
        <TabPane tab="HTML" key="1">
          <HtmlQuestions />
        </TabPane>
        <TabPane tab="CSS" key="2">
          <CssQuestions/>
        </TabPane>
        <TabPane tab="JavaScript" key="3">
          <JavascriptQuestions/>
        </TabPane>
        <TabPane tab="React" key="4">
         <ReactQuestions/>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Tab;