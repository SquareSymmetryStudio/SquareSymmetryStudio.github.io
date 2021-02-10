import { Link } from 'react-router-dom';

import { 
    Button, 
    Col, 
    Image,
} from 'antd';

import './SquareSymmetryHeader.css';

import smallSSLogo from '../../../images/ss-small-logo.svg';
import Text from 'antd/lib/typography/Text';

function SquareSymmetryHeader() {
    return (
        <>
            <Col span={1}>
                <Link to='/'>
                    <Image
                        src={ smallSSLogo  } 
                        alt="Square Symmetry small logo"
                    />
                </Link>
            </Col>
            <Col span={6}>   
                <Text className='text cyan'>SQUARE</Text>
                <Text className='text red'>SYMMETRY</Text>
                <Text className='text white'>Studio</Text>
            </Col>
            <Col span={17}>
                <Link to='/contact'>
                    <Button className='ss-button black-button white'>CONTACT</Button>
                </Link>
                <Link to='/services'>
                    <Button className='ss-button red-button white'>SERVICES</Button>
                </Link>
                <Link to='/about-us'>
                    <Button className='ss-button cyan-button white'>ABOUT US</Button>
                </Link>
            </Col>
        </>
    );
};

export default SquareSymmetryHeader;