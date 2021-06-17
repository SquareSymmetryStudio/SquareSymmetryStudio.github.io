import { 
    Typography, 
    Col, 
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
            <Col 
                span={24}
            >
                <Title className='title'>
                    <span className='cyan'>About us</span>
                </Title>
            </Col>
            <Col 
                span={24}
            >
                <span className='white'>{ ssText }</span>
            </Col>
            <Col 
                span={12}
            >
                <Image
                    alt='Santi M image'
                    src={ santiM }
                    placeholder
                    width={200}
                    height={200}
                />
                <p className='white'>{ mText }</p>
            </Col>
            <Col 
                span={12}
            >
                <Image
                    alt='Santi O image'
                    placeholder
                    width={200}
                    height={200}
                />
                <p className='white'>{ oText }</p>
            </Col>
        </>
    );
};

export default AboutUs;