import { Link } from 'react-router-dom';

import { Button, Row, } from 'antd';
import 'antd/dist/antd.css';

import smallSSLogo from '../../../images/ss-small-logo.svg';
import Text from 'antd/lib/typography/Text';

const redButtonStyle = {
  float: 'right',
  width: '20%',
  textAlign: 'left',
  backgroundColor: '#FF5454',
  color: 'white',
  verticalAlign: 'middle',
  fontWeight: 'bold',
  borderColor: '#FF5454',
  marginRight: '3%',
  fontSize: '66%',
  height: '100%',
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
  fontSize: '66%',
  height: '100%',
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
  fontSize: '66%',
  height: '100%'
};

const logoNameContainerStyle = {
    position: 'relative',
    float: 'left',
    height: '100%',
    width: '50%',
};

const buttonContainerStyle = { 
    position: 'relative',
    float: 'right',
    height: '100%',
    width: '50%',
    padding: '1%',
};

const nameContainerStyle = {
    float: 'left',
    position: 'relative',
    fontSize: '100%',
    height: '100%',
    width: '80%'
}

const logoContainerStyle = {
    float: 'left',
    width: '10%',
    height: '100%'
}

function SquareSymmetryHeader() {
    return (
        <>
            <div style={ logoNameContainerStyle }>
                <div style={ logoContainerStyle }>
                    <Link to='/'>
                        <img 
                            src={ smallSSLogo  } 
                            alt="Square Symmetry small logo"
                        />
                    </Link>   
                </div> 
                <div style={ nameContainerStyle }>
                        <Text style={{ color: '#30D6E0', marginRight: '1%'}}>SQUARE</Text>
                        <Text style={{ color: '#FF5454', marginRight: '1%' }}>SYMMETRY</Text>
                        <Text style={{ color: 'white' }}>Studio</Text>
                </div>
            </div>
            <div style={ buttonContainerStyle } >
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