import { 
    Row, 
    Col,
    Typography
} from 'antd';

const { Title } = Typography;

const contentTitleStyle = {
    height: '20%', 
    paddingTop: '5%', 
    paddingLeft: '10%'
};

function Services() {
    return (
        <>
            <Row style={ contentTitleStyle } align='bottom'>
                <Col span={24}>
                    <Title style={{ fontSize:'50px'}}>
                        <span style={{ color: '#FF5454', marginRight: '10px'}}>Services</span>
                    </Title>
                </Col>
            </Row>
            <Row style={{ height: '80%', paddingTop: '1%', paddingLeft: '10%'}}>
                <Col>
                    <Row> 
                        <Col span={24}>
                            <Title style={{ fontSize:'35px'}}>
                                <span style={{ color: '#30D6E0', marginRight: '10px'}}>Unreal Engine App Development</span>
                            </Title>
                        </Col>  
                    </Row>
                    <Row> 
                        <Col span={24}>
                            <p style={{ color: 'white', marginRight: '10px'}}>Description 1</p>
                        </Col>
                    </Row>
                    <Row> 
                        <Col span={24}>
                            <Title style={{ fontSize:'35px'}}>
                                <span style={{ color: '#30D6E0', marginRight: '10px'}}>UI/UX design</span>
                            </Title>
                        </Col>  
                    </Row>
                    <Row> 
                        <Col span={24}>
                            <p style={{ color: 'white', marginRight: '10px'}}>Description 2</p>
                        </Col>
                    </Row>
                    <Row> 
                        <Col span={24}>
                            <Title style={{ fontSize:'35px'}}>
                                <span style={{ color: '#30D6E0', marginRight: '10px'}}>Web Development</span>
                            </Title>
                        </Col>  
                    </Row>
                    <Row> 
                        <Col span={24}>
                            <p style={{ color: 'white', marginRight: '10px'}}>Description 3</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Services;