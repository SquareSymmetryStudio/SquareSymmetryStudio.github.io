import { 
    Typography, 
    Col, 
    Row, 
    Anchor
} from 'antd';

import './Contact.css';

const { Title } = Typography;
const { Link } = Anchor;

function Contact() {
    return (
        <>
            <Row className='title__row'align='bottom'>
                <Col span={24}>
                    <Title className='title'>
                        <span className='white'>Contact</span>
                    </Title>
                </Col>
            </Row>
            <Row className='content__row'>
                <Col span={12}>
                    <Row> 
                        <Col span={24}> 
                            <span className="mailTitle">Mail:</span>
                            <a 
                                className="contactMail" 
                                href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=squaresymmetrystudio@gmail.com" 
                                target="_blank"
                            >
                                squaresymmetrystudio@gmail.com
                            </a>
                        </Col>  
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Contact;