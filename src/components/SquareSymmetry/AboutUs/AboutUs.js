import { 
    Typography, 
    Col, 
    Row, 
    Image 
} from 'antd';

import santiM from '../../../images/santi-m.png';

const { Title } = Typography;

const contentTitleStyle = {
    height: '20%', 
    paddingTop: '5%', 
    paddingLeft: '10%'
};

function AboutUs() {
    return (
        <>
            <Row style={ contentTitleStyle } align='bottom'>
                <Col span={24}>
                    <Title style={{ fontSize:'50px'}}>
                        <span style={{ color: '#30D6E0', marginRight: '10px'}}>About us</span>
                    </Title>
                </Col>
            </Row>
            <Row style={{ height: '30%', paddingLeft: '10%'}}>
                <Col span={12}>
                    <Image
                        alt='Santi M image'
                        src={ santiM }
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
            <Row style={{ height: '50%', paddingLeft: '10%'}}>
                <Col span={12}>Santi M's description</Col>
                <Col span={12}>Santi O's description</Col>
            </Row>
        </>
    );
};

export default AboutUs;