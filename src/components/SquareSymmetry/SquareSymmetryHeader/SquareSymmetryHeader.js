import { Link } from 'react-router-dom';

import { Button } from 'antd';
import 'antd/dist/antd.css';

import smallSSLogo from '../../../images/ss-small-logo.svg';

const redButtonStyle = {
  float: 'right',
  width: '20%',
  textAlign: 'left',
  backgroundColor: '#FF5454',
  color: 'white',
  verticalAlign: 'middle',
  fontWeight: 'bold',
  borderColor: '#FF5454',
  marginRight: '3%'
};

const blackButtonStyle = {
  float: 'right',
  width: '20%',
  textAlign: 'left',
  backgroundColor: '#000000',
  color: 'white',
  verticalAlign: 'middle',
  fontWeight: 'bold',
  borderColor: '#000000',
};

const cyanButtonStyle = {
  float: 'right',
  width: '20%',
  backgroundColor: '#30D6E0',
  borderColor: '#30D6E0',
  color: 'white',
  fontWeight: 'bold',
  verticalAlign: 'middle',
  marginRight: '3%',
  textAlign: 'left',
};

const logoStyle = {
    position: 'relative',
    float: 'left',
    height: '100%',
    width: '50%',
};

const buttonStyle = { 
    position: 'relative',
    float: 'right',
    height: '100%',
    width: '50%',
    padding: '1%',
};

function SquareSymmetryHeader() {
    return (
        <>
            <div style={ logoStyle }>
                <Link to='/'>
                    <img 
                        src={ smallSSLogo  } 
                        alt="Square Symmetry small logo"
                    />
                </Link>
            </div>
            <div style={ buttonStyle } >
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
      </>
    );
};

export default SquareSymmetryHeader;