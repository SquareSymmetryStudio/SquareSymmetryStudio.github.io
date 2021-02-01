import { 
    Typography, 
    Col, 
    Row, 
    Input,
    Form,
    Button,
} from 'antd';

const { Title } = Typography;

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