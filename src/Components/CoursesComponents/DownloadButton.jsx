
import { BookOutlined, DownloadOutlined, Html5Outlined, } from '@ant-design/icons';
import { Button,  Space } from 'antd';

const DownloadButton = () => {
//   const [size, setSize] = useState('large'); // default is 'middle'

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
            Download
          </Button>
        </Space>
      </Space>
    </>

    </div>
  );
};
export default DownloadButton;