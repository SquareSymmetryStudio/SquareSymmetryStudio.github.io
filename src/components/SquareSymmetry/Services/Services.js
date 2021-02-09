import { 
    Row, 
    Col,
    Typography
} from 'antd';

import './Services.css'
import { 
    ueText,
    uiuxText,
    webdevText,
    servicesIntroduction,
} from './ServicesTexts';

const { Title } = Typography;

function Services() {
    return (
        <>
            <Row className='title__row' align='bottom'>
                <Col 
                    span={24}
                >
                    <Title className='title red'>
                        Services
                    </Title>
                </Col>
            </Row>
            <Row className='content__row'>
                <Col>
                    <Row>
                        <Col 
                            span={24}
                        >
                            <p className='white'>{servicesIntroduction}</p>
                        </Col>
                    </Row>
                    <Row> 
                        <Col 
                            span={24}
                        >
                            <Title className='sub-title'>
                                <span className='cyan'>Unreal Engine 4 Development</span>
                            </Title>
                        </Col>  
                    </Row>
                    <Row> 
                        <Col 
                            span={24}
                        >
                            <p className='white'>{ ueText }</p>
                        </Col>
                    </Row>
                    <Row> 
                        <Col 
                            span={24}
                        >
                            <Title className='sub-title'>
                                <span className='cyan'>UI/UX design</span>
                            </Title>
                        </Col>  
                    </Row>
                    <Row> 
                        <Col 
                            span={24}
                        >
                            <p className='white'>{ uiuxText }</p>
                        </Col>
                    </Row>
                    <Row> 
                        <Col   
                            span={24}
                        >
                            <Title className='sub-title'>
                                <span className='cyan'>Web Development</span>
                            </Title>
                        </Col>  
                    </Row>
                    <Row> 
                        <Col 
                            span={24}
                        >
                            <p className='white'>{ webdevText }</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Services;