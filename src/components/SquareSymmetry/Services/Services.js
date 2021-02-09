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
        <Row className='app-row'>
            <Col 
                span={24}
            >
                <Title className='title red'>
                    Services
                </Title>
            </Col>
            <Col 
                span={24}
            >
                <p className='white'>{servicesIntroduction}</p>
            </Col>
            <Col 
                span={24}
            >
                <Title className='sub-title'>
                    <span className='cyan'>Unreal Engine 4 Development</span>
                </Title>
            </Col>  
            <Col 
                span={24}
            >
                <p className='white'>{ ueText }</p>
            </Col>
            <Col 
                span={24}
            >
                <Title className='sub-title'>
                    <span className='cyan'>UI/UX design</span>
                </Title>
            </Col>  
            <Col 
                span={24}
            >
                <p className='white'>{ uiuxText }</p>
            </Col>
            <Col   
                span={24}
            >
                <Title className='sub-title'>
                    <span className='cyan'>Web Development</span>
                </Title>
            </Col>  
            <Col 
                span={24}
            >
                <p className='white'>{ webdevText }</p>
            </Col>
        </Row>
    );
};

export default Services;