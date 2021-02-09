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
        <>
            <Row 
                className='title__row' 
                align='bottom'
            >
                <Col 
                    span={24}
                >
                    <Title className='title'>
                        <span className='white'>Contact</span>
                    </Title>
                </Col>
            </Row>
            <Row className='content__row'>
                <Col 
                    span={12}
                >
                    <p className='white'>{ contactText }</p>
                </Col>
            </Row>
        </>
    );
};

export default Contact;