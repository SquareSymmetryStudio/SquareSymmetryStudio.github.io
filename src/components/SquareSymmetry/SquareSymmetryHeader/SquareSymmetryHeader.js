
import { Button } from 'antd';

import './SquareSymmetryHeader.css';

import smallSSLogo from '../../../images/ss-small-logo.svg';
import Text from 'antd/lib/typography/Text';

function SquareSymmetryHeader() {
    return (
        <>
            <div className='logo-name__container'>
                <div className='logo__container'>
                        <img 
                            src={ smallSSLogo  } 
                            alt="Square Symmetry small logo"
                        />
                </div> 
                <div className='name__container'>
                    <Text className='text cyan'>SQUARE</Text>
                    <Text className='text red'>SYMMETRY</Text>
                    <Text className='text white'>Studio</Text>
                </div>
            </div>
            <div className='button__container'>
                <div className='div_button_container'>
                    <Button className='ss-button black-button white'>CONTACT</Button>
                    <Button className='ss-button red-button white'>SERVICES</Button>
                    <Button className='ss-button cyan-button white'>ABOUT US</Button>
                </div>
            </div>
      </>
    );
};

export default SquareSymmetryHeader;