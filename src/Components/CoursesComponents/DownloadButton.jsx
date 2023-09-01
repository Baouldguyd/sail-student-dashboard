
import { BookOutlined, DownloadOutlined, } from '@ant-design/icons';
import { Button,  Space } from 'antd';

const DownloadButton = () => {

  return (

    <div className='' style={{
      backgroundColor: 'rgb(59,130,246)',
      borderRadius: '10px',
      width: '3rem'
    }}>
    <>
      <Space direction="vertical">
        
        <Space wrap>
          
          <Button type="primary"  
          icon={ <DownloadOutlined  />}>
            <BookOutlined/>
            View
          </Button>
        </Space>
      </Space>
    </>

    </div>
  );
};
export default DownloadButton;