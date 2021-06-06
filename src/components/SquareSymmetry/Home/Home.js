import { 
    Col,
    Image,
} from 'antd';

import './Home.css'

import ssTextLogo from '../../../images/ss-text-logo.svg';

function Home() {
    return (
        <Col className='logo' span={24}>
            <Image 
                src={ssTextLogo} 
                alt='ss-text-logo'
                preview={false}
            /> 
        </Col>
    );
};

export default Home;