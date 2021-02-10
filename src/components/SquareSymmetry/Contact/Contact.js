import { 
    Typography, 
    Col, 
} from 'antd';

import './Contact.css';
import { 
    contactText 
} from './ContactTexts';

const { Title } = Typography;

function Contact() {
    return (
        <>
            <Col span={24}>
                <Title className='title'>
                    <span className='white'>Contact</span>
                </Title>
            </Col>
            <Col span={24}>
                <p className='white'>{ contactText }</p>
            </Col>
        </>
    );
};

export default Contact;