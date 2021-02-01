import { 
    Typography, 
    Col, 
    Row, 
    Input,
    Form,
    Button,
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
                <Col span={12}>
                    <Form >
                        <Form.Item>
                            <Input placeholder="Full Name" />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Subject" />
                        </Form.Item>
                        <Form.Item>
                            <Input.TextArea rows={4} placeholder="Message"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default Contact;