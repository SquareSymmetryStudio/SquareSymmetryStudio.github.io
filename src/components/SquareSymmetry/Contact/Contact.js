import { 
    Typography, 
    Col, 
    Row, 
} from 'antd';

const { Title } = Typography;

function Contact() {
    return (
        <>
            <Row style={{ height: '20%', paddingTop: '5%', paddingLeft: '10%'}} align='bottom'>
                <Col span={24}>
                    <Title style={{ fontSize:'50px'}}>
                        <span style={{ color: 'white', marginRight: '10px'}}>Contact</span>
                    </Title>
                </Col>
            </Row>
            <Row style={{ height: '80%', paddingTop: '1%', paddingLeft: '10%'}}>
            </Row>
        </>
    );
};

export default Contact;