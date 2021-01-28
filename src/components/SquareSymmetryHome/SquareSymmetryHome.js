import ssTextLogo from '../../images/ss-text-logo.svg';

function SquareSymmetryHome() {
    return (
        <>
            <div style={{ 
                height: '100%', 
                textAlign: 'center', 
                fontSize: '25px',
                padding: '15vh 0 10vh 0',
            }}>
                <img src={ssTextLogo} alt='ss-text-logo'/>
            </div>
        </>
    );
};

export default SquareSymmetryHome;