import { 
    Row, 
    Col,
    Image,
} from 'antd';

import './Home.css'

import ssTextLogo from '../../../images/ss-text-logo.svg';

function Home(props) {
    return (
        <Row className='app-row' id={props.id}> 
            <Col
                className='logo' 
                span={24}
            >
                <Image
                    src={ssTextLogo}
                />
            </Col>
        </Row>
    );
};

export default Home;