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
                <span className="mailTitle">Mail:</span>
                <a 
                    className="contactMail" 
                    href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=squaresymmetrystudio@gmail.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    squaresymmetrystudio@gmail.com
                </a>
            </Col>
        </>
    );
};

export default Contact;