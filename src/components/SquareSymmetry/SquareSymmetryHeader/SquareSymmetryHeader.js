import { Link } from 'react-router-dom';

import { Button } from 'antd';

import './SquareSymmetryHeader.css';

import smallSSLogo from '../../../images/ss-small-logo.svg';
import Text from 'antd/lib/typography/Text';

function SquareSymmetryHeader() {
    return (
        <>
            <div className='logo-name__container'>
                <div className='logo__container'>
                    <Link to='/'>
                        <img 
                            src={ smallSSLogo  } 
                            alt="Square Symmetry small logo"
                        />
                    </Link>   
                </div> 
                <div className='name__container'>
                    <Text className='text cyan'>SQUARE</Text>
                    <Text className='text red'>SYMMETRY</Text>
                    <Text className='text white'>Studio</Text>
                </div>
            </div>
            <div className='button__container'>
                <Link to='/contact'>
                    <Button className='ss-button black-button white'>CONTACT</Button>
                </Link>
                <Link to='/services'>
                    <Button className='ss-button red-button white'>SERVICES</Button>
                </Link>
                <Link to='/about-us'>
                    <Button className='ss-button cyan-button white'>ABOUT US</Button>
                </Link>
            </div>
      </>
    );
};

export default SquareSymmetryHeader;