import { Link } from 'react-router-dom';

import { 
    Button, 
    Col, 
    Image,
} from 'antd';

import './SquareSymmetryHeader.css';

import smallSSLogo from '../../images/ss-small-logo.svg';
import Text from 'antd/lib/typography/Text';

function SquareSymmetryHeader() {
    return (
        <>
            <Col span={1}>
                <Image
                    src={ smallSSLogo  } 
                    alt="Square Symmetry small logo"
                    preview={ false }
                />
            </Col>
            <Col span={5} style={{ fontSize:'12px'}}>   
                <Text className='cyan'>SQUARE</Text>
                <Text className='red'>SYMMETRY</Text>
                <Text className='white'>Studio</Text>
            </Col>
            <Col span={18}>
                <Link to='/contact'>
                    <Button className='ss-button black-button white'>CONTACT</Button>
                </Link>
                <Link to='/services'>
                    <Button className='ss-button red-button white'>SERVICES</Button>
                </Link>
                <Link to='/about-us'>
                    <Button className='ss-button cyan-button white'>ABOUT US</Button>
                </Link>
                <Link to='/'>
                    <Button className='ss-button black-button white'>HOME</Button>
                </Link>
            </Col>
        </>
    );
};

export default SquareSymmetryHeader;