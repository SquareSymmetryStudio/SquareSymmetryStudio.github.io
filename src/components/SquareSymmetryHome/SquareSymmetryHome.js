import { CaretDownFilled } from '@ant-design/icons';

import ssLogo from '../../images/ss-logo.svg';

function SquareSymmetryHome() {
    return (
        <>
            <div style={{ height: '90%', textAlign: 'center' }}>
                <img src={ssLogo} alt='ss-logo'/>
            </div>
            <div style={{ height: '10%', textAlign:'center', verticalAlign: 'bottom' }}>
                <div style={{ color: 'white', fontSize: '12px', }}>TO NEXT PAGE</div>
                <CaretDownFilled style={{ color: '#FF5454', fontSize: '50px'}}/>
            </div>
        </>
    );
};

export default SquareSymmetryHome;