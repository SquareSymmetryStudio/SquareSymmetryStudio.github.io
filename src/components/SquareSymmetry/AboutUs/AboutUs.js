import { 
    Typography, 
    Col, 
    Row, 
    Image 
} from 'antd';

import './AboutUs.css';

import santiM from '../../../images/santi-m.png';

const { Title } = Typography;

function AboutUs() {
    return (
        <>
            <Row className='title__row' align='bottom'>
                <Col span={24}>
                    <Title className='title'>
                        <span className='cyan'>About us</span>
                    </Title>
                </Col>
            </Row>
            <Row className='profiles'>
                <Col span={3}>
                    <p>Santi M</p>
                    <Image
                        alt='Santi M image'
                        src={ santiM }
                        placeholder
                        width={200}
                        height={200}
                    />
                    <p>Santi M's description</p>
                </Col>
                <Col span={3}>
                    <p>Santi O</p>
                    <Image
                        alt='Santi O image'
                        placeholder
                        width={200}
                        height={200}
                    />
                    <p>Santi O's description</p>
                </Col>
                <Col style={{ backgroundColor: 'pink' }} span={18}>
                </Col>
            </Row>
        </>
    );
};

export default AboutUs;