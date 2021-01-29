import { 
    Typography, 
    Col, 
    Row, 
    Image 
} from 'antd';

const { Title } = Typography;

function AboutUs() {
    return (
        <>
            <Row style={{ height: '20%', paddingLeft: '15%'}} align='bottom'>
                <Col span={24}>
                    <Title style={{ fontSize:'50px'}}>
                        <span style={{ color: 'white', marginRight: '10px'}}>Who</span>
                        <span style={{ color: '#30D6E0', marginRight: '10px'}}>we</span>
                        <span style={{ color: '#FF5454'}}>are</span>
                    </Title>
                </Col>
            </Row>
            <Row style={{ height: '35%', paddingLeft: '15%'}}>
                <Col span={12}>
                    <Image
                        alt='Santi M image'
                        placeholder
                        width={200}
                        height={200}
                    />
                </Col>
                <Col span={12}>
                    <Image
                        alt='Santi O image'
                        placeholder
                        width={200}
                        height={200}
                    />
                </Col>
            </Row>
            <Row style={{ height: '55%', paddingLeft: '15%'}}>
                <Col span={12}>Santi M's description</Col>
                <Col span={12}>Santi O's description</Col>
            </Row>
        </>
    );
};

export default AboutUs;