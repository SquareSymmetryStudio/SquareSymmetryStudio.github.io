import { 
    Typography, 
    Col, 
    Row, 
    Image 
} from 'antd';

import './AboutUs.css';

import santiM from '../../../images/santi-m.png';
import {
    ssText,
    mText,
    oText,
} from './AboutUsTexts.js';

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
                <Col span={12}>
                    <p>Santi M</p>
                    <Image
                        alt='Santi M image'
                        src={ santiM }
                        placeholder
                        width={200}
                        height={200}
                    />
                    <p className='white'>{ mText }</p>
                </Col>
                <Col span={12}>
                    <p>Santi O</p>
                    <Image
                        alt='Santi O image'
                        placeholder
                        width={200}
                        height={200}
                    />
                    <p className='white'>{ oText }</p>
                </Col>
            </Row>
        </>
    );
};

export default AboutUs;