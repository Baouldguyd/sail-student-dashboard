
import { DownloadOutlined, Html5Outlined, } from '@ant-design/icons';
import { Button,  Space } from 'antd';

const DownloadButton = () => {
//   const [size, setSize] = useState('large'); // default is 'middle'

  return (

    <div className='bg-yellow-700'>
    <>
      <Space direction="vertical">
        
        <Space wrap>
          
          <Button type="primary" 
          icon={ <DownloadOutlined />}><Html5Outlined />
            
            Download
          </Button>
        </Space>
      </Space>
    </>

    </div>
  );
};
export default DownloadButton;