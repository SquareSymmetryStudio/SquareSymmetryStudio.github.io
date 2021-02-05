import { 
    Row, 
    Col,
    Typography
} from 'antd';

import './Services.css'

const { Title } = Typography;

function Services() {
    return (
        <>
            <Row className='title__row' align='bottom'>
                <Col span={24}>
                    <Title className='title red'>
                        Services
                    </Title>
                </Col>
            </Row>
            <Row className='content__row'>
                <Col>
                    <Row> 
                        <Col span={24}>
                            <Title className='sub-title'>
                                <span className='cyan'>Unreal Engine 4 Development</span>
                            </Title>
                        </Col>  
                    </Row>
                    <Row> 
                        <Col span={24}>
                            <p className='white'>We provide development of custom software using Unreal Engine 4
                            for VR experiences, Art installations, Interactive experiences<br></br> and pre-visualization for video production.</p>
                        </Col>
                    </Row>
                    <Row> 
                        <Col span={24}>
                            <Title className='sub-title'>
                                <span className='cyan'>UI/UX design</span>
                            </Title>
                        </Col>  
                    </Row>
                    <Row> 
                        <Col span={24}>
                            <p className='white'>We can design, create and animate your Mobile App or Website User Interface, to achieve
                            <br></br> the best experience and communication with your users</p>
                        </Col>
                    </Row>
                    <Row> 
                        <Col span={24}>
                            <Title className='sub-title'>
                                <span className='cyan'>Web Development</span>
                            </Title>
                        </Col>  
                    </Row>
                    <Row> 
                        <Col span={24}>
                            <p className='white'> We can create a fully functional Website and Web App tailored to show the best of what you offer to your potential clients.
                            <br></br> We use technologies like React, Electron and Three.js</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Services;