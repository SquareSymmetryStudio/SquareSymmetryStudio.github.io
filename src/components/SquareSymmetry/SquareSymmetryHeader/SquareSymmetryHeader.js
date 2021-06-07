
import { 
    Button, 
    Col, 
    Row
} from 'antd';


import './SquareSymmetryHeader.css';

import smallSSLogo from '../../../images/ss-small-logo.svg';
import Text from 'antd/lib/typography/Text';


function SquareSymmetryHeader() {
    return (
        <Row>
            <Col span={2}>
                <img 
                    src={ smallSSLogo  } 
                    alt="Square Symmetry small logo"
                />
            </Col>
            <Col span={4}>
                <Text className='text cyan'>SQUARE</Text>
                <Text className='text red'>SYMMETRY</Text>
                <Text className='text white'>Studio</Text>
            </Col>
            <Col span={18}>
                <Button className='ss-button black-button white' href='#contact'>CONTACT</Button>
                <Button className='ss-button red-button white' href='#services'>SERVICES</Button>
                <Button className='ss-button cyan-button white' href='#about-us'>ABOUT US</Button>
            </Col>
        </Row>
    );
};

export default SquareSymmetryHeader;