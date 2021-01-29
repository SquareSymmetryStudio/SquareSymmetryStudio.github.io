import { 
    Typography, 
    Col, 
    Row, 
} from 'antd';

const { Title } = Typography;

const contentTitleStyle = {
    height: '20%', 
    paddingTop: '5%', 
    paddingLeft: '10%'
};

function Contact() {
    return (
        <>
            <Row style={ contentTitleStyle } align='bottom'>
                <Col span={24}>
                    <Title style={{ fontSize:'50px'}}>
                        <span style={{ color: '#FFFFFF', marginRight: '10px'}}>Contact</span>
                    </Title>
                </Col>
            </Row>
            <Row style={{ height: '80%', paddingTop: '1%', paddingLeft: '10%'}}>
            </Row>
        </>
    );
};

export default Contact;