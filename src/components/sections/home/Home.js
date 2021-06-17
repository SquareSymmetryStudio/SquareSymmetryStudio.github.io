import { 
    Col,
    Image,
    Row,
} from 'antd';


import './Home.css'

import ssTextLogo from '../../../images/ss-text-logo.svg';
import Cube from '../../designs/Cube';

function Home() {
    return (
        <Col className='logo' span={24}>
            <Row>
                <Image 
                    src={ssTextLogo} 
                    alt='ss-text-logo'
                    preview={false}
                /> 
            </Row>
            <Row>
                <Cube></Cube>
            </Row>
        </Col>
    );
};

export default Home;