import { Link } from 'react-router-dom';

import { Layout, Button } from 'antd';
import 'antd/dist/antd.css';

import smallSSLogo from '../../images/ss-small-logo.svg';
const { Header } = Layout;

const redButtonStyle = {
  float: 'right',
  margin: '15px 15px 15px 0px',
  height: '34px',
  width: '128px',
  textAlign: 'left',
  backgroundColor: '#FF5454',
  color: 'white',
  verticalAlign: 'middle',
  fontWeight: 'bold',
  fontSize: '12px',
  padding: '5px',
  borderColor: '#FF5454',
};

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

function SquareSymmetryHeader() {
    return (
        <Header style={ headerStyle } >
            <div style={{
                position: 'relative',
                float: 'left',
            }}>
                <Link to='/'>
                    <img 
                        src={ smallSSLogo  } 
                        alt="Square Symmetry small logo"
                        height='34px'
                    />
                </Link>
            </div>
            <div 
                style={{ 
                position: 'relative',
            }}>
                <Link to='/contact'>
                    <Button style={ blackButtonStyle }>CONTACT</Button>
                </Link>
                <Link to='/services'>
                    <Button style={ redButtonStyle }>SERVICES</Button>
                </Link>
                <Link to='/about-us'>
                    <Button style={ cyanButtonStyle }>ABOUT US</Button>
                </Link>
            </div>
      </Header>
    );
};

export default SquareSymmetryHeader;