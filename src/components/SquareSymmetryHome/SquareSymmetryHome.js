import { Link } from 'react-router-dom';

import { CaretDownFilled } from '@ant-design/icons';

import ssLogo from '../../images/ss-logo.svg';

function SquareSymmetryHome() {
    return (
        <>
            <div style={{ height: '90%', textAlign: 'center', fontSize: '25px' }}>
                <img src={ssLogo} alt='ss-logo'/>
                <p styles={{ color: 'white', fontWeight: 'bold'}}>SQUARE SYMMETRY Studios</p>
            </div>
            <div style={{ height: '10%', textAlign:'center', verticalAlign: 'bottom' }}>
                <div style={{ color: 'white', fontSize: '12px', }}>ABOUT US</div>
                <Link to='/about-us'>
                    <CaretDownFilled style={{ color: '#FF5454', fontSize: '50px'}}/>
                </Link>
            </div>
        </>
    );
};

export default SquareSymmetryHome;