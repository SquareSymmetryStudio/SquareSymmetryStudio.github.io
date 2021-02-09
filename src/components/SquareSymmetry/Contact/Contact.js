import { 
    Typography, 
    Col, 
    Row, 
} from 'antd';

import './Contact.css';
import { 
    contactText 
} from './ContactTexts';

const { Title } = Typography;

function Contact() {
    return (
        <Row className='app-row'> 
            <Col 
                span={24}
            >
                <Title className='title'>
                    <span className='white'>Contact</span>
                </Title>
            </Col>
            <Col 
                span={12}
            >
                <p className='white'>{ contactText }</p>
            </Col>
        </Row>
    );
};

export default Contact;