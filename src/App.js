import ssLogo from './images/ss-logo.svg';
import smallSSLogo from './images/ss-small-logo.svg';

import { Layout, Button, Affix } from 'antd';
import Icon, { CaretDownFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const blackButtonStyle = {
  float: 'right',
  margin: '15px 15px 15px 0px',
  height: '34px',
  width: '128px',
  textAlign: 'left',
  backgroundColor: '#000000',
  color: 'white',
  verticalAlign: 'middle',
  fontWeight: 'bold',
  fontSize: '12px',
  padding: '5px',
  borderColor: '#000000',
};

const cyanButtonStyle = {
  float: 'right',
  margin: '15px 15px 15px 0px',
  height: '34px',
  width: '128px',
  backgroundColor: '#30D6E0',
  borderColor: '#30D6E0',
  color: 'white',
  textAlign: 'left',
  fontSize: '12px',
  fontWeight: 'bold',
  verticalAlign: 'middle',
  padding: '5px',
};

const headerStyle = {
  backgroundColor: '#373737',
  paddingRight: '15px',
  paddingLeft: '15px',
  height: '8vh',
};

const contentStyle = {
  backgroundColor: '#000000',
  height: '92vh',
  width: '100vw',
  position: 'relative',
};

function App() {
  return (
    <Layout>
      <Header style={ headerStyle } >
        <div style={{
          position: 'relative',
          float: 'left',
        }}>
          <img 
            src={ smallSSLogo  } 
            alt="Square Symmetry small logo"
            height='34px'
          />
        </div>
        <div style={{ 
          position: 'relative',
        }}>
          <Button style={ cyanButtonStyle }>CONTACT</Button>
          <Button style={ blackButtonStyle }>SERVICES</Button>
          <Button style={ cyanButtonStyle }>ABOUT US</Button>
        </div>
      </Header>
      <Content style={ contentStyle }>
        <div style={{ height: '90%', textAlign: 'center' }}>
          <img src={ssLogo} alt='ss-logo'/>
        </div>
        <div style={{ height: '10%', textAlign:'center', verticalAlign: 'bottom' }}>
          <div style={{ color: 'white', fontSize: '12px', }}>TO NEXT PAGE</div>
          <CaretDownFilled style={{ color: '#FF5454', fontSize: '50px'}}/>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
