import { 
    Row, 
    Col,
} from 'antd';

import './Home.css'

import ssTextLogo from '../../../images/ss-text-logo.svg';

function Home() {
    return (
        <>
            <Row className='logo__row'>
                <Col span={24}>
                    <img 
                        className='logo'
                        src={ssTextLogo} 
                        alt='ss-text-logo'
                    />                   
                </Col>
            </Row>
        </>
    );
};

export default Home;